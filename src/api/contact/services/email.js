const contactTemplate = require("../templates/contact-request");
const noReplyTemplate = require("../templates/no-reply");

module.exports = {
  async sendContactRequest({ name, email, subject, message }) {
    // 1. Mail an dich
    await strapi.plugins['email'].services.email.send({
      to: "info@cssystem.de",
      from: `"${name}" <noreply@cssystem.de>`,
      replyTo: email,
      ...contactTemplate({ name, email, subject, message }),
    });

    // 2. No-reply Mail an den Kunden
    await strapi.plugins['email'].services.email.send({
      to: email,
      from: "noreply@cssystem.de",
      ...noReplyTemplate({ name }),
    });
  },
};