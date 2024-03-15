import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
         
     
        try{
          const res = await axios.post(`/api/v1/auth/forgot-password`,{email,newPassword,answer});
  
          if(res && res.data.success){
            toast.success(res.data.message);
            navigate('/login');
          }
          else{
            toast.error(res.data.msg); 
          }
        }catch(error){

          //  toast.error('Something went wrong')
        }
  
    }

  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
    <div className="form-container "style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">RESET PASSWORD</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            placeholder="Enter Your favorite Sport Name "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            placeholder="Enter New Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          RESET
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default ForgotPassword