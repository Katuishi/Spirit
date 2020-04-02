import React ,{useEffect}from 'react';

import { connect } from 'react-redux'
import {withRouter,useParams } from 'react-router-dom'
import { fetchGetRecipe} from '../Redux/FetchAction'
import Recipe from '../Components/Recipe'

const Post = ({recipe,fetchGetRecipe}) =>{
    
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


const mapStateToProps = state =>({
    recipe:state.recipe
})
const mapDispatchToProps = dispatch =>({
    fetchGetRecipe(id){
        dispatch(fetchGetRecipe(id))
    }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post))
    