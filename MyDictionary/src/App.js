import './main.css';
import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: ["단어","설명","예시"]
    };
  }
  render() {
    console.log(this.state.list);
    return (
      <div className = "App">
        <div className = "container">
          <h2>MY DICTIONARY</h2>
          <hr className ="line" />
          <div className = "dicWrap">
            <h6>단어</h6>
            <p></p>
            <h6>설명</h6>
            <p></p>
            <h6>예시</h6>
            <p></p>
          </div>
          <div className = "dicWrap">
            <h6>단어</h6>
            <p></p>
            <h6>설명</h6>
            <p></p>
            <h6>예시</h6>
            <p></p>
          </div>
          <div className = "dicWrap">
            <h6>단어</h6>
            <p></p>
            <h6>설명</h6>
            <p></p>
            <h6>예시</h6>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
    

export default App;
