import React, {useEffect, useState} from 'react'
import Script from '../../script/Script'
import quote from '../Images/comment.png'
import user from '../Images/user.png'
import StandardDiv from '../StandardDiv'
import Title from '../Title'

const json = [
    {company: 'Toyota Ghana', name: 'Gana Gana', source: 'WhatsApp', title: 'Excellent assistance', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'},
    {company: 'Garage', name: 'Cedric Cedric', source: 'Twitter', title: 'Easy and Fast', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'},
    {company: 'AirBnb Ghana', name: 'Richard Danquah', source: 'Facebook', title: 'Quick and Friendly', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'},
    {company: 'Uber Eats Ghana', name: 'Karen Koomson', source: 'Instagram', title: 'Committed Staff', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'},
    {company: 'KFC', name: 'Prince Price', source: 'Snapchat', title: 'Great Personal Experience', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'},
    {company: 'Yango', name: 'Richard Richard', source: 'Facebook', title: 'Excellent products', img: user, comment: 'Honestly!, the customer service at Garage is absolutely exceptional. I was welcome and given every information to lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'}
]

export default function Testimonies() {
    const script = new Script()
    const [testimony, setTestimony] = useState([])

    useEffect(()=>{
        script.testimony()
        setTestimony(json)
    }, [])

    const testimonies = testimony.length === 0 ? '' : testimony.map(({title, comment, img, name, source, company}, index)=>(
        <React.Fragment key={index}>
            <div className="testimony-card padding-all-10">
                <div className="testimony-content padding-all-20">
                    <div className="width-15 comment"><img src={quote} alt="" className="max-img" /></div>
                    <div className="title font-20">{title}</div>
                    <div className="padding-all-10" />
                    <div className="text font-13">
                        <div>{comment}</div>
                    </div>
                    <div className="padding-all-20" />
                    <div className="flex-row">
                        <div>
                            <div className="img">
                                <img src={img?img:user} alt="" className="max-img" />
                            </div>
                        </div>
                        <div className="margin-left-right-10">
                            <div className="font-14 testimony-name">{name}</div>
                            <div className="font-14 testimony-sub-name">{source}</div>
                        </div>
                    </div>
                    <div className="testimony-line" />
                    <div className="testimony-company font-14">Company</div>
                    <div className="testimony-company-title font-14">{company}</div>
                </div>
            </div>
        </React.Fragment>
    ))

    const testiCircle = testimony.length === 0 ? '' : testimony.map((item, index)=>(
        <React.Fragment key={index}>
            <div className="testimony-circle" onClick={()=>script.moveTestimony(index)} />
        </React.Fragment>
    ))
  return (
    <>
        <div className="width-100 white-bg1">
            <div className="padding-all-20" />
            {/* <StandardDiv> */}
            <div className="width-80 width-s-90 margin-auto">
                <Title title="Our Testimonies" />
                <br />
                <div className="width-100 overflow-hidden">
                    <div className="testimony">{testimonies}</div>
                </div>
                <div className="padding-all-10">
                    <div className="row justify-content-center align-items-center">{testiCircle}</div>
                </div>
            </div>
            {/* </StandardDiv> */}
            <div className="padding-all-20" />
        </div>
    </>
  )
}
