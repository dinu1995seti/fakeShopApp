import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import ProductComponent from './productComponent';
import { setProducts } from "../redux/Action/productAction";

const ProductListing = () => {
    // const products = useSelector((state)=>state);
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products").catch((err) => {
                console.log("err", err);
            });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    //console.log("products : ", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing
