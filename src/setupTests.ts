import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

if (global.TextEncoder === undefined) {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder;
}

if (global.TextDecoder === undefined) {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
