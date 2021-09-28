import "./Page/main.css";
import React from "react";
import MyDic from "./Page/MyDic";
import Regist from "./Page/Regist";
import {Route} from "react-router-dom";



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: ["안녕", "인사", "hello"]
    };

  }

  componentDidMount() {
    // console.log(this.state.list)

  }

  render() {
    return (
        <div className = "App">
          <Route path="/" exact>
            <MyDic/>
          </Route>
          <Route path="/Regist" exact>
            <Regist list = {this.state.list}/>
          </Route>
        </div>
    );
  }
}



export default App;
