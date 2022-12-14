import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../index.css'

type Items = {
  id: number
  name: string
}

type Props = {
  items: Items[]
}

const MyCounter = ({ items }: Props) => {
  const [rotation, setRotation] = useState(0)
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect((): void => {
    if (!canvas.current) {
      return
    }

    const ctx = canvas.current.getContext('2d')
    if (!ctx) {
      return
    }

    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.beginPath()
    ctx.arc(100, 100, 100, 0, 2 * Math.PI)
    ctx.stroke()

    // Get totan diameter of circle
    // const diameter = 2 * 100;
    // Get total circumference of circle
    const circumference = 2 * Math.PI * 100
    const stepPerItem = circumference / items.length
    // Get total length of arc
    // const arcLength = (circumference * rotation) / 360;

    const distanceTravelledRoundCircumference = 0
    while (distanceTravelledRoundCircumference < circumference) {
      // Draw line from 0,0 to 0,1001
      ctx.moveTo(0, 0)
      ctx.beginPath()
      ctx.lineTo(0, 1001)
      // Rotate 1 degree
      // ctx.rotate((1 * Math.PI) / 180);
      // Increment distanceTravelledRoundCircumference
      distanceTravelledRoundCircumference
      ctx.stroke()

      // tempNumber += 1;
    }

    return
  }, [])

  const onSpin = () => {
    if (!canvas.current) {
      return null
    }

    const ctx = canvas.current.getContext('2d')
    if (!ctx) {
      return null
    }

    ctx.beginPath()
    ctx.arc(0, 0, 100, 0, 2 * Math.PI)
    ctx.stroke()
    // ctx.clearRect(0, 0, 500, 500);
    // ctx.save();
    // ctx.translate(250, 250);
    // ctx.rotate((rotation * Math.PI) / 180);
    // ctx.fillStyle = "red";
    // ctx.fillRect(-50, -50, 100, 100);
    // ctx.restore();
    // setRotation(rotation + 1);
  }

  // const onPlus = () => {
  //   setCounter((prev) => prev + 1);
  // };

  return (
    <div className='flex flex-col w-96 h-96'>
      <div className='w-full h-full'>
        <canvas
          className='w-full h-full'
          ref={canvas}
          // onMouseDown={props.viewOnly ? undefined : onDown}
          // onTouchStart={props.viewOnly ? undefined : onDown}
          // onMouseUp={props.viewOnly ? undefined : onUp}
          // onTouchEnd={props.viewOnly ? undefined : onUp}
          // onMouseLeave={props.viewOnly ? undefined : onUp}
          // onMouseMove={props.viewOnly ? undefined : onMove}
          // onTouchMove={props.viewOnly ? undefined : onMove}
          width={250}
          height={250}
        />
      </div>

      <div className='w-full flex'>
        <button
          // Add tailwind classes
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
          onClick={onSpin}
        >
          Spin
        </button>
      </div>
    </div>
  )
}

export default MyCounter
