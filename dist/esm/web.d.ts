import { WebPlugin } from '@capacitor/core';
import type { CapacitorSegmentPlugin, IdentifyOptions, InitializeOptions, PageOptions, TrackOptions } from './definitions';
declare global {
    interface Window {
        analytics?: any;
    }
}
export declare class CapacitorSegmentWeb extends WebPlugin implements CapacitorSegmentPlugin {
    initialize(options: InitializeOptions): Promise<void>;
    identify(options: IdentifyOptions): Promise<void>;
    track(options: TrackOptions): Promise<void>;
    page(options: PageOptions): Promise<void>;
    reset(): Promise<void>;
    /**
     * Loaded single script with provided id and source
     * @param id - unique identifier of the script
     * @param src - source of the script
     */
    private loadScript;
}
