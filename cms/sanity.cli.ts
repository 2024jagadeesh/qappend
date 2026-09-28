import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3o6ku5ch',
    dataset: 'production',
  },

  deployment: {
    appId: 'idqwn0p2mtcp4pdu6bqcyrg1',
    autoUpdates: true,
  },
})
