import React from 'react'

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-gray-900 dark:text-white pt-20">
          {/* Hero section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nền tảng học tập thông minh, cá nhân hóa cho bạn 🎓
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                Học theo tốc độ riêng, nhận gợi ý phù hợp với năng lực, và theo dõi tiến độ học tập mọi lúc mọi nơi.
                </p>
                <div className="flex gap-4">
                <a
                    href="/register"
                    className="px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                >
                    Bắt đầu ngay
                </a>
                <a
                    href="/about"
                    className="px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
                >
                    Tìm hiểu thêm
                </a>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tính năng nổi bật 🌟
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    Ứng dụng giúp người dùng quản lý tài liệu học tập, chia sẻ nội bộ và tìm kiếm nhanh chóng — tất cả trên một nền tảng thống nhất.
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left w-full">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-gray-800 p-8 border border-black-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold mb-3">🎓 Cá nhân hoá học tập</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                            Hệ thống phân tích năng lực và hành vi học để gợi ý nội dung, độ khó và lộ trình phù hợp từng học viên.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-50 dark:bg-gray-900 p-8 border border-black-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold mb-3">📚 Quản lý nội dung & khóa học</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                            Giảng viên tạo và chỉnh sửa khóa học, bài học, bài tập tương tác đa dạng — từ video, slide đến coding.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-gray-800 p-8 border border-black-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold mb-3">📈 Theo dõi & đánh giá tiến độ</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                            Cung cấp công cụ kiểm tra, tự chấm điểm, thống kê chi tiết và báo cáo tiến độ học tập cho từng người dùng.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gray-50 border border-black-200 dark:bg-gray-700 p-8">
                            <h3 className="text-xl font-semibold mb-3">💬 Tương tác & cộng đồng</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                            Tích hợp chat, diễn đàn Q&A và nhóm học tập giúp kết nối học viên, giảng viên và cộng đồng học tập năng động.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}