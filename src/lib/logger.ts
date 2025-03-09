
type LogType = 'pageView' | 'serviceView' | 'contactSubmit' | 'externalLink' | 'serviceCardClick' | 'jobApplication';

export interface LogData {
  type: LogType;
  path?: string;
  serviceId?: number;
  serviceName?: string;
  position?: string;
  additionalData?: Record<string, unknown>;
  timestamp: number;
  [key: string]: unknown; // Add index signature to make it compatible with LogItem
}

// Store logs in localStorage for demo purposes
const LOGS_STORAGE_KEY = 'enabler_activity_logs';

/**
 * Log user activity
 */
export const logActivity = (
  type: LogType, 
  data: Omit<LogData, 'type' | 'timestamp'>
): void => {
  const logEntry: LogData = {
    type,
    ...data,
    timestamp: Date.now(),
  };
  
  // Get existing logs
  const existingLogsJson = localStorage.getItem(LOGS_STORAGE_KEY);
  const existingLogs: LogData[] = existingLogsJson ? JSON.parse(existingLogsJson) : [];
  
  // Add new log
  const updatedLogs = [...existingLogs, logEntry];
  
  // Save to localStorage
  localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(updatedLogs));
  
  // Also log to console for development visibility
  console.log('Activity logged:', logEntry);
};

/**
 * Get all logs for debugging/viewing
 */
export const getAllLogs = (): LogData[] => {
  const logsJson = localStorage.getItem(LOGS_STORAGE_KEY);
  return logsJson ? JSON.parse(logsJson) : [];
};

/**
 * Clear all logs (for debugging/privacy)
 */
export const clearLogs = (): void => {
  localStorage.removeItem(LOGS_STORAGE_KEY);
};
