import React from 'react';
import { Header } from './Header';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { SimulationPanel } from './SimulationPanel';
import { TechStack } from './TechStack';
import { Features } from './Features';
import { SOAR_ICONS } from '../constants';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <ArchitectureDiagram />
                </div>
                <div className="lg:col-span-2">
                    <TechStack />
                </div>
            </div>

            <div className="mt-24">
               <h2 className="poetic-title text-center">Mô phỏng trực tiếp</h2>
               <p className="poetic-description text-center mb-8 max-w-3xl mx-auto">
                Trải nghiệm quy trình phản ứng sự cố tự động. Chọn một kịch bản tấn công để xem hệ thống, với sự hỗ trợ của Google Gemini, phát hiện, phân tích và vô hiệu hóa các mối đe dọa gần như trong thời gian thực.
              </p>
              <SimulationPanel />
            </div>
            
            <div className="mt-24">
              <Features />
            </div>

            <footer className="text-center mt-20 text-[var(--subtext-color-poetic)] opacity-80">
                <div className="flex justify-center items-center space-x-2">
                    <span>Built with</span>
                    <img src={SOAR_ICONS.react} alt="React" className="built-with-icon" />
                    <span>,</span>
                    <img src={SOAR_ICONS.tailwind} alt="Tailwind CSS" className="built-with-icon" />
                    <span> and</span>
                    <img src={SOAR_ICONS.gemini} alt="Google Gemini" className="built-with-icon" />
                </div>
                <p className="mt-4 text-sm">A modern showcase of a cybersecurity automation project.</p>
            </footer>
        </>
    );
};