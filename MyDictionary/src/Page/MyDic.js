import React from "react"
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MyDic = (props) => {
  const history = useHistory();
  return (
        <>
          <div className = "App">
            <Container>
              <Title>MY DICTIONARY</Title>
              <Line/>
              <ListItem>
              <div>
                <p>단어</p>
                <p>설명</p>
                <p>예시</p>
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