import React , {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import "../../Styles/AddOns.scss"


import { setAddOns } from '../../Redux/Slices/addOnSlice'
import { setPage } from '../../Redux/Slices/pageSlice'

const AddOns = () => {

  const dispatch = useDispatch();

  const billing = useSelector(state => state.billing.billing);
  const {online, storage, custom} = useSelector(state => state.addOns);


  const handleSelect = (name) => {
    dispatch(setAddOns(name));
  }


  return (
    <div className='AddOns'>
      <h1>Pick add-ons</h1>
      <h4>Add-ons help enhance your gaming experience.</h4>

      <section>

        <aside className={online ? " selected" : ''} onClick={()=> handleSelect("online")}>
          <div className={online ? "check checked" : "check"} >
            <img src='./assets/images/icon-checkmark.svg' />
          </div>

          <div className='details'>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>

          { billing == "Monthly" ? 
          <span>+ $1/mo</span>
          :
          <span>+ $10/yr</span>
          }
        </aside>

        <aside className={ storage ? " selected" : ''} onClick={()=> handleSelect("storage")} >
          <div className={storage ? "check checked" : "check"}>
            <img src='./assets/images/icon-checkmark.svg'  />
          </div>

          <div className='details'>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>

          { billing == "Monthly" ? 
          <span>+ $2/mo</span>
          :
          <span>+ $20/yr</span>
          }
        </aside>

        <aside className={ custom ? " selected" : ''} onClick={()=> handleSelect("custom")}>
          <div className={custom ? "check checked" : "check"}>
            <img src='./assets/images/icon-checkmark.svg'  />
          </div>

          <div className='details'>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>

          { billing == "Monthly" ? 
          <span>+ $2/mo</span>
          :
          <span>+ $20/yr</span>
          }
        </aside>

      </section>


      <footer>
        <NavLink className="back" onClick={()=> dispatch(setPage("2"))} to="/plans">Go Back </NavLink>
        <NavLink className="next" onClick={()=> dispatch(setPage("4"))} to="/summary">Next Step </NavLink>
      </footer>
    </div>
  )
}

export default AddOns