import { defineModuleManifest } from './foundation/contracts'

export const requestsManifest = defineModuleManifest({
  key: 'requests',
  name: 'Operations Requests',
  path: '/requests',
  artifactTypes: ['request', 'work_order', 'approval'],
  eventKinds: ['work_order.assigned', 'approval.required'],
})
