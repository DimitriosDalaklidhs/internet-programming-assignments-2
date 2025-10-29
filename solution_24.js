export default function filterRange(arr, a, b) {
  // Φιλτράρουμε τον πίνακα για να πάρουμε μόνο τα στοιχεία που πληρούν τα κριτήρια
  let filteredArr = arr.filter(item => item >= a && item <= b);
  
  // Επιστρέφουμε τον νέο πίνακα χωρίς να τροποποιούμε τον αρχικό
  return filteredArr;
}
