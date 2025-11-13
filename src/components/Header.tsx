import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Medal, Handshake } from "lucide-react";
import Container from "./Container";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "首頁" },
    { path: "/more", label: "了解更多" },
    { path: "/booking", label: "點我預約" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow">
      <Container>
        {/* 上排：Logo / 中間選單 / 右邊 LINE + 漢堡 */}
        <div className="flex justify-between items-center py-3">
          {/* 左：Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white text-blue-700 rounded-full p-2">
              <Medal size={24} />
            </div>

            <span className="text-lg font-semibold">
              玩童｜桌球教練媒合平台
            </span>
          </Link>

          {/* 中：桌機選單 */}
          <nav
            className="hidden md:flex items-center justify-center gap-10"
            style={{ fontFamily: '"LXGW WenKai Mono TC", system-ui' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
  px-4 py-2 text-lg text-white/90 hover:text-orange-300
  transition-colors duration-200
  ${isActive(item.path) ? "text-orange-400 font-semibold" : ""}
`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右：桌機 LINE 按鈕 + 手機漢堡 */}
          <div className="flex items-center justify-end gap-3">
            {/* 桌機 LINE */}
            <a
              href="https://line.me/R/ti/p/@845qnobd?oat_content=url&ts=09032151"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-sm font-semibold"
            >
              <Handshake size={16} />
              <span>加入官方LINE</span>
            </a>

            {/* 手機：漢堡按鈕（Menu ↔ X） */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 手機版展開選單 */}
        {isMenuOpen && (
          <nav
            className="md:hidden border-t border-blue-700 bg-blue-900"
            style={{ fontFamily: '"LXGW WenKai Mono TC", system-ui' }}
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    w-full px-3 py-2 rounded-md text-base
                    ${
                      isActive(item.path)
                        ? "bg-blue-700 text-orange-300 font-semibold"
                        : "text-white/90 hover:bg-blue-800"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* 手機版 LINE 按鈕 */}
              <a
                href="https://line.me/R/ti/p/@845qnobd?oat_content=url&ts=09032151"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-sm font-semibold"
              >
                <Handshake size={16} />
                <span>加入官方LINE</span>
              </a>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
