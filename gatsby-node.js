const path = require('path');
const _ = require('lodash');
const { slugify } = require('./src/util/utilityFuctions.js');

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const templates = {
    singlePost: path.resolve(`./src/templates/post.js`),
  };

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: '/blog/' + slug,
        component: templates.singlePost,
        context: {
          slug,
        },
      });
    });
  });
};
