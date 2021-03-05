import { useEffect, useState } from 'react'

// component
import Cake from './Cake'
import Firework from './Firework'

export default function CakeContainer(props) {
  const [shouldPopPopper, setShouldPopPopper] = useState(false)
  const [isBdayMsgVisible, setIsBdayMsgVisible] = useState(false)
  const [isInstructionVisible, setIsInstructionVisible] = useState(true)

  useEffect(() => {
    if (isBdayMsgVisible) {
      setTimeout(() => {
        props.setIsScrollMsgVisible(true)
      }, 2500)
    }
  }, [isBdayMsgVisible])

  return (
    <div
      className='position-relative'
      style={{height: '100vh'}}
    >
      <Firework
        isBdayMsgVisible={isBdayMsgVisible}
        isScrollMsgVisible={props.isScrollMsgVisible}
        setIsBdayMsgVisible={setIsBdayMsgVisible}
        shouldPopPopper={shouldPopPopper}
      />
      <Cake
        isInstructionVisible={isInstructionVisible}
        setIsInstructionVisible={setIsInstructionVisible}
        setShouldPopPopper={setShouldPopPopper}
      />
    </div>
  )
}