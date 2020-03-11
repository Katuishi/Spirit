import React, { useEffect } from 'react';
import Header from "../../src/Components/Header";
import {Footer} from "../../src/Components/Footer";
import {Post} from "../../src/Components/Post"
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchPosts} from '../Redux/FetchAction'
import  Carrusel from '../../src/Components/Carrusel'
import  {CSSTransition} from 'react-transition-group'




const Init = ({posts,fetchPosts}) =>
{
   
     useEffect(()=>{
         fetchPosts();
    },[])
    
   
        return(
           <div>
               <Header/>
               {/* <Carrusel/> */}
               <div className="container-post">
                    {  posts.loading ? (<div>...loading </div>):
                        (
                            posts.data.map(x=>{
                                return(
                                    <CSSTransition 
                                        transitionName="example">
                                        <Post key={x.id }data={x}/>

                                    </CSSTransition>
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
    posts:state.post
})
const mapDispatchToProps = dispatch =>({
    fetchPosts(){
        dispatch(fetchPosts())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Init))



