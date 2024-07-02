export declare const PROTOCAL_NAME = "HTTP-WEBRTC";
export declare const PROTOCAL_VERSION = "1.0";
export declare const PROTOCAL = "HTTP-WEBRTC/1.0";
export declare const DEFAULT_TIMEOUT_MS = 60000;
export declare const R: number;
export declare const N: number;
export declare function encodeLine(encoder: TextEncoder, idBytes: Uint8Array, line: string): Uint8Array;
export declare function concatUint8Array(a: Uint8Array, b: Uint8Array): Uint8Array;
export declare function randomUInt32(): number;
export declare function statusCodeToStatusText(statusCode: number): string;