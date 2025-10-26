import { CourseManagement } from '@/components/widgets/courses/CourseManagement';

export const metadata = {
  title: 'Quản lý Khóa học | Student Management System',
  description: 'Quản lý các khóa học đã đăng ký và theo dõi tiến độ học tập',
};

export default function CoursesPage() {
  return <CourseManagement />;
}