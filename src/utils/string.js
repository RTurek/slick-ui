export function getFirstLetter(name) {
  if (typeof name === 'string' && name.length > 0) {
    return name[0];
  }
  return '';
}

export function hasFullName(firstName, lastName) {
  return ((firstName && (typeof firstName === 'string') && firstName.length > 0
    && lastName && (typeof lastName === 'string') && lastName.length > 0)
    === true);
}
