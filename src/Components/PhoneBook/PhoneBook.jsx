import { BsTrashFill } from 'react-icons/bs'
import { Frame } from './PhoneBook.styled'
import { useDeleteContactMutation } from '../../redux/phoneBook-api'

const PhoneBook = ({ name, number, email, id }) => {
  const [deleteContact] = useDeleteContactMutation()

  return (
    <Frame>
      <p>{name}</p>
      <p>{number}</p>
      <p>{email}</p>
      <span onClick={() => deleteContact(id)}>
        <BsTrashFill />
      </span>
    </Frame>
  )
}
export default PhoneBook
