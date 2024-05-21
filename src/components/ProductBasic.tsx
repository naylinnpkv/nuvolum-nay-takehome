"use client";
import { IProducts } from "@/types";
import Image from "next/image";
import "../styles/product-basic.scss";
import "../styles/product-detail.scss";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

const ProductBasic: React.FC<{ products: IProducts[] }> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<IProducts>(
    products[0]
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // handling responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <button
            key={product.id}
            className="product-basic"
            onClick={() => setSelectedProduct(product)}
          >
            {isMobile ? (
              <div>
                <Image
                  src={product.image}
                  alt={product.description}
                  width={50}
                  height={50}
                />
                <div className="product-title"> {product.title}</div>
              </div>
            ) : (
              <>
                <Image
                  src={product.image}
                  alt={product.description}
                  width={100}
                  height={100}
                />
                <div className="product-title"> {product.title}</div>
              </>
            )}
            <div>
              <div
                className={
                  selectedProduct.id === product.id
                    ? "chevron turned-right"
                    : "chevron"
                }
              ></div>
            </div>
          </button>
        ))}
      </div>
      <section className="product-detail">
        <ProductDetail
          description={selectedProduct.description}
          rating={selectedProduct.rating}
          price={selectedProduct.price}
          id={selectedProduct.id}
        />
      </section>
    </div>
  );
};

export default ProductBasic;
