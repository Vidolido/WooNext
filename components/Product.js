const Product = ( props ) => {

    const { product } = props;

    return (
        <div className="card mb-3">
            <h3 className="card-header text-center">{ product.name }</h3>
            <img
                src={ product.image.sourceUrl } 
                alt="Product Image" />
            <div className="card-body">
                <h6 className="card-subtitle text-muted" dangerouslySetInnerHTML={{__html: product.price }}></h6>
                <a href="" className="btn btn-secondary text-center">View</a>
            </div>
        </div>
    );
}

export default Product;