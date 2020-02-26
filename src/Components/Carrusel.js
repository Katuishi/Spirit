import React from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
class Carrusel extends React.Component
{

    
    render()
    {
        return (
            <Carousel useKeyboardArrows={false}
                        showThumbs={false} showStatus={false} 
                        autoPlay={true} 
                        showArrows={false} 
                        showIndicators={true}
                        infiniteLoop={true}
                        interval={1000}>
                 <div>
                    <img src="https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/ibuprofeno-y-alcohol.jpg?itok=96LT3j-9" aria-hidden alt="description of image"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brugal-anejo-437577.png" aria-hidden alt="description of image"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brugal-anejo-437577.png" aria-hidden alt="description of image"/>
                    <p className="legend">Legend 1</p>

                </div>
                
            </Carousel>
        );
    }

}
export default Carrusel;