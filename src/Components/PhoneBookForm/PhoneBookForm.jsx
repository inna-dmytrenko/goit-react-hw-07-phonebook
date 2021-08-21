import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import './PhoneBookForm.styled.js'
import { Form, Input, Label, Button, App } from './PhoneBookForm.styled'
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/phoneBook-api'
export default function PhoneBookForm() {
  const formInitialState = {
    name: '',
    number: '',
    email: '',
  }
  const { data } = useGetContactsQuery()

  const [addContact] = useAddContactMutation()

  const [form, setForm] = useState(formInitialState)

  const inputHandler = (e) => {
    const name = e.target.name

    const value = e.target.value
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      data.some((el) => el.name === name) ||
      data.some((el) => el.number === number) ||
      data.some((el) => el.email === email)
    ) {
      setForm(formInitialState)
      return toast(`${name} is already in contacts`)
    }
    addContact({ name, number, email })

    setForm(formInitialState)
  }
  const { name, number, email } = form
  return (
    <App>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="">Name</Label>
          <Input
            required
            placeholder="Search name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={inputHandler}
          />
        </div>

        <div>
          <Label htmlFor="">Number</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Search number"
            onChange={inputHandler}
          />
        </div>

        <div>
          <Label htmlFor="">Email</Label>
          <Input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <Button type="submit">Add contact</Button>
      </Form>
      <ToastContainer />
    </App>
  )
}
