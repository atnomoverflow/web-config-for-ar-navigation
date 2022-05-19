
import { useEffect } from 'react';
import {  Layer, RootState } from '../type';
import { useAppSelector } from '../utils/useAppSelector';
import { useAppDispatch } from '../utils/useAppDispatch';
import { actionCreators as layersActions } from '../state/ducks/Layers';
import useAxios from '../utils/useAxios';
import LayerCard from './LayerCard';
import { useParams } from 'react-router-dom';

const Layers=()=>{
    const layers = useAppSelector((state: RootState) => state.layers);
    const dispatch = useAppDispatch();
    const axios = useAxios();
    let { id } = useParams();
    useEffect(() => {
        if (id!==undefined) dispatch(layersActions.load(id,axios));
    }, [layers]);
    return (
        <>
            {layers.map((layer: Layer) => (
                <div key={layer.id}>
                    <LayerCard
                        handleDelete={() => {
                            dispatch(layersActions.remove(layer.id, axios));
                        }}
                        id={layer.id}
                        name={layer.name}
                        floorNumber={layer.floorNumber}
                        floorPlan={`http://localhost:8000/layer/floorPlan/${layer.floorPlan}`}
                    />
                </div>
            ))}
        </>
    );
    
}
export default Layers