// os-browserify/browser does not currently ship TypeScript declarations.
// @ts-expect-error Missing declaration file for the browser polyfill.
import os from "os-browserify/browser";

export function getOSInfo() {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    arch: os.arch(),
    hostname: os.hostname(),
    homedir: os.homedir(),
    tmpdir: os.tmpdir(),
  };
}
