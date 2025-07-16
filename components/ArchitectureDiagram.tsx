import React from 'react';
import { Card } from './ui/Card';

// tai cau truc component giong ban goc
export const ArchitectureDiagram: React.FC = () => {
  return (
    <Card className="w-full h-full flex flex-col items-start">
        <h2 className="poetic-title">
            Quy trình SOAR với AI
        </h2>
        <p className="poetic-description mb-6">
            Sơ đồ này minh họa quy trình làm việc tự động. Log được thu thập bởi Splunk và Wazuh. Khi phát hiện mối đe dọa, một script Python sẽ điều phối quy trình: làm giàu dữ liệu, truy vấn Gemini để phân tích sâu và lên kế hoạch phản ứng, thực thi hành động qua API của firewall và gửi thông báo.
        </p>
        <div className="w-full aspect-video bg-black/30 rounded-lg overflow-hidden border border-[rgba(216,191,216,0.2)]">
            <img 
                src="/soar_diagram.png" 
                alt="Sơ đồ kiến trúc hệ thống SOAR" 
                className="w-full h-full object-contain"
            />
        </div>
    </Card>
  );
};