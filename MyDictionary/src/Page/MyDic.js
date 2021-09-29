import React from "react"
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MyDic = (props) => {
  const history = useHistory();
  const data = useSelector((state) => state.Dic.list);
  
  return (
        <>
        
          <div className = "App">
            <Container>
              <Title>MY DICTIONARY</Title>
              <Line/>
              <ListItem>
              <div>
                <p></p>
              </div>
              <Btn>
                <button onClick ={() =>{
                  history.push("/Regist");}}>추가하기</button>
              </Btn>
              </ListItem>  
            </Container>
          </div>
        </>  
    
  );
}

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px; 
  `;

  const Title = styled.h1`
  color: slateblue;
  text-align: center;
  `;

  const Line = styled.hr`
  margin: 16px 0px;
  `;

  const ListItem = styled.div `
  padding: 16px;
  margin: 10px;
  background-color: aliceblue;
  `;

  const Btn = styled.div`
  margin-top : 20px;
  `;

export default MyDic;