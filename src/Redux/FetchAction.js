import axios from 'axios'
import { ActionReducer } from './ActionReducer'

export const fetchSearchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchSearchPostRequest())
    axios.get('http://127.0.0.1:5000/api/postid',{
      params: {
        post: id
      }
    })
      .then(response => {
        dispatch(fetchSearchPostSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchSearchPostFailure(error.message))
      })
  }
}

export const fetchGetRecipe = (id) => {
  return (dispatch) => {
    //TODO: USE PAREMETER
    dispatch(fetchGetRecipeRequest())
    axios.get('http://127.0.0.1:5000/api/recipe')
      .then(response => {
        dispatch(fetchGetRecipeSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchGetRecipeFailure(error.message))
      })
  }
}
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    axios.get('http://127.0.0.1:5000/api/post')
      .then(response => {
        
        dispatch(fetchPostSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPostFailure(error.message))
      })
  }
}

export const fetchImgs = () => {
  return (dispatch) => {
    dispatch(fetchImgRequest())
    axios.get('http://127.0.0.1:5000/api/imgs')
      .then(response => {
        dispatch(fetchImgSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchImgFailure(error.message))
      })
  }
}

//dispacthes


export const fetchPostRequest = () => {
  return {
    type: ActionReducer.FETCH_POST_REQUEST
  }
}

export const fetchPostSuccess = data => {
  return {
    type: ActionReducer.FETCH_POST_SUCCESS,
    payload: data
  }
}

export const fetchPostFailure = error => {
  return {
    type: ActionReducer.FETCH_POST_FAILURE,
    payload: error
  }
}

export const fetchImgRequest = () => {
  return {
    type: ActionReducer.FETCH_IMG_REQUEST
  }
}

export const fetchImgSuccess = data => {
  return {
    type: ActionReducer.FETCH_IMG_SUCCESS,
    payload: data
  }
}

export const fetchImgFailure = error => {
  return {
    type: ActionReducer.FETCH_IMG_FAILURE,
    payload: error
  }
}

export const fetchSearchPostRequest = () => {
  return {
    type: ActionReducer.FETCH_SEARCH_POST_REQUEST
  }
}

export const fetchSearchPostSuccess = data => {
  return {
    type: ActionReducer.FETCH_SEARCH_POST_SUCCESS,
    payload: data
  }
}

export const fetchSearchPostFailure = error => {
  return {
    type: ActionReducer.FETCH_SEARCH_POST_FAILURE,
    payload: error
  }
}

export const fetchGetRecipeRequest = () => {
  return {
    type: ActionReducer.FETCH_GET_RECIPE_REQUEST
  }
}

export const fetchGetRecipeSuccess = data => {
  return {
    type: ActionReducer.FETCH_GET_RECIPE_SUCCESS,
    payload: data
  }
}

export const fetchGetRecipeFailure = error => {
  return {
    type: ActionReducer.FETCH_GET_RECIPE_FAILURE,
    payload: error
  }
}

//#endregion