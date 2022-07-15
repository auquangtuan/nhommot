import React from 'react'

export default function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", fontSize :'30px'}}
    onClick={onClick}
  />
  )
}
