import { useEffect } from "react";
import { useEventStore } from "../../../logicStore/useEventStore/useEventStore";
import {
  EVENT_CLICK,
  EVENT_KEYDOWN,
  EVENT_MOUSEMOVE,
} from "../../../constants/constants";

const AddEventListenerDomDocuments = () => {
  UseDocumentEventListeners();

  const { lastEventType, lastEventTarget } = useEventStore();
  return (
    <div>
      <h1>Event Listener Demo</h1>
      <p>Last Event Type: {lastEventType}</p>
      <p>
        Last Target Tag: {(lastEventTarget as HTMLElement)?.tagName ?? "None"}
      </p>

      <button>Click Me</button>
      <input placeholder="Type here..." />
    </div>
  );
};

export default AddEventListenerDomDocuments;

const UseDocumentEventListeners = () => {
  const setLastEvent = useEventStore((state) => state.setLastEvent);

  useEffect(() => {
    const handleEvent = (e: Event) => {
      setLastEvent(e);
    };

    document.addEventListener(EVENT_CLICK, handleEvent);
    document.addEventListener(EVENT_KEYDOWN, handleEvent);
    document.addEventListener(EVENT_MOUSEMOVE, handleEvent);

    return () => {
      document.removeEventListener(EVENT_CLICK, handleEvent);
      document.removeEventListener(EVENT_KEYDOWN, handleEvent);
      document.removeEventListener(EVENT_MOUSEMOVE, handleEvent);
    };
  }, [setLastEvent]);
};
