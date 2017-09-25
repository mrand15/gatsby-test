import React from 'react';
import  { navigateTo } from 'gatsby-link';

import Card from '../components/card';

export default function ProductsPage ({data}) {

  const { allContentfulProduct } = data;

  return (
    <div id="categoriesPage">
      <h1>Products</h1>
      { allContentfulProduct.edges.map(({node}) => {

        const icon = node.image[0].resize;
        return (
          <Card 
            key={node.id}
            link={`/product/${node.id}`}
            id={node.id}
            title={node.productName.productName}
            description={`$${node.price}.00`}
            imageSrc={icon.src}
          />
        )
      } )}
    </div>
  );
}

export const query = graphql`
  query ProductsQuery {
    allContentfulProduct {
      edges {
        node {
          id
          productName {
            productName
          }
          price
          image {
            resize (width:50) {
              src
            }
          }
        }
      }
    }
  }
`;
