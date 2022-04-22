import React from 'react'
import logo from '../Images/garage.png'
import SideBar from './SideBar'
import Script from '../../script/Script'
import MyContext from '../../config/MyContext'
import {Link} from 'react-router-dom'

export default function Header() {
    const script = new Script()
  return (
    <>
        <MyContext.Consumer>
            {(state)=>(
                <>
                    <div className="garage-header padding-all-5 black-bg">
                        <div className="width-90 width-lx-95 width-l-95 width-m-95 width-s-95 margin-auto">
                            <div className="row align-items-center justify-content-space-between">
                                <div className="width-5 width-lx-10 width-l-10 width-m-15 width-s-15">
                                    <img src={logo} alt="" className="max-img" />
                                </div>
                                <div className="hide-on-media-l">
                                    <div className="flex-row-reverse">
                                        <Link to="/" className="menu-item">Contact</Link>
                                        <Link to="/" className="menu-item">Service</Link>
                                        <Link to="/about" className="menu-item">About</Link>
                                    </div>
                                </div>
                                <div className="show-on-media-l">
                                    <div><i onClick={()=>{state.toggleSideBar(); script.openSideBar()}} className="fi fi-rr-menu-burger font-20 menu-cursor padding-all-5"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SideBar />
                </>
            )}
        </MyContext.Consumer>
    </>
  )
}
