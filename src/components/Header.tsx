import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Building2, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Về CNM', href: '/about' },
    { name: 'Dự án', href: '/projects' },
    { name: 'Tin tức', href: '/news' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <>
      {/* Top bar */}
      {/*<div className="bg-primary-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0123 456 789</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@cnm.vn</span>
            </div>
          </div>
          <div className="text-xs opacity-75">
            Hotline tư vấn 24/7
          </div>
        </div>
      </div> */}

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-900">CNM</h1>
                <p className="text-xs text-gray-600 -mt-1">Investment</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    location.pathname === item.href
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <button onClick={() => navigate("/contact")} className="hidden md:block bg-accent-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors">
              Đăng ký tư vấn
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button onClick={() => navigate("/contact")} className="w-full mt-4 bg-accent-500 text-white py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors">
                Đăng ký tư vấn
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;