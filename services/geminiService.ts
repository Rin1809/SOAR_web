
import { GoogleGenAI, Type } from "@google/genai";
import type { GeminiResponse } from '../types';

// Ensure the API key is available in the environment variables
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this showcase, we'll throw an error if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        incident_summary: {
            type: Type.STRING,
            description: "A very brief, one-sentence summary of the incident."
        },
        threat_assessment: {
            type: Type.OBJECT,
            properties: {
                attack_type: {
                    type: Type.STRING,
                    description: "The specific type of attack identified (e.g., 'SQL Injection')."
                },
                severity: {
                    type: Type.STRING,
                    enum: ['Low', 'Medium', 'High', 'Critical'],
                    description: "The assessed severity level of the incident."
                }
            }
        },
        recommended_action: {
            type: Type.OBJECT,
            properties: {
                action_code: {
                    type: Type.STRING,
                    enum: ['BLOCK_IP', 'ISOLATE_HOST', 'MONITOR', 'IGNORE'],
                    description: "The machine-readable code for the recommended action."
                },
                target: {
                    type: Type.STRING,
                    description: "The target for the action (e.g., an IP address, a hostname)."
                },
                reasoning: {
                    type: Type.STRING,
                    description: "A brief justification for the recommended action."
                }
            }
        },
        human_readable_report: {
            type: Type.STRING,
            description: "A detailed, human-readable report of the incident in Vietnamese, suitable for an email notification to a SOC team. Include a summary, analysis of the payload/activity, and the action taken."
        }
    }
};

const attackPrompts: Record<string, string> = {
    'SQL Injection': `Simulated alert: "SQL Injection attack detected from IP 188.114.97.3 targeting 'viewprofile.aspx' on our web server. Payload contains 'UNION ALL SELECT' and 'xp_cmdshell'."`,
    'Reverse Shell': `Simulated alert: "Reverse Shell attempt detected from host WEBSERVER (192.168.20.10) to C2 server at 103.45.12.89. The process 'powershell.exe' initiated a TCP connection using System.Net.Sockets.TCPClient."`,
    'Cross-Site Scripting': `Simulated alert: "A Cross-Site Scripting (XSS) attack was detected from IP 203.0.113.75. The payload '<script>alert(\"XSS\")</script>' was found in a request to 'search.php'."`
};


export const generateSimulationData = async (attackType: string): Promise<GeminiResponse> => {
    const prompt = attackPrompts[attackType];
    if (!prompt) {
        throw new Error("Invalid attack type specified.");
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are an advanced cybersecurity SOAR system. I will give you a simulated alert. Your task is to generate a detailed JSON response that includes a threat assessment, a recommended action, and a human-readable report in Vietnamese. The simulated alert is: "${prompt}"`,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });
        
        const jsonText = response.text;
        return JSON.parse(jsonText) as GeminiResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Fallback for when API call fails (e.g., key not configured)
        return {
            incident_summary: "AI analysis failed. Displaying placeholder data.",
            threat_assessment: { attack_type: "Error", severity: "Critical" },
            recommended_action: { action_code: "IGNORE", target: "N/A", reasoning: "Could not connect to Gemini API." },
            human_readable_report: "Không thể kết nối đến Google Gemini API để phân tích. Đây là dữ liệu mẫu. Vui lòng kiểm tra cấu hình API Key."
        };
    }
};

