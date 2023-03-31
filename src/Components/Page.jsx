import React from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Page.scss"

const Page = () => {
    
    
    const page = useSelector(state =>state.page.currPage);


  return (
    <div className='pages'>
        <section className='page'>
            <span style={page == "1" ? activeStyle : {} }> 1</span>
            <aside>
                <p>STEP 1</p>
                <h3>YOUR INFO</h3>
            </aside>
        </section>
        
        <section className='page'>
            <span style={page == "2" ? activeStyle : {} }> 2</span>
            <aside>
                <p>STEP 2</p>
                <h3>SELECT PLAN</h3>
            </aside>
        </section>

        <section className='page'>
            <span style={page == "3" ? activeStyle : {} }> 3</span>
            <aside>
                <p>STEP 3</p>
                <h3>ADD-ONS</h3>
            </aside>
        </section>

        <section className='page'>
            <span style={page == "4" ? activeStyle : {} }> 4</span>
            <aside>
                <p>STEP 4</p>
                <h3>SUMMARY</h3>
            </aside>
        </section>
    </div>
  )
}

const activeStyle = {
    backgroundColor: "hsl(228, 100%, 84%)",
    color: "hsl(213, 96%, 18%)",
    borderColor :"hsl(228, 100%, 84%)", 
}

export default Page