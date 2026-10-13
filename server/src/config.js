// Single place that reads environment variables, so the rest of the code
// never touches process.env directly (easier to test and to change).
export const config = {
  port: Number(process.env.PORT) || 4000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  env: process.env.NODE_ENV || 'development',
};
