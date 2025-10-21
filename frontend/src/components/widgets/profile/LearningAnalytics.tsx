"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, BarChart3, CheckCircle2, FileCheck, Clock, Zap, Target } from "lucide-react";

interface AnalyticsData {
  academicProgress: {
    currentGPA: number;
    previousGPA: number;
    trend: 'up' | 'down' | 'stable';
    percentChange: number;
  };
  subjectPerformance: {
    name: string;
    currentScore: number;
    previousScore: number;
    trend: 'up' | 'down' | 'stable';
    percentChange: number;
    color: string;
  }[];
  attendanceRate: number;
  assignmentCompletion: number;
  examScores: {
    month: string;
    score: number;
    average: number;
  }[];
  learningTime: {
    week: string;
    hours: number;
  }[];
  strengths: string[];
  improvements: string[];
}

export const LearningAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState<'semester' | 'year' | 'all'>('semester');

  // Mock analytics data
  const [analyticsData] = useState<AnalyticsData>({
    academicProgress: {
      currentGPA: 8.75,
      previousGPA: 8.45,
      trend: 'up',
      percentChange: 3.55
    },
    subjectPerformance: [
      { name: "Toán", currentScore: 9.0, previousScore: 8.5, trend: 'up', percentChange: 5.88, color: "bg-blue-500" },
      { name: "Văn", currentScore: 8.8, previousScore: 8.9, trend: 'down', percentChange: -1.12, color: "bg-green-500" },
      { name: "Anh", currentScore: 8.7, previousScore: 8.4, trend: 'up', percentChange: 3.57, color: "bg-purple-500" },
      { name: "Lý", currentScore: 8.5, previousScore: 8.8, trend: 'down', percentChange: -3.41, color: "bg-red-500" },
      { name: "Hóa", currentScore: 9.2, previousScore: 8.6, trend: 'up', percentChange: 6.98, color: "bg-yellow-500" },
      { name: "Sử", currentScore: 8.2, previousScore: 8.0, trend: 'up', percentChange: 2.50, color: "bg-indigo-500" }
    ],
    attendanceRate: 96.5,
    assignmentCompletion: 98.2,
    examScores: [
      { month: "T9", score: 8.2, average: 7.8 },
      { month: "T10", score: 8.5, average: 7.9 },
      { month: "T11", score: 8.8, average: 8.1 },
      { month: "T12", score: 8.7, average: 8.0 },
      { month: "T1", score: 9.0, average: 8.2 },
      { month: "T2", score: 8.9, average: 8.3 }
    ],
    learningTime: [
      { week: "T1", hours: 25 },
      { week: "T2", hours: 28 },
      { week: "T3", hours: 22 },
      { week: "T4", hours: 30 },
      { week: "T5", hours: 27 },
      { week: "T6", hours: 32 }
    ],
    strengths: [
      "Toán học - Tư duy logic tốt",
      "Hóa học - Hiểu bản chất phản ứng",
      "Tiếng Anh - Giao tiếp tự tin",
      "Hoàn thành bài tập đầy đủ",
      "Tham gia tích cực vào lớp"
    ],
    improvements: [
      "Vật lý - Cần cải thiện kỹ năng giải bài tập",
      "Văn học - Phát triển khả năng phân tích",
      "Quản lý thời gian học tập",
      "Tăng cường ôn tập trước kiểm tra"
    ]
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
            Phân tích học tập
          </h1>
          <p className="text-gray-600 mt-1 font-medium">Theo dõi tiến độ và phát triển kỹ năng của bạn</p>
        </div>
        <div className="flex space-x-2">
          <select 
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value as 'semester' | 'year' | 'all')}
            className="px-4 py-2 border border-indigo-200 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-medium text-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <option value="semester">Học kỳ này</option>
            <option value="year">Năm học</option>
            <option value="all">Toàn bộ</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* GPA Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-indigo-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">GPA Hiện tại</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {analyticsData.academicProgress.currentGPA}
              </p>
              <div className={`flex items-center gap-1 text-sm ${getTrendColor(analyticsData.academicProgress.trend)}`}>
                {getTrendIcon(analyticsData.academicProgress.trend)}
                <span>
                  {analyticsData.academicProgress.percentChange > 0 ? '+' : ''}
                  {analyticsData.academicProgress.percentChange.toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
              <BarChart3 className="w-10 h-10 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Attendance Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tỷ lệ tham gia</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {analyticsData.attendanceRate}%
              </p>
              <p className="text-sm text-green-600 font-medium">Rất tốt</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
          </div>
        </div>

        {/* Assignment Completion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Hoàn thành BT</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                {analyticsData.assignmentCompletion}%
              </p>
              <p className="text-sm text-purple-600 font-medium">Xuất sắc</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg">
              <FileCheck className="w-10 h-10 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Study Time */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Thời gian học/tuần</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {analyticsData.learningTime[analyticsData.learningTime.length - 1]?.hours || 0}h
              </p>
              <p className="text-sm text-orange-600 font-medium">Đều đặn</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
              <Clock className="w-10 h-10 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Performance */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-indigo-100">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent mb-4">
            Kết quả theo môn học
          </h3>
          <div className="space-y-4">
            {analyticsData.subjectPerformance.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                  <span className="font-medium text-gray-700">{subject.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-bold text-gray-800">{subject.currentScore}</div>
                    <div className={`flex items-center gap-1 text-sm ${getTrendColor(subject.trend)}`}>
                      {getTrendIcon(subject.trend)}
                      {subject.percentChange > 0 ? '+' : ''}{subject.percentChange.toFixed(1)}%
                    </div>
                  </div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${subject.color} transition-all duration-300`}
                      style={{ width: `${(subject.currentScore / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Scores Trend */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-100">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent mb-6">
            Xu hướng điểm kiểm tra
          </h3>
          
          {/* Legend */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Điểm của bạn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-500">TB lớp</span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-72">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 font-medium">
              <span>10</span>
              <span>7.5</span>
              <span>5</span>
              <span>2.5</span>
              <span>0</span>
            </div>

            {/* Chart area with lines */}
            <div className="ml-10 mr-2 h-full relative pb-8">
              {/* Background grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[10, 7.5, 5, 2.5, 0].map((value, idx) => (
                  <div key={idx} className="border-t border-gray-100"></div>
                ))}
              </div>

              {/* SVG for connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ height: 'calc(100% - 2rem)' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.05 }} />
                  </linearGradient>
                </defs>
                
                {/* Area fill under student line */}
                <path
                  d={`M ${(100 / (analyticsData.examScores.length - 1)) * 0}% ${100 - (analyticsData.examScores[0].score / 10) * 100}% 
                      ${analyticsData.examScores.map((data, index) => 
                        `L ${(100 / (analyticsData.examScores.length - 1)) * index}% ${100 - (data.score / 10) * 100}%`
                      ).join(' ')}
                      L ${100}% 100% L 0% 100% Z`}
                  fill="url(#areaGradient)"
                />

                {/* Student score line */}
                <polyline
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={analyticsData.examScores.map((data, index) => 
                    `${(100 / (analyticsData.examScores.length - 1)) * index}%,${100 - (data.score / 10) * 100}%`
                  ).join(' ')}
                />

                {/* Average line */}
                <polyline
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={analyticsData.examScores.map((data, index) => 
                    `${(100 / (analyticsData.examScores.length - 1)) * index}%,${100 - (data.average / 10) * 100}%`
                  ).join(' ')}
                />

                {/* Data points for student scores */}
                {analyticsData.examScores.map((data, index) => (
                  <g key={`student-${index}`}>
                    <circle
                      cx={`${(100 / (analyticsData.examScores.length - 1)) * index}%`}
                      cy={`${100 - (data.score / 10) * 100}%`}
                      r="5"
                      fill="white"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      className="transition-all hover:r-7"
                    />
                    {data.score >= 9.0 && (
                      <circle
                        cx={`${(100 / (analyticsData.examScores.length - 1)) * index}%`}
                        cy={`${100 - (data.score / 10) * 100}%`}
                        r="8"
                        fill="#fbbf24"
                        opacity="0.3"
                        className="animate-ping"
                      />
                    )}
                  </g>
                ))}

                {/* Data points for average scores */}
                {analyticsData.examScores.map((data, index) => (
                  <circle
                    key={`avg-${index}`}
                    cx={`${(100 / (analyticsData.examScores.length - 1)) * index}%`}
                    cy={`${100 - (data.average / 10) * 100}%`}
                    r="4"
                    fill="white"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                ))}
              </svg>

              {/* Data points with labels */}
              <div className="absolute inset-0 flex justify-between items-end" style={{ height: 'calc(100% - 2rem)' }}>
                {analyticsData.examScores.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end group relative">
                    {/* Hover tooltip */}
                    <div className="absolute bottom-full mb-12 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-center whitespace-nowrap">
                        <div className="text-xs font-medium">Điểm của bạn</div>
                        <div className="text-lg font-bold">{data.score}</div>
                        <div className="text-xs opacity-75">TB lớp: {data.average}</div>
                      </div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-600 mx-auto"></div>
                    </div>

                    {/* Month label */}
                    <div className="text-xs font-semibold text-gray-600 mt-4">
                      {data.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary stats */}
          <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-500 font-medium">Cao nhất</p>
              <p className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {Math.max(...analyticsData.examScores.map(d => d.score))}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 font-medium">Trung bình</p>
              <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {(analyticsData.examScores.reduce((sum, d) => sum + d.score, 0) / analyticsData.examScores.length).toFixed(1)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 font-medium">Xu hướng</p>
              <div className="flex items-center justify-center gap-1">
                {analyticsData.examScores[analyticsData.examScores.length - 1].score > 
                 analyticsData.examScores[0].score ? (
                  <>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-bold text-green-600">Tăng</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-bold text-red-600">Giảm</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Điểm mạnh
            </span>
          </h3>
          <div className="space-y-3">
            {analyticsData.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50/50 transition-colors">
                <div className="w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Improvements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-orange-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <span className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
              Cần cải thiện
            </span>
          </h3>
          <div className="space-y-3">
            {analyticsData.improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50/50 transition-colors">
                <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Progress Timeline */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-purple-100">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-4">
          Tiến độ học tập theo tuần
        </h3>
        <div className="flex items-end justify-between space-x-2 h-40">
          {analyticsData.learningTime.map((week, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="relative w-full">
                <div
                  className="bg-gradient-to-t from-purple-600 to-fuchsia-500 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
                  style={{ height: `${(week.hours / 35) * 120}px` }}
                ></div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {week.hours}h
                </div>
                <div className="text-xs text-gray-500 font-medium">{week.week}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-lg">
          <p className="text-sm text-center font-medium text-purple-700">
            Trung bình: {(analyticsData.learningTime.reduce((sum, week) => sum + week.hours, 0) / analyticsData.learningTime.length).toFixed(1)} giờ/tuần
          </p>
        </div>
      </div>
    </div>
  );
};