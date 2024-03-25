export interface AppConfig {
  name: string;
  website: string;
  version: string;
  description: string;
  apiUrl: string;
  ipfsGateway: string;
};

export const appConfig: AppConfig = {
  name: 'Index Chat',
  website: 'https://index.network',
  version: '1',
  description: 'Chat with your indexes, easy as pie.',
  apiUrl: 'https://dev.index.network',
  ipfsGateway: 'https://indexas.infura-ipfs.io/ipfs',
};