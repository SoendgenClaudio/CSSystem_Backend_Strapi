module.exports = {
  async submit(ctx) {
    try {
      const { name, email, subject, message } = ctx.request.body;

      await strapi.service('api::contact.contact').sendContactRequest({
        name,
        email,
        subject,
        message,
      });

      ctx.send({ success: true });
    } catch (err) {
      ctx.send({ success: false, error: err.message }, 500);
    }
  },
};
