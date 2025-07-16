
export enum AttackType {
  SQL_INJECTION = 'SQL Injection',
  REVERSE_SHELL = 'Reverse Shell',
  XSS = 'Cross-Site Scripting',
}

export interface GeminiResponse {
  incident_summary: string;
  threat_assessment: {
    attack_type: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
  };
  recommended_action: {
    action_code: 'BLOCK_IP' | 'ISOLATE_HOST' | 'MONITOR' | 'IGNORE';
    target: string;
    reasoning: string;
  };
  human_readable_report: string;
}

export enum SimulationStep {
  IDLE,
  DETECTED,
  ORCHESTRATION,
  AI_ANALYSIS,
  RESPONSE,
  NOTIFICATION,
  LOGGING,
  COMPLETE,
}
