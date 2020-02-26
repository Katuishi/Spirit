import React from 'react';
// import {Link,BrowserRouter} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Footer from "../../src/Components/Footer";
import Header from "../../src/Components/Header";
// import Carrusel from "../../src/Components/Carrusel";
import Post from "../../src/Components/Post"
import Receipt from '../../src/Components/Receipt';


class Init extends React.Component
{
    
    render()
    {
        return(
           <div>
               <Header></Header>
               {/* <Carrusel></Carrusel> */}
               <div className="container-post">
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    {/* <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post>
                    <Post desc= "pica pollo" img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg" ></Post> */}
               </div> 

               <Receipt img="https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg"></Receipt>
               <Footer></Footer>
               
           </div>
           
        );
    }
 
}
export default Init;