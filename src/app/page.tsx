import { IProducts } from "@/types";
import ProductBasic from "@/components/ProductBasic";

async function getData(): Promise<IProducts[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <ProductBasic products={data} />
    </main>
  );
}
