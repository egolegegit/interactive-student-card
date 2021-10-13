import PropTypes from 'prop-types'

const TextField = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  error,
}) => {

  const getInputClasses = () => {
    return (
      'w-full h-8 px-2 py-3 mt-1 border-gray-300 dark:border-green-400 rounded border-1 dark:bg-transparent dark:text-white dark:focus:border-green-400 outline-none dark:bd-gray-700 dark:focus:bd-gray-700 ' +
      (error
        ? 'border-red-400 focus:border-red-500 is-invalid'
        : 'border-gray-400')
    )
  }

  return (
    <div className='flex flex-col w-full'>
      <label
        htmlFor={name}
        className='w-full mt-3 text-start dark:text-gray-300'
      >
        {label}
      </label>

      <div className='input-group'>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={`${placeholder || name}`}
          onChange={onChange}
          className={getInputClasses()}
        />
      </div>
      <span className='h-4 pt-1 text-red-400 text-start dark:text-red-300'>
        {error}
      </span>
    </div>
  )
}

TextField.defaultProps = { type: 'text' }

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextField
