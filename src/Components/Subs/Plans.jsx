import React , {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import "../../Styles/Plans.scss"


import { setBilling, setOption } from '../../Redux/Slices/billingSlice'
import { setPage } from '../../Redux/Slices/pageSlice'

const Plans = () => {

  const {billing, option } = useSelector(state => state.billing)
  const dispatch = useDispatch();

  const toggle = () => {
    if( billing == "Monthly" ) {
      dispatch(setBilling("Yearly"));
    }
    else  {
      dispatch(setBilling("Monthly"));
    }
  }



  return (
    <div className='Plan'>Plans

      <h1>Select your plan.</h1>
      <h4>You have the option of monthly or yearly billing.</h4>

      <section>

        <aside className={option == "Arcade" ? "active" : ''} onClick={()=> dispatch(setOption("Arcade"))}>
          <img src='./assets/images/icon-arcade.svg' alt="Arcade" />
          <div>
            <h3>Arcade</h3>
            {billing == "Monthly" ? <p>-$9/mo</p>
            : <div>
              <p>-$90/yr</p>
              <h6>2 months free</h6>
              </div>
            }

          </div>
        </aside>

        <aside  className={option == "Advanced" ? "active" : ''} onClick={()=> dispatch(setOption("Advanced"))}>
          <img src='./assets/images/icon-advanced.svg' alt="Advanced" />
          <div>
            <h3>Advanced</h3>
            {billing == "Monthly" ? <p>-$12/mo</p>
            : <div>
              <p>-$120/yr</p>
              <h6>2 months free</h6>
              </div>
            }
          </div>
        </aside>

        <aside className={option == "Pro" ? "active" : ''} onClick={()=> dispatch(setOption("Pro"))}>
          <img src='./assets/images/icon-pro.svg' alt="pro" />
          <div>
            <h3>Pro</h3>
            {billing == "Monthly" ? <p>-$15/mo</p>
            : <div>
              <p>-$150/yr</p>
              <h6>2 months free</h6>
              </div>
            }
          </div>
        </aside>

      </section>

      <div className="select">
        <div className='select__cont'>
          <span className={billing !== "Monthly"  ? "" : " selected"}>Monthly</span>

          <div className='holder' >
            <div className='move' style={billing !== "Monthly" ? move : {}}  onClick={()=> toggle()}></div>
          </div>

          <span className={ billing !== "Monthly"  ? "selected" : ""}>Yearly</span>
        </div>
      </div>

      <footer>
        <NavLink className="back" onClick={()=> dispatch(setPage("1"))} to="/">Go Back </NavLink>
        <NavLink className="next" onClick={()=> dispatch(setPage("3"))} to="/add-ons">Next Step </NavLink>
      </footer>
    </div>
  )
}

const move = {
  transform: "translateX(17px)",
}


export default Plans