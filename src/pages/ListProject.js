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
  const [selectedId, setSelectedId] = useState('')
  

  const togglePopup = (id) => {
    setSelectedId(id)
    setIsOpen(!isOpen)
}

 useEffect(() => {
  fetch ("/projects").then(
    res => res.json()
  ).then(
    data => {
        data = data.projects
        setData(data)
       
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
                  <button className='display'  onClick={() => togglePopup(item.id)}>Afficher plus</button>
                  <button className='copy'>Dupliquer</button>
                  <button className='delete'>supprimer</button>
                </li>
              );
            })}
             {isOpen && (
                <PopUp
                    id={selectedId}
                    handleClose={togglePopup}
                    isOpen={isOpen}
                />
            )}
          </ul>
    </div>
  )
}

export default ListProject