import React, { useState, useEffect } from 'react'
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
    console.log(id);
    setSelectedId(id)
    setIsOpen(!isOpen)
  }

  const deleteProject = (projectId) => {
    fetch(`/project/${projectId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch("/projects")
          .then((response) => response.json())
          .then(({ projects }) => {
            setData(projects)
          })
      })
  }

  const exportProject = (projectId) => {
    fetch(`/project/${projectId}/export`)
      .then((response) => response.json())
      .then((project) => {
        const link = document.createElement("a");
        link.href = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(project)
        )}`;
        link.download = `${project.name}.json`;
        link.click();
      })
  }


  const duplicate = (id) => {
    fetch(`/project/${id}/copy`)
      .then(res => res.json())
      .then(() => {
        fetch("/projects")
          .then((response) => response.json())
          .then(({ projects }) => {
            setData(projects)
          })
      })
  }

  useEffect(() => {
    fetch("/projects").then(
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
              <button className='display' onClick={() => togglePopup(item.id)}>Afficher plus</button>
              <button className='copy' onClick={() => duplicate(item.id)}>Dupliquer</button>
              <button className='delete' onClick={() => deleteProject(item.id)}>supprimer</button>
              <button className='export' onClick={() => exportProject(item.id)}>Extraire</button>
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