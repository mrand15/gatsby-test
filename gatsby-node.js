const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCategory {
          edges {
            node {
              id
            }
          }
        }
        allContentfulBrand {
          edges {
            node {
              id
            }
          }
        }
        allContentfulProduct {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulCategory.edges.map(({ node }) => {
        createPage({
          path: `category/${node.id}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            cateogryId: node.id,
          },
        })
      });
      result.data.allContentfulBrand.edges.map(({ node }) => {
        createPage({
          path: `brand/${node.id}`,
          component: path.resolve(`./src/templates/brand.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            brandId: node.id,
          },
        })
      });
      result.data.allContentfulProduct.edges.map(({ node }) => {
        createPage({
          path: `product/${node.id}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            productId: node.id,
          },
        })
      });
      resolve();
    })
  })
}
