export default function getNames(users) {
  // Χρησιμοποιούμε τη μέθοδο map για να δημιουργήσουμε έναν νέο πίνακα
  // που περιέχει μόνο τα ονόματα (name) των αντικειμένων
  const names = users.map(user => user.name);

  // Επιστρέφουμε τον νέο πίνακα με τα ονόματα
  return names;
}
