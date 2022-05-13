import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxios from '../../utils/useAxios';
import CircularProgress from '@mui/material/CircularProgress';
import BuildingCard from '../../components/BuildingCard';
import { Buidling } from '../../type';
import { MAP_BOX_KEY } from '../../constant';

function Home() {
    const [Loading, setLoading] = useState(true);
    const [buildings, setBuildings] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        const fetchBuildigns = async () => {
            await axios('building')
                .then((response) => {
                    setBuildings(response.data.buildings);
                })
                .then(() => {
                    setLoading(false);
                });
        };
        fetchBuildigns();
    }, []);
    return (
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
                            {Loading ? (
                                <CircularProgress />
                            ) : (
                                buildings.map((building: Buidling) => (
                                    <div key={building.id}>
                                        <BuildingCard
                                            id={building.id}
                                            name={building.name}
                                            adress={building.adress}
                                            imageSrc={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(${building.longitude},${building.latitude})/${building.longitude},${
                                                building.latitude
                                            },${12},0/300x200?access_token=${MAP_BOX_KEY}`}
                                        />
                                    </div>
                                ))
                            )}
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
    );
}
export default Home;
