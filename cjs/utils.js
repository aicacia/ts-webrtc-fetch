"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCodeToStatusText = exports.randomUInt32 = exports.concatUint8Array = exports.encodeLine = exports.N = exports.R = exports.DEFAULT_TIMEOUT_MS = exports.PROTOCAL = exports.PROTOCAL_VERSION = exports.PROTOCAL_NAME = void 0;
const rand_1 = require("@aicacia/rand");
exports.PROTOCAL_NAME = "HTTP-WEBRTC";
exports.PROTOCAL_VERSION = "1.0";
exports.PROTOCAL = `${exports.PROTOCAL_NAME}/${exports.PROTOCAL_VERSION}`;
exports.DEFAULT_TIMEOUT_MS = 60000;
exports.R = "\r".charCodeAt(0);
exports.N = "\n".charCodeAt(0);
function encodeLine(encoder, idBytes, line) {
    const lineBytes = encoder.encode(line);
    return concatUint8Array(idBytes, lineBytes);
}
exports.encodeLine = encodeLine;
function concatUint8Array(a, b) {
    const bytes = new Uint8Array(a.length + b.length);
    bytes.set(a);
    bytes.set(b, a.length);
    return bytes;
}
exports.concatUint8Array = concatUint8Array;
function randomUInt32() {
    return (Math.random() * rand_1.MAX_INT) | 0;
}
exports.randomUInt32 = randomUInt32;
function statusCodeToStatusText(statusCode) {
    switch (statusCode) {
        case 100:
            return "Continue";
        case 101:
            return "Switching Protocols";
        case 102:
            return "Processing";
        case 103:
            return "Early Hints";
        case 200:
            return "OK";
        case 201:
            return "Created";
        case 202:
            return "Accepted";
        case 203:
            return "Non-Authoritative Information";
        case 204:
            return "No Content";
        case 205:
            return "Reset Content";
        case 206:
            return "Partial Content";
        case 207:
            return "Multi-Status";
        case 208:
            return "Already Reported";
        case 226:
            return "IM Used";
        case 300:
            return "Multiple Choices";
        case 301:
            return "Moved Permanently";
        case 302:
            return "Found";
        case 303:
            return "See Other";
        case 304:
            return "Not Modified";
        case 305:
            return "Use Proxy";
        case 306:
            return "Switch Proxy";
        case 307:
            return "Temporary Redirect";
        case 308:
            return "Permanent Redirect";
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 402:
            return "Payment Required";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 405:
            return "Method Not Allowed";
        case 406:
            return "Not Acceptable";
        case 407:
            return "Proxy Authentication Required";
        case 408:
            return "Request Timeout";
        case 409:
            return "Conflict";
        case 410:
            return "Gone";
        case 411:
            return "Length Required";
        case 412:
            return "Precondition Failed";
        case 413:
            return "Payload Too Large";
        case 414:
            return "URI Too Long";
        case 415:
            return "Unsupported Media Type";
        case 416:
            return "Range Not Satisfiable";
        case 417:
            return "Expectation Failed";
        case 418:
            return "I'm a teapot";
        case 421:
            return "Misdirected Request";
        case 422:
            return "Unprocessable Entity";
        case 423:
            return "Locked";
        case 424:
            return "Failed Dependency";
        case 425:
            return "Too Early";
        case 426:
            return "Upgrade Required";
        case 428:
            return "Precondition Required";
        case 429:
            return "Too Many Requests";
        case 431:
            return "Request Header Fields Too Large";
        case 451:
            return "Unavailable For Legal Reasons";
        case 500:
            return "Internal Server Error";
        case 501:
            return "Not Implemented";
        case 502:
            return "Bad Gateway";
        case 503:
            return "Service Unavailable";
        case 504:
            return "Gateway Timeout";
        case 505:
            return "HTTP Version Not Supported";
        case 506:
            return "Variant Also Negotiates";
        case 507:
            return "Insufficient Storage";
        case 508:
            return "Loop Detected";
        case 510:
            return "Not Extended";
        case 511:
            return "Network Authentication Required";
        default:
            return "Unknown Status Code";
    }
}
exports.statusCodeToStatusText = statusCodeToStatusText;
