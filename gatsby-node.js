exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(gltf|glb)$/,
          use: [
            {
              loader: 'gltf-webpack-loader',
              options: {
                outputPath: 'static/3d/',
                publicPath: '/static/3d/',
              },
            },
          ],
        },
        {
          test: /\.bin$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'static/3d/',
                publicPath: '/static/3d/',
              },
            },
          ],
        },
      ],
    },
  });
};