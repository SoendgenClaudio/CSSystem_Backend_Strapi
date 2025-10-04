module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  proxy: true,
  url: env("PUBLIC_URL", "https://www.cssystem.de"),
  app: {
    keys: env.array("APP_KEYS", ["key1", "key2"]),
  },
});
