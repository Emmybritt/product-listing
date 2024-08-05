"use client";
import React, { useContext } from "react";
import ProductsContainer from "../atoms/ProductsContainer/products-container";
import BreadCrumbs from "../molecules/BreadCrumbs/bread-crumbs";
import ProductDetailsCard from "../molecules/ProductDetailsCard/product-details-card";
import { CartContext } from "../../infrastructure/context/carts.context";

const CartsList = () => {
  const { products } = useContext(CartContext);
  return (
    <ProductsContainer>
      <BreadCrumbs name="Carts" />
      {products.map((product) => (
        <div className="mb-[1rem]" key={product.product_id}>
          <ProductDetailsCard product={product} />
        </div>
      ))}
      {!products.length ? (
        <h3 className="text-heading-5 w-fit m-auto text-gray-600">
          Your cart is empty
        </h3>
      ) : (
        <button className="bg-primary button w-full">Buy All</button>
      )}
    </ProductsContainer>
  );
};

export default CartsList;
