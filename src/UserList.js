import React, { useEffect, useState }  from 'react'
import axios from 'axios'
function UserList(){

    const [data, setData] = useState([]);
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users') .then(json=>setData(json.data))}
    ,[])
return (data.map(user=>{


    return(
        <div>
           <table class="table">
  <thead  class="thead-dark">
    <tr>
      <th scope="col"> </th>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{user.id} </td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
    
  </tbody>
</table>
        </div>
    )

    
}

)


)
}
export default UserList