import  Grid  from '@mui/material/Grid';
import React, { useEffect } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAppDispatch } from '../utils/useAppDispatch';
import { actionCreators as buildingsActions } from '../state/ducks/Buildings';
import useAxios from '../utils/useAxios';

interface StandardLayoutProps {
    children?: React.ReactNode;
}
const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
     const dispatch = useAppDispatch();
     const axios = useAxios();
     useEffect(() => {
         const fetchBuilding = () => {
             dispatch(buildingsActions.load(axios));
         };
         fetchBuilding();
     }, []);
    return (
        <>
            <ResponsiveAppBar />
            <Grid
                container
                component="main"
                sx={{
                    height: '100vh',
                    backgroundColor: '#e5e5f7',
                    opacity: '1',
                    backgroundImage:
                        'linear-gradient(30deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(150deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(30deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(150deg, #bde2f4 12%, transparent 12.5%, transparent 87%, #bde2f4 87.5%, #bde2f4), linear-gradient(60deg, #87ABBC 25%, transparent 25.5%, transparent 75%, #87ABBC 75%, #87ABBC), linear-gradient(60deg, #87ABBC 25%, transparent 25.5%, transparent 75%, #87ABBC 75%, #87ABBC)',
                    backgroundSize: '48px 84px',
                    backgroundPosition: '0 0, 0 0, 24px 42px, 24px 42px, 0 0, 24px 42px'
                }}
            >
                {children}
            </Grid>
        </>
    );
};
export default StandardLayout;
