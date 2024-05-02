import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./style/Create.css"
function Create(){
    const [username,setUserName]=useState("");
    const [lastname,setLastName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate()
    const postData=()=>{
        axios.post("http://localhost:3000/create",{
            username,
            lastname,
            phone,
            email
        }).then(navigate("/"))
    }

    return(
        <div className="createContainer">
            <form>
                <div className="input-wrap">
                    <label htmlFor="username">İsim</label>
                    <input placeholder="username" id="username" name="username" onChange={(e)=>setUserName(e.target.value)} ></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="lastname">Soyisim</label>
                    <input placeholder="lastname" id="lastname" name="lastname" onChange={(e)=>setLastName(e.target.value)} ></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="phone">Telefon Numarası</label>
                    <input placeholder="5XX (XXX) (XXX)" id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} ></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="email">E-posta</label>
                    <input placeholder="test@gmail.com" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="input-btn">
                <button type="submit" onClick={postData} className="btnUser">Kullanıcı Oluştur</button>
                </div>
            </form>
        </div>
    )
}
export default Create;