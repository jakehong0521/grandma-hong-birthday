// component
import Card from './Card'
import LetterPopup from './LetterPopup'

// const
import { cardDataArr } from 'const.js'
import { searchParamKeys } from 'const.js'

// style
import styles from './CardsContainer.module.css'

// util
import { useHistory, useLocation } from 'react-router-dom'

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

      {cardDataArr.map(card => (
        <div className='my-5' key={card.fromText}>
          <Card {...card} onClick={() => openLetter(card.writer)} />
        </div>
      ))}
    </div>
  )
}

function useSearchParams() {
  return new URLSearchParams(useLocation().search)
}
