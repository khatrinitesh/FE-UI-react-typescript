import {
  browserName,
  BrowserView,
  isDesktop,
  isMobile,
  isTablet,
  MobileView,
  osName,
} from "react-device-detect";

export default function ReactDeviceDetect() {
  return (
    <>
      <Example />
      {/* <HomePage /> */}
      {/* <DeviceExample /> */}
      <hr />
    </>
  );
}

function DeviceExample() {
  return (
    <div>
      <h2>Device Information</h2>

      {isMobile && <p>You are using a mobile device.</p>}

      {isTablet && <p>You are using a tablet.</p>}

      {isDesktop && <p>You are using a desktop.</p>}

      <p>Browser: {browserName}</p>

      <p>Operating System: {osName}</p>

      <hr />
    </div>
  );
}
function HomePage() {
  return <>{isMobile ? <div>Mobile UI</div> : <div>Desktop UI</div>}</>;
}

function Example() {
  return (
    <>
      <BrowserView>
        <h1>Desktop / Browser Content</h1>
      </BrowserView>

      <MobileView>
        <h1>Mobile Content</h1>
      </MobileView>
    </>
  );
}
