import TeacherList from "../TeacherList";

const Home = () => {
  return (
    <div className="md:mt-30 mt-80 max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-semibold">Tìm kiếm hiện tại: </h1>
      <h1 className="text-xl font-semibold mt-6 mb-5">100 quả tìm được</h1>
      <div className="grid grid-cols-3 gap-7">
        <div className="md:col-span-2 col-span-3">
          <TeacherList />
          <div className="flex justify-center mt-6">
            <button className="w-35 px-6 py-2 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 shadow-sm transition duration-200">
              Tải thêm
            </button>
          </div>
        </div>
        <div className="md:col-span-1 col-span-3">
          <div className="max-w-md mx-auto rounded-lg p-6 text-center bg-gray-50 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Tham gia với chúng tôi
            </h2>
            <p className="text-gray-600 mb-5">
              Hãy tham gia cộng đồng giáo viên trên toàn cầu và tạo ra cách học
              trực tuyến mới.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
              Trở thành giáo viên
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
