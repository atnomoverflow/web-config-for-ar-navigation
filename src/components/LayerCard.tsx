import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FloorCardProps } from '../type';
import { Link } from 'react-router-dom';

const LayerCard = ({ floorPlan, name,floorNumber, id, handleDelete }: FloorCardProps) => {
    return (
        <Card sx={{ display: 'flex', flexGrow: 1, backgroundColor: '#bde2f4' }}>
            <CardMedia component="img" sx={{ width: 151 }} image={floorPlan} alt="Live from space album cover" />
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <CardContent component={Link} to={`overview/${id}`} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {`floor ${floorNumber}`}
                    </Typography>
                </CardContent>
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Card>
    );
};
export default LayerCard;
