import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CategoryList = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {categories && categories.length !== 0 && (
        <div className="categori_list">
          <div className="cat_main">
            {categories.map((category) => {
              return (
                <li key={category._id}>
                  {/* Main category container div */}
                  <div className="link">
                    <Link href={"/"}>
                      <p>{category?.name}</p>
                    </Link>
                    {category.children.length !== 0 && <FaAngleDown />}
                  </div>

                  {/* Sub category container */}
                  <div
                    className={
                      category?.children.length === 0
                        ? "hide"
                        : "sub_cat_container"
                    }
                  >
                    {category?.children.length > 0 &&
                      category?.children?.map((subCat) => {
                        return (
                          <div className="sub_main_cat" key={subCat._id}>
                            <Link href={"/"}>
                              <p>{subCat?.name}</p>
                            </Link>

                            {/* Nested sub category container div */}
                            <ul>
                              {subCat?.children?.length !== 0 &&
                                subCat?.children?.map((subCat2) => {
                                  return (
                                    <li key={subCat2?._id}>
                                      <Link href={"/"}>
                                        <p>{subCat2?.name}</p>
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
