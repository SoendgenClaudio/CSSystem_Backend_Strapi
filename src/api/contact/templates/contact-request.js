module.exports = ({ name, email, subject, message }) => {
  return {
    subject: `Neue Kontaktanfrage: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Nachricht:
${message}
    `,
    html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Nachricht:</strong></p>
<p>${message}</p>
    `,
  };
};
