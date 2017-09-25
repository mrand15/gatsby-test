import React from 'react';
import  { navigateTo } from 'gatsby-link';

import Card from '../components/card';

export default function CategoriesPage ({data}) {

  const { allContentfulCategory } = data;

  return (
    <div id="categoriesPage">
      <h1>Categories</h1>
      { allContentfulCategory.edges.map(({node}) => {

        const icon = node.icon.resize;
        return (
          <Card 
            key={node.id}
            link={`/category/${node.id}`}
            id={node.id}
            title={node.title.title}
            description={node.categoryDescription.categoryDescription}
            imageSrc={icon.src}
          />
        )
      } )}
    </div>
  );
}

export const query = graphql`
  query CategoriesQuery {
    allContentfulCategory {
      edges {
        node {
          id
          title {
            title
          }
          categoryDescription {
            categoryDescription
          }
          icon {
            resize(width: 50) {
              src
            }
          }
        }
      }
    }
  }
`;
