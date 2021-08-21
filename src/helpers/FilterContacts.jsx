function filterContacts(contacts, value) {
  return contacts.filter(obj => {
    return obj.name.toLowerCase().includes(value.toLowerCase().trim());
  });
}
export default filterContacts;
