import { cnNutrion } from "@/services/constants";

export interface IProductInfo {
  calories: number;
  carbohydrates_total_g: number;
  cholesterol_mg: number;
  fat_saturated_g: number;
  fat_total_g: number;
  fiber_g: number;
  name: string;
  potassium_mg: number;
  protein_g: number;
  serving_size_g: number;
  sodium_mg: number;
  sugar_g: number;
}

export interface INinjaProductsInfo {
  items: IProductInfo[];
}

export async function POST(req: Request) {
  const product = await req.json();
  if (!product.query) return Response.json({ message: "No requested data" });

  const params = new URLSearchParams({ query: product.query }).toString();

  const data = await fetch(cnNutrion + "?" + params, {
    headers: {
      "X-Api-Key": process.env.COOK_NINJA_API_KEY as string,
    },
  });

  try {
    const result: INinjaProductsInfo = await data.json();
    return Response.json(result.items);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Some error has been detected" });
  }
}
