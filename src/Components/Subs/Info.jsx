import React , { useState, useRef}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import "../../Styles/Info.scss"

import { setName, setEmail, setPhoneNumber } from "../../Redux/Slices/infoSlice"
import { setPage } from '../../Redux/Slices/pageSlice'

const Info = () => {
  const navigate = useNavigate();

  const {name, email, phoneNumber} = useSelector(state => state.info);

  const [errMsg, setErrMsg] = useState({ name: true, email: true, phoneNumber: true})

  const navigateTo = (e) => {
    e.preventDefault()
    if( name == "" ) {
      setErrMsg({...errMsg, name: false})
    }
    else if( !email.includes("@" || email == "") ) {
      setErrMsg({...errMsg, email: false})
    }
    else if( phoneNumber == "" ) {
      setErrMsg({...errMsg, phoneNumber: false})
    }
    else  {
      dispatch(setPage("2"));
      navigate("/plans");
    }
  }


  const dispatch = useDispatch();

  const changeDetails = (e) => {
    
    if (e.target.name == "name") {
      setErrMsg({...errMsg, name: true})
      dispatch(setName(e.target.value))
    }
    else if (e.target.name == "email") {
      setErrMsg({...errMsg, email: true})
      dispatch(setEmail(e.target.value))
    }
    else if (e.target.name == "phone") {
      setErrMsg({...errMsg, phoneNumber: true})
      dispatch(setPhoneNumber(e.target.value))
    }
    else return

  }


  return (
    <div className='Info'>
      <h1>Personal info</h1>  
      <h4>Please provide name, email address and phone number.</h4>

      <form>
        <section>
          <div className='label'>
            <label htmlFor="name">Name</label>
            {errMsg.name ? "" : <span>This field is required</span>}
          </div>
          <input type="text" name="name" value={name}
          style={errMsg.name ? {} : errStyle } placeholder='e.g Stephen King' onChange={(e)=> changeDetails(e)} />
        </section>

        <section>
          <div className="label">
            <label htmlFor="email">Email Address</label>
            {errMsg.email ? "" : <span>This field is required</span>}
          </div>
          <input type="email" name="email" value={email}
          style={errMsg.email ? {} : errStyle } placeholder='e.g stephenking@lorem.com'  onChange={(e)=> changeDetails(e)}/>
        </section>

        <section>
         <div className='label'>
         <label htmlFor="phone">Phone Number</label>
          {errMsg.phoneNumber ? "" : <span>This field is required</span>}
         </div>
          <input type="tel"name="phone"  value={phoneNumber}
          style={errMsg.phoneNumber ? {} : errStyle } placeholder='e.g +1 234 567 890'  onChange={(e)=> changeDetails(e)}/>
        </section>

        <button onClick={(e)=> navigateTo(e)}>
          Next Step
        </button>

      </form>
    </div>
  )
}

const errStyle = {
  bordeColor: "hsl(354, 84%, 57%)",
  outline: " 1px solid hsl(354, 84%, 57%)",
}

export default Info