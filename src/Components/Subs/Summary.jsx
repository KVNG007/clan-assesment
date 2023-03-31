import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import "../../Styles/Summary.scss"
import { setPage } from '../../Redux/Slices/pageSlice'

const Summary = () => {

  const dispatch = useDispatch();

  const {billing, option } = useSelector(state => state.billing);
  const {online, storage, custom} = useSelector(state => state.addOns);

  const planPrices = {
    Monthly : {
      Arcade: ["$9/mo", 9],
      Advanced: ["$12/mo", 12],
      Pro: ["$15/mo", 15]
    },
    Yearly: {
      Arcade: ["$90/yr", 90],
      Advanced: ["$120/yr", 120],
      Pro: ["$150/yr", 150]
    }
  };

  const addOnPrices = {
    Monthly : {
      online: ["$1/mo", 1],
      storage: ["$2/mo", 2],
      custom: ["$2/mo", 2]
    },
    Yearly: {
      online: ["$10/yr", 10],
      storage: ["$20/yr", 20],
      custom: ["$20/yr", 20]
    }
  };

  const totalPrice = () => {
    let onLine;
    let store;
    let costom;
    let plan = planPrices[billing][option][1];
    online ? onLine = addOnPrices[billing].online[1] : onLine = 0; 
    storage ? store = addOnPrices[billing].storage[1] : store = 0; 
    custom? costom = addOnPrices[billing].custom[1] : costom = 0; 

    return (plan + onLine + store + costom) ;

  }


  return (
    <div className="Summary">
      
      <div className='Summary__cont'>
      <h1>Finishing up</h1>
      <h4>Double-check everything looks OK before confirming.</h4>

      <main>
        <section className='first'>
            <aside>
              <h3>{`${option} (${billing})`}</h3>
              <NavLink to="/plans" onClick={()=> dispatch(setPage("2"))}>Change</NavLink>
            </aside>
            <span>{planPrices[billing][option][0]}</span>
        </section>

        <hr />

        {online ? <section>
          <h3>Online Service</h3>
          <span>{addOnPrices[billing].online[0]}</span>
        </section> : ''}

        {storage ? <section>
          <h3>Larger storage</h3>
          <span>{addOnPrices[billing].storage[0]}</span>
        </section> : ''}

        {custom ? <section>
          <h3>Customizable profile</h3>
          <span>{addOnPrices[billing].custom[0]}</span>
        </section> : ''}

      </main>

      <div className='total'>
          <h3>{`Total (per ${billing == "Monthly" ? "month" : "year"})`}</h3>
          <span>{`+$${totalPrice()}/${billing == "mo" ? "month" : "yr"}`}</span>
      </div>
      </div>

      <footer>
        <NavLink className="back" onClick={()=> dispatch(setPage("3"))} to="/add-ons">Go Back </NavLink>
        <NavLink className="next"  to="/thank-you">Confirm </NavLink>
      </footer>
    </div>
  )
}

export default Summary