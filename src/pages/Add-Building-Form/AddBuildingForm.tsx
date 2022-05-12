import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
const AddBuildingForm = () => {
    return (
        <>
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
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                marginLeft: '16px',
                                color: '#bde2f4'
                            }}
                            variant="h3"
                            gutterBottom
                            component="div"
                        >
                            Add building
                        </Typography>
                        <Box component="form" noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => {}} sx={{ mt: 1 }}>
                            <Grid container component="main" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField margin="normal" required fullWidth name="name" label="name" id="name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField margin="normal" required fullWidth name="adress" label="adress" id="adress" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField margin="normal" required fullWidth name="latitude" label="latitude" id="latitude" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField margin="normal" required fullWidth name="longitude" label="longitude" id="longitude" />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                               <DomainAddIcon/> 
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </>
    );
};
export default AddBuildingForm;
