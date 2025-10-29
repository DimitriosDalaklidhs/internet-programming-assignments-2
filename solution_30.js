export default function fullNames(arr) {
  // Χρησιμοποιούμε τη μέθοδο map για να δημιουργήσουμε έναν νέο πίνακα
  // με αντικείμενα που έχουν το πεδίο fullName
  const mappedArr = arr.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }));

  // Επιστρέφουμε τον νέο πίνακα
  return mappedArr;
}
