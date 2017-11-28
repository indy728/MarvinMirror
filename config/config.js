var config = {
    address: "localhost",
    // port: "8080",
    // ipWhiteList:,
    language: "en",

    ftOauth: {
        client_id: "5eba98551f2e3d718f856018b8548cdf7d17a05b27854a707ed0c4eb7691e4f2",
        client_secret: "636dd8167db165d791b98cd0770544bc80a083e36adc6e2fd0f100c6e3056b69",
        redirectUri: "http://localhost",
        authorizationURL: "https://api.intra.42.fr/oauth/authorize",
        tokenURL: "https://api.intra.42.fr/oauth/token"
    },

    currentWeather: {
        location: "Fremont",
        units: "imperial",
        appKey: "045abf5acd3743fea70364c802347e30"
    },

    weatherForecast: {
        location: "Fremont",
        units: "imperial",
        cnt: "5",
        appKey: "d81b8fed59e1a999d11ebc31c9f92e32"
    }
}
module.exports = config;
