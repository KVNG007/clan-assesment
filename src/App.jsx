import { useState } from 'react'
import {Navigate, Route, Routes } from 'react-router'

import { useSelector } from 'react-redux'
import './App.scss'

import Page from "./Components/Page"
import Details from "./Components/Details"
import Info from "./Components/Subs/Info"
import Plans from "./Components/Subs/Plans"
import AddOns from "./Components/Subs/AddOns"
import Summary from "./Components/Subs/Summary"
import ThankYou from "./Components/Subs/ThankYou"


function App() {
  const page = useSelector(state =>state.page.currPage);
  const billing = useSelector(state =>state.billing.billing);

  return (
    <div className="App">
      <Page />

      <Routes>

        <Route  path="/" element={<Details />}>

          <Route index path="/" element={<Info />} />
          <Route exact path="/plans" element={<Plans />} />
          <Route exact path="/add-ons" element={<AddOns />} />
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/thank-you" element={<ThankYou />} />
          

        </Route>
      </Routes>
    </div>
  )
}

export default App
