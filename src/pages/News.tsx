import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';

const News: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'Điện Biên Victoria chính thức mở bán với ưu đãi đặc biệt',
      excerpt: 'Dự án căn hộ cao cấp Điện Biên Victoria tại Quận 9 chính thức mở bán với nhiều ưu đãi hấp dẫn dành cho khách hàng mua trong giai đoạn đầu...',
      content: 'Nội dung chi tiết bài viết...',
      date: '15/03/2024',
      author: 'Điện Biên Investment',
      category: 'project-news',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Thị trường bất động sản 2024: Cơ hội và thách thức',
      excerpt: 'Phân tích chi tiết về xu hướng phát triển của thị trường bất động sản Việt Nam trong năm 2024, những cơ hội đầu tư và thách thức cần lưu ý...',
      content: 'Nội dung chi tiết bài viết...',
      date: '10/03/2024',
      author: 'Phòng Phân tích',
      category: 'market-analysis',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 3,
      title: 'Điện Biên nhận giải thưởng "Nhà phát triển BĐS tốt nhất"',
      excerpt: 'Công ty Điện Biên Investment vinh dự nhận giải thưởng danh giá từ Hiệp hội BĐS Việt Nam trong lễ trao giải thường niên...',
      content: 'Nội dung chi tiết bài viết...',
      date: '05/03/2024',
      author: 'Điện Biên Investment',
      category: 'company-news',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Hướng dẫn mua nhà lần đầu: 10 bước cần thiết',
      excerpt: 'Những lưu ý quan trọng dành cho người mua nhà lần đầu, từ việc chuẩn bị tài chính đến thủ tục pháp lý...',
      content: 'Nội dung chi tiết bài viết...',
      date: '28/02/2024',
      author: 'Phòng Tư vấn',
      category: 'tips',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Điện Biên Riverside: Khởi công dự án mới tại Quận 7',
      excerpt: 'Lễ khởi công dự án Điện Biên Riverside đã diễn ra trang trọng với sự tham dự của nhiều khách hàng và đối tác...',
      content: 'Nội dung chi tiết bài viết...',
      date: '20/02/2024',
      author: 'Điện Biên Investment',
      category: 'project-news',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Xu hướng thiết kế nội thất hiện đại 2024',
      excerpt: 'Khám phá những xu hướng thiết kế nội thất được ưa chuộng nhất trong năm 2024, từ màu sắc đến phong cách trang trí...',
      content: 'Nội dung chi tiết bài viết...',
      date: '15/02/2024',
      author: 'Đội ngũ thiết kế',
      category: 'tips',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'Tất cả tin tức' },
    { value: 'project-news', label: 'Tin dự án' },
    { value: 'market-analysis', label: 'Phân tích thị trường' },
    { value: 'company-news', label: 'Tin công ty' },
    { value: 'tips', label: 'Kinh nghiệm' }
  ];

  const filteredNews = filter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === filter);

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const getCategoryLabel = (category: string) => {
    const option = filterOptions.find(opt => opt.value === category);
    return option ? option.label : category;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Tin tức & Sự kiện
          </h1>
          <p className="text-xl text-primary-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Cập nhật thông tin mới nhất về dự án và thị trường bất động sản
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tin nổi bật</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <article 
                  key={article.id}
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/news/${article.id}`}>
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Nổi bật
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {getCategoryLabel(article.category)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Đọc thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === option.value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {regularNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article, index) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/news/${article.id}`}>
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {getCategoryLabel(article.category)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700">
                        Đọc thêm
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không có tin tức nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Đăng ký nhận tin tức
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Cập nhật thông tin mới nhất về dự án và thị trường bất động sản
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent-500 focus:outline-none"
            />
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;