import React, {useState,useEffect } from 'react'
import '../styles/List-project.css'

const ListProject = () => {
  const [data, setData] = useState([{}]);

 useEffect(() => {
  fetch ("/projects").then(
    res => res.json()
  ).then(
    data => {
        data = data.projects
        setData(data)
        console.log(data);
    }
  )
 }, []);
  return (
    <div>
      <div>
        <button className="new-project">New Projects</button>
      </div>
        <ul className='list-project'>
            {data.map((item, index) => {
              return (
                <li key={index} className="list">
                  <li>Id : #{item.id}</li>
                  <li>Name project : {item.name}</li>
                <button className='copy'>Copier</button>
                <button className='delete'>supprimer</button>
                </li>
              );
            })}
          </ul>
    </div>
  )
}

export default ListProject