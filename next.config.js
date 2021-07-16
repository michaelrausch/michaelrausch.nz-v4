const nextConfig = {
    target: "serverless",
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        config.externals = {
            ...config.externals,
            canvas: 'canvas',
            critters: 'critters'
          };
        return config;
    },
};

module.exports = nextConfig;
