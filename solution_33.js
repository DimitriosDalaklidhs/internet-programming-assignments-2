export default function unique(arr) {
  // Χρησιμοποιούμε τη μέθοδο Set για να δημιουργήσουμε ένα σύνολο με μοναδικά στοιχεία
  const uniqueSet = new Set(arr);

  // Χρησιμοποιούμε τη μέθοδο Array.from για να μετατρέψουμε το Set σε πίνακα
  const uniqueArr = Array.from(uniqueSet);

  // Επιστρέφουμε τον πίνακα χωρίς διπλότυπα
  return uniqueArr;
}
