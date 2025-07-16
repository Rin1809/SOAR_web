import React, { useState, useCallback } from 'react';
import { Card } from './ui/Card';
import { generateSimulationData } from '../services/geminiService';
import { AttackType, GeminiResponse, SimulationStep } from '../types';
import { SOAR_ICONS } from '../constants';

const attackTypes = [AttackType.SQL_INJECTION, AttackType.REVERSE_SHELL, AttackType.XSS];

// cap nhat icon, su dung duong dan png tu constants
const stepDetails = [
    { name: "Phát hiện", icon: SOAR_ICONS.splunk, step: SimulationStep.DETECTED },
    { name: "Điều phối", icon: SOAR_ICONS.python, step: SimulationStep.ORCHESTRATION },
    { name: "Phân tích AI", icon: SOAR_ICONS.gemini, step: SimulationStep.AI_ANALYSIS },
    { name: "Phản ứng", icon: SOAR_ICONS.fortinet, step: SimulationStep.RESPONSE },
    { name: "Thông báo", icon: SOAR_ICONS.notification, step: SimulationStep.NOTIFICATION },
    { name: "Ghi Log", icon: SOAR_ICONS.splunk, step: SimulationStep.LOGGING },
];

export const SimulationPanel: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState<SimulationStep>(SimulationStep.IDLE);
    const [simulationData, setSimulationData] = useState<GeminiResponse | null>(null);

    const runSimulation = useCallback(async (attackType: AttackType) => {
        if (isLoading) return;
        setIsLoading(true);
        setCurrentStep(SimulationStep.IDLE);
        setSimulationData(null);

        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

        setCurrentStep(SimulationStep.DETECTED);
        await delay(1000);

        setCurrentStep(SimulationStep.ORCHESTRATION);
        const data = await generateSimulationData(attackType);
        setSimulationData(data);
        await delay(1000);

        setCurrentStep(SimulationStep.AI_ANALYSIS);
        await delay(2000);

        setCurrentStep(SimulationStep.RESPONSE);
        await delay(1500);

        setCurrentStep(SimulationStep.NOTIFICATION);
        await delay(1500);
        
        setCurrentStep(SimulationStep.LOGGING);
        await delay(1000);

        setCurrentStep(SimulationStep.COMPLETE);
        setIsLoading(false);
    }, [isLoading]);
    
    const getSeverityClass = (severity?: string) => {
        switch (severity) {
            case 'Critical': return 'severity-critical';
            case 'High': return 'severity-high';
            case 'Medium': return 'severity-medium';
            default: return 'severity-low';
        }
    };
    
    const getActionIcon = (action?: string) => {
        switch (action) {
            case 'BLOCK_IP': return '🚫';
            case 'ISOLATE_HOST': return '🔌';
            case 'MONITOR': return '👀';
            default: return '➡️';
        }
    }

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <style>{`
                @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            `}</style>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                {attackTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => runSimulation(type)}
                        disabled={isLoading}
                        className="poetic-button"
                    >
                        {isLoading ? 'Đang mô phỏng...' : `Mô phỏng tấn công ${type}`}
                    </button>
                ))}
            </div>

            {currentStep !== SimulationStep.IDLE && (
                 <div className="mt-8">
                    <ol className="grid grid-cols-3 md:grid-cols-6 items-start gap-4 mb-8">
                        {stepDetails.map((step, index) => (
                             <li key={step.name} className="flex flex-col items-center text-center">
                                <div className={`stepper-icon ${currentStep >= step.step ? 'active' : ''}`}>
                                    {/* hien thi icon png */}
                                    <div className="w-6 h-6">
                                      <img src={step.icon} alt={step.name} className="w-full h-full object-contain p-0.5"/>
                                    </div>
                                </div>
                                <p className={`mt-2 text-xs font-medium ${currentStep >= step.step ? 'text-[var(--text-color-poetic)]' : 'text-[var(--subtext-color-poetic)] opacity-60'}`}>{step.name}</p>
                            </li>
                        ))}
                    </ol>
                    
                     <div className="simulation-output-panel">
                        {currentStep === SimulationStep.DETECTED && <p className="text-center animate-pulse">Phát hiện mối đe dọa bởi Splunk...</p>}
                        {currentStep === SimulationStep.ORCHESTRATION && <p className="text-center animate-pulse">Kích hoạt script Python, thu thập log ngữ cảnh...</p>}
                        {currentStep >= SimulationStep.AI_ANALYSIS && simulationData && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                 <div>
                                     <h3 className="poetic-subtitle mb-2">Phân tích bởi Gemini AI</h3>
                                     <div className="json-output">
                                        {JSON.stringify(simulationData, null, 2)}
                                     </div>
                                 </div>
                                 <div>
                                     <h3 className="poetic-subtitle mb-2">Hành động & Thông báo Tự động</h3>
                                     <div className="space-y-4">
                                        {currentStep >= SimulationStep.RESPONSE && (
                                            <div className="simulation-action-card animate-fade-in">
                                                 <p className="font-semibold flex items-center">{getActionIcon(simulationData.recommended_action.action_code)} Hành động: <span className="ml-2 font-bold text-[var(--primary-color)]">{simulationData.recommended_action.action_code}</span></p>
                                                 <p className="text-sm opacity-80 mt-1">Mục tiêu: {simulationData.recommended_action.target}</p>
                                            </div>
                                        )}
                                        {currentStep >= SimulationStep.NOTIFICATION && (
                                            <div className="simulation-action-card animate-fade-in">
                                                <h4 className="font-bold mb-2">Email gửi đội SOC</h4>
                                                <div
                                                className={`email-alert ${getSeverityClass(simulationData.threat_assessment.severity)}`}>
                                                    <p className="font-semibold">{simulationData.threat_assessment.attack_type} Detected ({simulationData.threat_assessment.severity})</p>
                                                    <p className="text-sm mt-2 whitespace-pre-wrap">{simulationData.human_readable_report}</p>
                                                </div>
                                            </div>
                                        )}
                                        {currentStep >= SimulationStep.LOGGING && (
                                             <p className="text-sm text-center text-green-400 animate-fade-in">✅ Sự cố đã được ghi lại vào Splunk index 'security_enrichment' để kiểm toán.</p>
                                        )}
                                     </div>
                                 </div>
                            </div>
                        )}
                     </div>
                 </div>
            )}
        </Card>
    );
};