import { test as setup } from '@playwright/test';

setup('Global Setup', async ({ }) => {
  console.log('Global Setup Called ...');
  // Initialize the database
});