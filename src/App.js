import React, { useEffect, useState } from 'react'

const App = () => {
  const [data ,setDate] = useState([]);
  useEffect(()=>{
   fetch(`https://data.covid19india.org/data.json`).then(
    response =>response.json()
   ).then(jsondata => setDate(jsondata.statewise))
  },[])
  return (
    <div>
      <center>
        <h1 className='bg-info'>COVID 19 TRACKER</h1>  <br/> 
        <table className='table table-striped'>
        <thead className='thead bg-info'>
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERD</th>
            <th>DEATHS</th>
            <th>ACTIVE</th>
            <th>LASTUPDATE</th>
          </tr>

        </thead>
        <tbody>
        {data.map(item =>{
          return(
            <tr>
              <td>{item.state}</td>
              <td>{item.confirmed}</td>
              <td>{item.recovered}</td>
              <td>{item.deaths}</td>
              <td>{item.active}</td>
              <td>{item.lastupdatedtime}</td>

            </tr>
          )
        })}
        </tbody>
        </table>
      </center>
    </div>
  )
}

export default App
