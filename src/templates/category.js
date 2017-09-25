import React from 'react';

import Card from '../components/card';

export default function CategoryPage ({data}) {

  console.log(data);
  const category = data.contentfulCategory;
  return (
    <div>
      <h1>{category.title.title}</h1>
      <p>{category.categoryDescription.categoryDescription}</p>
      <h3>Products:</h3>
      {category.product.map(product => (
        <Card 
          key={product.id}
          link={`/product/${product.id}`}
          title={product.productName.productName}
          description={`$${product.price}.00`}
          imageSrc={product.image[0].resize.src}
        />
      ) )}
    </div>
  );
}


export const query = graphql`
  query CategoryQuery($cateogryId: String!) {
    contentfulCategory(id: { eq: $cateogryId }) {
      title {
        title
      }
      categoryDescription {
        categoryDescription
      }
      product {
        id
        productName {
          productName
        }
        price
        image {
          resize (width:100) {
            src
          }
        }
      }
    } 
  }
`
