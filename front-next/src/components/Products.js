import Link from "next/link";

const Products = ({productPage}) => {

   

    return (

        <div className="product-section">
<ul>
{
            productPage.map((products) =>  {
               return (
                <li key={products.node.id}>

                  <Link as={`/product/${products.node.slug }-${products.node.id}`} href={`/product?slug=${products.node.slug }-${products.node.id}`}>
                    <a>
                    <img src={products.node.image.sourceUrl} ></img>


                    <h6>{products.node.price}</h6>

                    <h1>{products.node.name}</h1>

                    </a>
                    </Link>

                   </li>
               )

            })
        }

</ul>

        </div>

    ); 



}; 

export default Products; 