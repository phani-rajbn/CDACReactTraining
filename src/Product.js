const Product = ({product}) => (
    <div className="card" style={{width:'50%', padding:'10px', margin:'10px'}}>
        <div className="row">
            <div className="col-md-4">
                <img src ={product.picture} style={{width: '100%', height:'100%'}} alt={product.picture} className="card-img"/>
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-text">{product.price}</div>
                    <div className="card-text">{product.quantity}</div>
                </div>
            </div>
        </div>
    </div>
)

export default Product