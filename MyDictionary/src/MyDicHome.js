
import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import MyDic from './Page/MyDic';

  const MyDicHome = ({list}) => {
  const my_lists = list;

  my_lists.map((list, index) => {
  return (
          <div className = "App">
            <Route path="/">
              <MyDic/>
            </Route>
          </div>
        );
  })
}


export default MyDicHome;