
import React from 'react';

const Recipe = (props)=>
{
            
        return(
            <div className="container-receipt">
                <p className="title-recipe">{props.data.title}</p>
                <div>
                    <img src={props.data.img} aria-hidden width="400" height="400" alt=""/>
                </div>
                <div className="methods-drinks">
                    <div className="drinks">
                        <p className="title-recipe">Ingredients</p>
                        {
                            props.data.drinks.map((x,index)=>
                            {
                                return(
                                <p className="letter-recipe"><span>{index+1}-</span>{x.drink}</p>
                                )
                            })
                        }
                    </div>
                    <div className="methods">
                    <p className="title-recipe">Methods</p>
                        {
                            props.data.methods.map((x,index)=>
                            {
                                return(
                                <p className="letter-recipe"><span>{index+1}-</span>{x.method}</p>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        )
}
export default Recipe