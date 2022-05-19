import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { forwardRef, useContext, useRef, useState } from 'react';

import useAxios from '../../utils/useAxios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Slide from '@mui/material/Slide';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AddLayerForm = () => {
    let { id } = useParams();
    const [fileSelected, setFileSelected] = useState<File>();
    const [formData, setFormData] = useState({
        name: '',
        floorNumber: 0,
        mapBoxTileSet: 'mapbox://styles/mapbox/light-v10'
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const axios = useAxios();
    const context = useContext(AuthContext);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (fileSelected) {
            await axios
                .post(`layer/${id}`, {image:fileSelected,name:formData.name,floorNumber:formData.floorNumber,mapBoxTileSet:formData.mapBoxTileSet}, {
                    headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${context?.authTokens?.access_token}` }
                })
                .then(() => {
                    setLoading(false);
                    setSuccess(true);
                })
                .catch(() => {
                    setLoading(false);
                    setFailure(true);
                });
        }
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
    function TransitionLeft(props: any) {
        return <Slide {...props} direction="left" />;
    }
    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);
    };
    return (
        <>
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
                        Add Layer
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
                                    value={formData.floorNumber}
                                    type="number"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, floorNumber: parseInt(event.target.value) !== undefined ? parseInt(event.target.value) : 0 });
                                    }}
                                    required
                                    fullWidth
                                    name="floorNumber"
                                    label="floorNumber"
                                    id="floorNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    value={formData.mapBoxTileSet}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, mapBoxTileSet: event.target.value });
                                    }}
                                    required
                                    fullWidth
                                    name="mapBoxTileSet"
                                    label="mapBoxTileSet"
                                    id="mapBoxTileSet"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="contained-button-file">
                                    <input
                                        multiple={false}
                                        accept="image/*"
                                        style={{
                                            display: 'none'
                                        }}
                                        ref={fileInputRef}
                                        type="file"
                                        onChange={handleImageChange}
                                        name="image"
                                        id="image"
                                    />

                                    <Button
                                        onClick={() => {
                                            if (fileInputRef.current) fileInputRef.current.click();
                                        }}
                                        component="span"
                                        sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: '1px dashed grey' }}
                                    >
                                        Add floor plan <PhotoCamera />
                                    </Button>
                                </label>
                            </Grid>
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
export default AddLayerForm;
