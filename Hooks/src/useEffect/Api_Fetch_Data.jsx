import React , {useState, useEffect} from 'react'

const Api_Fetch_Data = () => {

  const [users, setUsers] = useState([]); 

  useEffect(()=>{

    const fetchDataFromApi= async ()=>{
      const api = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await api.json();
      setUsers(data);
      console.log(data);
    }
    fetchDataFromApi();

  },[]);
  return (
    <>
      <h2>User List</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api_Fetch_Data;
