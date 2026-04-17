import { useState,useEffect } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
function App() {
  const [users,setUsers] = useState([]);
  const [searchTerm,setSearchTerm]= useState("");
  const [selectedUser,setSelectedUser] = useState(null);
  const [selectedData,setSelectedData] = useState({})
  useEffect(()=>{
    async function  getUsers() {
      try{
        const response = await fetch("https://dummyjson.com/users");
        if(!response.ok){
          throw new Error("Error!")
        }
        const usersJSON = await response.json();
        setUsers(usersJSON.users);
      }

      catch(err){
        console.log("ERROR")
      }
    }
    getUsers();

  },[])
  useEffect(()=>{
    async function getUser() {
      if(selectedUser!==null){
        try{
            const response = await fetch(`https://dummyjson.com/todos/user/${selectedUser}`)
            const data = await response.json();
            setSelectedData(data);
        }
        catch(err){console.log("ERROR!")}
      }
      
    }
    getUser()
  },[selectedUser])
  const filteredUsers = users.filter((user)=>{
    return user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const userListElements = filteredUsers.map((user)=>{
    return <UserCard key={user.id} image={user.image} firstName={user.firstName} lastName={user.lastName} 
    department={user.company.department}
    handleSelect={handleSelect}
    id={user.id}
    />
  })
  function handleSelect(userId){
    setSelectedUser(userId)
  }
  function handleSearch(e){
    setSearchTerm(e.target.value)
  }
  function goToHomePage(){
    setSelectedUser(null);
  }
  return (
    !selectedUser?<div className="app-container">
      <SearchBar handleSearch={handleSearch}/>
      <h1 className="page-title">Personnel List</h1>
      
      <div className="user-grid">
          {userListElements}
      </div>
    </div>:<UserProfile todos={selectedData.todos} goToHomePage={goToHomePage}/>
  )
}

export default App
