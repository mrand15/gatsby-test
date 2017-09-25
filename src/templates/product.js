import React from 'react';

import Card from '../components/card';

export default function CategoryPage ({data}) {

  console.log(data);
  const product = data.contentfulProduct;
  const brand = product.brand;
  return (
    <div>
      <h1>{product.productName.productName}</h1>
      <p>${product.price}.00</p>
      <p>{product.productDescription.productDescription}</p>
      <h3>Brand:</h3>
      <Card 
        link={`/brand/${brand.id}`}
        id={brand.id}
        title={brand.companyName.companyName}
        description={brand.website}
        imageSrc={brand.logo.resize.src}
      />
      <h3>Categories:</h3>
      {product.categories.map(category => (
        <Card 
          key={category.id}
          link={`/category/${category.id}`}
          id={category.id}
          title={category.title.title}
          description={category.categoryDescription.categoryDescription}
          imageSrc={category.icon.resize.src}
        />
      ) )}
    </div>
  );
}


export const query = graphql`
  query ProductQuery($productId: String!) {
    contentfulProduct(id: { eq: $productId }) {
      productName {
        productName
      }
      productDescription {
        productDescription
      }
      price
      image {
        resize (width:100) {
          src
        }
      }
      categories {
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
      brand {
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
`
