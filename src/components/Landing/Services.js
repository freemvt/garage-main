import React from 'react'
import {Link} from 'react-router-dom'
import servicing from '../Images/servicing.png'
import checked from '../Images/checked.png'

const data = [
    {title: "Regular servicing", content: "Individuals subscribed to our maintenance plan get free regular inspections for early detection of possible threats to your vehicle"},
    {title: "Complete servicing", content: "Individuals subscribed to our maintenance plan get free regular inspections for early detection of possible threats to your vehicle"}
]

export default function Services() {
    const list = data.map(({title, content}, index)=>(
        <React.Fragment key={index}>
            <div className="flex-row" style={{ marginBottom: 20 }}>
                <div className="width-5 width-m-10 width-s-10">
                    <div className="width-70 width-m-60">
                        <img src={checked} alt="" className="max-img" />
                    </div>
                </div>
                <div className="width-95 width-m-90 width-s-90">
                    <div className="bold-text" style={{ marginBottom: 5 }}>{title}</div>
                    <div className="font-13 garage-grey-text">{content}</div>
                </div>
            </div>
        </React.Fragment>
    ))
  return (
    <>
        <div className="padding-all-20" />

        <div className="flex-row-reverse">
            <div className="width-90 width-s-100 off-pink-bg">
                <div className="padding-all-50" />
                <div className="width-85 margin-auto">
                    <div className="row">
                        <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10 font-roboto">
                            <div className="width-90">
                                <div className="font-35 bold-text">Vehicle Servicing</div><br />
                                <div className="font-14">
                                    We help maintain vehicles for individuals who have less 
                                    than 5 vehicles. The routine maintenance involves vehicle 
                                    servicing, auto-diagnosis for the censored parts of the 
                                    vehicle, and physical inspection of the vehicle.
                                </div><br />
                                {list}
                                <br />
                                <div>
                                    <Link to="" className="blue-link font-14">Learn more about Vehicle Servicing</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10">
                            <div className="width-lx-70 margin-auto">
                                <img src={servicing} alt="" className="max-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-all-20" />
            </div>
        </div>

        <div className="padding-all-20" />
    </>
  )
}
