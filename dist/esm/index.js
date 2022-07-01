import { registerPlugin } from '@capacitor/core';
const CapacitorSegment = registerPlugin('CapacitorSegment', {
    web: () => import('./web').then(m => new m.CapacitorSegmentWeb()),
});
export * from './definitions';
export { CapacitorSegment };
//# sourceMappingURL=index.js.map