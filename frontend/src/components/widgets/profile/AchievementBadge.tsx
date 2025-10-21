"use client";

import { Trophy, Star, Users, Crown, Sparkles, BookOpen, Calendar, Target, Award, Microscope } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'academic' | 'attendance' | 'participation' | 'leadership' | 'special';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  earnedDate?: string;
  progress?: {
    current: number;
    target: number;
  };
  isEarned: boolean;
}

// Map icon strings to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "🏆": Trophy,
  "⭐": Star,
  "🧮": Award,
  "🌟": Sparkles,
  "🔬": Microscope,
  "trophy": Trophy,
  "star": Star,
  "award": Award,
  "sparkles": Sparkles,
  "microscope": Microscope,
  "book": BookOpen,
  "calendar": Calendar,
  "target": Target,
  "crown": Crown,
  "users": Users,
};

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'small' | 'medium' | 'large';
  showProgress?: boolean;
}

export const AchievementBadge = ({ 
  achievement, 
  size = 'medium', 
  showProgress = false 
}: AchievementBadgeProps) => {
  
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return {
          container: 'p-3',
          icon: 'text-2xl',
          title: 'text-sm',
          description: 'text-xs'
        };
      case 'large':
        return {
          container: 'p-6',
          icon: 'text-5xl',
          title: 'text-lg',
          description: 'text-sm'
        };
      default:
        return {
          container: 'p-4',
          icon: 'text-3xl',
          title: 'text-base',
          description: 'text-sm'
        };
    }
  };

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return {
          border: 'border-yellow-400',
          bg: achievement.isEarned ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-50',
          shadow: achievement.isEarned ? 'shadow-lg shadow-yellow-200/50' : 'shadow-md',
          titleColor: achievement.isEarned ? 'text-yellow-800' : 'text-gray-400',
          descColor: achievement.isEarned ? 'text-yellow-600' : 'text-gray-400',
          glow: achievement.isEarned ? 'ring-2 ring-yellow-200' : ''
        };
      case 'rare':
        return {
          border: 'border-purple-400',
          bg: achievement.isEarned ? 'bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-gray-50',
          shadow: achievement.isEarned ? 'shadow-lg shadow-purple-200/50' : 'shadow-md',
          titleColor: achievement.isEarned ? 'text-purple-800' : 'text-gray-400',
          descColor: achievement.isEarned ? 'text-purple-600' : 'text-gray-400',
          glow: achievement.isEarned ? 'ring-2 ring-purple-200' : ''
        };
      case 'uncommon':
        return {
          border: 'border-blue-400',
          bg: achievement.isEarned ? 'bg-gradient-to-br from-blue-50 to-cyan-50' : 'bg-gray-50',
          shadow: achievement.isEarned ? 'shadow-lg shadow-blue-200/50' : 'shadow-md',
          titleColor: achievement.isEarned ? 'text-blue-800' : 'text-gray-400',
          descColor: achievement.isEarned ? 'text-blue-600' : 'text-gray-400',
          glow: achievement.isEarned ? 'ring-2 ring-blue-200' : ''
        };
      default: // common
        return {
          border: 'border-green-400',
          bg: achievement.isEarned ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gray-50',
          shadow: achievement.isEarned ? 'shadow-lg shadow-green-200/50' : 'shadow-md',
          titleColor: achievement.isEarned ? 'text-green-800' : 'text-gray-400',
          descColor: achievement.isEarned ? 'text-green-600' : 'text-gray-400',
          glow: achievement.isEarned ? 'ring-2 ring-green-200' : ''
        };
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800';
      case 'attendance':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800';
      case 'participation':
        return 'bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-800';
      case 'leadership':
        return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800';
      case 'special':
        return 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="w-3 h-3 inline mr-1" />;
      case 'attendance':
        return <Calendar className="w-3 h-3 inline mr-1" />;
      case 'participation':
        return <Users className="w-3 h-3 inline mr-1" />;
      case 'leadership':
        return <Crown className="w-3 h-3 inline mr-1" />;
      case 'special':
        return <Star className="w-3 h-3 inline mr-1" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return 'Học tập';
      case 'attendance': return 'Chuyên cần';
      case 'participation': return 'Tham gia';
      case 'leadership': return 'Lãnh đạo';
      case 'special': return 'Đặc biệt';
      default: return '';
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'Huyền thoại';
      case 'rare': return 'Hiếm';
      case 'uncommon': return 'Khá hiếm';
      case 'common': return 'Thường';
      default: return '';
    }
  };

  const getProgressPercentage = () => {
    if (!achievement.progress) return 0;
    return (achievement.progress.current / achievement.progress.target) * 100;
  };

  const sizeClasses = getSizeClasses();
  const rarityStyles = getRarityStyles(achievement.rarity);
  
  // Get the icon component
  const IconComponent = iconMap[achievement.icon] || Trophy;

  return (
    <div 
      className={`
        relative rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer
        ${rarityStyles.border} ${rarityStyles.bg} ${rarityStyles.shadow} ${rarityStyles.glow}
        ${sizeClasses.container}
        ${!achievement.isEarned ? 'grayscale opacity-60' : ''}
      `}
    >
      {/* Rarity Indicator */}
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryStyles(achievement.category)}`}>
          {getRarityLabel(achievement.rarity)}
        </span>
      </div>

      {/* Achievement Content */}
      <div className="flex flex-col items-center text-center">
        {/* Icon with gradient background */}
        <div className={`${sizeClasses.icon} mb-3 p-4 rounded-full ${
          achievement.isEarned 
            ? 'bg-gradient-to-br from-yellow-100 to-orange-100' 
            : 'bg-gray-100'
        }`}>
          <IconComponent className={`w-full h-full ${
            achievement.isEarned 
              ? 'text-yellow-600' 
              : 'text-gray-400'
          }`} />
        </div>

        {/* Title */}
        <h3 className={`font-bold ${sizeClasses.title} ${rarityStyles.titleColor} mb-1`}>
          {achievement.title}
        </h3>

        {/* Description */}
        <p className={`${sizeClasses.description} ${rarityStyles.descColor} mb-3 leading-relaxed`}>
          {achievement.description}
        </p>

        {/* Progress Bar (if not earned and has progress) */}
        {!achievement.isEarned && achievement.progress && showProgress && (
          <div className="w-full mb-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1 font-medium">
              <span>Tiến độ</span>
              <span>{achievement.progress.current}/{achievement.progress.target}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1 font-medium">
              {getProgressPercentage().toFixed(1)}% hoàn thành
            </div>
          </div>
        )}

        {/* Earned Date */}
        {achievement.isEarned && achievement.earnedDate && (
          <div className="text-xs text-gray-500 mt-2 font-medium">
            Đạt được: {new Date(achievement.earnedDate).toLocaleDateString('vi-VN')}
          </div>
        )}

        {/* Category Badge */}
        <div className={`px-3 py-1.5 rounded-full text-xs font-semibold mt-3 ${getCategoryStyles(achievement.category)}`}>
          {getCategoryIcon(achievement.category)}
          {getCategoryLabel(achievement.category)}
        </div>
      </div>

      {/* Shine Effect for Earned Achievements */}
      {achievement.isEarned && (
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform rotate-45 animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

// Component hiển thị danh sách achievements
interface AchievementGridProps {
  achievements: Achievement[];
  filter?: 'all' | 'earned' | 'unearned';
  category?: Achievement['category'] | 'all';
}

export const AchievementGrid = ({ 
  achievements, 
  filter = 'all',
  category = 'all' 
}: AchievementGridProps) => {
  
  const filteredAchievements = achievements.filter(achievement => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'earned' && achievement.isEarned) ||
      (filter === 'unearned' && !achievement.isEarned);
    
    const matchesCategory = 
      category === 'all' || 
      achievement.category === category;
    
    return matchesFilter && matchesCategory;
  });

  const earnedCount = achievements.filter(a => a.isEarned).length;
  const totalCount = achievements.length;

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-indigo-100">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Thành tích
            </h2>
            <p className="text-gray-600 font-medium">Theo dõi quá trình học tập của bạn</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {earnedCount}/{totalCount}
            </div>
            <div className="text-sm text-gray-500 font-medium mb-2">Đã đạt được</div>
            <div className="w-32 bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(earnedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAchievements.map((achievement) => (
          <AchievementBadge
            key={achievement.id}
            achievement={achievement}
            showProgress={!achievement.isEarned}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-12 text-center border border-gray-100">
          <div className="mb-4 flex justify-center">
            <div className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full">
              <Trophy className="w-16 h-16 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Không có thành tích nào
          </h3>
          <p className="text-gray-500 font-medium">
            Tiếp tục học tập để mở khóa những thành tích mới!
          </p>
        </div>
      )}
    </div>
  );
};