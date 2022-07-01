export interface CapacitorSegmentPlugin {
    initialize(options: InitializeOptions): Promise<void>;
    identify(options: IdentifyOptions): Promise<void>;
    track(options: TrackOptions): Promise<void>;
    page(options: PageOptions): Promise<void>;
    reset(): Promise<void>;
}
export declare type InitializeOptions = {
    key: string;
    trackLifecycle?: boolean;
    recordScreenViews?: boolean;
    proxyHost?: string;
};
export declare type Identity = {
    userId: string;
};
export declare type IdentifyOptions = Identity & {
    traits?: Record<string, unknown>;
    options?: Record<string, unknown>;
};
export declare type TrackOptions = {
    eventName: string;
    properties: Record<string, unknown>;
};
export declare type PageOptions = {
    pathname: string;
};
