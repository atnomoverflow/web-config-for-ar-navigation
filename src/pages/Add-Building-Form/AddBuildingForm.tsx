import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Map, { Marker } from 'react-map-gl';
import { useState } from 'react';
//`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(${longitude},${laltutide})/${longitude},${laltutide},${zoomLevel},0/300x200?access_token=${accessToken}`
const AddBuildingForm = () => {
    const [marker, setMarker] = useState({ lat: 52.35471127172383, lng: 4.914465703269798 });
    const [viewState, setViewState] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        zoom: 10
    });
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
                                    <input type="hidden" value={marker.lat} required  name="latitude"  id="latitude" />
                                </Grid>
                                <Grid item xs={6}>
                                    <input type="hidden" value={marker.lng} required  name="longitude" id="longitude" />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ width: '100%', height: '300px' }}>
                                    <Map
                                        onClick={(e: any) => {
                                            console.log(e);
                                            setMarker(e.lngLat);
                                        }}
                                        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY ? process.env.REACT_APP_MAPBOX_KEY : ''}
                                        initialViewState={viewState}
                                        style={{ width: '100%', height: '100%' }}
                                        onMove={(evt) => setViewState(evt.viewState)}
                                        mapStyle="mapbox://styles/mapbox/light-v10"
                                    >
                                        <Marker longitude={marker.lng} latitude={marker.lat}></Marker>
                                    </Map>
                                </div>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                <DomainAddIcon />
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </>
    );
};
export default AddBuildingForm;
