import React ,{useRef}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import { fetchSearchPost} from '../Redux/FetchAction';

const Header  = ({fetchSearchPost}) =>
{
    const post = useRef("")
   
    
  
    return(
        <div className='nav'>
            <div className="banner">
                <div  className="logo font-title">
                    <i className="fa fa-user"></i>
                    <p className="title">SPIRIT</p>
                </div>
                <div className="search">
                    <input type="text" ref={post} className="drink" placeholder="Search"></input>
                    <button className="btn"  onClick={()=> fetchSearchPost(post.current.value) }><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                    
            </div>
        </div>
    );
    
    
} 


const mapsDispatchToProps = (dispatch) =>({
    fetchSearchPost(post){
        dispatch(fetchSearchPost(post))
    }
})



export default connect(null,mapsDispatchToProps)(Header) ;