// 리엑트를 가져 올꺼야 리엑트 패키지에서
import React from "react";


const AddDic = (props) => {

  return (
    <div>
      <h3>단어 추가하기</h3>  
      <div>
        <h6>단어</h6>
        <input/>
      </div>
      <div>
        <h6>설명</h6>
        <input/>
      </div>
      <div>
        <h6>예시</h6>
        <input/>
      </div>
      <button>추가하기</button>
    </div>
  );
}

export default AddDic;