module.exports = function (from, email, message) {
  return `
      <h2>Повідомлення від  <strong>${from}</strong></h2>
      <h2>Контактна поштова скринька <strong>${email}</strong></h2>
      <h5>${from} залишив повідомлення</h5>
      <section>
        <p>${message}</p>
      </section>
  `;
};