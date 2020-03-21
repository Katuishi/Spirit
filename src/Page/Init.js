import React, { useEffect } from 'react';
import Header from "../../src/Components/Header";
import {Footer} from "../../src/Components/Footer";
import {Post} from "../../src/Components/Post"
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchPosts} from '../Redux/FetchAction'
import  Carrusel from '../../src/Components/Carrusel'




const Init = ({posts,carrusel,fetchPosts}) =>
{
   
     useEffect(()=>{
         fetchPosts();
    },[fetchPosts])
    
   
        return(
           <div>
               <Header/>
                {
                   carrusel.visible ?  (<Carrusel/>):(<div></div>)
                }
               <div className="container-post">
                    {  posts.loading ? (<div>...loading </div>):
                        (
                            posts.data.map((data,index)=>{
                                return(
                                        
                                        <Post key={index }data={data}/>

                                )
                            })
                        )
                    
                    }
                    
                </div> 

               <Footer/>
           </div>
           
        ); 
}

const mapStateToProps = state =>({
    posts:state.post,
    carrusel:state.carrusel
})
const mapDispatchToProps = dispatch =>({
    fetchPosts(){
        dispatch(fetchPosts())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Init))



