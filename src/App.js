import './App.css';
import { useState } from 'react';


function App() {

  const post = '축구선수';
  // const let var = 변수 선언
  const [이름, 이름변경] = useState(['피르미누', '살라', '디아즈']);
 
  const [age, d] = useState(['1991년 10월 2일','1992년 6월 15일','1997년 1월 13일']);
  const [position,p] = useState(['Right-wing','False-nine','Left-wing'])
  // 이름 = 변수 보관
  // 이름변경 = state 변경도와주는 함수
  // state 사용시 html에  자동 랜더링 가능

  const [좋아요1, 좋아요변경1] =useState(0);
  const [좋아요2, 좋아요변경2] =useState(0);
  const [좋아요3, 좋아요변경3] =useState(0);

  return (
    <div className="App">
      <div style={{ backgroundColor: '#ff0000'}} >
      <div className="black-nav">
        <h4 style={ { color : 'red' , fontsize :'20px'}}>Liverpool</h4>
      </div>
      <img src='img/Liverpool.jpg' width="10%" height="200px"/>
      {/* <button
        onClick={() => {
          const player1 = [...이름];
          player1.sort();
          이름변경(player1);
        }}>
          가나다순
        </button> */}
      <div className='list'>
        <div id='list_left'>
      <img src='img/1.jpg' width="30%" height="100px"/>
        <h4 style={{color: "#FFFFFF"}}>{이름[0]} <span onClick={ () => {좋아요변경1(좋아요1+1)}}>👍</span> {좋아요1}
        <button onClick={()=>{
          const copy = [...이름];
          copy[0] = 'Roberto Firmino';
          이름변경(copy);
          }}> 영문 </button>
           </h4>
        <p style={{color: "#FFFFFF"}}>{age[0]}</p>
        <p style={{color: "#FFFFFF"}}>{position[1]}</p>
      </div>
      <div id='center'>
      <img src='img/2.jpg' width="30%" height="100px"/>
      
        <h4 style={{color: "#FFFFFF"}}>{이름[1]}<span onClick={ () => {좋아요변경2(좋아요2+1)}}>👍</span> {좋아요2}

        <button onClick={()=>{
          const copy = [...이름];
          copy[1] = 'Mohamed Salah';
          이름변경(copy);
          }}> 영문 </button>

        </h4>
        
        <p style={{color: "#FFFFFF"}}>{age[1]}</p>
        <p style={{color: "#FFFFFF"}}>{position[0]}</p>
      </div>
      <div className='list-right'>
      <img src='img/3.jpg' width="30%" height="100px"/>
        <h4 style={{color: "#FFFFFF"}}>{이름[2]}<span onClick={ () => {좋아요변경3(좋아요3+1)}}>👍</span> {좋아요3}
        
        <button onClick={()=>{
          const copy = [...이름];
          copy[2] = 'Luis Diaz';
          이름변경(copy);
          }}> 영문 </button>
        </h4>
        <p style={{color: "#FFFFFF"}}>{age[2]}</p>
        <p style={{color: "#FFFFFF"}}>{position[2]}</p>
      </div>

    </div>
    
    <Modal></Modal>
    </div>
    </div>
  );
}

const Modal = () => {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
