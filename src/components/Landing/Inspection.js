import React from 'react'
import image from '../Images/inspectionreport.png'
import {Link} from 'react-router-dom'

export default function Inspection() {
  return (
    <>
        <div className="padding-all-20" />
        <div className="width-80 width-s-90 margin-auto off-yellow-bg">
            <div className="padding-all-20">
                <div className="row align-items-center">
                    <div className="col-6 col-lx-8 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="width-90 margin-auto">
                            <div className="font-35 font-roboto bold-text">Vehicle inspection</div><br />
                            <div className="font-roboto">
                                Vehicle inspection comprises of auto-diagnostic check of all 16 components 
                                of your vehicle. It involves auto-diagnosis for the censored parts of the 
                                vehicle, and physical inspection, after which a detailed report is sent to 
                                you. 
                            </div><br />
                            <div>
                                <Link to="" className="blue-link font-14">Learn more about Vehicle inspection</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lx-4 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="width-75 width-lx-100 width-m-90 width-s-100 margin-auto">
                            <img src={image} alt="" className="max-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="padding-all-20" />
    </>
  )
}
