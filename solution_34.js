export default function groupById(arr) {
  // Χρησιμοποιούμε τη μέθοδο reduce για να δημιουργήσουμε ένα αντικείμενο με τα id ως κλειδιά
  const groupedById = arr.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  // Επιστρέφουμε το αντικείμενο που περιλαμβάνει τα αντικείμενα ταξινομημένα με βάση τα id
  return groupedById;
}
