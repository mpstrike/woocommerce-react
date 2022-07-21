

import Layout from "../src/components/Layout";
import Products from "../src/components/products";
import getProductData from "../src/inc/data/productData";
import getAppCommonData from "../src/inc/data/appCommonData";


const Archive = ({appCommonData, productData}) => {

    
    const productPage = productData.data.productPage.edges;

    
    

    return (

    
     <Layout appCommonData = {appCommonData}>
        <h1>Product page</h1>
        <Products productPage = {productPage}/>
     </Layout>
    
        
    
    
    );
    
    
    };



    export async function getStaticProps() {
        return {
          props: {
            productData: await getProductData(),
            appCommonData: await getAppCommonData()
          }
        }
      }


    
    export default Archive;