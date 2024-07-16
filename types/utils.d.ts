export declare const DEFAULT_MAX_MESSAGE_SIZE = 16384;
export declare const DEFAULT_TIMEOUT_MS = 60000;
export declare const DEFAULT_BUFFER_SIZE = 4096;
export declare function concatUint8Array(a: Uint8Array, b: Uint8Array): Uint8Array;
export declare function writeToUint8Array(buffer: Uint8Array, offset: number, chunk: Uint8Array): Uint8Array;
export declare function randomUInt32(): number;
export declare function writableStreamFromChannel(channel: RTCDataChannel, idBytes: Uint8Array, maxChannelMessageSize: number): WritableStream<Uint8Array>;
export declare function write(channel: RTCDataChannel, chunk: Uint8Array, maxChannelMessageSize: number): void;
export declare function bufferedWritableStream(writableStream: WritableStream<Uint8Array>, bufferSize?: number): WritableStream<Uint8Array>;
export declare function readAll(reader: ReadableStreamDefaultReader<Uint8Array>): Promise<Uint8Array>;
