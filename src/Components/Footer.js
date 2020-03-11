import React from 'react';

export const Footer = _ =>
{

     const Icon= (img,desc) =>{
        return(
            <div>
                <img src={img} height={30} width={30} alt={desc}/>
            </div>
        )
    }

  
        return(
            <div className="foo">
                <div className="part-foo">
                    { Icon('https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg','desc')}
                    <p className='font-title'>Spirit</p>
        <p className="copyright">Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        );
    
}


