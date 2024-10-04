import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import Link from "next/link";
import {
  HiMiniBars3CenterLeft,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { Dropdown } from "antd";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import CategoryList from "./CategoryList";
import { useMediaQuery } from "react-responsive";
import CategoryListMobile from "./CategoryListMobile";
// import dynamic from "next/dynamic";

// const CategoryList = dynamic(async () => await import("./CategoryList"), {
//   ssr: false,
// });

const Header = () => {
  const [categories, setCategories] = useState([]);
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  const [menuOpen, setMenuOpen] = useState(false);

  // console.log(isTablet);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/category/getcategory`)
      .then((res) => {
        if (res.data) {
          setCategories(res.data.categories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="main_header">
      <div className="main_container">
        <div className="navbar-top">
          <Link className="navbar_logo" href={"/"}>
            <Image
              src={"/logo_white.png"}
              height={100}
              width={200}
              alt="techserve4u-logo"
            />
          </Link>
          <Search />

          <button className="nav_button">
            <HiOutlineShoppingCart size={24} />
          </button>
          <button className="nav_button">
            <HiOutlineUserCircle size={25} />
          </button>
        </div>
        <div className="navbar-bottom">
          <div className="categories">
            {!isTablet ? (
              <Dropdown
                trigger={["click"]}
                dropdownRender={() => <CategoryList categories={categories} />}
              >
                <button className="primary_btn category_btn">
                  <span>Categories</span>
                  <FaChevronDown />
                </button>
              </Dropdown>
            ) : (
              <div className="mobile_category_wrapper">
                <button
                  className="primary_btn category_btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span>Categories</span>
                  <FaChevronDown />
                </button>
                {menuOpen && isTablet && (
                  <CategoryListMobile categories={categories} />
                )}
              </div>
            )}
          </div>

          <div className="pages_list">
            <li>
              <Link href="/campaigns">Campaigns</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
