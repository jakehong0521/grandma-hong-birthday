// component
import Modal from 'react-bootstrap/Modal'

export default function LetterPopup(props) {
  /*
    props: {
      isOpen: <boolean>
      letterContentJSX: <JSX/>
      onHide: fn()
    }
  */
  return (
    <Modal
      centered
      onHide={props.onHide}
      scrollable
      show={props.isOpen}
    >
      <Modal.Header className='border-0' closeButton/>
      <Modal.Body style={{fontSize: '28px', lineHeight: '1.7'}}>
        {props.letterContentJSX}
      </Modal.Body>
    </Modal>
  )
}
