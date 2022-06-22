import React, { useState }  from "react";
import '../styles/Popup.css'

function PopUp({handleClose}){
   
    
    return(
        <div>
          
            <div>
                
                   
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Infos projects</h1>
                                <h1 onClick={handleClose}>X</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>Id : </li>
                                    <li>Nom : </li>
                                    <li>Job : </li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default PopUp;