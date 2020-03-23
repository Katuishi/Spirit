import React from 'react';
import Init from './Page/Init';
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import Post from './Page/Post';


const  App = _=>
{
      return(    
              <Provider store={Store}>
                 <BrowserRouter basename={window.location.pathname || ''}>
                               <Switch>
                                        <Route  exact path="/:id?" component={Init} />
                                        <Route   path="/post" component={Post} />     
                                </Switch> 
                 </BrowserRouter>
              </Provider>
      );
 }
export default App;

    
  
    
  


 