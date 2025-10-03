module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-ionos", // <-- STRING, nicht require
      providerOptions: {
        host: "smtp.ionos.de",
        port: 587,
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        secure: false, // StartTLS
      },
      settings: {
        defaultFrom: "noreply@cssystem.de",
        defaultReplyTo: "info@cssystem.de",
      },
    },
  },
});