import React from 'react'
import {Link} from 'react-router-dom'
import logo from './Images/logo-blue.jpg'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className="garage-blue-bg padding-all-20">
        <div className="row  align-items-center">
            <div className="col-3 col-l-12 col-m-12 col-s-12 padding-all-10">
                <div className="width-40 width-lx-60 width-l-20 width-m-30 width-s-50 margin-auto">
                    <img src={logo} alt="" className="max-img" />
                </div>
            </div>
            <div className="col-9 col-l-12 col-m-12 col-s-12 padding-all-10">
                <div className="row">
                    <div className="col-3 col-lx-6 col-l-6 col-m-12 col-s-12 padding-all-10">
                        <div className="helpful-link-title">Helpful Links</div>
                        <div className="width-100">
                            <div className="helpful-link row">
                                <div className="font-15 col-12 col-m-4 col-s-4"><Link to="">Home</Link></div>
                                <div className="font-15 col-12 col-m-4 col-s-4"><Link to="">About</Link></div>
                                <div className="font-15 col-12 col-m-4 col-s-4"><Link to="">Contact Us</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lx-6 col-l-6 col-m-12 col-s-12 padding-all-10">
                        <div className="">
                            <div className="social-icon-title">Social</div>
                            <div className="social-icon row align-items-center">
                                <div className="font-20 col-3 col-m-3 col-s-4"><a href="#" target="_blank"><i className="fab fa-twitter" /></a></div>
                                <div className="font-20 col-3 col-m-3 col-s-4"><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></div>
                                <div className="font-20 col-3 col-m-3 col-s-4"><a href="#" target="_blank"><i className="fab fa-instagram"/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="garage-yellow-text center-text">
            <div className="padding-all-10" />
            <div className="bold-text">Garage Mobility</div>
            <div className="font-13">All Rights Reserved <span>&copy;</span> {year}</div>
        </div>
    </div>
  )
}
