import PropTypes from 'prop-types'
import getAge from '../utils/getAge'
import renderPhrase from '../utils/renderPhrase'

const CardStudent = ({
  title,
  subtitle,
  buttontitle,
  dataCard,
  handleClick,
}) => {
  const declination = ['год', 'года', 'лет']
  const fieldTraslate = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    birthday: 'Год рождения',
    portfolio: 'Портфолио',
  }

  return (
    <div className='w-3/5 h-auto p-4 shadow card dark:bg-transparent dark:border-green-400'>
      <h1 className='dark:text-gray-300'>{title}</h1>
      {subtitle && (
        <span className='flex-1 text-lg dark:text-gray-300'>{subtitle}</span>
      )}
      {dataCard &&
        Object.keys(dataCard).map((item, index) => (
          <div key={index}>
            <span className='font-semibold dark:text-green-400'>{`${fieldTraslate[item]}: `}</span>
            {item === 'portfolio' && (
              <a href={dataCard[item]} target='_blank' rel='noreferrer'>
                {dataCard[item]}
              </a>
            )}
            {item !== 'portfolio' && (
              <span className='text-lg dark:text-gray-300'>
                {dataCard[item]}
              </span>
            )}

            {item === 'birthday' && (
              <span className='text-lg dark:text-gray-300'>{` (${getAge(
                dataCard[item]
              )} ${renderPhrase(dataCard[item], declination)})`}</span>
            )}
          </div>
        ))}
      <div className='flex justify-end pt-10'>
        <button className='btn btn-primary min-w-[140px]' onClick={handleClick}>
          {buttontitle}
        </button>
      </div>
    </div>
  )
}

CardStudent.defaultProps = { dataCard: null }

CardStudent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttontitle: PropTypes.string,
  dataCard: PropTypes.object,
  handleClick: PropTypes.func,
}

export default CardStudent
