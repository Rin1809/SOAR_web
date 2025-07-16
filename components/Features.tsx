import React from 'react';
import { Card } from './ui/Card';

const features = [
  { title: "Phân tích Tự động Cấp 2", description: "Gemini hoạt động như một chuyên viên SOC tự động, thực hiện các bước điều tra sâu mà trước đây đòi hỏi chuyên môn của con người." },
  { title: "Phản ứng Gần như Tức thì", description: "Hệ thống giảm thời gian phản ứng sự cố từ hàng giờ xuống còn vài giây, tự động chặn mối đe dọa qua API của firewall." },
  { title: "Giảm Thiểu Mệt mỏi vì Cảnh báo", description: "Bằng cách tự động hóa việc sàng lọc và phân tích ban đầu, hệ thống cho phép các chuyên gia tập trung vào các nhiệm vụ chiến lược, ưu tiên cao." },
  { title: "Báo cáo Dễ hiểu cho Con người", description: "AI tạo ra các báo cáo sự cố rõ ràng, súc tích bằng ngôn ngữ tự nhiên, giúp dữ liệu phức tạp trở nên dễ hiểu cho mọi đối tượng." }
];

export const Features: React.FC = () => {
  return (
    <div>
      <h2 className="poetic-title text-center mb-8">Thành tựu chính</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center h-full">
            <h3 className="poetic-subtitle !text-lg !text-[var(--primary-color)] mb-2">{feature.title}</h3>
            <p className="poetic-description">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};