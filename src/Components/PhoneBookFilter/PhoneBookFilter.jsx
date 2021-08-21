import { useSelector, useDispatch } from 'react-redux'
import { handleFilter } from '../../redux/filterReducer'
import { Input, Label, Para } from './PhoneBookFilter.styled'
import { getFilter } from '../../redux/contacts-selector'

function PhoneBookFilter() {
  const dispatch = useDispatch()

  const value = useSelector(getFilter)

  const change = (event) => {
    const value = event.target.value

    dispatch(handleFilter(value))
  }

  return (
    <div>
      <Label>
        <Para>Filter contacts by name: </Para>
        <Input
          name="filter"
          onChange={change}
          type="text"
          value={value}
          placeholder="Name"
        />
      </Label>
    </div>
  )
}

export default PhoneBookFilter
