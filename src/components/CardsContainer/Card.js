// style
import styles from './Card.module.css'

export default function Card(props) {
  /*
    props: {
      index: <int>,
      letterTextJSX: <string>,
      onClick: fn(),
      writer: <string>
    }
  */
  const imgSrc = require(`../../static/CardsContainer/card${props.index}.png`).default

  return (
    <div
      className='position-relative'
      onClick={props.onClick}
      style={{width: '60vmin', zIndex: '1'}}
    >
      <div className={styles.Back}/>
      <img alt={props.writer} className='w-100 border shadow' src={imgSrc}/>
    </div>
  )
}
