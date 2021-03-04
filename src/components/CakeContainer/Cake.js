import { useEffect, useState } from 'react'

// component
import { Fireworks } from 'fireworks-js'

// style
import styles from './Cake.module.css'

export default function Cake(props) {
  const [candlesLitArr, setCandlesLitArr] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ])
  const [shouldPopPopper, setShouldPopPopper] = useState(false)
  const [isBdayMsgVisible, setIsBdayMsgVisible] = useState(false)

  useEffect(() => {
    if (shouldPopPopper) {
      const container = document.getElementById('firework-container')
      const fireworks = new Fireworks({
        target: container,
        hue: 60,
        startDelay: 10,
        minDelay: 40,
        maxDelay: 60,
        speed: 0.5,
        acceleration: 1.1,
        friction: 0.9,
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
  }, [shouldPopPopper])

  function turnOffFlame(index) {
    const newArr = [...candlesLitArr]
    newArr[index] = false
    setCandlesLitArr(newArr)

    if (!newArr.filter(isLit => isLit).length) {
      setShouldPopPopper(true)
    }
  }

  const brightness = 100 - candlesLitArr.filter(isLit => !isLit).length * 6

  return (
    <div className='h-100 position-relative'>
      <div
        className='h-100 position-absolute w-100'
        id='firework-container'
        style={{left: '0', top: '0', zIndex: `${shouldPopPopper ? 1 : 0}`}}
      >
        {isBdayMsgVisible && (
          <div
            className='position-absolute'
            style={{
              bottom: '20%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            생일축하드려요!
          </div>
        )}
      </div>
      <div
        className='align-items-center d-flex h-100'
        style={{
          filter: `brightness(${brightness}%)`,
          background: 'pink'
        }}
      >
        <div className={styles.BoxCanvas}>
          <div className={styles.Plate}/>
          <div className={styles.CakeSide}/>
          <div className={styles.Drips}>
            {[...Array(8)].map((_, index) => (
              <div className={styles.Drip} key={index}/>
            ))}
          </div>
          <div className={styles.CakeTop}/>
          {candlesLitArr.map((isCandleLit, index) => (
            <div className={styles.Candle} key={index} data-index={index + 1}>
              <div
                className={`${styles.Flame} ${isCandleLit ? styles.on : styles.off}`}
                onClick={() => turnOffFlame(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
