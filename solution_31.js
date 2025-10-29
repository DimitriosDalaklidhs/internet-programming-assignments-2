export default function sortByAge(users) {
  // Χρησιμοποιούμε τη μέθοδο sort για να ταξινομήσουμε τον πίνακα με βάση την ηλικία
  users.sort((a, b) => a.age - b.age);
}
