import React,{useEffect} from 'react';
import Header from "../../src/Components/Header";
import {Footer} from "../../src/Components/Footer";
import {Item} from "../../src/Components/Item"
import { connect} from 'react-redux';
import {withRouter,useLocation} from 'react-router-dom';
import { fetchPosts, fetchSearchPost} from '../Redux/FetchAction'
import  Carrusel from '../../src/Components/Carrusel'
import queryString from 'query-string'
// import { ActionReducer } from '../Redux/ActionReducer';






const Init = ({posts,carrusel,fetchPosts,fetchSearchPost}) =>
{

    let {search}= useLocation()

    const getUrlParameter = (data,key) =>
    {
        var result =  queryString.parse(data)
        console.log(result[key])
        return result[key]
    }
    

   
     useEffect(()=>{
         getUrlParameter(search,'id') ? fetchSearchPost(getUrlParameter(search,'id')):fetchPosts()
        fetchPosts()
    },[fetchPosts,fetchSearchPost,search])
    
        return(
           <div>
               <Header/>
                {console.log(search)}
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
    },

    fetchSearchPost(post){
        dispatch(fetchSearchPost(post))
    },

   
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Init))



