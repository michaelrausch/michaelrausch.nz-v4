const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config;
    },
    redirects: async () => {
        return [
            {
                source: '/mail',
                destination: 'https://outlook.office365.com/mail/login.html',
                permanent: true
            }
        ]
    }
};

module.exports = nextConfig;
