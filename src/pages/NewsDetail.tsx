import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // hoặc behavior: "auto"
  }, []);

  // Mock data - in real app, fetch from API based on id
  const getArticleById = (articleId: string) => {
    const articles = {
      '1': {
        id: 1,
        title: 'Điện Biên Victoria chính thức mở bán với ưu đãi đặc biệt',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-lg leading-relaxed mb-6">Ngày 15/03/2024, Điện Biên Investment đã chính thức công bố mở bán dự án căn hộ cao cấp Điện Biên Victoria tại Quận 9, TP.HCM. Đây là một trong những dự án được mong chờ nhất trong năm 2024 với thiết kế hiện đại và vị trí đắc địa.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ưu đãi đặc biệt cho khách hàng</h3>
            <p class="mb-4">Trong giai đoạn mở bán đầu tiên, Điện Biên Investment dành tặng nhiều ưu đãi hấp dẫn cho khách hàng:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Chiết khấu lên đến 5% cho khách hàng mua trong tháng đầu</li>
              <li>Hỗ trợ vay vốn lãi suất 0% trong 24 tháng đầu</li>
              <li>Tặng gói nội thất cao cấp trị giá 200 triệu đồng</li>
              <li>Miễn phí phí quản lý trong 2 năm đầu</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thiết kế và tiện ích đẳng cấp</h3>
            <p class="mb-4">Điện Biên Victoria được thiết kế theo phong cách hiện đại với đầy đủ tiện ích cao cấp. Dự án bao gồm 2 tòa tháp cao 35 tầng với tổng cộng 800 căn hộ, đáp ứng nhu cầu đa dạng của khách hàng từ 2-4 phòng ngủ.</p>

            <p class="mb-4">Các tiện ích nổi bật của dự án:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Hồ bơi vô cực tại tầng thượng với view toàn thành phố</li>
              <li>Phòng gym hiện đại với trang thiết bị nhập khẩu</li>
              <li>Khu vui chơi trẻ em an toàn và đa dạng</li>
              <li>Hệ thống bảo vệ 24/7 với công nghệ thông minh</li>
              <li>Bãi đỗ xe thông minh với hệ thống tự động</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vị trí đắc địa, kết nối thuận tiện</h3>
            <p class="mb-4">Tọa lạc tại trung tâm Quận 9, Điện Biên Victoria có vị trí đắc địa với khả năng kết nối thuận tiện đến các khu vực trung tâm của thành phố. Từ dự án, cư dân có thể dễ dàng di chuyển đến:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Trung tâm Quận 1 chỉ trong 25 phút di chuyển</li>
              <li>Sân bay Tân Sơn Nhất trong 35 phút</li>
              <li>Các trung tâm thương mại lớn như Vivo City, Landmark 81</li>
              <li>Các trường học uy tín trong khu vực</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiềm năng đầu tư hấp dẫn</h3>
            <p class="mb-6">Theo các chuyên gia bất động sản, khu vực Quận 9 đang trong giai đoạn phát triển mạnh mẽ với nhiều dự án hạ tầng lớn được triển khai. Điều này tạo ra tiềm năng tăng giá mạnh cho các dự án bất động sản trong khu vực, đặc biệt là những dự án chất lượng cao như Điện Biên Victoria.</p>

            <p class="mb-6 italic bg-gray-50 p-4 rounded-lg">Ông Nguyễn Văn A, Giám đốc kinh doanh Điện Biên Investment, chia sẻ: "Chúng tôi tin rằng Điện Biên Victoria sẽ trở thành một trong những dự án biểu tượng của Quận 9, mang lại giá trị sống đẳng cấp cho cư dân và tiềm năng đầu tư hấp dẫn cho các nhà đầu tư."</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thông tin liên hệ</h3>
            <p class="mb-4">Khách hàng quan tâm có thể liên hệ trực tiếp với Điện Biên Investment qua:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Hotline: 0123 456 789</li>
              <li>Email: info@vanphu.vn</li>
              <li>Địa chỉ showroom: 123 Đường ABC, Quận 1, TP.HCM</li>
            </ul>

            <p class="text-lg font-medium text-primary-600">Dự án Điện Biên Victoria hứa hẹn sẽ là lựa chọn lý tưởng cho những ai đang tìm kiếm một không gian sống đẳng cấp tại TP.HCM.</p>
          </div>
        `,
        date: '15/03/2024',
        author: 'Điện Biên Investment',
        category: 'project-news',
        image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['Điện Biên Victoria', 'Mở bán', 'Quận 9', 'Căn hộ cao cấp', 'Ưu đãi']
      },
      '2': {
        id: 2,
        title: 'Thị trường bất động sản 2024: Cơ hội và thách thức',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-lg leading-relaxed mb-6">Thị trường bất động sản Việt Nam trong năm 2024 đang trải qua những biến động đáng chú ý với nhiều cơ hội và thách thức song hành. Các chuyên gia dự báo đây sẽ là năm chuyển mình quan trọng của ngành.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những cơ hội tích cực</h3>
            <p class="mb-4">Thị trường bất động sản 2024 mang đến nhiều tín hiệu tích cực:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Chính sách hỗ trợ từ Chính phủ ngày càng rõ ràng và thuận lợi</li>
              <li>Nhu cầu nhà ở thực tế vẫn cao, đặc biệt tại các thành phố lớn</li>
              <li>Hạ tầng giao thông được đầu tư mạnh mẽ, mở ra nhiều khu vực mới</li>
              <li>Dòng vốn FDI vào bất động sản có xu hướng tăng trở lại</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thách thức cần vượt qua</h3>
            <p class="mb-4">Bên cạnh những cơ hội, thị trường cũng đối mặt với không ít thách thức:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Lãi suất vay vẫn ở mức cao, ảnh hưởng đến khả năng mua nhà</li>
              <li>Nguồn cung sản phẩm mới chưa đáp ứng được nhu cầu</li>
              <li>Thủ tục pháp lý vẫn còn phức tạp tại một số địa phương</li>
              <li>Sức mua của người dân chưa phục hồi hoàn toàn</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Dự báo xu hướng</h3>
            <p class="mb-6">Các chuyên gia nhận định rằng thị trường bất động sản 2024 sẽ có những đặc điểm sau:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Phân khúc căn hộ trung cấp sẽ là tâm điểm của thị trường</li>
              <li>Các dự án có vị trí thuận lợi về giao thông sẽ được ưa chuộng</li>
              <li>Bất động sản công nghiệp và logistics tiếp tục tăng trưởng mạnh</li>
              <li>Thị trường sẽ dần ổn định và phát triển bền vững hơn</li>
            </ul>

            <p class="text-lg font-medium text-primary-600">Nhìn chung, 2024 được kỳ vọng sẽ là năm phục hồi và phát triển tích cực của thị trường bất động sản Việt Nam.</p>
          </div>
        `,
        date: '10/03/2024',
        author: 'Phòng Phân tích',
        category: 'market-analysis',
        image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['Thị trường BĐS', '2024', 'Phân tích', 'Xu hướng', 'Đầu tư']
      },
      '3': {
        id: 3,
        title: 'Điện Biên nhận giải thưởng "Nhà phát triển BĐS tốt nhất"',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-lg leading-relaxed mb-6">Tại lễ trao giải thường niên của Hiệp hội Bất động sản Việt Nam, Điện Biên Investment đã vinh dự nhận giải thưởng "Nhà phát triển Bất động sản tốt nhất năm 2024", khẳng định vị thế hàng đầu trong ngành.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thành tựu đáng tự hào</h3>
            <p class="mb-4">Giải thưởng này là sự ghi nhận cho những nỗ lực không ngừng của Điện Biên Investment trong việc:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Phát triển các dự án chất lượng cao, đáp ứng nhu cầu đa dạng của khách hàng</li>
              <li>Áp dụng công nghệ hiện đại trong thiết kế và xây dựng</li>
              <li>Cam kết về chất lượng sản phẩm và dịch vụ khách hàng</li>
              <li>Đóng góp tích cực vào sự phát triển của thị trường bất động sản</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời cảm ơn từ Ban lãnh đạo</h3>
            <p class="mb-6 italic bg-gray-50 p-4 rounded-lg">Ông Nguyễn Văn B, Tổng Giám đốc Điện Biên Investment, chia sẻ: "Giải thưởng này không chỉ là niềm tự hào của công ty mà còn là động lực để chúng tôi tiếp tục nỗ lực mang đến những sản phẩm và dịch vụ tốt nhất cho khách hàng."</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cam kết tương lai</h3>
            <p class="mb-6">Với giải thưởng này, Điện Biên Investment cam kết sẽ tiếp tục:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Đầu tư vào nghiên cứu và phát triển sản phẩm mới</li>
              <li>Nâng cao chất lượng dịch vụ khách hàng</li>
              <li>Mở rộng quy mô hoạt động ra các tỉnh thành khác</li>
              <li>Đóng góp vào sự phát triển bền vững của ngành bất động sản</li>
            </ul>

            <p class="text-lg font-medium text-primary-600">Giải thưởng này là minh chứng cho sự tin tưởng của khách hàng và đối tác dành cho Điện Biên Investment.</p>
          </div>
        `,
        date: '05/03/2024',
        author: 'Điện Biên Investment',
        category: 'company-news',
        image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['Giải thưởng', 'Điện Biên', 'Thành tựu', 'Bất động sản', 'Uy tín']
      },
      '4': {
        id: 4,
        title: 'Hướng dẫn mua nhà lần đầu: 10 bước cần thiết',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="text-lg leading-relaxed mb-6">Tại lễ trao giải thường niên của Hiệp hội Bất động sản Việt Nam, Điện Biên Investment đã vinh dự nhận giải thưởng "Nhà phát triển Bất động sản tốt nhất năm 2024", khẳng định vị thế hàng đầu trong ngành.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thành tựu đáng tự hào</h3>
            <p class="mb-4">Giải thưởng này là sự ghi nhận cho những nỗ lực không ngừng của Điện Biên Investment trong việc:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Phát triển các dự án chất lượng cao, đáp ứng nhu cầu đa dạng của khách hàng</li>
              <li>Áp dụng công nghệ hiện đại trong thiết kế và xây dựng</li>
              <li>Cam kết về chất lượng sản phẩm và dịch vụ khách hàng</li>
              <li>Đóng góp tích cực vào sự phát triển của thị trường bất động sản</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời cảm ơn từ Ban lãnh đạo</h3>
            <p class="mb-6 italic bg-gray-50 p-4 rounded-lg">Ông Nguyễn Văn B, Tổng Giám đốc Điện Biên Investment, chia sẻ: "Giải thưởng này không chỉ là niềm tự hào của công ty mà còn là động lực để chúng tôi tiếp tục nỗ lực mang đến những sản phẩm và dịch vụ tốt nhất cho khách hàng."</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cam kết tương lai</h3>
            <p class="mb-6">Với giải thưởng này, Điện Biên Investment cam kết sẽ tiếp tục:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Đầu tư vào nghiên cứu và phát triển sản phẩm mới</li>
              <li>Nâng cao chất lượng dịch vụ khách hàng</li>
              <li>Mở rộng quy mô hoạt động ra các tỉnh thành khác</li>
              <li>Đóng góp vào sự phát triển bền vững của ngành bất động sản</li>
            </ul>

            <p class="text-lg font-medium text-primary-600">Giải thưởng này là minh chứng cho sự tin tưởng của khách hàng và đối tác dành cho Điện Biên Investment.</p>
          </div>
        `,
        date: '05/03/2024',
        author: 'Điện Biên Investment',
        category: 'company-news',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Giải thưởng', 'Điện Biên', 'Thành tựu', 'Bất động sản', 'Uy tín']
      }
    };

    return articles[articleId as keyof typeof articles] || articles['1'];
  };

  const article = getArticleById(id || '1');

  const relatedArticles = [
    {
      id: 2,
      title: 'Thị trường bất động sản 2024: Cơ hội và thách thức',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '10/03/2024'
    },
    {
      id: 3,
      title: 'Điện Biên nhận giải thưởng "Nhà phát triển BĐS tốt nhất"',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '05/03/2024'
    },
    {
      id: 4,
      title: 'Hướng dẫn mua nhà lần đầu: 10 bước cần thiết',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '28/02/2024'
    }
  ].filter(related => related.id !== article.id);

  const getCategoryLabel = (category: string) => {
    const categories: { [key: string]: string } = {
      'project-news': 'Tin dự án',
      'market-analysis': 'Phân tích thị trường',
      'company-news': 'Tin công ty',
      'tips': 'Kinh nghiệm'
    };
    return categories[category] || category;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Circular Back Button */}
      <Link 
        to="/news"
        className="fixed top-32 left-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-primary-600 group-hover:-translate-x-0.5 transition-all" />
      </Link>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
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
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                  {getCategoryLabel(article.category)}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Share2 className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">Chia sẻ:</span>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-600 font-medium">Tags:</span>
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bài viết liên quan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <article 
                  key={relatedArticle.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Link to={`/news/${relatedArticle.id}`}>
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {relatedArticle.date}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 hover:text-primary-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold">
                        Đọc thêm
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quan tâm đến các dự án của chúng tôi?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Liên hệ với chúng tôi ngay để được tư vấn chi tiết và nhận ưu đãi đặc biệt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/projects"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Xem dự án
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Đăng ký tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;