const CLIENT_ID_G = process.env.REACT_APP_CLIENT_ID_G;
const REDIRECT_URI_G = process.env.REACT_APP_REDIRECT_URI_G;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID_G}&redirect_uri=${REDIRECT_URI_G}&response_type=code&scope=email profile openid&access_type=offline`;
