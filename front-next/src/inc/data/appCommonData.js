import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';



const getAppCommonData = async () => {
const CommonData = await client.query({
query: gql`
   query HeaderMenuQuery {
    headerMenus: menuItems(where: {location: PRIMARY}) {
       edges {
         node {
           id
           label
           path
         }
       }
     }
   
   
    FooterMenus: menuItems(where: {location: FOOTER}) {
      edges {
        node {
          id
          label
          path
        }
      }
    }
  }
   `

})

return CommonData;

}

export default getAppCommonData; 