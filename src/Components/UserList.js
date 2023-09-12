import React, { useEffect } from "react";

function User({user, onToggle, onRemove}) {
    useEffect(() => {
        console.log("화면에 나타남");
        return () => {
            console.log("화면에서 사라짐");
        }
    },[])
    return(
        <li key={user.id}>
            <b onClick={() => onToggle(user.id)} style={{color: user.active? 'blue' : 'black'}}>
                이름: {user.username} 이메일: {user.email}
            </b>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </li>
    )
}

/* { users: [], age: '20' } App에서 받아와서
구조분해할당 여기서함 */
function UserList({users, onRemove, onToggle}) {
    //props로 접근 가능
    //const users = props.users;
    //const age = props.age;
    //const { users, age } = props;
    return(
        <div>
            <ul>
                {users.map(user=>(
                    <User user={user} 
                    onToggle={onToggle} 
                    onRemove={onRemove}
                    key={user.id} />
                ))}
            </ul>
        </div>
    )
}
export default UserList;
