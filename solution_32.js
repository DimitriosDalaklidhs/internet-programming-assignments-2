export default function getAverageAge(users) {
  // Υπολογισμός του συνολικού αθροίσματος των ηλικιών
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);

  // Υπολογισμός του μέσου όρου
  const averageAge = totalAge / users.length;

  // Επιστροφή του μέσου όρου
  return averageAge;
}
