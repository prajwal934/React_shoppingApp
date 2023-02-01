import { useState } from "react";

export default function TwoWayBindingComponent(){
    const [product, setProduct] = useState({Name:'', Price:0 , City:'' , Stock:false})
    const [newProduct, setnewProduct] = useState({Name:'', Price:0 , City:'', Stock:false})

    function handelName(e) {
        setProduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })

    }

    function handelCity(e) {
        setProduct({
            Name:product.Name,
            Price:product.Price,
            City:e.target.City,
            Stock:product.Stock
        })
    }

    function handelPrice(e) {
        setProduct({
            Name:product.Name,
            Price:e.target.Price,
            City:product.City,
            Stock:product.Stock

        })

    }

    function handelStock(e) {
        setProduct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })

    }

    function handelRegisterClick(){
        setnewProduct(product)
    }
    return(
        <div className="container-fluid ">
            <div className="row">
                <div className="col-3">
                    <h1>Register Product Details</h1>
                    <dl>
                        <dt>Name</dt>
                        <dd> <input className="form-container" onChange={handelName} type="text" /></dd>
                        <dt>Price</dt>
                        <dd> <input  className="form-conatiner" onChange={handelPrice} type="text" /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handelCity} className="form-select">
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch" >
                            <input onChange={handelStock} className="form-check-input" type="checkbox" />Available
                        </dd>
                    </dl>
                    <button  onClick={handelRegisterClick} className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock==true)? "Available":"Out of stock"} </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}