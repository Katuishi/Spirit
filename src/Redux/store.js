import { createStore, applyMiddleware,compose }from 'redux';
import { ActionReducer }from './ActionReducer'
import thunk from 'redux-thunk'


const initateState = {
    post:{
        data:[],
        loading:false,
        error:''
        
    },
    img:{
        data:[],
        loading:false,
        error:''
    },
    carrusel:{
        visible:true
    },
    recipe:{
        data:[],
        loading:false,
        error:''
    }
}


const drinkReducer = (state =  initateState, action)=>
{
    switch (action.type) {
        case ActionReducer.CHANGE_VISIBILITY_CAROUSEL:
            return{
                ...state,
                carrusel:{
                    visible:action.payload
                }
            }
        case ActionReducer.GET_DRINKS:
            return{
                ...state,
                receipt:action.payload
            }
        // state post
        case ActionReducer.FETCH_POST_REQUEST:
            return{
                ...state,
                post:{
                    loading:true,
                }
            }
        case ActionReducer.FETCH_POST_SUCCESS:
            return{
                ...state,
                post:{
                    data:action.payload,
                    loading:false,
                    error:''
                }
            }
        case ActionReducer.FETCH_POST_FAILURE:
            return{
                ...state,
                post:{
                    data:[],
                    loading:false,
                    error:action.payload
                }
                
            }
            //state imgs
        case ActionReducer.FETCH_IMG_REQUEST:
            return{
                    ...state,
                    img:{
                        loading:true,
                    }
                    
            }
        case ActionReducer.FETCH_IMG_SUCCESS:
            return{
                    ...state,
                    img:{
                        data:action.payload,
                        loading:false,
                        error:''
                    }
    
            }
        case ActionReducer.FETCH_IMG_FAILURE:
            return{
                    ...state,
                    img:{
                        data:[],
                        loading:false,
                        error:action.payload
                    }
                    
            }
            //state search post
            case ActionReducer.FETCH_SEARCH_POST_REQUEST:
                return{
                    ...state,
                    post:{
                        loading:true,
                    },
                    carrusel:{
                        visible:false
                    }
                    
            }
            case ActionReducer.FETCH_SEARCH_POST_SUCCESS:
                return{
                    ...state,
                    post:{
                        data:action.payload,
                        loading:false,
                        error:''
                    }
    
            }
            case ActionReducer.FETCH_SEARCH_POST_FAILURE:
                return{
                    ...state,
                    post:{
                        data:[],
                        loading:false,
                        error:action.payload
                    }
                    
            }
            //state get recipe
            case ActionReducer.FETCH_GET_RECIPE_REQUEST:
                return{
                    ...state,
                    recipe:{
                        loading:true,
                    }
            }
            case ActionReducer.FETCH_GET_RECIPE_SUCCESS:
                return{
                    ...state,
                    recipe:{
                        data:action.payload,
                        loading:false,
                        error:''
                    }
    
            }
            case ActionReducer.FETCH_GET_RECIPE_FAILURE:
                return{
                    ...state,
                    recipe:{
                        data:[],
                        loading:false,
                        error:action.payload
                    }
                    
            }
            
        default: return state;
    }
}

export const Store = createStore(
    drinkReducer,
    compose(    
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    );
