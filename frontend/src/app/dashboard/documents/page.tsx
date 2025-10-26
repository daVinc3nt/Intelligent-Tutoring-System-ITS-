import { DocumentManagement } from '@/components/widgets/documents/DocumentManagement';

export const metadata = {
  title: 'Quản lý Tài liệu | Student Management System',
  description: 'Tổ chức và quản lý tài liệu học tập',
};

export default function DocumentsPage() {
  return <DocumentManagement />;
}