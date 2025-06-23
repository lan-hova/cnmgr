import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2, Calendar, Star } from 'lucide-react';
import ne1 from '/src/img/nestia1.jpg'; // Adjust the path as necessary

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Nestia - Điện Biên',
      location: 'Tỉnh Lào Cai',
      price: '2.5 - 4.2 tỷ',
      area: '5.614,5 m²',
      status: 'Đang triển khai',
      type: 'Nhà ở xã hội',
      image: '/src/img/nestia2.jpg',
      description: 'Khu nhà ở với thiết kế hiện đại, tiện ích đầy đủ và vị trí đắc địa.',
      completion: '2025',
      features: ['Siêu thị mini', 'Nhà hàng', 'Quán cafe', 'Security 24/7']
    },
    {
      id: 2,
      name: 'Điện Biên Riverside',
      location: 'Quận 7, TP.HCM',
      price: '3.8 - 6.5 tỷ',
      area: '80 - 150 m²',
      status: 'Sắp mở bán',
      type: 'apartment',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dự án căn hộ view sông với không gian xanh và tiện ích resort.',
      completion: '2025',
      features: ['View sông', 'Sky garden', 'Shopping mall', 'Spa']
    },
    {
      id: 3,
      name: 'Điện Biên Garden',
      location: 'Quận 2, TP.HCM',
      price: '4.2 - 7.8 tỷ',
      area: '90 - 180 m²',
      status: 'Đang mở bán',
      type: 'apartment',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Căn hộ sang trọng tại trung tâm thành phố với tiện ích 5 sao.',
      completion: '2024',
      features: ['Rooftop pool', 'Business center', 'Kids zone', 'BBQ area']
    },
    {
      id: 4,
      name: 'Điện Biên Villa',
      location: 'Thủ Đức, TP.HCM',
      price: '8.5 - 15 tỷ',
      area: '200 - 350 m²',
      status: 'Đang mở bán',
      type: 'villa',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Biệt thự cao cấp với không gian riêng tư và thiết kế đẳng cấp.',
      completion: '2025',
      features: ['Private pool', 'Garden', 'Garage', 'Maid room']
    },
    {
      id: 5,
      name: 'Điện Biên Commercial',
      location: 'Quận 1, TP.HCM',
      price: '12 - 25 tỷ',
      area: '50 - 120 m²',
      status: 'Sắp mở bán',
      type: 'commercial',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Shophouse thương mại tại vị trí vàng, tiềm năng đầu tư cao.',
      completion: '2024',
      features: ['Prime location', 'High ceiling', 'Flexible design', 'Parking']
    },
    {
      id: 6,
      name: 'Điện Biên Resort',
      location: 'Vũng Tàu',
      price: '6.8 - 12 tỷ',
      area: '120 - 250 m²',
      status: 'Đang mở bán',
      type: 'resort',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Condotel resort view biển với tiềm năng cho thuê hấp dẫn.',
      completion: '2025',
      features: ['Ocean view', 'Beach access', 'Restaurant', 'Spa resort']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const filterOptions = [
    { value: 'all', label: 'Tất cả dự án' },
    { value: 'apartment', label: 'An sinh xã hội' },
    // { value: 'villa', label: 'Biệt thự' },
    { value: 'commercial', label: 'Thương mại' },
    // { value: 'resort', label: 'Resort' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Dự án của chúng tôi
          </h1>
          <p className="text-xl text-primary-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Khám phá danh mục dự án đa dạng và chất lượng từ CNM Group
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === option.value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Đang mở bán' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {project.type === 'apartment' && 'Căn hộ'}
                      {project.type === 'villa' && 'Biệt thự'}
                      {project.type === 'commercial' && 'Thương mại'}
                      {project.type === 'resort' && 'Resort'}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.area}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Bàn giao: {project.completion}</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-primary-600 text-xs">+{project.features.length - 3} khác</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    {/* <div>
                      <div className="text-2xl font-bold text-primary-600">{project.price}</div>
                      <div className="text-xs text-gray-500">VNĐ</div>
                    </div> */}
                    <Link 
                      to={`/projects/${project.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
                    >
                      Chi tiết
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cần tư vấn chi tiết?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm kiếm dự án phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Đăng ký tư vấn
            </Link>
            <a 
              href="tel:02462583535"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Gọi ngay: 024 6258 3535
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;