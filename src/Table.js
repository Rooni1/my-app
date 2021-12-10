import React from "react";
import { useState, useEffect } from "react";


const Table = ()=> {

  const [people, setPeople] = useState([]); 
  useEffect( ()=>
   async function getData(){    
    const response = await fetch(
        "https://localhost:44352/reactperson/index",
        {
            method:"GET"
        }
      );
    const data = await response.json();
    console.log('see this data', data.$values);   
    setPeople(data.$values);   
}
getData()
,[people]);

  console.log('people', people.length)

  return (<div> 
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">Language</th>
        </tr>
      </thead>
      <tbody>
          {
              people.map(x => 
                {
                    return (
                    <tr>
                          <th scope="row" key={x.id}></th>
                          <td>{x.id}</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                  </tr>
                )
                }
              )            
          }
      
      </tbody>
    </table>       


    </div>)
}


export default Table