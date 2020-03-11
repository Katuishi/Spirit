import React ,{useRef}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import { ActionReducer } from "../Redux/ActionReducer";

const Header  = ({searchDrink}) =>
{
    const drink = useRef("")
  
    return(
        <div className='nav'>
            <div className="banner">
                <div  className="logo font-title">
                    <i className="fa fa-user"></i>
                    <p className="title">SPIRIT</p>
                </div>
                <div className="search">
                    <input type="text" ref={drink} className="drink" placeholder="Search"></input>
                    <button className="btn"  onClick={()=> searchDrink(drink.current) }><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                    
            </div>
        </div>
    );
    
    
} 


const mapsDispatchToProps = (dispatch) =>({
    searchDrink(drink){
        dispatch({
            type:ActionReducer.SEARCH_DRINK,
            data:drink
        })
    }
})



export default connect(null,mapsDispatchToProps)(Header) ;