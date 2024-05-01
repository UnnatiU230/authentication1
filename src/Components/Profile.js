import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const Navigate = useNavigate();

    const[Name, setName] = useState();
  const [email, setEmail] = useState("");

  const Submit = () =>{

    localStorage.removeItem("Name");
    localStorage.removeItem("email");

    Navigate("/login");
};

  useEffect(() => {
   
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  
  useEffect(() => {
   
    const storedName = localStorage.getItem("Name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div>
      <h1 style={{color:'silver', textDecorationLine:'underline', textDecorationColor:'black'}}>Profile Page</h1>
      <p>Name: {Name}</p>
      <p>Email: {email}</p>


      <button type="button" onClick={Submit} className="btn" style={{backgroundColor:'violet'}}>Logout</button>
      
    </div>
  );
}
