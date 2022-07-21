import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';



const getProductData = async () => {
const ProductData = await client.query({
query: gql`
   query ProductQuery {
    productPage: products(first: 20) {
        edges {
          node {
            id
            name
            averageRating
            slug
            description
            image {
              sourceUrl
            }
            ... on SimpleProduct {
              id
              name
              price
            }
          }
        }
      }
    }
   `

})

return ProductData;

}

export default getProductData; 