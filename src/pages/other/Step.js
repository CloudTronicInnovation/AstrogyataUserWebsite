import React from 'react'
import { useState } from 'react';
import Phone from './Phone'
import Otp from './Otp'

function Step() {
    const [state, setState] = useState({
        status: '',
        msg: '',
        mobile: '',
        otp: ''
    })
    const[step, setStep] = useState(1)

    const handleChange = (input) => (e) =>{
        setState({...state, [input]: e.target.value})
    }
    const msgHandleChange = (msg) =>{
        setState({...state, msg: msg})
}
const nextStep = () => {
  setState(prevStep => setStep +1)
}
const prevStep = () => {
    setState(prevStep => prevStep -1)
  }

  const{status, msg, mobile, otp} =state
  const value = {status, msg, mobile, otp}
  switch (step) {
      case 1:
           return <Phone nextStep={nextStep} msgHandleChange={msgHandleChange} handleChange={handleChange} value={value} />;
            
     case 2: 
            return <Otp nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;
           
    default:
    return <Phone nextStep={nextStep} msgHandleChange={msgHandleChange} handleChange={handleChange} value={value} />
  }
   
}

 export default Step;
