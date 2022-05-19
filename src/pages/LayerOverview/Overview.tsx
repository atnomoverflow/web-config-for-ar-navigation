import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Layers from '../../components/Layers';


function LayerOverview() {
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
                            <Layers />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Box component="span" sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: '1px dashed grey' }}>
                            <Button sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }} aria-label="add" size="large" component={Link} to={'/add-layer'}>
                                <AddIcon />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
export default LayerOverview;
