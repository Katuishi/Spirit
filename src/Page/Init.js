import React,{useEffect} from 'react';
import {Item} from "../Components/Item"
import {useLocation} from 'react-router-dom';
import  Carrusel from '../Components/Carrusel'
import queryString from 'query-string'
// import { ActionReducer } from '../Redux/ActionReducer';






export const Init = () =>
{

    let {search}= useLocation()

    const getUrlParameter = (data,key) =>
    {
        var result =  queryString.parse(data)
        return result[key]
    }
    
    // useEffect(()=>{
    //      getUrlParameter(search,'id') ? fetchSearchPost(getUrlParameter(search,'id')):fetchPosts()
    // },[fetchPosts,fetchSearchPost,search])
    
        return(
           <div>
                
                {
                   carrusel.visible ?  (<Carrusel/>):(<div></div>)
                }
               <div className="container-post">
                    {  posts.loading ? (<div>...loading </div>):
                        (
                            posts.data.map((data,index)=>{
                                return(
                                        <Item key={index} data={data}/>
                                )
                            })
                        )
                    }
                </div> 
           </div>
           
        ); 
}







`   `