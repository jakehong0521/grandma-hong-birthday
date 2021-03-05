// component
import Card from './Card'
import LetterPopup from './LetterPopup'

// const
import { cardDataArr } from 'const.js'
import { searchParamKeys } from 'const.js'

// style
import styles from './CardsContainer.module.css'

// util
import { useHistory } from 'react-router-dom'
import useSearchParams from 'hooks/useSearchParams'

export default function CardsContainer(props) {
  const history = useHistory()
  const searchParams = useSearchParams()
  const writerOnUrl = searchParams.get(searchParamKeys.writer)

  function openLetter(writer) {
    searchParams.set(searchParamKeys.writer, writer)

    history.push({
      pathname: history.location.pathname,
      search: `?${searchParams.toString()}`
    })
  }

  function closeModal() {
    history.push(history.location.pathname)
  }

  const letterContentJSX = cardDataArr.find(card => card.writer === writerOnUrl)?.letterContentJSX

  return (
    <div className={styles.CardsContainer}>
      <LetterPopup
        isOpen={Boolean(writerOnUrl)}
        letterContentJSX={letterContentJSX}
        onHide={closeModal}
      />

      <div className='bg-white border mb-5 p-3 shadow' style={{fontSize: '28px'}}>
        카드를 눌러주세요
      </div>

      {cardDataArr.map((card, index) => (
        <div className='my-5' key={card.writer}>
          <Card {...card} index={index} onClick={() => openLetter(card.writer)} />
        </div>
      ))}
    </div>
  )
}
