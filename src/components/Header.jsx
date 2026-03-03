import { useState } from "react";
import "../styles/header.scss";

const menuData = [
  { title: "ABOUT US" },
  {
    title: "SHOP",
    subMenu: [
      "25FW",
      "ALL",
      "LIFE WEAR",
      "PAJAMAS",
      "HOME THINGS",
      "BEDDING",
      "ACC",
    ],
  },
  { title: "LOOKBOOK" },
  {
    title: "BOARD",
    subMenu: ["NOTICE", "Q&A", "REVIEW"],
  },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <header className="header">
      <nav className="side-nav">
        <ul>
          {menuData.map((menu) => (
            <li key={menu.title}>
              <div
                className="menu-title"
                onClick={() =>
                  menu.subMenu ? toggleMenu(menu.title) : null
                }
              >
                {menu.title}
              </div>

              {menu.subMenu && (
                <ul
                    className={`sub-menu ${
                    openMenu === menu.title ? "open" : ""
                    }`}
                >
                    {menu.subMenu.map((sub, index) => (
                    <li key={index}>{sub}</li>
                    ))}
                </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 중앙 로고 */}
      <div className="logo">
        <img src="/img/logo_white.png" alt="LAZYZ LOGO" />
      </div>

      {/* 오른쪽 상단 */}
      <div className="user-menu">
        <div className="img_ball"><img src="/img/point.png" alt="img ball" /></div>
        <div>JOIN US</div>
        <div>LOGIN</div>
        <div className="mypage"><span>MY PAGE</span>
            <ul className="dropdown-menu bold">
                <li><a href="/">order</a></li>
                <li><a href="/">mileage</a></li>
                <li><a href="/">coupon</a></li>
                <li><a href="/">board</a></li>
                <li><a href="/">address</a></li>
            </ul>
        </div>
        <div className="cart-icon"><img src="/img/icon_bag_white.png" alt="CART ICON" /> (0)</div>
        <div className="search-icon"><img src="/img/icon_search_white.png" alt="search ICON" /></div>
        <div className="global-icon">
            <img src="/img/KR_32x24.png" alt="KR ICON" />
            <img src="/img/US_32x24.png" alt="US ICON" />
            <img src="/img/JP_32x24.png" alt="JP ICON" />
            </div>
      </div>
    </header>
  );
}

export default Header;