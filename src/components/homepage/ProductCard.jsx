import { Divider, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product_card">
      <Link href={`/product/${product._id}`} className="product_image">
        <div>
          <Image
            src={product?.thumbnail}
            height={250}
            width={200}
            alt={`product ${product.name}`}
          />
        </div>
      </Link>

      <div>
        <h4 className="title">{product?.name}</h4>
        <Divider />

        <div className="product-price">
          <div>
            {product.discount.value > 0 ? (
              <div>
                {product?.discount?.discountType === "flat" && (
                  <h2 className="price">
                    ${product?.price - product?.discount?.value}
                    <span className="old_price">${product?.price}</span>
                  </h2>
                )}
                {product?.discount?.discountType === "percent" && (
                  <h2 className="price">
                    {product?.price -
                      Math.floor(
                        product.price * (product?.discount?.value / 100)
                      )}
                    <span className="old_price">${product?.price}</span>
                  </h2>
                )}
              </div>
            ) : (
              <h2 className="price">${product?.price}</h2>
            )}
          </div>
          <div className="rating">
            <Rate
              style={{ fontSize: "16px" }}
              defaultValue={product?.ratingCount}
              count={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
