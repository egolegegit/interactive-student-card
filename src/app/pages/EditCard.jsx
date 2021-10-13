import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../components/TextField'
import validator from '../utils/validator'
import Modal from '../components/Modal'

const EditCard = () => {
  const initialDataCard = {
    firstName: '',
    lastName: '',
    birthday: '',
    portfolio: '',
  }

  const [data, setData] = useState(initialDataCard)
  const [errors, setErrors] = useState({})
  const [isDataCard, setisDataCard] = useState()
  const [modal, setModal] = useState(false)
  const ToggleModal = () => setModal(!modal)

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    firstName: {
      isRequired: { message: '* Поле имя обязательно для заполнения' },
    },
    lastName: {
      isRequired: { message: '* Поле Фамилия обязательно для заполнения' },
    },
    birthday: {
      isRequired: { message: '* Поле Год рождения обязательно для заполнения' },
      isLength: {
        message: '* Поле Год рождения не корректно',
        value: 4,
      },
      isContainDigit: {
        message: '* Поле Год рождения не корректно',
      },
      isYears: {
        message: '* Возраст студента не старше 65 / не младше 16',
      },
    },
    portfolio: {
      isRequired: { message: '* Поле Портфолио обязательно для заполнения' },
      isUrl: { message: '* Поле Портфолио не корректно' },
    },
  }

  useEffect(() => {
    const raw = localStorage.getItem('data')

    const dataCard = typeof raw === 'string' ? JSON.parse(raw) : initialDataCard

    setData(dataCard)
    setisDataCard(typeof raw === 'string' ? true : false)
  }, [])

  useEffect(() => {}, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return

    localStorage.setItem('data', JSON.stringify(data))
    setisDataCard(true)
    ToggleModal()
  }

  return (
    <>
      <div className='w-3/5 h-auto p-4 card dark:bg-transparent dark:border-green-400'>
        <h1 className='dark:text-gray-300'>Карточка студента</h1>
        <>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center w-full text-center'
          >
            <TextField
              label='firstName'
              name='firstName'
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextField
              label='lastName'
              name='lastName'
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextField
              label='birthday'
              name='birthday'
              value={data.birthday}
              onChange={handleChange}
              error={errors.birthday}
            />
            <TextField
              label='portfolio'
              name='portfolio'
              type={'url'}
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />

            <div className='flex w-full mt-12'>
              {isDataCard && (
                <Link className='btn btn-secondary me-4' to='/'>
                  Назад
                </Link>
              )}

              <button
                disabled={!isValid}
                className='btn btn-primary min-w-[140px]'
              >
                Создать
              </button>
            </div>
          </form>
        </>
      </div>
      <Modal
        show={modal}
        title='Карточка обновлена!'
        close={ToggleModal}
      ></Modal>
    </>
  )
}

export default EditCard
