import React from 'react'
import {Link} from 'react-router-dom'
import technician from '../Images/technician.png'
import checked from '../Images/checked.png'

const data = [
    {title: 'Flexible schedule', content: 'Our mobile app enables you set the date, time and location for repair. Meaning if your vehicle breaks down in a remote community or you prefer home service, we have you covered.'},
    {title: 'Realtime progress update ', content: 'For every service requested, we provide you with a realtime status report of granular services to keep you upto speed with granular details of progress '},
    {title: 'Quality assurance', content: 'We give you a mental roadmap of your vehicle to ensure that you are kept abreast of what process is required after an activity is completed.'}
]

export default function Repair() {
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

        <div className="width-80 width-s-90 margin-auto off-green-bg">
            <div className="padding-all-20 font-roboto">
                <div className="center-text">
                    <div className="bold-text font-20">Repair works</div><br />
                    <div className="width-50 width-lx-70 width-l-80 width-m-100 width-s-100 garage-grey-text font-14 margin-auto">
                        While you’re busy with your normal routine, Garage’s professionally 
                        trained and certified technicians are taking good care of your vehicle.
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="width-75 width-lx-70 width-m-90 width-s-100 margin-auto">
                            <img src={technician} alt="" className="max-img" />
                        </div>
                    </div>

                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10 font-roboto">
                        <div className="width-lx-70 margin-auto" style={{ transform: 'translateY(20px)' }}>
                            {list}
                            <br />
                            <div>
                                <Link to="" className="blue-link font-14">Learn more about Repair works</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="padding-all-20" />
    </>
  )
}
