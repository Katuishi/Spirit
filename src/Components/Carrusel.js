
import React,{useEffect} from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { connect } from "react-redux";
import { fetchImgs } from '../Redux/FetchAction'


const Carrusel = ({imgs,fetchImgs}) =>{

   useEffect(() => {
       fetchImgs()
   }, [fetchImgs])
    
    return imgs.loading ? (
        <div>...loading</div>
    )
    :(

       <Carousel useKeyboardArrows={false}                       
                        showThumbs={false} 
                        showStatus={false} 
                        autoPlay={true} 
                        showArrows={false} 
                        showIndicators={true}
                        infiniteLoop={true}
                        interval={9000}
                        stopOnHover={true} 
                        dynamicHeight={true}
                        >

                        {
                            imgs.data.map((x,index)=> 
                            { 
                                return (
                                    <div key={index}>
                                    <img alt={x.alt} aria-hidden src={x.img} />
                                    <div className="legend">{x.alt} </div>
                                    </div>
                                )
                            })
                        }
                          
        </Carousel>
          
        
        
    )

   
}



   

const mapsStateToProps = state=>({
    imgs:state.img
})

const mapsDispatchToProps = dispatch =>({
    fetchImgs:()=>dispatch(fetchImgs())
})

 
export default connect(mapsStateToProps,mapsDispatchToProps)(Carrusel);