import { AnyAction, Dispatch } from 'redux';
import { Action, Layer } from '../../type';
import { AxiosInstance } from 'axios';
import { isArrayEqual } from '../../utils/utils';

// Actions
const LOAD = 'web-config-for-ar-navigation/layer/LOAD';

const REMOVE = 'web-config-for-ar-navigation/layer/REMOVE';

// Action Creators
export function loadLayers(payload: Layer[]) {
    return { type: LOAD, payload };
}
export function removeALayer(id: string) {
    return { type: REMOVE, payload:id };
}
const load = (id:string,axios: AxiosInstance) => {
    return function (dispatch: Dispatch<AnyAction>) {
        axios(`layer/${id}`).then((response) => {
            dispatch(loadLayers(response.data.layers));
        });
    };
};

const remove = (id: string, axios: AxiosInstance) => {
    return function (dispatch: Dispatch<AnyAction>) {
        axios.delete(`layer/${id}`).then(() => dispatch(removeALayer(id)));
    };
};
const actionTypes = {
    LOAD,
    REMOVE
};

const actionCreators = {
    remove,
    load
};
const initialState:Layer[]= []

const reducer = function (state = initialState, action: Action) {
    switch (action.type) {
        case REMOVE: {
            const newState=state.filter((b)=>(b.id!==action.payload))
            console.log(action.payload);
            return newState;
        }
        case LOAD: {
            const newState: Layer[] = [...state, ...action.payload].filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
            if(isArrayEqual(newState,state))
                {
                    return state ;
                
                }
            return newState
        }
        default:
            return state;
    }
};

export { actionCreators, actionTypes, initialState };

export default reducer;
