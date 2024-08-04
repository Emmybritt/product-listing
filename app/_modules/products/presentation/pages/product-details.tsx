import { Product } from "../../domain/product";
import ProductsContainer from "../atoms/ProductsContainer/products-container";
import BreadCrumbs from "../molecules/BreadCrumbs/bread-crumbs";
import ProductDetailsCard from "../molecules/ProductDetailsCard/product-details-card";
import ProductDetailsDescription from "../molecules/ProductDetailsDescription/product-details-description";

interface DetailsProps extends Product {}

const Details = async (product: DetailsProps) => {
  return (
    <ProductsContainer>
      <BreadCrumbs name={product.name} />
      <ProductDetailsCard product={product} />
      <ProductDetailsDescription description={product.description} />
    </ProductsContainer>
  );
};

export default Details;
