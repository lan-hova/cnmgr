import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Building2, Calendar, Star, Phone, Mail, ArrowLeft, ArrowRight, MessageCircle, X, ShoppingCart, GraduationCap, Plane, Train, Guitar as Hospital } from 'lucide-react';
import nest1 from '/src/img/nestia1.jpg';
import nest2 from '/src/img/nestia2.jpg';
import nest3 from '/src/img/nestia3.jpg';
import nest4 from '/src/img/nestia4.jpg';
import nest5 from '/src/img/nestia5.jpg';
import nest6 from '/src/img/nestia6.jpg';
import nest7 from '/src/img/nestia7.jpg';
import { useHeader } from '../components/HeaderContext';


const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  // Mock data - in real app, fetch from API
  const project = {
    id: Number(id),
    name: 'Nestia - Điện Biên',
    location: 'Tỉnh Lào Cai',
    address: 'Phường Lào Cai, Tỉnh Lào Cai',
    price: 'Nestia - Điện Biên',
    area: '5.614,5 m²',
    status: 'Đang triển khai',
    completion: '2026',
    developer: 'CNM Group',
    images: [
      nest1,
      nest2,
      nest3,
      nest4,
      nest5,
      nest6,
      nest7,
    ],
    description: `Nestia – Điện Biên là dự án nhà ở xã hội được phát triển với triết lý nhân văn sâu sắc: mỗi người dân Việt đều xứng đáng có một tổ ấm chất lượng, bền vững và chan hòa yêu thương.
Không chỉ đơn thuần là nơi ở, Nestia – Điện Biên là không gian sống lý tưởng được thiết kế để nuôi dưỡng hạnh phúc gia đình, sự gắn kết cộng đồng và những giá trị sống tốt đẹp.
Dự án sở hữu vị trí chiến lược với hạ tầng hoàn chỉnh, kết nối thuận tiện đến các trung tâm hành chính, giáo dục và thương mại. Được bao quanh bởi những hàng cây xanh cổ thụ và cảnh quan yên bình, Nestia – Điện Biên không chỉ thuận lợi về giao thông mà còn hội tụ sinh khí tự nhiên, mang lại cảm giác an lành và thư thái cho mọi cư dân.
Đặc biệt, dự án được đầu tư các giải pháp công nghệ xanh và hiện đại nhằm nâng cao chất lượng sống bền vững:
•	Hệ thống năng lượng mặt trời hỗ trợ vận hành các khu vực chung của tòa nhà, tiết kiệm điện và thân thiện với môi trường.
•	Hệ thống lọc nước tổng đảm bảo nguồn nước cấp đến từng căn hộ luôn sạch khuẩn, an toàn cho sức khỏe cư dân.
•	Trụ sạc xe điện được bố trí tại khu vực đỗ xe, đón đầu xu hướng di chuyển xanh trong tương lai.

Quy mô dự án bao gồm:
•	Khối nhà ở cao tầng hiện đại, thiết kế tối ưu diện tích và công năng sử dụng.
•	Khuôn viên cây xanh, sân chơi trẻ em và không gian cộng đồng mở, thân thiện, ấm cúng.
•	Hạ tầng kỹ thuật đồng bộ, vận hành an toàn, tạo dựng môi trường sống văn minh và bền vững.
Nestia – Điện Biên không chỉ là chốn an cư, mà là nơi khởi đầu cho một tương lai ổn định, thân thiện và đầy hy vọng cho mọi gia đình Việt.`,
    features: [
      'Sân vườn cảnh quan',
      'Sân chơi trẻ em',
      'Khu tập gym ngoài trời',
      'Hệ thống bảo vệ 24/7',
      'Bãi gửi xe rộng rãi',
      'Tiện ích mua sắm',
      'Trạm sạc xe điện',
    ],
    locationDetails: {
      coordinates: { lat: 10.8231, lng: 106.6297 },
      description: `Nestia – Điện Biên tọa lạc ngay trái tim phường Lào Cai, sở hữu vị trí vàng khi tiếp giáp với các tuyến đường huyết mạch như Trần Quốc Hoàn, Điện Biên, Nguyễn Khang,
       tạo nên mạng lưới kết nối linh hoạt tới mọi tiện ích trọng yếu của thành phố. Chỉ trong bán kính 3 km, cư dân có thể tiếp cận đầy đủ các dịch vụ giáo dục, y tế, hành chính và giải trí`,
      nearby: [
        { icon: ShoppingCart, name: 'Lotte Mart Quận 9', distance: '500m', type: 'Siêu thị' },
        { icon: Hospital, name: 'Bệnh viện Quận 9', distance: '800m', type: 'Y tế' },
        { icon: GraduationCap, name: 'Trường THPT Lê Quý Đôn', distance: '1.2km', type: 'Giáo dục' },
        { icon: Building2, name: 'CVPM Quang Trung', distance: '2km', type: 'Công nghệ' },
        { icon: Plane, name: 'Sân bay Tân Sơn Nhất', distance: '25km', type: 'Giao thông' },
        { icon: Train, name: 'Ga Metro Bến Thành', distance: '15km', type: 'Giao thông' }
      ]
    },
    floorPlans: [
      { type: '2PN', area: '70m²', price: '2.5 tỷ', available: 15 },
      { type: '3PN', area: '85m²', price: '3.2 tỷ', available: 12 },
      { type: '3PN+', area: '120m²', price: '4.2 tỷ', available: 8 }
    ],
    nearby: [
      { name: 'Công viên Nhạc Sơn', distance: '400m', type: '' },
      { name: 'Quảng trường trung tâm TP. Lào Cai', distance: '1.4km', type: '' },
      { name: 'Phố đi bộ', distance: '1km', type: '' },
      { name: 'Trường tiểu học Nguyễn Bá Ngọc', distance: '200m', type: '' },
      { name: 'Cụm liên trường Kim Tân', distance: '1km', type: '' },
      { name: 'Cửa khẩu Quốc tế Lào Cai và Cửa khẩu Kim Thành', distance: '3km', type: '' },
      { name: 'Bệnh viện thành phố', distance: '500m', type: '' },
      { name: 'Cầu Cốc Lếu', distance: '1.9km', type: '' }
    ]
  };

  const groundImg = [
  {
    id: 1,
    src: nest2,
    alt: 'Không gian tầng 2 với thiết kế hiện đại, nội thất cao cấp và ánh sáng tự nhiên',
    title: 'Tầng 2',
    description: 'Không gian tầng 2 với thiết kế hiện đại, nội thất cao cấp và ánh sáng tự nhiên'
  },
  {
    id: 2,
    src: nest5,
    alt: 'Khu vực tầng 3-7 với không gian mở, view đẹp và nội thất sang trọng',
    title: 'Tầng 3-7',
    description: 'Khu vực tầng 3-7 với không gian mở, view đẹp và nội thất sang trọng'
  },
  ]

  const sections = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'amenities', label: 'Tiện ích' },
    { id: 'ground', label: 'Mặt bằng' },
    { id: 'location', label: 'Vị trí' },    
  
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const { setHideHeader } = useHeader();

    useEffect(() => {
      const handleScroll = () => {
        // Check if we should make header sticky
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          setIsHeaderSticky(window.scrollY > heroBottom - 100);
          setHideHeader(window.scrollY > heroBottom - 100);
        }
  
        // Update active section based on scroll position
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => 
      {window.removeEventListener('scroll', handleScroll);
      setHideHeader(false); };//reset lại khi rời khỏi trang 
    }, []);
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };

  return (
    <div className="bg-blue-50">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              to="/projects"
              className="text-gray-500 hover:text-primary-600"
            >
              Dự án
            </Link>
            <span>/</span>
            <span className="text-gray-900">{project.name}</span>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <div
        className={`sticky top-0 z-50 pt-4 bg-blue-50 shadow-md transition-all duration-300 ${
          isHeaderSticky
            ? "opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-2 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="relative"></section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          {/* Left Column - Images and Details */}
          <div className="grid lg:grid-cols-1 gap-8">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-auto rounded-2xl overflow-hidden">
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
              <div className="grid grid-cols-7 gap-2 mt-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      index === currentImageIndex
                        ? "ring-2 ring-primary-600"
                        : ""
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
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {project.name}
                  </h1>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === "Đang mở bán"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
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

              {/* Overview Section */}
              <section
                id="overview"
                className="bg-yellow-50 rounded-2xl shadow-lg mb-8 p-8"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backgroundBlendMode: "lighten",
                }}
              >
                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Tổng quan
                  </h3>
                  <p className="whitespace-pre-line text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </section>

              {/* Amenities Section */}
              <section
                id="amenities"
                className="bg-emerald-50 rounded-2xl shadow-lg mb-8 p-8"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backgroundBlendMode: "lighten",
                }}
              >
                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Tiện ích nổi bật
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="ground"
                className="bg-emerald-50 rounded-2xl shadow-lg mb-8 p-8"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/268917/pexels-photo-268917.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  backgroundColor: "rgba(255,255,255,0.85)",
                  backgroundBlendMode: "lighten",
                }}
              >
                <h3 className="text-2xl text-center font-bold text-gray-900 mb-4">
                  Mặt bằng dự án
                </h3>
                <div className="max-w-3xl mx-auto px-4">
                  {/* Main Image Display */}
                  <div className="relative mb-6 group">
                    <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={groundImg[activeImage]?.src}
                        alt={groundImg[activeImage]?.alt}
                        className="w-full h-full object-cover transition-all duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {groundImg.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => setActiveImage(index)}
                          className={`px-6 py-3 rounded-sm font-medium text-sm transition-all duration-300 ${
                            index === activeImage
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                              : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 hover:shadow-md border border-gray-200"
                          }`}
                        >
                          {image.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Current Image Description */}
                  {/* <div className="bg-white rounded-2xl p-6 shadow-lg"> */}
                  {/* <h2 className="text-2xl text-center font-semibold text-gray-900 mb-3">
                      {groundImg[activeImage]?.title}
                    </h2> */}
                  <p className="text-gray-600 text-center text-lg leading-relaxed">
                    {groundImg[activeImage]?.description}
                  </p>
                  {/* </div> */}
                </div>
              </section>

              {/* Nearby Facilities */}
              <div className="bg-green-50 rounded-2xl shadow-lg mb-8 pb-4 p-8">
                {/* Location Section - Split Layout */}
                <section
                  id="location"
                  className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Map Side */}
                    <div className="h-96 md:h-auto bg-gray-200 flex items-center justify-center p-8">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-600">Bản đồ Google Maps</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {project.address}
                        </p>
                      </div>
                    </div>

                    {/* Info Side */}
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Vị trí dự án
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.locationDetails.description}
                      </p>
                    </div>
                  </div>
                </section>

                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Tiện ích xung quanh
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.nearby.map((place, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-green-50 rounded-md"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {place.name}
                        </div>
                        {/* <div className="text-sm text-gray-600">{place.type}</div> */}
                      </div>
                      <div className="text-primary-600 font-semibold">
                        {place.distance}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          {/* <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{project.price}</div>
                  <div className="text-gray-600"></div>
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
                      href="tel:02462583535"
                      className="flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      0246 258 3535
                    </a>
                    <a 
                      href="mailto:congtycptapdoancnm@gmail.com"
                      className="flex items-center justify-center border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      congtycptapdoancnm@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Floating Contact Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-8 h-8" />
            </button>
          </div>

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Đăng ký tư vấn
                    </h3>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {project.price}
                    </div>
                    <div className="text-gray-600">Dự án {project.name}</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập họ và tên"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loại căn quan tâm
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập ghi chú..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => alert("Đã gửi thông tin tư vấn!")}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Đăng ký tư vấn
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="text-center space-y-3">
                      <div className="text-sm text-gray-600">
                        Hoặc liên hệ trực tiếp
                      </div>
                      <a
                        href="tel:02462583535"
                        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        0246 258 3535
                      </a>
                      <a
                        href="mailto:congtycptapdoancnm@gmail.com"
                        className="flex items-center justify-center border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Email tư vấn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div>
            <section className="py-20 bg-purple-600 rounded-2xl shadow-2xl mt-4 mb-8">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Quan tâm đến {project.name}?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Đăng ký ngay để nhận thông tin chi tiết và ưu đãi đặc biệt từ
                  chủ đầu tư
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Đăng ký tư vấn
                  </button>
                  <a
                    href="/logocnm.ico"
                    download="CNM-Brochure.ico"
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                  >
                    Tải brochure
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;