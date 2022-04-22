import React from 'react'
// import BgLarge from '../Images/home-lg.png'
// import BgSmall from '../Images/home-sm.png'
import BgLarge from '../Images/banner.png'
import BgSmall from '../Images/bmobile.png'
import BgImage from './BgImage'
import logo from '../Images/logo-blue.jpg'

const caption = "Africa's premier auto tech platform"

export default function HomeBg() {
    const colorList = ['red','yellow','blue','green'].map((item, index)=>(
        <React.Fragment key={index}>
            <div className={`col-6 padding-all-20 ${item}-bg`}></div>
        </React.Fragment>
    ))
  return (
    <>
        <div className="bg-img-media-hide home-bg">
            <BgImage img={BgLarge} className="flex-column justify-content-center align-items-center relative overflow-hidden">
                <div className="absolute top-10 left-5 flex-row-reverse1 display-none1">
                    <div className="width-30 width-lx-25 width-l-25"><img src={logo} alt="" className="max-img" /></div>
                </div>
                <div className="width-90 left-5 absolute z-index-1000">
                    <div className="row">
                        <div className="col-7">
                            <div className="font-roboto font-70 font-lx-50 font-l-40 white-text text-shadow bold-text">Garage</div>
                            <div className="font-roboto font-35 font-lx-25 font-l-18 white-text text-shadow">{caption}</div>
                        </div>
                        <div className="col-5" />
                    </div>
                </div>
                <div className="absolute width-10 width-lx-15 width-l-15 bottom-10 right-5 flex-row-reverse">
                    <div className="relative flex-column justify-content-center align-items-center">
                        {/* <div className="row">
                            {colorList}
                        </div> */}
                        {/* <div className="absolute padding-all-10 white-bg z-index-1" style={{ borderRadius: '50%', boxShadow: '0px 0px 7px 5px rgba(20,240,240,0.5)'}} /> */}
                    </div>
                </div>
            </BgImage>
        </div>
        <div className="bg-img-media-show home-bg">
            <BgImage img={BgSmall} className="width-100 height-100 bg-img-media-show">
                <div className="absolute top-0 width-100">
                    <div className="padding-all-10 white-text font-helvetica center-text">
                        <div className="flex-row">
                            <div className="width-m-15 width-s-20 dispay-none">
                                <img src={logo} alt="" className="max-img" />
                            </div>
                        </div>
                        <div className="padding-all-5"/>
                        <div className="font-m-45 font-s-50 bold-text">Garage</div>
                        <div className="">{caption}</div>
                    </div>
                </div>
            </BgImage>
        </div>
    </>
  )
}
