module.exports = {
    apps: [
        {
            name: "SYSTEM-COMPLAIN:5059",
            script: "serve",
            env: {
                PM2_SERVE_PATH: "./dist",
                PM2_SERVE_PORT: 5059,
                PM2_SERVE_SPA: "true",
                PM2_SERVE_HOMEPAGE: "/index.html"
            }
        }
    ]
};
