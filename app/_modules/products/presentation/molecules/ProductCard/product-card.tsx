import Link from "next/link";
import { Product } from "../../../domain/product";
import Image from "next/image";
import AddToCart from "../../atoms/AddToCartButton/add-to-cart-button";

const ProductCard = (product: Product) => {
  return (
    <div className="grid sm:grid-cols-5 items-center bg-white p-[2.3rem] mb-[1rem] border border-gray-300 rounded-[.6rem]">
      <div className="sm:col-span-1">
        <Image
          src={product.image}
          width={208}
          height={208}
          alt={product.name}
        />
      </div>
      <div className="sm:col-span-4 flex flex-col sm:ml-[2.4rem]">
        <span className="font-semibold mb-[1.6rem]">{product.name}</span>
        <span className="text-[2.8rem] font-bold">{`$${product.price}`}</span>
        <span className="mt-[1.6rem]">{product.description}</span>
        <div className="flex items-center space-x-2 mt-[.8rem]">
          <AddToCart product={product} />
          <Link
            href={`/details/${product.product_id}?name=${product.name}&price=${product.price}&image=${product.image}&description=${product.description}&unit=${product.unit}`}
          >
            <span className="text-primary font-semibold cursor-pointer">
              View details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
