import React from 'react';
import icon from "../iconpage.svg"

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
                    { Icon({icon},'logo')}
                    <p className="copyright">Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        );
    
}


