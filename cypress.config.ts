import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Verifies that the file was downloaded correctly
      on('task', verifyDownloadTasks);
    },
  },
});
