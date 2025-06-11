import React from "react";

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/congtycptapdoancnm@gmail.com"
      method="POST"
      className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Đăng ký tư vấn</h2>

      <input
        type="text"
        name="name"
        required
        placeholder="Họ và tên"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <textarea
        name="message"
        required
        placeholder="Nội dung cần tư vấn"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded"
      ></textarea>

      {/* Ẩn CAPTCHA + Redirect sau khi gửi */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
      <input type="hidden" name="_subject" value="Yêu cầu tư vấn từ website" />
      <input type="text" name="_honey" style={{ display: "none" }} />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Gửi đăng ký
      </button>
    </form>
  );
};

export default ContactForm;
