import { PerformanceSummary } from "@/components/widgets/performance/PerformanceSummary";

export const metadata = {
  title: "Tổng hợp Thành tích | ITS Dashboard",
  description: "Theo dõi điểm số, xếp hạng và năng lực học tập",
};

export default function PerformancePage() {
  return <PerformanceSummary />;
}