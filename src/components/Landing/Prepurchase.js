import React from 'react'
import statistics from '../Images/statistics.png'
import checked from '../Images/checked.png'

const data = [
    {title: "Inspection", content: "Our trained team of inspectors carry out both physical inspection and auto-diagnostic check on 16 components (132 parts) of your vehicle"},
    {title: "Digital reporting", content: "We send a digital document reporting the functional state - whether they are good, need repair, need to be changed or are missing"},
    {title: "Risk assessment", content: "Finally, we assess the risk of purchasing the vehicle and give relevant recommendation based on our findings of the vehicle to be purchased"}
]

export default function Prepurchase() {
    const list = data.map(({title, content}, index)=>(
        <React.Fragment key={index}>
            <div className="flex-row" style={{ marginBottom: 20 }}>
                <div className="width-5 width-m-10 width-s-10">
                    <div className="width-70 width-m-60">
                        <img src={checked} alt="" className="max-img" />
                    </div>
                </div>
                <div className="width-95 width-m-90 width-s-90">
                    <div className="bold-text royal-blue-text" style={{ marginBottom: 5 }}>{title}</div>
                    <div className="font-13 garage-grey-text">{content}</div>
                </div>
            </div>
        </React.Fragment>
    ))
  return (
    <>
        <div className="padding-all-20" />
        <div className="width-80 width-s-90 margin-auto off-violet-bg">
            <div className="padding-all-50" />

            <div className="width-80 width-m-90 width-s-90 margin-auto">
                <div className="row">
                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="width-85 margin-auto">
                            <img src={statistics} alt="" className="max-img" />
                        </div>
                    </div>

                    <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12 padding-all-10">
                        <div className="font-roboto">
                            <div className="bold-text font-20">Prepurchase inspection</div><br />
                            <div className="garage-grey-text">
                                We provide affordable all-round pre-purchase vehicle inspection 
                                services and provide a detailed report with recommendations, so 
                                that you can make informed purchase decisions on vehicles
                            </div><br />
                            {list}
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
