import dotenv from 'dotenv';

dotenv.config();

const config = {
    APP: {
        NAME: process.env.APP_NAME || 'DefaultAppName',
        PORT: process.env.APP_PORT || 3000,
    },
    GOOGLE: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'default_google_client_id',
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || 'default_google_client_secret',
    },
    RAZORPAY: {
        KEY_ID: process.env.RAZORPAY_KEY_ID || 'default_razorpay_key_id',
        KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || 'default_razorpay_key_secret',
    },
    DATABASE: {
        HOST: process.env.DB_HOST || 'localhost',
        USER: process.env.DB_USER || 'default_user',
        PASSWORD: process.env.DB_PASSWORD || 'default_password',
        NAME: process.env.DB_NAME || 'default_db_name',
    },
    GEMINI: {
        API_KEY: process.env.GEMINI_API_KEY || 'default_gemini_api_key',
        API_SECRET: process.env.GEMINI_API_SECRET || 'default_gemini_api_secret',
    },
    DONATION: {
        ENABLED: process.env.DONATION_ENABLED || false,
        AMOUNT: process.env.DONATION_AMOUNT || 0,
    }
};

export default config;