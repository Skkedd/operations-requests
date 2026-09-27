import { defineModuleManifest } from './foundation/contracts'

export const requestsManifest = defineModuleManifest({
  key: 'requests',
  name: 'Operations Requests',
  path: '/requests',
  // No source-owned persisted request IDs or authorization resolver yet.
  artifactTypes: [],
  eventKinds: [],
})
