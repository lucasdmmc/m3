import CopyWebpackPlugin from 'copy-webpack-plugin';


module.exports = {
  // ... outras configurações do Webpack ...
  plugins: [
    // ... outros plugins ...
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/scene.gltf', to: '/scene.gltf' },
      ],
    }),
  ],
};