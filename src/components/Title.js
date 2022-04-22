import React from 'react'

export default function Title({className,title}) {
  return (
    <div className={className ? className: 'font-roboto capitalize bold-text font-35 font-m-30 font-s-30'}>{title}</div>
  )
}
