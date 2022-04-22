import React from 'react'

export default function BgImage({img, children, className} = {}) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={className ? `${className} width-100 bg` : 'width-100 bg'}>
        <div><img src={img} alt="" className="max-img" style={{visibility: 'hidden'}} /></div>
        {children}
    </div>
  )
}
