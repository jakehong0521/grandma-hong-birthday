import { useState } from 'react'

// style
import styles from './Cake.module.css'
import fruitStyles from './Fruit.module.css'

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

  function turnOffFlame(index) {
    if (props.isInstructionVisible) {
      props.setIsInstructionVisible(false)
    }

    const newArr = [...candlesLitArr]
    newArr[index] = false
    setCandlesLitArr(newArr)

    if (!newArr.filter(isLit => isLit).length) {
      props.setShouldPopPopper(true)
    }
  }

  const brightness = 100 - candlesLitArr.filter(isLit => !isLit).length * 8

  return (
    <div className='h-100 position-relative'>
      {props.isInstructionVisible && (
        <div
          className='bg-white p-3 position-absolute rounded shadow'
          style={{
            fontSize: '28px',
            maxWidth: '80vw',
            left: '50%',
            top: '10%',
            transform: 'translateX(-50%)',
            width: 'fit-content',
            zIndex: '1'
          }}
        >
          촛불을 눌러 꺼주세요
        </div>
      )}
      <div
        className='align-items-center d-flex h-100'
        style={{
          background: 'linear-gradient(to bottom, #dae2f8, #d6a4a4)',
          filter: `brightness(${brightness}%)`,
          transition: 'filter 300ms'
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
          <div className={styles.CakeTop}>
            <div
              className={fruitStyles.Strawberry}
              style={{left: '47%', top: '50%'}}
            />
            <div
              className={fruitStyles.Blueberry}
              style={{left: '61%', top: '50%'}}
            />
            <div
              className={fruitStyles.Blueberry}
              style={{left: '56%', top: '58%'}}
            />
            {candlesLitArr.map((isCandleLit, index) => (
              <div
                className={styles.Candle}
                data-index={index + 1}
                key={index}
                onClick={() => turnOffFlame(index)}
              >
                <div
                  className={`${styles.Flame} ${isCandleLit ? styles.on : styles.off}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
