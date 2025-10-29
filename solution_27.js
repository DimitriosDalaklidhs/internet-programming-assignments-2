export default function copySorted(arr) {
  // Δημιουργούμε έναν νέο πίνακα που περιέχει τα ίδια στοιχεία με τον αρχικό
  // και τον ταξινομούμε αλφαβητικά
  const sortedArr = [...arr].sort();

  // Επιστρέφουμε το νέο (ταξινομημένο) πίνακα
  return sortedArr;
}
