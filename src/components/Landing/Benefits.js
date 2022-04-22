import React from 'react'
import Title from '../Title'
import best from '../Images/best.png'
import convenience from '../Images/convenience.png'
import support from '../Images/support.png'
import quality from '../Images/quality.png'
import transparency from '../Images/transparency.png'

// const json = [
//     {img: quality, title: 'Quality assurance', text: 'Our technicians are trained, certified and have over a decade of experience'},
//     {img: best, title: 'Best Deals', text: 'Our technicians are trained, certified and have over a decade of experience'},
//     {img: transparency, title: 'Transparency', text: 'Our technicians are trained, certified and have over a decade of experience'},
//     {img: convenience, title: 'Convenience', text: 'Our technicians are trained, certified and have over a decade of experience'},
//     {img: support, title: 'Customer support', text: 'Our technicians are trained, certified and have over a decade of experience'}
// ]

export default function Benefits() {
    const json = [
        {img: quality, title: 'Trust & Reliability', text: 'We work for you and we hope to build and enduring partnership. We provide transparent reports on your vehicles, parts and servicing and we ensure we are ready for you when you call'},
        {img: best, title: 'Affordability & Quality', text: 'Our goal is to lower the costs of auto maintenance across the board. We partner with distributors, suppliers and technicians to continuously find ways to lower costs and we leverage our technology to accelerate up that process.'}
    ]

    const benefits = json.length === 0 ? '' : json.map(({img, title, text}, index)=>(
        <React.Fragment key={index}>
            <div className="col-12 padding-all-10">
                <div className="benefit padding-s-all-10 padding-all-20">
                    <div className="padding-all-5" />
                    <div className="row justify-content-space-between">
                        <div className="width-5 width-m-10 width-s-10"><img src={img?img:quality} alt="" className="max-img" /></div>
                        <div className="width-90">
                            <div className="font-roboto garage-blue-text bold-text" style={{ marginBottom: 10 }}>{title}</div>
                            <div className="font-14 garage-grey-text">{text}</div>
                        </div>
                    </div>
                    <div className="padding-all-5" />
                </div>
            </div>
        </React.Fragment>
    ))
  return (
    <div className="benefit-bg">
        <div className="padding-all-20" />
        <div className="width-60 width-lx-80 width-l-95 width-m-90 width-s-95 margin-auto">
            <div className="garage-blue-text bold-text uppercase font-roboto padding-all-10">Benefits with Garage</div>
            <br />
            <div className="row justify-content-space-around">{benefits}</div>
        </div>
        <div className="padding-all-20" />
    </div>
  )
}
