
import React from 'react';

const Receipt = (data)=>
{
            
        return(
            <div className="container-receipt">
                <div>
                    <img src={data.receipt.img} aria-hidden width="200" height="200" alt=""/>
                </div>
                <div className="methods-drinks">
                    <div className="drinks">
                        {
                            

                            data.drinks.map((x,index)=>
                            {
                                return(
                                <p ><span>{index+1}-</span>{x.drink}</p>
                                )
                            }
                            )
                            
                        }
                    </div>
                    <div className="methods">
                    {
                            data.methods.map((x,index)=>
                            {
                                return(
                                <p className=".letters-methods "><span>{index+1}-</span>{x.method}</p>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
                

        
        )
    
}
export default Receipt