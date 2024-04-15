/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    serverRuntimeConfig: {
       // Will only be available on the server side
       mySecret: 'secret',
       secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
       // Will be available on both server and client
       staticFolder: '/static',
    },
    // Custom server configuration
    server: {
       host: '0.0.0.0', // Listen on all IP addresses
    },
   };
   