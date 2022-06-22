import React, {useState,useEffect } from 'react'
import '../styles/List-project.css'
import { useNavigate } from 'react-router-dom';

const ListProject = () => {
  const navigate = useNavigate();
  const btn1_Click = () => {
    navigate('/create-project');
  };
  const btn2_Click = () => {
    navigate('/info-project');
  };
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
        <button className="new-project" onClick={btn1_Click}>New Projects</button>
      </div>
        <ul className='list-project'>
            {data.map((item, index) => {
              return (
                <li key={index} className="list">
                  <li>Id : #{item.id}</li>
                  <li>Name project : {item.name}</li>
                  <button className='display' onClick={btn2_Click}>Afficher plus</button>
                  <button className='copy'>Dupliquer</button>
                  <button className='delete'>supprimer</button>
                </li>
              );
            })}
          </ul>
    </div>
  )
}

export default ListProject