
import { withRouter } from 'next/router';
import { client } from '../src/inc/ApolloClientConfig'
import gql from 'graphql-tag';

const Product = withRouter( props => {

	

	const { product } = props;

	

	

	return (
		<div>
			{ product ? (
				<div className="woo-next-single">
				<h1>testara single</h1>
				
				</div>
			) : '' }
		</div>
	)
});

Product.getInitialProps = async function( context ) {

	//console.log(context); 

	let { query: { slug } } = context;
	const id = slug ? parseInt( slug.split( '-' ).pop() ) : context.query.id;

	const PRODUCT_QUERY = gql` query getProduct($id: ID! ) {
		product(id: $id) {
		  related {
			edges {
			  node {
				id
				slug
				name
				type
				databaseId  
				shortDescription
				image {
					id
					sourceUrl
					altText
				}
				galleryImages {
					nodes {
						id
						sourceUrl
						altText
					}
				}
				... on SimpleProduct {
					onSale
					price
					content
					regularPrice
				}
				... on VariableProduct {
					onSale
					price
					content
					regularPrice
				}
			  }
			}
		  }
		}
	  }
	   `;

	const res = await client.query(({
		query: PRODUCT_QUERY,
		variables: { id }
	}));

	return {
		product: res.data.product.related.edges
	}

};

export default Product;