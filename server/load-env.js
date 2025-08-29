const env = process.env.NODE_ENV || 'development';
const path = `.env.${env}`;

try {
  require('dotenv').config({ path }); // load .env.<NODE_ENV>
  require('dotenv').config(); // then load .env for defaults
  console.log(`Loaded environment files: ${path} (NODE_ENV=${env})`);
} catch (err) {
  if (err && err.code === 'MODULE_NOT_FOUND') {
    console.warn('dotenv not installed — ensure environment variables are set by the host.');
  } else {
    console.error('Error loading .env files:', err);
  }
}