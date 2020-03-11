import React from 'react';
import axios from 'axios';
class Receipt extends React.Component
{
    state = {
        receipt:{
            drinks:[],
            img:[],
            methods:[]
            

        },
       
    }

    componentDidMount()
    {
        
        axios.get('http://127.0.0.1:5000/api/receipt')
        .then(result =>  result.data
            
        ).then(data => {
            this.setState({receipt:data});
         
        })            
        
    
        
    }


    render()
    {
        
        return(
            <div className="container-receipt">
                <div>
                    <img src={this.state.receipt.img} aria-hidden width="200" height="200" alt=""/>
                </div>
                <div className="methods-drinks">
                    <div className="drinks">
                        {
                            

                            this.state.receipt.drinks.map((x,index)=>
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
                            this.state.receipt.methods.map((data,index)=>
                            {
                                return(
                                <p className=".letters-methods "><span>{index+1}-</span>{data.method}</p>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
                

        
        )
    }



}
export default Receipt