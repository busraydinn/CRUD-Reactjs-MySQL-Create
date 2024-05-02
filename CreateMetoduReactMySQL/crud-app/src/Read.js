import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./style/Read.css"
function Read(){
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    const btnCreate=()=>{
        navigate("/create")
    }
    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then(res=>res.json())
        .then(data=>setUser(data))
    })
    
    return(
        <div className="readContainer">
           <div>
           <button type="button" onClick={btnCreate} className="btnCreate">Create User</button>
            <table>
                <tr>
                <th>İsim</th>
                <th>Soyisim</th>
                <th>Telefon Numarası</th>
                <th>E-posta Adresi</th>
                </tr>
           
            {
                user.map((users)=>(
                    <tr key={users.id}>
                        <td>{users.username}</td>
                        <td>{users.lastname}</td>
                        <td>{users.phone}</td>
                        <td>{users.email}</td>
                    </tr>
                ))
            }
             </table>
           </div>
        </div>
    )
}
export default Read;