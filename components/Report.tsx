import React from 'react';
import { Card } from './ui/Card';
import { ArchitectureDiagram } from './ArchitectureDiagram';

const ReportSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="report-section">
    <h2 className="poetic-title">{title}</h2>
    {children}
  </section>
);

const Report: React.FC = () => {
  return (
    <>
      <div className="report-hero">
        <h1 className="poetic-title main-title !text-4xl md:!text-5xl">
          Báo Cáo Kỹ Thuật Hệ Thống SOAR
        </h1>
        <p className="poetic-description mt-4">
          Tài liệu phân tích chi tiết về kiến trúc, luồng hoạt động và kết quả triển khai của hệ thống Giám sát & Ứng phó An ninh mạng Tích hợp AI.
        </p>
      </div>

      <div className="report-container">
        <nav className="report-sidebar">
          <h3 className="poetic-subtitle !text-lg !text-[var(--primary-color)] mb-4">Mục Lục</h3>
          <ul className="space-y-2">
            <li><a href="#tom-tat" className="toc-link">Tóm Tắt</a></li>
            <li><a href="#chuong-1" className="toc-link">1. Giới Thiệu</a></li>
            <li><a href="#chuong-2" className="toc-link">2. Cơ Sở Lý Thuyết</a></li>
            <li><a href="#chuong-3" className="toc-link">3. Phân Tích - Thiết Kế</a></li>
            <li><a href="#chuong-4" className="toc-link">4. Triển Khai & Đánh Giá</a></li>
            <li><a href="#chuong-5" className="toc-link">5. Kết Luận</a></li>
          </ul>
        </nav>
        
        <main className="report-content">
          <ReportSection id="tom-tat" title="Tóm Tắt">
            <p className="poetic-description">
              Báo cáo này trình bày giải pháp xây dựng một hệ thống giám sát và phản ứng an ninh mạng tự động, tích hợp các công nghệ hàng đầu như Splunk, Wazuh, và FortiGate với sức mạnh phân tích của Google Gemini AI. Mục tiêu chính là giải quyết vấn đề "mệt mỏi vì cảnh báo" (alert fatigue) bằng cách tự động hóa quy trình từ phát hiện, làm giàu dữ liệu, phân tích sâu, đến thực thi hành động ngăn chặn. Hệ thống được xây dựng theo triết lý "Automation-first, AI-assisted", nơi AI đóng vai trò như một "Chuyên viên Phân tích Bậc 2" ảo, giúp giảm thời gian phản ứng từ hàng giờ xuống còn vài giây và cho phép đội ngũ an ninh tập trung vào các nhiệm vụ chiến lược hơn.
            </p>
          </ReportSection>

          <ReportSection id="chuong-1" title="Chương 1: Giới Thiệu">
            <Card className="mb-6">
              <h3 className="poetic-subtitle">1.1. Bối cảnh</h3>
              <p className="poetic-description">Sự bùng nổ của dữ liệu log và cảnh báo an ninh đã làm quá tải các Trung tâm Điều hành An ninh (SOC), dẫn đến nguy cơ bỏ sót các mối đe dọa thực sự. Trí tuệ Nhân tạo Tạo sinh (Generative AI), với khả năng hiểu ngữ cảnh và suy luận phức tạp, mang đến một giải pháp đột phá để tự động hóa các phân tích cấp cao, giảm thiểu sức người và tăng tốc độ phản ứng.</p>
            </Card>
            <Card>
              <h3 className="poetic-subtitle">1.2. Mục tiêu & Phạm vi</h3>
              <p className="poetic-description">
                <strong>Mục tiêu:</strong> Xây dựng hệ thống giám sát tập trung, tích hợp Google Gemini để tự động hóa phân tích, và phát triển module ứng phó tự động qua API của FortiGate.
                <br/>
                <strong>Phạm vi:</strong> Xây dựng và kiểm thử trong môi trường lab giả lập, tập trung vào các kịch bản tấn công phổ biến như SQL Injection, Reverse Shell, và DoS.
              </p>
            </Card>
          </ReportSection>

          <ReportSection id="chuong-2" title="Chương 2: Cơ Sở Lý Thuyết">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="poetic-subtitle">2.1. SIEM (Splunk)</h3>
                <p className="poetic-description">Là trung tâm thu thập, chuẩn hóa và phân tích log. Splunk được chọn vì khả năng xử lý dữ liệu lớn và ngôn ngữ truy vấn SPL mạnh mẽ.</p>
              </Card>
              <Card>
                <h3 className="poetic-subtitle">2.2. EDR (Wazuh)</h3>
                <p className="poetic-description">Cung cấp khả năng giám sát sâu trên endpoint, bao gồm giám sát tệp tin (FIM), đánh giá cấu hình (SCA), và giám sát thực thi lệnh.</p>
              </Card>
              <Card>
                <h3 className="poetic-subtitle">2.3. NGFW & API</h3>
                <p className="poetic-description">FortiGate Firewall đóng vai trò là hàng rào bảo vệ và là công cụ phản ứng. API của nó cho phép các script bên ngoài thực thi lệnh chặn IP tự động.</p>
              </Card>
              <Card>
                <h3 className="poetic-subtitle">2.4. Generative AI (Gemini)</h3>
                <p className="poetic-description">Đóng vai trò "Chuyên viên Phân tích Bậc 2", nhận dữ liệu đã sàng lọc, phân tích ngữ nghĩa, đề xuất hành động và tạo báo cáo dễ hiểu.</p>
              </Card>
            </div>
            <figure className="report-figure mt-8">
                <img src="/ai_workflow.png" alt="Sơ đồ hoạt động của AI" className="report-image"/>
                <figcaption>Hình 2.4.2.1: Sơ đồ hệ thống</figcaption>
            </figure>
          </ReportSection>

          <ReportSection id="chuong-3" title="Chương 3: Phân Tích - Thiết Kế Hệ Thống">
            <h3 className="poetic-subtitle">3.1. Kiến trúc logic và luồng dữ liệu</h3>
            <p className="poetic-description mb-6">Luồng dữ liệu của hệ thống được thiết kế hoàn toàn tự động. Dưới đây là sơ đồ minh họa cho kiến trúc và quy trình này, cũng chính là sơ đồ được hiển thị trên trang chủ.</p>
            <ArchitectureDiagram/>
          </ReportSection>

          <ReportSection id="chuong-4" title="Chương 4: Triển Khai và Đánh Giá">
            <p className="poetic-description">Hệ thống được triển khai trên môi trường ảo hóa VMWare Workstation/Proxmox. Quá trình kiểm thử với các kịch bản tấn công thực tế (SQLMap, Reverse Shell bằng PowerShell) cho thấy hệ thống hoạt động hiệu quả:</p>
            <ul className="list-disc list-inside poetic-description mt-4 space-y-2">
              <li><strong>Phát hiện nhanh:</strong> Cảnh báo được kích hoạt gần như ngay lập tức trên Splunk.</li>
              <li><strong>Phân tích thông minh:</strong> AI Gemini phân tích chính xác payload, đánh giá mức độ nghiêm trọng là CRITICAL.</li>
              <li><strong>Phản ứng tức thì:</strong> Hành động `BLOCK_IP` được tự động thực thi trên FortiGate trong vài giây.</li>
              <li><strong>Báo cáo chi tiết:</strong> Email thông báo được gửi đến SOC với đầy đủ thông tin phân tích và hành động đã thực hiện.</li>
            </ul>
            <figure className="report-figure mt-8">
                <img src="/attacker_blocked.png" alt="Kết quả chặn kết nối từ máy Attacker" className="report-image"/>
                <figcaption>Hình 4.7.1.5: Email được gửi đến đổi ngũ SOC</figcaption>
            </figure>
          </ReportSection>
          
          <ReportSection id="chuong-5" title="Chương 5: Kết Luận và Hướng Phát Triển">
              <Card className="mb-6">
                <h3 className="poetic-subtitle">5.1. Kết luận</h3>
                <p className="poetic-description">Dự án đã thành công trong việc xây dựng một hệ thống SOAR hiệu quả, chứng minh được tính khả thi và giá trị của việc tích hợp Generative AI vào quy trình an ninh mạng, giúp tự động hóa, tăng tốc độ phản ứng và nâng cao chất lượng phân tích.</p>
            </Card>
            <Card>
                <h3 className="poetic-subtitle">5.2. Hướng phát triển</h3>
                <p className="poetic-description">Mở rộng phạm vi ứng phó tự động (tích hợp API Sophos, Wazuh Active Response), nâng cao khả năng phân tích chuỗi sự kiện phức tạp của AI, và hoàn thiện giao diện người dùng thành một ứng dụng Splunk tùy chỉnh hoàn chỉnh.</p>
            </Card>
          </ReportSection>
        </main>
      </div>
    </>
  );
};

export default Report;