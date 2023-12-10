const PROXY_CONFIG = [
{
    context: ['/api'],
    // target: 'http://localhost:8080/',
    target: 'https://nkmarina-backend.onrender.com',
    secure: false,
    logLevel: 'debug'
}
];
module.exports = PROXY_CONFIG;
