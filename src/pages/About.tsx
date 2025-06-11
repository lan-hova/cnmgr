import React from 'react';
import { Building2, Users, Award, Target, Eye, Heart, Calendar, MapPin, Phone, Mail, Star } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Thành lập công ty',
      description: 'CNM được thành lập với tầm nhìn trở thành nhà phát triển bất động sản hàng đầu Việt Nam'
    },
    {
      year: '2012',
      title: 'Dự án đầu tiên',
      description: 'Hoàn thành dự án căn hộ đầu tiên với 200 căn hộ tại Quận 7, TP.HCM'
    },
    {
      year: '2015',
      title: 'Mở rộng quy mô',
      description: 'Mở rộng hoạt động ra các tỉnh thành và hoàn thành 5 dự án lớn'
    },
    {
      year: '2018',
      title: 'Giải thưởng đầu tiên',
      description: 'Nhận giải thưởng "Dự án bất động sản tốt nhất" từ Hiệp hội BĐS Việt Nam'
    },
    {
      year: '2020',
      title: 'Chuyển đổi số',
      description: 'Áp dụng công nghệ 4.0 trong quản lý và phát triển dự án'
    },
    {
      year: '2024',
      title: 'Vị thế hàng đầu',
      description: 'Khẳng định vị thế top 10 nhà phát triển BĐS uy tín tại Việt Nam'
    }
  ];

  const leadership = [
    {
      name: 'Ông Nguyễn Văn A',
      position: 'Tổng Giám đốc',
      experience: '20 năm kinh nghiệm',
      education: 'Thạc sĩ Kinh tế - ĐH Kinh tế TP.HCM',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dẫn dắt công ty với tầm nhìn chiến lược và kinh nghiệm sâu rộng trong lĩnh vực bất động sản'
    },
    {
      name: 'Bà Trần Thị B',
      position: 'Phó Giám đốc Kinh doanh',
      experience: '15 năm kinh nghiệm',
      education: 'Cử nhân Quản trị Kinh doanh - ĐH Ngoại thương',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Chuyên gia hàng đầu về phát triển thị trường và quan hệ khách hàng'
    },
    {
      name: 'Ông Lê Văn C',
      position: 'Phó Giám đốc Kỹ thuật',
      experience: '18 năm kinh nghiệm',
      education: 'Kỹ sư Xây dựng - ĐH Bách khoa TP.HCM',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Đảm bảo chất lượng kỹ thuật và tiến độ thực hiện các dự án'
    }
  ];

  const departments = [
    {
      name: 'Phòng Kinh doanh',
      head: 'Ông Phạm Văn D',
      members: 25,
      responsibilities: ['Phát triển thị trường', 'Chăm sóc khách hàng', 'Bán hàng và marketing']
    },
    {
      name: 'Phòng Kỹ thuật',
      head: 'Bà Hoàng Thị E',
      members: 30,
      responsibilities: ['Thiết kế dự án', 'Giám sát thi công', 'Kiểm tra chất lượng']
    },
    {
      name: 'Phòng Tài chính',
      head: 'Ông Vũ Văn F',
      members: 15,
      responsibilities: ['Quản lý tài chính', 'Kế toán', 'Đầu tư và ngân sách']
    },
    {
      name: 'Phòng Nhân sự',
      head: 'Bà Đỗ Thị G',
      members: 12,
      responsibilities: ['Tuyển dụng', 'Đào tạo', 'Phúc lợi nhân viên']
    },
    {
      name: 'Phòng Pháp chế',
      head: 'Ông Bùi Văn H',
      members: 10,
      responsibilities: ['Thủ tục pháp lý', 'Hợp đồng', 'Tuân thủ quy định']
    },
    {
      name: 'Phòng IT',
      head: 'Ông Đinh Văn I',
      members: 8,
      responsibilities: ['Hệ thống công nghệ', 'Bảo mật thông tin', 'Chuyển đổi số']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Chất lượng',
      description: 'Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất cho khách hàng'
    },
    {
      icon: Heart,
      title: 'Tận tâm',
      description: 'Phục vụ khách hàng với sự tận tâm, chu đáo và chuyên nghiệp'
    },
    {
      icon: Award,
      title: 'Uy tín',
      description: 'Xây dựng và duy trì uy tín thông qua sự minh bạch và đáng tin cậy'
    },
    {
      icon: Users,
      title: 'Đoàn kết',
      description: 'Tinh thần đoàn kết, hợp tác để đạt được mục tiêu chung'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Dự án hoàn thành', icon: Building2 },
    { number: '15+', label: 'Năm kinh nghiệm', icon: Calendar },
    { number: '10,000+', label: 'Khách hàng tin tưởng', icon: Users },
    { number: '25+', label: 'Giải thưởng uy tín', icon: Award }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Về CNM Investment
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hành trình 15 năm xây dựng và phát triển, khẳng định vị thế hàng đầu 
            trong lĩnh vực bất động sản tại Việt Nam
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Giới thiệu về CNM
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CNM Investment được thành lập vào năm 2009 với sứ mệnh mang đến những sản phẩm 
                bất động sản chất lượng cao, đáp ứng nhu cầu an cư và đầu tư của người Việt Nam.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sau 15 năm hoạt động, chúng tôi đã phát triển hơn 50 dự án trên khắp cả nước, 
                phục vụ hơn 10,000 khách hàng và nhận được 25+ giải thưởng uy tín trong ngành.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                CNM Investment không chỉ là nhà phát triển bất động sản mà còn là đối tác tin cậy, 
                đồng hành cùng khách hàng trong hành trình tìm kiếm không gian sống lý tưởng.
              </p>
              
              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-xl">
                  <Eye className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tầm nhìn</h3>
                  <p className="text-gray-600 text-sm">
                    Trở thành nhà phát triển bất động sản hàng đầu Việt Nam, 
                    được khách hàng và đối tác tin tưởng lựa chọn.
                  </p>
                </div>
                <div className="bg-accent-50 p-6 rounded-xl">
                  <Target className="w-8 h-8 text-accent-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sứ mệnh</h3>
                  <p className="text-gray-600 text-sm">
                    Kiến tạo những không gian sống đẳng cấp, mang lại giá trị bền vững 
                    cho cộng đồng và xã hội.
                  </p>
                </div>
              </div>
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

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thành tựu nổi bật</h2>
            <p className="text-xl text-gray-600">Những con số ấn tượng sau 15 năm phát triển</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lịch sử phát triển</h2>
            <p className="text-xl text-gray-600">Hành trình 15 năm xây dựng và phát triển</p>
          </div>

          <div className="relative"> 
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div> 
                  
                  {/* Timeline dot */}
                 <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 

            {/* Company History - Compact Timeline */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lịch sử phát triển</h2>
            <p className="text-xl text-gray-600">Hành trình 15 năm xây dựng và phát triển</p>
          </div>

          <div className="relative">
            
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  
                  <div className="ml-20 bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                      <div className="text-sm text-gray-500">#{index + 1}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ban lãnh đạo</h2>
            <p className="text-xl text-gray-600">Đội ngũ lãnh đạo giàu kinh nghiệm và tâm huyết</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-primary-200">{leader.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{leader.experience}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Award className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{leader.education}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cơ cấu tổ chức</h2>
            <p className="text-xl text-gray-600">Bộ máy vận hành chuyên nghiệp và hiệu quả</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                  <div className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                    {dept.members} người
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Users className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Trưởng phòng: {dept.head}</span>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Nhiệm vụ chính:</h4>
                  <ul className="space-y-1">
                    {dept.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Giá trị cốt lõi</h2>
            <p className="text-xl text-primary-100">Những giá trị định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center text-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thông tin liên hệ</h2>
            <p className="text-xl text-gray-600">Kết nối với chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                123 Đường Võ Chí Công<br />
                Quận 1, TP. Hồ Chí Minh
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Điện thoại</h3>
              <p className="text-gray-600">
                Hotline: 0123 456 789<br />
                Fax: (028) 1234 5678
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@cnm.vn<br />
                support@cnm.vn
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;