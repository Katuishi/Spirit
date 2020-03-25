import React  from 'react';
import { Link} from 'react-router-dom'

export const Item = (props) => 
{

    
        return(
            <section>
                <Link to={"/post/"+props.data.key} > 
                
                    <div className="post">
                        <div className="post-upper">
                            <img src={props.data.img} aria-hidden width="200" height="200" alt=""/>
                        </div>
                        <div className="post-lower">
                            <p>{props.data.title}</p>
                        </div>
                    </div>
                </Link>
                
                
            </section>
        )
    
}