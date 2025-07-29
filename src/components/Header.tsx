import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Medal, Handshake } from "lucide-react";
import Container from "./Container";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "首頁" },
    { path: "/about", label: "師資陣容" },
    { path: "/more", label: "了解更多" },
    { path: "/booking", label: "點我預約" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-lg sm:text-2xl font-bold"
            style={{ fontFamily: '"LXGW WenKai Mono TC", monospace' }}
          >
            <div className="bg-white text-blue-900 rounded-full p-2">
              <Medal size={24} />
            </div>
            <span>玩童桌球家教</span>
          </Link>

          <nav
            className="hidden md:flex flex-1 justify-center"
            style={{ fontFamily: '"LXGW WenKai Mono TC", monospace' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex-1 text-center text-xl font-bold hover:text-orange-400 transition-colors duration-200 ${
                  isActive(item.path) ? "text-orange-400" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3">
            <div className="flex items-center">
              <a
                href="https://page.line.me/845qnobd?v=2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 text-xs sm:text-lg"
              >
                <Handshake size={16} />
                <span>加入官方LINE</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-600">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) =>
                item.path.startsWith("http") ? (
                  <a
                    href={item.path} // ✅ 使用 item.path 就能跟資料同步
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-md text-sm text-white hover:bg-blue-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    key={item.path}
                    className="px-3 py-2 rounded-md text-sm text-white hover:bg-blue-600"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
