module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact/submit',
      handler: 'contact.submit',
      config: {
        auth: false, // kein Login nötig
      },
    },
  ],
};
