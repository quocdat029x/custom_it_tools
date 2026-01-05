import { Users } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Custom Team Mentions',
  path: '/custom-team-mentions',
  description: 'Create custom alias mentions for Microsoft Teams when formal names won\'t do.',
  keywords: ['teams', 'mentions', 'alias', 'nickname', 'microsoft'],
  component: () => import('./custom-team-mentions.vue'),
  icon: Users,
  createdAt: new Date('2026-01-02'),
});
