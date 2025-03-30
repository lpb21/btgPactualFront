

// Cargar variables de entorno desde .env


const Config = {
  //port: process.env.PORT,

  //*Variables MongoDB
  api_URL: import.meta.env.VITE_API_URL,

  //cors_origin: process.env.CORS_ORIGIN,

  //email_user: process.env.EMAIL_USER,
  //email_pass: process.env.EMAIL_PASS,
  //email_pass_app: process.env.EMAIL_PASS_APP,
  //twilio_sid: process.env.TWILIO_SID,
  //twilio_auth_token: process.env.TWILIO_AUTH_TOKEN,
  //twilio_phone: process.env.TWILIO_PHONE
};

export default Config;