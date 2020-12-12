const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@public': path.resolve(__dirname, 'public/'),
        '@images': path.resolve(__dirname, 'src/images/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@redux': path.resolve(__dirname, 'src/redux/'),
        '@util': path.resolve(__dirname, 'src/util/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
      },
    },
  });
};
