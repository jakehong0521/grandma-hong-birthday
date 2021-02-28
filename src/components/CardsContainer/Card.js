// style
import styles from './Card.module.css'

export default function Card(props) {
  /*
    props: {
      fromText: <string>,
      envelopeColor: <string>,
      initial: <string>
      letterTextJSX: <string>,
      onClick: fn(),
      sealColor: <string>
      writer: <string>
    }
  */
  return (
    <div
      className={styles.Envelope}
      onClick={props.onClick}
      style={{backgroundColor: props.envelopeColor}}
    >
      <div className={styles.Seal} style={{background: props.sealColor}}>
        <div className={styles.Embossed}/>
        <div className={styles.Initial} style={{color: props.sealColor}}>
          {props.initial}
        </div>
      </div>
    </div>
  )
}
