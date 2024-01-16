import { useEffect, useRef, useState } from 'react'
import SearchBar from './components/SearchBar';
import User from './components/User';
import Suggestion from './components/Suggestion';
import {userData} from './data';


function App() {
  console.log(userData);
  const [users,setUsers] = useState(userData);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);
  const regex = new RegExp(`${searchTerm}`, 'i');  
  const filteredUsers = users?.filter((user) =>
    user.name.match(regex)
  );

  function handleUserDeselection(data){
    setUsers((prev) => [...prev,data]);
    setSelectedUsers((prev) => {
      return prev.filter((element) => element.mail!==data.mail);
    })
  }

  
  function handleUserSelection(user){
    const findUser = selectedUsers?.filter((item) => item.mail===user.mail);
    setUsers((prev) => prev.filter((ele) => ele.mail!=user.mail));
    if(findUser.length==0){
      setSelectedUsers((prev) => {
        let newData = [...prev,user];
        return newData;
      });
    }

    setSearchTerm("");
  }


  return (
    <div className='container'>
      <div className="title">
        <h1>Pick Users</h1>
      </div>
      <div className="search-bar-container">
          {selectedUsers?.map((user) => (<User key={user.mail} userData={user} handleUserDeselection={handleUserDeselection}/>))}
        <div className="search">
          <SearchBar searchTerm={searchTerm} setInput={setSearchTerm} handleFocus={setFocus}/>
          { focus && 
            <div className="suggestions-container">
              {filteredUsers.map((user,index) => <Suggestion key={index} user={user} handleUserSelection={handleUserSelection}/>)}
            </div>
          } 
        </div>
      </div>
    </div>
  )
}

export default App
