import React from 'react'
import MyContext from '../config/MyContext'

export default function Div({children}) {
  return (
    <>
        <MyContext.Consumer>
            {(state)=>(
                <>
                    <div style={state.sideBar ? {overflow: 'hidden'} : {overflow: 'auto'}}>{children}</div>
                    {/* <div style={state.sideBar ? {overflow: 'hidden', height: window.innerHeight} : {overflow: 'auto', height: '100%'}}>{children}</div> */}
                </>
            )}
        </MyContext.Consumer>
    </>
  )
}
