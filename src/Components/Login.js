import {useRef,  useState , useEffect} from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const Navigate = useNavigate();

  const[Name, setName] = useState();
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");


  const submitForm = () =>{
    console.log( email + ' '+ password)

    localStorage.setItem("email", email);
    localStorage.setItem("Name", Name);
    setSubmittedEmail(email);
    setSubmittedName(Name);


    Navigate("/profile");
  };

    return(

        
    
        <div className="row justify-content-center pt-5">
            <div className = "col-sm-6">
                <div className="card p-4">

   <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" placeholder="Enter Name" onChange={e=>setName(e.target.value)}  id="name"  />
  </div>

      <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} id="email"   />
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}  id="pwd"  />
  </div>

  <br />
  
  <button type="button" onClick={submitForm} className="btn" style={{backgroundColor:'violet'}} >Login</button>

  {submittedEmail &&  (
            <div className="mt-3">
              Submitted Email: <strong>{submittedEmail}</strong>
            </div>
          )}

{submittedName &&  (
            <div className="mt-3">
              Submitted Name: <strong>{submittedName}</strong>
            </div>
          )}

                </div>

            </div>

        </div>
       
        
    )
}