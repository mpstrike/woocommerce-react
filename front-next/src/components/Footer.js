import { useContext } from "react";
import { AppContext } from "./Layout";
import Link from 'next/link'



const Footer = () => {

    const appCommonData = useContext(AppContext)
    const headerMenus = appCommonData.data.FooterMenus.edges

    return (
    
   <div className="header-container">

     <ul>
        {
            headerMenus.map((menuItem) =>  {
               return (
                <li key={menuItem.node.id}>
                    
                    <Link href={menuItem.node.path}>
                        <a>{menuItem.node.label}</a>
                    </Link>

                   </li>
               )

            })
        }
     </ul>

   </div>
    
    
    );


    
    
    };
    
    export default Footer;