import { useHistory } from 'react-router-dom'
import CardStudent from '../components/CardStudent'

const Card = () => {
  const history = useHistory()
  const raw = localStorage.getItem('data')

  const dataCard = typeof raw === 'string' ? JSON.parse(raw) : false

  const handleClick = () => {
    history.push('/editcard')
  }

  const render = () => {
    if (dataCard) {
      return (
        <CardStudent
          title={'Карточка студента'}
          subtitle={''}
          buttontitle={'Редактировать'}
          dataCard={dataCard}
          handleClick={handleClick}
        ></CardStudent>
      )
    }

    return (
      <CardStudent
        title={'Карточка студента'}
        subtitle={'Нет данных'}
        buttontitle={'Добавить'}
        handleClick={handleClick}
      ></CardStudent>
    )
  }

  return render()
}

export default Card
