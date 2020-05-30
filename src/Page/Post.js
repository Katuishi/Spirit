import React ,{useEffect}from 'react';
import {useParams } from 'react-router-dom'
import Recipe from '../Components/Recipe'

const Post = () =>{
    
    const params = useParams()
    
    
    useEffect(() => {
        fetchGetRecipe(params['id'])
    
    }, [fetchGetRecipe,params])

    return(
        <div>
            {console.log(recipe)}
            {
                recipe.loading ?  (<div>...loding</div>):
                (
                    recipe.data.map((data,index)=>{
                        return(
                            <Recipe key={index} data={data}/>
                        )
                    })
                )
            }

        </div>
        
    )
}



    