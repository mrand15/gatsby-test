import React from 'react';

import Card from '../components/card';

export default function BrandPage ({data}) {

  console.log(data);
  const brand = data.contentfulBrand;
  return (
    <div>
      <h1>{brand.companyName.companyName}</h1>
      <p>Website: {brand.website}</p>
      <p>Email: {brand.email}</p>
      <p>{brand.companyDescription.companyDescription}</p>
      <h3>Products:</h3>
      {brand.product.map(product => (
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
  query BrandQuery($brandId: String!) {
    contentfulBrand(id: { eq: $brandId }) {
      companyName {
        companyName
      }
      companyDescription {
        companyDescription
      }
      website
      email
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
