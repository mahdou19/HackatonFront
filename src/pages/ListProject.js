import React, {useState,useEffect } from 'react'

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
        <ul >
            {data.map((item, index) => {
              return (
                <li key={index} className={item}>
                {item.name}
                </li>
              );
            })}
          </ul>
    </div>
  )
}

export default ListProject