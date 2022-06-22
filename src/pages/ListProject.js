import React, {useState,useEffect } from 'react'
import '../styles/List-project.css'
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUpProject';

const ListProject = () => {
  const navigate = useNavigate();
  const btn1_Click = () => {
    navigate('/create-project');
  };
  
  const [data, setData] = useState([{}]);
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
}


const duclicate =(id)=>{

fetch (`/project/${id}/copy`).then(
res=>res.json()
).then(
  data =>{
  data =>data.projects
  setData(data)
  navigate('/projects');
}
)
}

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
                  <button className='display'  onClick={togglePopup}>Afficher plus</button>
                  <button className='copy' onClick={()=> duclicate(item.id)}>Dupliquer</button>
                  <button className='delete'>supprimer</button>
                </li>
              );
            })}
             {isOpen && (
                <PopUp
                    handleClose={togglePopup}
                    isOpen={isOpen}
                />
            )}
          </ul>
    </div>
  )
}

export default ListProject