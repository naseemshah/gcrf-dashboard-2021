import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'
 
function Dashboard(props) {
    let [userEmail,setUserEmail] = useState(null)
    let [showDashboard,setShowDashboard] = useState(false)
    let handleUserEmailFormSubmit = (e) =>{
        e.preventDefault()
        setShowDashboard(true)
    }
    return (
        <StyledDash>
            <AnimatePresence>
                {
                    !showDashboard &&
                    <motion.form
                        initial={{ opacity: 0, translateY: 100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 100 }}
                        className="student-email-form" 
                        onChange={(e)=>{ setUserEmail(e.target.value) }}
                        onSubmit={handleUserEmailFormSubmit}
                    >
                        <input 
                            className="student-email-input"
                            type="email"
                            placeholder="Type in your email. Ex: john@google.com"
                            required
                        />
                        <button
                            onClick={()=>{}}
                            className="student-form-submit-button"
                            type="submit"
                        >Check my progress</button>
                    </motion.form>
                }
            </AnimatePresence>
        </StyledDash>
    );
}

export default Dashboard;

let StyledDash = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-width: 400px;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    .student-email-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .student-email-input{
        background: #FFFFFF;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        font-size: 18px;
        padding: 10px 20px;
        outline: none;
        min-width: 300px;
        width: 30vw;
        text-align: center;   
        transition: all 0.2s ease-in-out;
        :focus{
            box-shadow: 0px 4px 20px -3px rgba(255, 0, 0, 0.296);
        }  
    }
    .student-form-submit-button{
        background: #4285F4;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        margin-top: 20px;
        font-size: 15px;
        padding: 8px 15px;
        font-weight: 500;
        color: white;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        :hover{
            box-shadow: 0px 4px 20px -3px rgb(0, 110, 255);
            transform: scale(0.95)
        }
    }
`