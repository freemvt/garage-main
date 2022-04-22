import React from 'react'
import logo from '../Images/garage.png'
import MyContext from '../../config/MyContext'
import Script from '../../script/Script'

export default function SideBar() {
    const script = new Script()
  return (
    <>
        <MyContext.Consumer>
            {(state)=>(
                <>
                    <div onClick={()=>{script.closeSideBar(); state.toggleSideBar()}} className="bg-shadow"></div>
                    <div className="menu-side-bar show-on-media-l width-lx-30 width-l-40 width-m-55 width-s-65 overflow-auto">
                        <div className="garage-bg padding-all-20">
                            <div className="width-lx-45 width-l-50 width-m-55 width-s-60 margin-auto">
                                <img src={logo} alt="" className="max-img" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </MyContext.Consumer>
    </>
  )
}
