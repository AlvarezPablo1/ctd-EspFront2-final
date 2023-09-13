import { setupServer } from 'msw/node';
import { handlers } from './Quote.handlers';

export const server = setupServer(...handlers);