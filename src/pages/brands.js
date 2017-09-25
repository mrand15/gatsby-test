import React from 'react';
import  { navigateTo } from 'gatsby-link';

import Card from '../components/card';

export default function BrandsPage ({data}) {

  const { allContentfulBrand } = data;

  return (
    <div>
      <h1>Brands</h1>
      { allContentfulBrand.edges.map(({node}) => {

        const icon = node.logo.resize;
        return (
          <Card 
            key={node.id}
            link={`/brand/${node.id}`}
            id={node.id}
            title={node.companyName.companyName}
            description={node.website}
            imageSrc={icon.src}
          />
        )
      } )}
    </div>
  );
}

export const query = graphql`
  query BrandsQuery {
    allContentfulBrand {
      edges {
        node {
          id
          logo {
            resize (width: 50) {
              src
            }
          }
          companyName {
            companyName
          }
          website 
        }
      }
    }
  }
`;
