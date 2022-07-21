import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";


const Home = ({appCommonData}) => {

//console.log(headerMenu.data.headerMenus.edges);

  return (
  
      <Layout appCommonData = {appCommonData}>

         <h1>Home page</h1>

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


  
  export default Home;