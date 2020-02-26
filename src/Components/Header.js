import React from 'react';

class Header extends React.Component
{
    render()
    {

        return(
            <div className='nav'>

            <div className="banner">
                <div  className="logo">
                    <i className="fa fa-user"></i>
                    <p className="title">SPIRIT</p>
                </div>
                
                <form className="search" action="/" method="post">
                    <input type="text" placeholder="text"></input>
                    <button className="btn" type="submit">Search</button>
                </form>
            
            </div>
        </div>
        );
    }
    
} 

export default Header;