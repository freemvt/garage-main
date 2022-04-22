import React from 'react'
import HomeBg from './HomeBg'
import Script from '../../script/Script'
import Header from './Header'
import Div from '../Div'
import Testimonies from './Testimonies'
import Benefits from './Benefits'
import Inspection from './Inspection'
import Repair from './Repair'
import Services from './Services'
import Maintenance from './Maintenance'
import Prepurchase from './Prepurchase'

export default function Home() {
    const script = new Script()
  return (
    <div className="unknown-bg">
      <HomeBg />
      <Benefits />
      <Maintenance />
      <Prepurchase />
      <Services />
      <Repair />
      <Inspection />
      <Testimonies />
        {/* <Div>
            <div className="off-white-bg">
                <Header />
                <div className=""><HomeBg /></div>
                <Benefits />
                <Testimonies />
            </div>
        </Div>
        {window.addEventListener('scroll', e=>script.LandingScroll(e))} */}
    </div>
  )
}
