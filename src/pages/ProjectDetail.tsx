import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Building2, Calendar, Star, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch from API
  const project = {
    id: Number(id),
    name: 'Điện Biên Victoria',
    location: 'Quận 9, TP.HCM',
    address: '123 Đường Võ Chí Công, Phường Tân Phú, Quận 9, TP.HCM',
    price: '2.5 - 4.2 tỷ',
    area: '70 - 120 m²',
    status: 'Đang mở bán',
    completion: '2024',
    developer: 'Điện Biên Investment',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `Điện Biên Victoria là dự án căn hộ cao cấp mới nhất của Điện Biên Investment, 
    tọa lạc tại vị trí đắc địa Quận 9, TP.HCM. Dự án được thiết kế theo phong cách hiện đại, 
    kết hợp hài hòa giữa không gian sống tiện nghi và môi trường xanh thân thiện.`,
    features: [
      'Hồ bơi vô cực tại tầng thượng',
      'Phòng gym hiện đại đầy đủ trang thiết bị',
      'Khu vui chơi trẻ em an toàn',
      'Hệ thống bảo vệ 24/7',
      'Bãi đỗ xe thông minh',
      'Khu BBQ và tiệc ngoài trời',
      'Công viên cây xanh nội khu',
      'Hệ thống điều hòa trung tâm'
    ],
    floorPlans: [
      { type: '2PN', area: '70m²', price: '2.5 tỷ', available: 15 },
      { type: '3PN', area: '85m²', price: '3.2 tỷ', available: 12 },
      { type: '3PN+', area: '120m²', price: '4.2 tỷ', available: 8 }
    ],
    nearby: [
      { name: 'Lotte Mart Quận 9', distance: '500m', type: 'Siêu thị' },
      { name: 'Bệnh viện Quận 9', distance: '800m', type: 'Y tế' },
      { name: 'Trường THPT Lê Quý Đôn', distance: '1.2km', type: 'Giáo dục' },
      { name: 'Công viên phần mềm Quang Trung', distance: '2km', type: 'Công nghệ' }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Trang chủ</Link>
            <span>/</span>
            <Link to="/projects" className="text-gray-500 hover:text-primary-600">Dự án</Link>
            <span>/</span>
            <span className="text-gray-900">{project.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-primary-600' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'Đang mở bán' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                    <span>{project.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-primary-600" />
                    <span>Diện tích: {project.area}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                    <span>Bàn giao: {project.completion}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-primary-600" />
                    <span>Chủ đầu tư: {project.developer}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mô tả dự án</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="border-t pt-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tiện ích nổi bật</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mặt bằng & Giá bán</h3>
                <div className="space-y-4">
                  {project.floorPlans.map((plan, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:border-primary-600 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{plan.type}</h4>
                          <p className="text-gray-600">Diện tích: {plan.area}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary-600">{plan.price}</div>
                          <div className="text-sm text-gray-500">{plan.available} căn còn lại</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nearby Facilities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tiện ích xung quanh</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.nearby.map((place, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{place.name}</div>
                      <div className="text-sm text-gray-600">{place.type}</div>
                    </div>
                    <div className="text-primary-600 font-semibold">{place.distance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{project.price}</div>
                  <div className="text-gray-600">VNĐ</div>
                </div>

                <form action="https://formsubmit.co/congtycptapdoancnm@gmail.com" method="POST" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loại căn quan tâm
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option value="">Chọn loại căn</option>
                      <option value="2pn">2 phòng ngủ</option>
                      <option value="3pn">3 phòng ngủ</option>
                      <option value="3pn+">3 phòng ngủ+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ghi chú
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập ghi chú..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Đăng ký tư vấn
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="text-center space-y-3">
                    <div className="text-sm text-gray-600">Hoặc liên hệ trực tiếp</div>
                    <a 
                      href="tel:0123456789"
                      className="flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      0123 456 789
                    </a>
                    <a 
                      href="mailto:info@vanphu.vn"
                      className="flex items-center justify-center border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      info@vanphu.vn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;