export interface Config {
    authUrl: string;
    tablePageLimit: number;
    msAlertDisplayTime: string;
}

export const defaultConfig: Config = {
    authUrl: '',
    tablePageLimit: 100,
    msAlertDisplayTime: '5000',
};

export const Tower = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
Tower.config = { ...window.env };

export const authUrl = () => Tower.config.authUrl;
export const tablePageLimit = () => Tower.config.tablePageLimit;
export const msAlertDisplayTime = () => Tower.config.msAlertDisplayTime;
