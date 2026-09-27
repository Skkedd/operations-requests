# Requests fleet artifact seam

The current Requests cards come from `src/data/demoRequests.js`. They have no
source-owned persistent ID, tenant ownership record, or authenticated read
resolver. The module manifest therefore advertises no artifact types or event
kinds. The shared Fleet Overlay is usable, but a demo card cannot be attached
as an authoritative Request artifact.

Representative development fixture for a future provider (not a live object):

```json
{
  "organizationId": "a1000000-0000-4000-8000-000000000001",
  "sourceModule": "requests",
  "type": "request",
  "id": "a9000000-0000-4000-8000-000000000001",
  "siteId": "a8000000-0000-4000-8000-000000000001",
  "title": "Repair north entrance latch",
  "permission": { "action": "read", "policyKey": "request.read" }
}
```

To enable `request` in `src/fleetManifest.js`, the owning Requests service
must first persist an organization and site scoped request record, expose a
stable ID, and resolve a deep link using the current signed-in user's
capability and site scope. The resolver must return unavailable after access
revocation or deletion. Only then may the provider create a Fleet artifact
pointer and emit assignment or status events. Display metadata in a message
does not grant access.
