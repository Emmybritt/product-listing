import Image from "next/image";
import { Product } from "../../../domain/product";
import AddToCart from "../../atoms/AddToCartButton/add-to-cart-button";

interface ProductDetailsCardProps {
  product: Product;
}

const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <div className="grid sm:grid-cols-5 border border-gray-300 rounded-[0.6rem] p-[2rem] items-center">
      <div className="sm:col-span-1">
        <div className="">
          <Image
            src={product.image}
            height={280}
            width={280}
            alt={product.name}
            className="border rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-4 flex flex-col sm:mx-[2.2rem] space-y-[10px]">
        <p className="text-[2rem] font-bold">{product.name}</p>
        <div className="">
          <span>Price: </span>
          <span className="font-bold">{`$${product.price}`}</span>
        </div>
        <div className="">
          <span>Quantity in stock: </span>
          <span className="font-bold">10</span>
        </div>
        <div className="flex items-center ">
          <button className="bg-primary button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
