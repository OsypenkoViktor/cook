import { IProductInfo } from "@/app/api/product/route";

interface IProductDisplay {
  product: IProductInfo | null;
}

export default function ProductDisplay({ product }: IProductDisplay) {
  return (
    <div className="w-full h-full">
      <h2 className="text-center text-2xl">Product info</h2>
      <div className="px-10">
        <h3>{product?.name}</h3>
        <p>Calories: {product?.calories}</p>
        <p>Fat total (g): {product?.fat_total_g}</p>
        <p>Protein: {product?.protein_g}</p>
      </div>
    </div>
  );
}
