import React from 'react';
import { Card } from './ui/Card';
import { SOAR_ICONS } from '../constants';

const tech = [
  { name: 'Google Gemini', role: 'Phân tích và lên kế hoạch phản ứng bằng AI.', icon: SOAR_ICONS.gemini },
  { name: 'Splunk', role: 'SIEM trung tâm để tổng hợp log và phát hiện mối đe dọa.', icon: SOAR_ICONS.splunk },
  { name: 'Wazuh', role: 'Giám sát an ninh điểm cuối (FIM, SCA).', icon: SOAR_ICONS.wazuh },
  { name: 'FortiGate', role: 'NGFW để bảo vệ mạng và phản ứng tự động.', icon: SOAR_ICONS.fortinet },
  { name: 'Python', role: 'Script điều phối để tự động hóa quy trình.', icon: SOAR_ICONS.python },
];

export const TechStack: React.FC = () => {
  return (
    <div>
      <h2 className="poetic-title">Ngăn xếp công nghệ</h2>
      <div className="space-y-4 mt-6">
        {tech.map((item) => (
          <Card key={item.name} className="tech-stack-card">
            {/* dung img de hien thi icon png */}
            <div className="tech-stack-icon">
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="tech-stack-name">{item.name}</h3>
              <p className="tech-stack-role">{item.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};