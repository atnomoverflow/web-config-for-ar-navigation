
import { useEffect } from 'react';
import BuildingCard from '../components/BuildingCard';
import { Buidling, RootState } from '../type';
import { MAP_BOX_KEY } from '../constant';
import { useAppSelector } from '../utils/useAppSelector';
import { useAppDispatch } from '../utils/useAppDispatch';
import { actionCreators as buildingsActions } from '../state/ducks/Buildings';
import useAxios from '../utils/useAxios';

const Buildings=()=>{
    const buildings = useAppSelector((state: RootState) => state.buildings);
    const dispatch = useAppDispatch();
    const axios = useAxios();
    useEffect(() => {
        dispatch(buildingsActions.load(axios));
    }, [buildings]);
    return (
        <>
            {buildings.map((building: Buidling) => (
                <div key={building.id}>
                    <BuildingCard
                        handleDelete={() => {
                            dispatch(buildingsActions.remove(building.id, axios));
                        }}
                        id={building.id}
                        name={building.name}
                        adress={building.adress}
                        imageSrc={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(${building.longitude},${building.latitude})/${building.longitude},${
                            building.latitude
                        },${12},0/300x200?access_token=${MAP_BOX_KEY}`}
                    />
                </div>
            ))}
        </>
    );
    
}
export default Buildings