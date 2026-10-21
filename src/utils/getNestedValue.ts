/**
 * Reads a dot-separated path from a nested object, e.g. getNestedValue(obj, 'a.b.c').
 * Returns the path itself if not found, so missing translation keys are visible instead of silently blank.
 */
export function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}
