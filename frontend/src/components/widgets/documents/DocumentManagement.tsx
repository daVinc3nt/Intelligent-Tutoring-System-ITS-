"use client";

import { useState } from "react";
import { CustomButton } from "../../ui/CustomButton";

interface Document {
  id: string;
  title: string;
  content: string;
  category: 'note' | 'assignment' | 'reference' | 'project';
  course?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  isFavorite: boolean;
}

// Mock data
const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Ghi chú Lập trình Python - Buổi 1",
    content: "Các khái niệm cơ bản về biến, kiểu dữ liệu...",
    category: 'note',
    course: "CS101",
    createdAt: "2024-09-01",
    updatedAt: "2024-09-15",
    tags: ["python", "programming", "basics"],
    isFavorite: true
  },
  {
    id: "2",
    title: "Bài tập Toán cao cấp - Chapter 1",
    content: "Giải các bài tập về ma trận và định thức...",
    category: 'assignment',
    course: "MATH201",
    createdAt: "2024-09-05",
    updatedAt: "2024-09-10",
    tags: ["math", "homework", "matrices"],
    isFavorite: false
  },
  {
    id: "3",
    title: "Tài liệu tham khảo - Data Structures",
    content: "Sách và tài liệu về cấu trúc dữ liệu...",
    category: 'reference',
    course: "CS101",
    createdAt: "2024-08-20",
    updatedAt: "2024-08-20",
    tags: ["reference", "data-structures"],
    isFavorite: true
  }
];

export const DocumentManagement = () => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [filter, setFilter] = useState<'all' | 'note' | 'assignment' | 'reference' | 'project'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'note': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'assignment': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'reference': return 'bg-green-100 text-green-800 border-green-200';
      case 'project': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'note': return '📝 Ghi chú';
      case 'assignment': return '📋 Bài tập';
      case 'reference': return '📚 Tài liệu';
      case 'project': return '🎯 Dự án';
      default: return '';
    }
  };

  const toggleFavorite = (id: string) => {
    setDocuments(docs => 
      docs.map(doc => 
        doc.id === id ? { ...doc, isFavorite: !doc.isFavorite } : doc
      )
    );
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = filter === 'all' || doc.category === filter;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFavorite = !showFavorites || doc.isFavorite;
    return matchesFilter && matchesSearch && matchesFavorite;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quản lý Tài liệu</h1>
            <p className="text-gray-600">Tổ chức và quản lý tài liệu học tập của bạn</p>
          </div>
          <CustomButton className="bg-[#1e1e2f] hover:bg-[#2a2a40] text-white">
            ➕ Tạo tài liệu mới
          </CustomButton>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tổng tài liệu</p>
                <p className="text-3xl font-bold text-gray-800">{documents.length}</p>
              </div>
              <div className="text-4xl">📄</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ghi chú</p>
                <p className="text-3xl font-bold text-blue-600">
                  {documents.filter(d => d.category === 'note').length}
                </p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Bài tập</p>
                <p className="text-3xl font-bold text-orange-600">
                  {documents.filter(d => d.category === 'assignment').length}
                </p>
              </div>
              <div className="text-4xl">📋</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Yêu thích</p>
                <p className="text-3xl font-bold text-red-600">
                  {documents.filter(d => d.isFavorite).length}
                </p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1e2f] text-gray-800"
              />
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  showFavorites
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ⭐ Yêu thích
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-[#1e1e2f] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilter('note')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'note'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📝 Ghi chú
              </button>
              <button
                onClick={() => setFilter('assignment')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'assignment'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📋 Bài tập
              </button>
              <button
                onClick={() => setFilter('reference')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'reference'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📚 Tài liệu
              </button>
              <button
                onClick={() => setFilter('project')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'project'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🎯 Dự án
              </button>
            </div>
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
              {/* Document Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(doc.category)}`}>
                    {getCategoryLabel(doc.category)}
                  </span>
                  <button
                    onClick={() => toggleFavorite(doc.id)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {doc.isFavorite ? '⭐' : '☆'}
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {doc.content}
                </p>
              </div>

              {/* Document Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="text-xs text-gray-500 mb-4">
                  <p>Tạo: {new Date(doc.createdAt).toLocaleDateString('vi-VN')}</p>
                  <p>Cập nhật: {new Date(doc.updatedAt).toLocaleDateString('vi-VN')}</p>
                  {doc.course && <p className="font-medium text-[#1e1e2f]">Khóa học: {doc.course}</p>}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <CustomButton
                    className="flex-1 bg-[#1e1e2f] hover:bg-[#2a2a40] text-white text-sm"
                  >
                    Mở
                  </CustomButton>
                  <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700">
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Không tìm thấy tài liệu nào
            </h3>
            <p className="text-gray-500 mb-4">
              Thử thay đổi bộ lọc hoặc tạo tài liệu mới
            </p>
            <CustomButton className="bg-[#1e1e2f] hover:bg-[#2a2a40] text-white">
              ➕ Tạo tài liệu mới
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};