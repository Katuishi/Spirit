import React ,{useRef}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {useHistory,Link} from 'react-router-dom'
import icon from "../iconpage.svg"
import { ActionReducer} from '../Redux/ActionReducer'

const Header  = ({changeVisibiliryCarousel}) =>
{
    const post = useRef("")
    let history = useHistory()

    return(
        <div className='nav'>
            <div className="banner">
                <div >
                    <Link to="/">
                        <img onClick={()=>changeVisibiliryCarousel() }  height="50" src={icon} alt="icon" /> 
                    </Link>
                        
                </div>
                <div className="search">
                    <input type="text" ref={post} className="drink" placeholder="Search"></input>
                     <button className="btn"  onClick={()=> history.push('/?id='+post.current.value.replace(' ','+')) }><FontAwesomeIcon icon={faSearch}/></button>
                </div>   
            </div>
        </div>
    ); 
} 

const mapsDispatchToProps = (dispatch) =>({
    changeVisibiliryCarousel()
    {
        dispatch({
            type:ActionReducer.CHANGE_VISIBILITY_CAROUSEL
        })
    }
})
export default connect(null,mapsDispatchToProps)(Header) ;