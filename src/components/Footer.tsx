import React from "react";
import { FaFacebook, FaYoutube, FaSkype } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Hỗ trợ khách hàng */}
        <div>
          <h3 className="font-bold mb-3">HỖ TRỢ KHÁCH HÀNG</h3>
          <p>Hotline 0877709376</p>
          <p>
            Email:{" "}
            <a
              href="mailto:cskh@antoree.com"
              className="text-gray-300 hover:text-white"
            >
              cskh@vanlinh.com
            </a>
          </p>
          <p>
            Phản hồi dịch vụ:{" "}
            <a
              href="mailto:anh.pham2@antoree.com"
              className="text-gray-300 hover:text-white"
            >
              vanlinhdz2004@gmail.com
            </a>
          </p>
        </div>

        {/* Thông tin dịch vụ */}
        <div>
          <h3 className="font-bold mb-3">THÔNG TIN DỊCH VỤ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Chính sách hoàn tiền
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Cam kết đầu ra
              </a>
            </li>
          </ul>
        </div>

        {/* Kết nối */}
        <div>
          <h3 className="font-bold mb-3">KẾ NỐI VỚI ANTOREE</h3>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mb-3">
            Trở thành giáo viên
          </button>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaSkype />
            </a>
          </div>
        </div>

        {/* Tải ứng dụng */}
        <div>
          <h3 className="font-bold mb-3">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
          <div className="flex flex-col space-y-3">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-gray-600 pt-6 text-sm text-gray-400">
        <p>
          Công ty Giáo dục và Đào tạo ANTOREE INTERNATIONAL PTE. LTD. (MST:
          201436698Z) - Trụ sở chính: 10 Anson Road, #27-15, International
          Plaza, Singapore 079903
        </p>
        <p className="mt-2">
          Đối tác đại diện tại Việt Nam: CÔNG TY TNHH PHÁT TRIỂN GIÁO DỤC
          ANTOREE (MST: 0313769851) - Trụ sở chính: 187/7 Điện Biên Phủ, P. Đa
          Kao, Q.1, TP Hồ Chí Minh, Việt Nam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
