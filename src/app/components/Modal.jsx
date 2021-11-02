import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../styles/close.scss'

import Close from '../assets/svg/Close'
const Modal = ({ show, close, title }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className='modalContainer' onClick={() => close()}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <header className='modal_header'>
              <button className='close' onClick={() => close()}>
                <Close />
              </button>
            </header>
            <main className='modal_content'> {title} </main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.object,
}

export default Modal
