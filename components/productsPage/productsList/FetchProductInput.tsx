"use client";

import { useState } from "react";
import fetchWrapper from "@/services/fetchService";
import { innerApi } from "@/services/constants";
import { IProductInfo } from "@/app/api/product/route";
import Button from "@/components/simpleComponents/button/Button";

interface IFetchProductInput {
  setProduct: (product: IProductInfo[]) => void;
}

export default function FetchProductInput({ setProduct }: IFetchProductInput) {
  const [text, setText] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  async function fetchProduct() {
    try {
      const res = await fetchWrapper.post<IProductInfo[]>(
        innerApi.getProductInfo,
        {
          query: text,
        }
      );
      console.log(setProduct);

      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="border border-border rounded-sm w-full flex items-center justify-between">
      <input
        type="text"
        value={text}
        onChange={handleInput}
        className="w-full h-8 m-0 pl-2 text-lg"
      />
      <Button onClick={fetchProduct} type="secondary" size="small">
        Go
      </Button>
    </div>
  );
}
