import React, { Component } from 'react';

class Footer extends Component
{

     Icon(img,desc) {
        return(
            <div>
                <img src={img} height={30} width={30} alt={desc}/>
            </div>
        )
    }

    render(){
        return(
            <div className="foo">
                <div className="part-foo">
                    { this.Icon('https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg','desc')}
                    <p>Spirit</p>
        <p className="copyright">Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        );
    }
}


export default Footer;