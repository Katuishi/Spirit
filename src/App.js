import React from 'react';
import Init from './Page/Init';
import Post from './Page/Post';
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import {Error404} from '../src/Components/Error404'
import Default from './Layouts/Default'


const  App = _ =>
{
      return(    
             

                 <BrowserRouter basename={window.location.pathname || ''}>
                         <Default>
                                 <Switch>
                                        <Route exact path="/" component={Init} />
                                        <Route path="/post/:id" component={Post} />   
                                        <Route path="*" component={Error404}/>
                                </Switch> 
                         </Default>
                                        
                 </BrowserRouter>
           
      );
 }
export default App;

    
  
    
  


 