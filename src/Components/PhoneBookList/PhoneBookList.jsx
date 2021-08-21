import { useSelector } from 'react-redux'

import Spinner from '../Loader/Loader'
import PhoneBookForm from '../PhoneBookForm/PhoneBookForm'
import PhoneBook from '../PhoneBook/PhoneBook'
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter'
import filterContacts from '../../helpers/FilterContacts'
import { Container, Title } from './PhoneBookList.styled'
import { useGetContactsQuery } from '../../redux/phoneBook-api'
import { getFilter } from '../../redux/contacts-selector'

const PhoneBookList = () => {
  const filter = useSelector(getFilter)

  const { data, error, isFetching } = useGetContactsQuery()

  return (
    <Container>
      <PhoneBookForm />
      <Title>CONTACTS</Title>
      {data && <PhoneBookFilter />}
      <ul>
        {error ? (
          <>Oh no, there was an error</>
        ) : isFetching ? (
          <Spinner />
        ) : data ? (
          filterContacts(data, filter).map((contact) => (
            <li key={contact.id}>
              <PhoneBook {...contact} />
            </li>
          ))
        ) : (
          <li>No contacts</li>
        )}
      </ul>
    </Container>
  )
}
export default PhoneBookList
