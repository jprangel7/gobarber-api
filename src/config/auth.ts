export default {
    jwt: {
        secret: process.env.APP_SECRET, // md5 hash generator
        expiresIn: '1d',
    },
};
