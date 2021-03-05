import { useEffect, useRef } from 'react'

// style
import styles from './Firework.module.css'

// util
import { Fireworks } from 'fireworks-js'

export default function Firework(props) {
  const fireworkContainerRef = useRef(null)
  const { setIsBdayMsgVisible, shouldPopPopper } = props

  useEffect(() => {
    if (shouldPopPopper) {
      const container = fireworkContainerRef.current
      const fireworks = new Fireworks({
        target: container,
        hue: 200,
        startDelay: 10,
        minDelay: 10,
        maxDelay: 15,
        speed: 1,
        acceleration: 1.1,
        friction: 0.95,
        gravity: 1,
        particles: 50,
        trace: 2,
        explosion: 3,
        boundaries: {
          top: container.clientHeight * 1 / 10,
          bottom: container.clientHeight * 9 / 10,
          left: container.clientWidth * 1 / 10,
          right: container.clientWidth * 9 / 10
        },
        sound: {
          enable: false
        }
      })

      fireworks.start()

      setTimeout(() => {
        setIsBdayMsgVisible(true)
      }, 500)
    }
  }, [setIsBdayMsgVisible, shouldPopPopper])

  return (
    <div
      className='h-100 position-absolute w-100'
      id='firework-container'
      ref={fireworkContainerRef}
      style={{
        left: '0',
        top: '0',
        zIndex: `${props.shouldPopPopper ? 1 : 0}`
      }}
    >
      <div className={`${styles.BdayMsg} ${props.isBdayMsgVisible && styles.visible}`}>
        HAPPY<br/>BIRTHDAY<br/>&#10084;
      </div>
      <div className={`${styles.ScrollMsg} ${props.isScrollMsgVisible && styles.visible}`}>
        밑으로 스크롤 해주세요
      </div>
    </div>
  )
}