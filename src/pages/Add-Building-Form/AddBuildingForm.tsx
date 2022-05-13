import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Map, { Marker } from 'react-map-gl';
import { forwardRef, useState } from 'react';
import { MAP_BOX_KEY } from '../../constant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import useAxios from '../../utils/useAxios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import  Slide  from '@mui/material/Slide';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AddBuildingForm = () => {
    const [marker, setMarker] = useState({ lat: 52.35471127172383, lng: 4.914465703269798 });
    const [viewState, setViewState] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        zoom: 10
    });
    const [formData, setFormData] = useState({
        name: '',
        adress: ''
    });
    const [loading, setLoading] = useState(false);
    const axios = useAxios();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        await axios
            .post('building', {
                name: formData.name,
                adress: formData.adress,
                latitude: marker.lat,
                longitude: marker.lng
            })
            .then(() => {
                setLoading(false);
                setSuccess(true);
            })
            .catch(()=>{
                setLoading(false);
                setFailure(true);
            });
    };
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
        setFailure(false);
    };
    function TransitionLeft(props:any) {
        return <Slide {...props} direction="left" />;
    }

    return (
        <>
            <Container sx={{ p: '5%' }} maxWidth="sm">
                <Button type="button" variant="contained" sx={{ mt: 3, mb: 2 }} component={Link} to={'/'}>
                    <ArrowBackIcon />
                </Button>
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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container component="main" spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    value={formData.name}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, name: event.target.value });
                                    }}
                                    required
                                    fullWidth
                                    name="name"
                                    label="name"
                                    id="name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    value={formData.adress}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, adress: event.target.value });
                                    }}
                                    required
                                    fullWidth
                                    name="adress"
                                    label="adress"
                                    id="adress"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ width: '100%', height: '300px' }}>
                                <Map
                                    onClick={(e: any) => {
                                        setMarker(e.lngLat);
                                    }}
                                    mapboxAccessToken={MAP_BOX_KEY}
                                    initialViewState={viewState}
                                    style={{ width: '100%', height: '100%' }}
                                    onMove={(evt) => setViewState(evt.viewState)}
                                    mapStyle="mapbox://styles/mapbox/light-v10"
                                >
                                    <Marker longitude={marker.lng} latitude={marker.lat}></Marker>
                                </Map>
                            </div>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
                            {loading ? <CircularProgress /> : <DomainAddIcon />}
                        </Button>
                    </Box>
                </Paper>
            </Container>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionLeft}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Building Created Successfully
                </Alert>
            </Snackbar>
            <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionLeft}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Try again
                </Alert>
            </Snackbar>
        </>
    );
};
export default AddBuildingForm;
