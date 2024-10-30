import React, { useEffect, useState } from "react";
import SingleCategoryProduct from "./SingleCategoryProduct";
import axios from "axios";

const ProductByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/category/getcategory`)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.categories) {
          setCategories(res.data.categories);
        } else {
          console.error("No categories found in response:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);
  return (
    <div>
      {categories?.length > 0 &&
        categories.map((category) => (
          <SingleCategoryProduct key={category?._id} category={category} />
        ))}
    </div>
  );
};

export default ProductByCategory;
