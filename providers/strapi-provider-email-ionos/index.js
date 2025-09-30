const nodemailer = require("nodemailer");

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const transporter = nodemailer.createTransport({
      host: providerOptions.host,
      port: providerOptions.port,
      secure: providerOptions.secure || false,
      auth: providerOptions.auth,
    });

    return {
      send: async (options) => {
        const mailOptions = {
          from: settings.defaultFrom,
          to: options.to,
          subject: options.subject,
          text: options.text,
          html: options.html,
        };
        return transporter.sendMail(mailOptions);
      },
    };
  },
};
