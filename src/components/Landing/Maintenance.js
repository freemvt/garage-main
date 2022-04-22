import React from 'react'
import {Link} from 'react-router-dom'
// import report from '../Images/report.png'
import report from '../Images/garage-report.png'
import checked from '../Images/checked.png'

// const data = [
//     {title: "For Individuals", content: "Individuals who sign up their private vehicles for routine maintenance receive 3 regular service and 1 complete servicing with scheduled free inspection. All aimed at maintaining the lifespan of your vehicle"},
//     {title: "For Businesses", content: "When businesses sign up to routine maintenance, Garage maintains their entire fleet, giving granular report of the state of each car, along with repair history, invoices and receipts."}
// ]
// const briefIntro = 'Whether you are a business or an individual, Garage has designed various payment plans and pricing model for your convenience. We bring our service to your doorstep'
// const briefIntro = 'At Garage, we have great services tailored to meet the needs of businesses and individuals with great payment plans and pricing model for your convenience.'
const briefIntro = ''
const data = [
    {title: "Affordable parts", content: "We connect you to a network of local and global distributors to provide parts at an affordable price, improving reliability and limiting unplanned maintenance."},
    {title: "Routine & on-demand maintenance", content: "We offer best in class auto maintenance at affordable prices. We partner with and employ the best mechanics from the top shops nationwide and leverage technology to reduce maintenance costs and increase convenience."},
    {title: "Free diagnostics", content: "Keeping your vehicles in good health is our priority. So we provide free basic monthly and quarterly diagnostics to our customers."},
    {title: "Reports & data insights", content: "We provide diagnostic reports, granular data on auto issues and cost savings mechanisms, driver safety data and analytics on vehicle expenses and performance."}
]

export default function Maintenance() {
    const list = data.map(({title, content}, index)=>(
        <React.Fragment key={index}>
            <div className="flex-row" style={{ marginBottom: 20 }}>
                <div className="width-5 width-m-10 width-s-10">
                    <div className="width-70 width-m-60">
                        <img src={checked} alt="" className="max-img" />
                    </div>
                </div>
                <div className="width-95 width-m-90 width-s-90">
                    <div className="bold-text garage-blue-text" style={{ marginBottom: 5 }}>{title}</div>
                    <div className="font-13 garage-grey-text">{content}</div>
                </div>
            </div>
        </React.Fragment>
    ))
  return (
    <>
        <div className="padding-all-20" />

        <div className="width-80 width-s-90 margin-auto off-blue-bg">
            <div className="padding-all-50" />

            <div className="width-80 width-m-90 width-s-90 margin-auto">
                <div className="row">
                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10 font-roboto">
                        <div className="uppercase garage-blue-text bold-text">Our Services</div>
                        <div className="font-35 bold-text display-none">Routine maintenance</div>
                        <br />
                        <div className="garage-grey-text">{briefIntro}</div>
                        <br />
                        {list}
                        <br />
                        <div className="display-none">
                            <Link to="" className="blue-link font-15">Learn more about routine maintenance</Link>
                        </div>
                    </div>

                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="width-lx-70 margin-auto">
                            <img src={report} alt="" className="max-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding-all-20" />
        </div>

        <div className="padding-all-20" />
    </>
  )
}
