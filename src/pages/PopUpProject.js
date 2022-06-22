import React, { useState, useEffect }  from "react";
import '../styles/Popup.css'

function PopUp({id, handleClose}){
    const [data, setData] = useState([{}]);
   

   useEffect(() => {
    fetch (`/project/${id}`).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
          console.log(data);
      }
    )
   }, []);
    
    return(
        <div>
          
            <div>
                
                   
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Infos projects</h1>
                                <h1 onClick={handleClose} className="close">X</h1>
                            </div>
                            <div>
                            <ul className='list-project'>
                                <li> Name creator : {data.creator}</li>
                                <li> Description : {data.description}</li>
                                <ul className='list-project'><h2>Jobs</h2></ul>
                                {data?.jobs?.map((item, index) => {
                                    return (
                                        <li className='index'>
                                            <li>Job name : {item.name}</li>
                                            <li>Job creation date : {item.creationDate}</li>
                                            
                                        </li>
                                        
                                    )})}


                                
                            </ul>
                                                    
                                   
                                
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default PopUp;