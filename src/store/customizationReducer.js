import * as actionTypes from './actions';
import config from '../config';

export const initialState = {
    isOpen: 'dashboard',

    navType: config.theme,
  
};

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            return {
                ...state,
                isOpen: action.isOpen,
            };
        case actionTypes.MENU_TYPE:
            return {
                ...state,
                navType: action.navType,
            };
     
      
        default:
            return state;
    }
};

export default customizationReducer;
