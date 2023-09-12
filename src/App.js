import { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';

function App() {
  //유저 항목을 나타내는 앱
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'green',
      email: 'green@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'blue',
      email: 'blue@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'red',
      email: 'red@naver.com',
      active: false
    }
  ]);
  //input 입력값을 상태관리
  const [inputs, setinputs] = useState({
    username: "",
    email: ""
  });
  //구조분해할당
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target; //target = 이벤트를 일으킨 대상
    setinputs({
      ...inputs,
      [name]: value
    })
  }
  const nextId = useRef(4);
  const onCreate = () => {
    //users배열에 객체 추가
    setUsers([
      ...users, //스프레드 구문 원래있던 배열 뿌려줌
      {id: nextId.current, username: username, email: email, active: false
  }])
    setinputs({
      username:"",
      email:""
    })
    nextId.current += 1;
  }
  //삭제
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id? 
      {...user, active: !user.active} : user))
  }
  useEffect(() => {
    console.log("렌더링 되었습니다.");
  }, [users])
  return (
    <div className="App">
      {/*    키 : 값 */}
      {/* {users: [], age: '20'}  props.users */}
      {/* {onchange=f, username="", email="", onCreate=function} */}
      <CreateUser 
      onChange={onChange}
      username={username}
      email={email} onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;

