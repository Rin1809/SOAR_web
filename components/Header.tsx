import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="poetic-title main-title">
        Hệ Thống Giám Sát & Ứng Phó An Ninh Mạng với AI
      </h1>
      <p className="poetic-description max-w-4xl mx-auto mt-4">
        Một buổi trình diễn hệ thống an ninh mạng "Tự động là trên hết, AI hỗ trợ", tích hợp Splunk, Wazuh, và FortiGate với Google Gemini để chống lại sự mệt mỏi vì cảnh báo và tự động hóa phản ứng sự cố.
      </p>
    </header>
  );
};