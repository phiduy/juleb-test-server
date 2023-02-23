export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  dbUrl: process.env.DATABASE_URL,
});
