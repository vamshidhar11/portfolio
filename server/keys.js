// server/keys.js
// Read Mailgun credentials from environment variables.
// This file throws a clear error at require-time if required credentials are missing.
// Do NOT commit real secrets. For local development create a `.env` (see .env.example) and add it to .gitignore.

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || '';
const MAILGUN_PUBLIC_KEY = process.env.MAILGUN_PUBLIC_KEY || '';
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || '';

if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
  throw new Error(
    'Missing Mailgun credentials. Please set MAILGUN_API_KEY and MAILGUN_DOMAIN in the environment ' +
    '(or create a local .env file from .env.example). Example: export MAILGUN_API_KEY="key" && export MAILGUN_DOMAIN="mg.example.com"'
  );
}

module.exports = {
  key: MAILGUN_API_KEY,
  public_key: MAILGUN_PUBLIC_KEY,
  domain: MAILGUN_DOMAIN
};