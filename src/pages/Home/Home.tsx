import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <Grid
            container
            component="main"
            sx={{
                height: '93vh',
                backgroundColor: '#e5e5f7',
                opacity: '1',
                backgroundImage:
                    'linear-gradient(30deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(150deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(30deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(150deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(60deg, #87ABBC 25%, transparent 25.5%, transparent 75%, #87ABBC 75%, #87ABBC), linear-gradient(60deg, #87ABBC 25%, transparent 25.5%, transparent 75%, #87ABBC 75%, #87ABBC)',
                backgroundSize: '48px 84px',
                backgroundPosition: '0 0, 0 0, 24px 42px, 24px 42px, 0 0, 24px 42px'
            }}
        >
            <Container sx={{ p: '5%' }} maxWidth="sm">
                <Paper sx={{ p: '5%' }} elevation={16} square>
                    <Typography
                        sx={{ flexGrow: 1, textAlign: 'center', mr: 2, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', textDecoration: 'none', marginLeft: '16px', color: '#bde2f4' }}
                        variant="h3"
                        gutterBottom
                        component="div"
                    >
                        Manage Venue
                    </Typography>
                    <Grid container component="main" spacing={2}>
                        <Grid item xs={12}>
                            <Stack direction="column" spacing={0.5}>
                                <Card sx={{ display: 'flex', flexGrow: 1, backgroundColor: '#bde2f4' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={require('../../assets/depositphotos_91453926-stock-illustration-vector-isometric-building.jpg')}
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                            <Typography component="div" variant="h5">
                                                name
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                adress
                                            </Typography>
                                        </CardContent>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="span" sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: '1px dashed grey' }}>
                                <Button sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }} aria-label="add" size="large" component={Link} to={'/add-building'}>
                                    <AddIcon />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Grid>
    );
}
export default Home;
