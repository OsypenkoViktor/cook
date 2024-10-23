"use client";

import { Dispatch, SetStateAction, useState } from "react";
import FetchProductInput from "./FetchProductInput";
import { IProductInfo } from "@/app/api/product/route";
import ProductDisplay from "./ProductDisplay";

export default function ProductsList() {
  const [products, setProducts] = useState<IProductInfo[]>();
  const [selectedProduct, setSelectedProduct] = useState<IProductInfo | null>(
    null
  );

  function updateProducts(newProducts: IProductInfo[]) {
    setProducts((prevProducts) => [...(prevProducts || []), ...newProducts]);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">test</div>
      <div className="flex-1 flex justify-between">
        <ProductDisplay product={selectedProduct} />
        <section className="max-w-96 max-h-96 m-2">
          <FetchProductInput setProduct={updateProducts} />
          <ol className="max-h-96 overflow-y-scroll">
            {products?.map((product, index) => (
              <ProductsListItem
                key={index}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

interface IProductsListItem {
  product: IProductInfo;
  setSelectedProduct: Dispatch<SetStateAction<IProductInfo | null>>;
}

const ProductsListItem = ({
  product,
  setSelectedProduct,
}: IProductsListItem) => {
  const onClick = () => {
    setSelectedProduct(product);
  };
  return (
    <li
      onClick={onClick}
      className="w-full my-1 bg-primary text-background p-2 text-lg transition-all hover:cursor-pointer active:bg-white text-black"
    >
      {product.name}
    </li>
  );
};
