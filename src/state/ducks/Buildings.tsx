import { AnyAction, Dispatch } from 'redux';
import { Action, Buidling } from '../../type';
import { AxiosInstance } from 'axios';
import { isArrayEqual } from '../../utils/utils';

// Actions
const LOAD = 'web-config-for-ar-navigation/buildings/LOAD';

const REMOVE = 'web-config-for-ar-navigation/buildings/REMOVE';

// Action Creators
export function loadBuildings(payload: Buidling[]) {
    return { type: LOAD, payload };
}
export function removeABuilding(id: string) {
    return { type: REMOVE, payload:id };
}
const load = (axios: AxiosInstance) => {
    return function (dispatch: Dispatch<AnyAction>) {
        axios(`building`).then((response) => {
            
            dispatch(loadBuildings(response.data.buildings));
        });
    };
};

const remove = (id: string, axios: AxiosInstance) => {
    return function (dispatch: Dispatch<AnyAction>) {
        axios.delete(`building/${id}`).then(() => dispatch(removeABuilding(id)));
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
const initialState:Buidling[]= []

const reducer = function (state = initialState, action: Action) {
    switch (action.type) {
        case REMOVE: {
            const newState=state.filter((b)=>(b.id!==action.payload))
            console.log(action.payload);
            return newState;
        }
        case LOAD: {
            const newState: Buidling[] = [...state, ...action.payload].filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
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
