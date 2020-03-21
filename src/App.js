import React from 'react';
import Init from './Page/Init';
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import Receipt from './Page/Receipt';

const  App = _=>
{
    
      return(
      
           
              <Provider store={Store}>
                 <BrowserRouter basename={window.location.pathname || ''}>
                               <Switch>
                                        <Route  exact path="/" component={Init} />
                                        <Route  path="/receipt" component={Receipt} />     
                                </Switch> 
                 </BrowserRouter>

              </Provider>
        
      );
    
 }
  
    
   
export default App;

    
  
    
  


 