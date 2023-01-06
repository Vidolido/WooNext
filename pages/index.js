import Layout from "../components/Layout";
import client from "../components/ApolloClient";

// import clientConfig from "../client-config";

// import fetch from 'isomorphic-unfetch';

import Product from "../components/Product";
import { gql } from "@apollo/client";

const PRODUCT_QUERY = gql`query{
    products {
        nodes {
            id
            productId
            averageRating
            slug
            description
            image {
                uri
                title
                srcSet
                sourceUrl
            }
            name
            ... on VariableProduct {
                id
                name
                price
            }
            ... on SimpleProduct {
                id
                name
                price(format: FORMATTED)
            }
        }
    }
}`;

const Index = (props) => {

    console.log(props)

    const { products } = props;

    return (
        <Layout>
            <div className="product-container">
                { products.length ? (
                    products.map( product => <Product key={product.id} product={product} /> )
                ) : ''}
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const result = await client.query({query: PRODUCT_QUERY});

    return {
        products: result.data.products.nodes
    }
}

export default Index;