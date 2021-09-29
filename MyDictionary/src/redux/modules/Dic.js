// Dic.js

// Actions
const CREATE = 'Dic/CREATE';
//초기 값 설정 명령어
const initialState = {
  list: [
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
  ],
  is_loaded: false,
};

// Action Creators
export function createDic(dic){
    return {type: CREATE, dic};
}

// Reducer
// state 와 action 에 값이 안 들어 온다면 빈 딕셔너리로 보라는 명령어
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_dic_list = [...state.list, action.dic];
      return {
      Word: new_dic_list, 
      Desc: new_dic_list, 
      Example: new_dic_list};
    }
  // do reducer stuff
  default: return state;
  }
}

