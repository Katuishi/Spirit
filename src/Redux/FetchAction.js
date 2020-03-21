import axios from 'axios'
import { ActionReducer } from './ActionReducer'

export const fetchSearchPost = (post) => {
  return (dispatch) => {
    dispatch(fetchSearchPostRequest())
    axios.get('http://127.0.0.1:5000/api/postid',{
      params: {
        post: post
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

export const fetchReceipt = (id) => {
  return (dispatch) => {
    dispatch(fetchSearchPostRequest())
    axios.get('http://127.0.0.1:5000/api/receipt',{
      params: {
        receiptid: id
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

export const fetchPostRequest = () => {
  return {
    type: ActionReducer.FETCH_POST_REQUEST
  }
}

export const fetchPostSuccess = posts => {
  return {
    type: ActionReducer.FETCH_POST_SUCCESS,
    payload: posts
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

export const fetchImgSuccess = imgs => {
  return {
    type: ActionReducer.FETCH_IMG_SUCCESS,
    payload: imgs
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

export const fetchSearchPostSuccess = posts => {
  return {
    type: ActionReducer.FETCH_SEARCH_POST_SUCCESS,
    payload: posts
  }
}

export const fetchSearchPostFailure = error => {
  return {
    type: ActionReducer.FETCH_SEARCH_POST_FAILURE,
    payload: error
  }
}
