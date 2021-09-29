import "./Page/main.css";
import React from "react";
import MyDic from "./Page/MyDic";
import Regist from "./Page/Regist";
import {Route} from "react-router-dom";



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = [
      {
        word: "ㅎ1ㅎ1",
        mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
        ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
      },
      {
        word: "ㅎ1ㅎ1",
        mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
        ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
      },
      {
        word: "ㅎ1ㅎ1",
        mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
        ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
      },
    ];
    this.text = React.createRef();
  }

  componentDidMount() {
  

  }

  addList = () => {
    console.log(this.text);
    // this.setState({list: []});
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
