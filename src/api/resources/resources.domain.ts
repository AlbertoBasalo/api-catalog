import { Resource } from './resource';

export function validateResource(resource: Resource) {
  if (!resource) return false;
  if (resource.name.length <= 2) return false;
}
