import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.3dwave.tech/">
                3D Wave
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function SignUp() {
    let context = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [loading,setLoading]=React.useState(false)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(!loading)
        event.preventDefault();
        let loginData = new FormData(event.currentTarget);
        let response = await fetch('http://localhost:8000/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loginData.get('email'), password: loginData.get('password') })
        });
        let data = await response.json();
        if (response.status === 201) {
            context?.setAuthTokens(data);
            context?.setUser(jwt_decode(data.access_token));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            console.log(data);
        }
    };
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://cdn.dribbble.com/users/3854417/screenshots/10064623/media/594cd51e132b0fd5018dfaf4f4fc737d.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {loading?<CircularProgress />:<>
                        <Avatar sx={{ m: 1, bgcolor: '#bde2f4' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" component={RouterLink} variant="body2">
                                        {'Already have an account? Sign In'}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                        </>}
                    
                    </Box>
                
            </Grid>
        </Grid>
    );
}
export default SignUp;
