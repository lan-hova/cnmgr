import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Building, Award, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'CNM Victoria',
      location: 'Quận 9, TP.HCM',
      price: '2.5 - 4.2 tỷ',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Đang mở bán'
    },
    {
      id: 2,
      name: 'CNM Riverside',
      location: 'Quận 7, TP.HCM',
      price: '3.8 - 6.5 tỷ',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Sắp mở bán'
    },
    {
      id: 3,
      name: 'CNM Garden',
      location: 'Quận 2, TP.HCM',
      price: '4.2 - 7.8 tỷ',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Đang mở bán'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'CNM Victoria chính thức mở bán với ưu đãi đặc biệt',
      excerpt: 'Dự án căn hộ cao cấp CNM Victoria tại Quận 9 chính thức mở bán với nhiều ưu đãi hấp dẫn dành cho khách hàng...',
      date: '15/03/2024',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Thị trường bất động sản 2024: Cơ hội và thách thức',
      excerpt: 'Phân tích chi tiết về xu hướng phát triển của thị trường bất động sản Việt Nam trong năm 2024...',
      date: '10/03/2024',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'CNM nhận giải thưởng "Nhà phát triển BĐS tốt nhất"',
      excerpt: 'Công ty CNM Group vinh dự nhận giải thưởng danh giá từ Hiệp hội BĐS Việt Nam...',
      date: '05/03/2024',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const stats = [
    { icon: Building, number: '50+', label: 'Dự án hoàn thành' },
    { icon: Users, number: '10,000+', label: 'Khách hàng tin tưởng' },
    { icon: Award, number: '25+', label: 'Giải thưởng uy tín' },
    { icon: Star, number: '15+', label: 'Năm kinh nghiệm' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            CNM Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Kiến tạo không gian sống đẳng cấp, kiến tạo tương lai thịnh vượng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105"
            >
              Khám phá dự án
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent-400" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Về CNM Group
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản, CNM Group 
                đã khẳng định vị thế là một trong những nhà phát triển bất động sản hàng đầu tại Việt Nam.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, thiết kế hiện đại 
                và dịch vụ chuyên nghiệp, tạo nên những không gian sống đẳng cấp cho khách hàng.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Tìm hiểu thêm
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CNM Building"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án nổi bật</h2>
            <p className="text-xl text-gray-600">Khám phá những dự án đẳng cấp từ CNM</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Đang mở bán' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">{project.price}</span>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      Chi tiết
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Xem tất cả dự án
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tin tức mới nhất</h2>
            <p className="text-xl text-gray-600">Cập nhật thông tin mới nhất từ CNM</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                  >
                    Đọc thêm
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/news"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Xem tất cả tin tức
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Sẵn sàng đầu tư cùng CNM?
          </h2>
          <p className="text-xl text-primary-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí từ các chuyên gia hàng đầu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Đăng ký tư vấn
            </Link>
            <a 
              href="tel:0123456789"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Gọi ngay: 0123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;