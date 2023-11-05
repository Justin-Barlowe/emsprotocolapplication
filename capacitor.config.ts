import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'emsprotocolapp',
  webDir: 'dist/emsprotocolapp',
  server: {
    androidScheme: 'https'
  }
};

export default config;
