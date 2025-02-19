// next.config.js
const nextConfig = {
  webpack(config: {
    module: {
      rules: {
        test: RegExp;
        use: {
          loader: string;
          options: { publicPath: string; outputPath: string; name: string };
        };
      }[];
    };
  }) {
    // Handle pdf files with file-loader
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/pdf/",
          outputPath: "static/pdf/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
