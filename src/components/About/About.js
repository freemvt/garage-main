import React from 'react'
import StandardDiv from '../StandardDiv'
import Title from '../Title'
import user from '../Images/user.png'
import logo from '../Images/garage.png'
import Div from '../Div'
import Script from '../../script/Script'
import Header from '../Landing/Header'

// Gana Gana , Cedric Foudjet
export default function About() {
    const script = new Script()
    const json = [
        {img: user, title: 'Co-founder', name: 'Gana Gana', message: 'The co-founder brief message goes here co-founder brief message goes here the co-founder brief message goes here co-founder brief message goes here the co-founder brief message goes here co-founder brief message goes here'},
        {img: user, title: 'Co-founder', name: 'Cedric Foudjet', message: 'The co-founder brief message goes here co-founder brief message goes here the co-founder brief message goes here co-founder brief message goes here the co-founder brief message goes here co-founder brief message goes here'},
    ]

    const leadership = json.length === 0 ? '' : json.map(({img, title, name, message}, index)=>(
        <React.Fragment key={index}>
            <div className="col-6 col-l-12 col-m-12 col-s-12 padding-all-10">
                <div className="leader-image margin-auto">
                    <img src={img?img:user} alt="" className="max-img" />
                </div>
                <div className="center-text capitalize bold-text font-20">{name}</div>
                <div className="center-text capitalize bold-text leader-title font-14">{title}</div>
                <br />
                <div className="font-helvetica width-90 width-lx-95 width-s-100 margin-auto">{message}</div>
            </div>
        </React.Fragment>
    ))

  return (
    <>
        <Div>
            <div className="off-white-bg">
                <Header />
                <StandardDiv>
                    <div className="white-bg padding-all-10 relative">
                        <div className="width-10 width-l-15 width-m-15 width-s-15 absolute top-0 left-0"><img src={logo} alt="" className="max-img" /></div>
                        <div className="padding-all-20" />
                        <Title title="- Our Mission -" className="font-40 font-lx-30 font-l-30 font-m-30 font-s-30 font-gotham center-text"/>
                        <div className="width-60 width-lx-85 width-l-85 width-m-90 width-s-95 margin-auto">
                            <br />
                            <div className="center-text font-18 font-lx-16 font-l-16 font-m-16 font-s-16 font-helvetica">To increase access to affordable, functioning and eco-friendly vehicles in Africa</div>
                            <br /><br />
                            <div className="center-text font-40 font-lx-30 font-l-30 font-m-30 font-s-30 font-gotham">About</div>
                            <br />
                            <div className="font-helvetica font-15">At Garage, our mission is to increase access to affordable, functioning and eco-friendly
                                vehicles in Africa. We provide you with the best quality service and parts at the most 
                                affordable price. Our free basic diagnostics is aimed at speeding up your time to repair 
                                and providing you with quality spare parts at the best price - no up-charging!. We strive 
                                to provide you with a worry free experience and give you back time and money for more 
                                important needs.
                            </div>
                            <br />
                            <div className="font-helvetica font-15">
                                We believe owning and maintaining a car in Africa should be accessible to many. This is why we are starting out by helping you quickly determine what is wrong with your car and offering you an affordable price for spare parts, lowering your overall total cost of maintenance. 
                                Our partner mechanics are here to support you and to enable an affordable and quality repair experience.
                            </div>
                        </div>
                        <div className="padding-all-20" />
                    </div>
                </StandardDiv>
                <div className="padding-all-20" />
                <StandardDiv>
                    <div className="padding-all-10 white-bg round">
                        <div className="padding-all-20" />
                        <Title title="- Our Vision -" className="font-40 font-lx-30 font-l-30 font-m-30 font-s-30 font-gotham center-text"/>
                        <div className="center-text font-18 font-lx-16 font-l-16 font-m-16 font-s-16 font-helvetica">To accelerate Africa's transition towards greener mobility</div>
                        <div className="padding-all-20" />
                        <Title title="Leadership" className="font-40 font-lx-30 font-l-30 font-m-30 font-s-30 font-gotham center-text" />
                        <div className="padding-all-20" />
                        <div className="width-90 width-lx-95 width-l-80 margin-auto">
                            <div className="row">{leadership}</div>
                        </div>
                        <div className="padding-all-20" />
                    </div>
                </StandardDiv>
            </div>
        </Div>
        {window.addEventListener('scroll', e=>script.LandingScroll(e))}
    </>
  )
}
