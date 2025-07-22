import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Phone } from 'lucide-react';
import Container from './Container';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/about', label: '師資陣容' },
    { path: '/more', label: '了解更多' },
    { path: '/booking', label: '點我預約' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <div className="bg-white text-blue-900 rounded-full p-2">
              <User size={24} />
            </div>
            <span>玩童桌球家教</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-white text-blue-900'
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>立即預約</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-600">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-white text-blue-900'
                      : 'text-white hover:bg-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                <span>立即預約</span>
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
