import ProductDetailsSkeleton from "@/app/_modules/products/presentation/molecules/ProductDetailsSkeleton/product-details-skeleton";
import Details from "@/app/_modules/products/presentation/pages/product-details";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product details",
  description: "View details about your products",
};

interface ProductDetailsProps {
  params: {
    id: number;
  };
  searchParams: {
    name: string;
    price: number;
    image: string;
    description: string;
    unit: number;
  };
}

const ProductDetails = ({ params, searchParams }: ProductDetailsProps) => {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <Details
        name={searchParams.name}
        description={searchParams.description}
        image={searchParams.image}
        product_id={params.id}
        price={searchParams.price}
      />
    </Suspense>
  );
};

export default ProductDetails;
