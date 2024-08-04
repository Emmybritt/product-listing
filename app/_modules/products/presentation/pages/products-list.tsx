import React from "react";
import ProductCard from "../molecules/ProductCard/product-card";
import { getProducts } from "../../infrastructure/api/server-actions/product.actions";
import ProductsContainer from "../atoms/ProductsContainer/products-container";
import { imagesKey } from "@/app/_commons/utils/data";

const ProductsList = async () => {
  const products = await getProducts();
  return (
    <ProductsContainer>
      <p className="my-[1.9rem]">
        {products?.length > 0 ? `${products.length} items` : ""}
      </p>
      {products?.map(
        ({ name, description, price, product_id, image, unit }, _index) => (
          <ProductCard
            key={_index}
            product_id={product_id}
            name={name}
            description={description}
            price={price}
            image={imagesKey[image]}
            unit={unit}
          />
        )
      )}
    </ProductsContainer>
  );
};

export default ProductsList;
