import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";

const about = ({appCommonData}) => {
    return (
    
     <Layout appCommonData = {appCommonData}>
        <h1>test</h1>
     </Layout>
    
        
    
    
    );
    
    
    };



    export async function getStaticProps() {
        return {
          props: {
            appCommonData: await getAppCommonData()
          }
        }
      }


    
    export default about;