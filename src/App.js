import React from 'react';
import Init from './Page/Init';
import Post from './Page/Post';
import { Provider } from "react-redux";
import { Store } from './Redux/store';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import {Error404} from '../src/Components/Error404'


const  App = _=>
{
      return(    
              <Provider store={Store}>
                 <BrowserRouter basename={window.location.pathname || ''}>
                               <Switch>
                                        <Route  exact path="/" component={Init} />
                                        <Route  exact path="/post/:id" component={Post} />   
                                        <Route exact path="*" component={Error404}/>
                                </Switch> 
                 </BrowserRouter>
              </Provider>
      );
 }
export default App;

    
  
    
  


 