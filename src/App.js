import React from 'react';
import Init from './Page/Init';
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import {BrowserRouter,Route} from 'react-router-dom'

const  App = _=>
{
    
      return(
      
           
              <Provider store={Store}>
                 <BrowserRouter basename={window.location.pathname || ''}>
                 <Route exact path="/" component={Init} />
                 </BrowserRouter>

              </Provider>
        
      );
    
 }
  
    
   
export default App;

    
  
    
  


 