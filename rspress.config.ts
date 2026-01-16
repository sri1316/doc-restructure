import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'Enterprise AI Docs',
  description: 'Documentation for the Enterprise AI platform',
  themeConfig: {
    nav: [
      { text: 'Build', link: '/build/' },
      { text: 'Deploy', link: '/deploy/' },
      { text: 'Support', link: '/support/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Quick Start', link: '/getting-started/quick-start' },
            { text: 'User Onboarding', link: '/getting-started/user-onboarding' },
            { text: 'What is Enterprise AI?', link: '/getting-started/what-is-enterprise-ai' },
            { text: 'Why Enterprise AI?', link: '/getting-started/why-enterprise-ai' },
          ],
        },
        {
          text: 'Setup',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Overview', link: '/setup/' },
            { text: 'Account Management', link: '/setup/account-management' },
            { text: 'Accounts and Roles', link: '/setup/accounts-and-roles' },
            { text: 'Credential Setup', link: '/setup/credential-setup' },
            { text: 'Starlive Setup', link: '/setup/starlive-setup' },
          ],
        },
        {
          text: 'Build',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Overview', link: '/build/' },
            {
              text: 'Data Annotation',
              collapsible: true,
              collapsed: false,
              items: [
                { text: 'Overview', link: '/build/data-annotation/' },
                { text: 'Cancel Annotation', link: '/build/data-annotation/cancel-annotation' },
                { text: 'Submit Annotation', link: '/build/data-annotation/submit-annotation' },
              ],
            },
            {
              text: 'Datasets',
              collapsible: true,
              collapsed: false,
              items: [
                { text: 'Overview', link: '/build/datasets/' },
                { text: 'Create AWS Dataset', link: '/build/datasets/create-aws-dataset' },
              ],
            },
            {
              text: 'Notebooks',
              collapsible: true,
              collapsed: false,
              items: [
                { text: 'Overview', link: '/build/notebooks/' },
                { text: 'Launch Notebook', link: '/build/notebooks/launch-notebook' },
              ],
            },
            {
              text: 'Training',
              collapsible: true,
              collapsed: false,
              items: [
                { text: 'Overview', link: '/build/training/' },
                { text: 'Batch Training', link: '/build/training/batch-training' },
              ],
            },
          ],
        },
        { text: 'Deploy', link: '/deploy/' },
        { text: 'Support', link: '/support/' },
      ],
    },
  },
});
