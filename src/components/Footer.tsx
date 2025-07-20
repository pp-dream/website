import React from 'react';
import { Link } from 'react-router-dom';
import { User, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className='py-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <User size={24} />
              </div>
              <span>乒乓玩樂天堂</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              專業桌球教學團隊，致力於提供最優質的桌球教學服務。
              無論您是初學者還是進階選手，我們都能為您量身打造專屬的訓練計畫。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  人員介紹
                </Link>
              </li>
              <li>
                <Link to="/more" className="text-gray-300 hover:text-white transition-colors">
                  了解更多
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  點我預約
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">0912-345-678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">coach@dreamtt.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">台北市信義區體育館</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 夢想桌球教練. 版權所有.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 gap-2">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                隱私權政策
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                服務條款
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
