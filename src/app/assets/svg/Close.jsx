import PropTypes from 'prop-types'

function Close(props) {
  const title = props.title || 'Закрыть'

  return (
    <svg
      height='24'
      width='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g fill='currentColor'>
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      </g>
    </svg>
  )
}

Close.propTypes = {
  props: PropTypes.object,
}

export default Close
