import { useTimelineStore } from "../../store/useTimelineStore";
import { EVENT_STATUS } from "./timelineConstants";
import { useState } from "react";

const Timeline = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const { events, addEvent, toggleDetails, markCompleted, clearCompleted } =
    useTimelineStore();

  const handleAdd = () => {
    if (!title.trim() || !desc.trim() || !date.trim()) return;
    addEvent(title, desc, date);
    setTitle("");
    setDesc("");
    setDate("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h2>🕒 Timeline</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "1rem",
        }}
      >
        <input
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Event Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAdd}>Add Event</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event) => (
          <li
            key={event.id}
            style={{
              background:
                event.status === EVENT_STATUS.COMPLETED ? "#e6ffe6" : "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "10px",
              padding: "10px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>{event.title}</strong>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => toggleDetails(event.id)}>
                  {event.showDetails ? "Hide" : "Show"}
                </button>
                {event.status === EVENT_STATUS.UPCOMING && (
                  <button onClick={() => markCompleted(event.id)}>Done</button>
                )}
              </div>
            </div>

            {event.showDetails && (
              <div style={{ marginTop: "8px" }}>
                <p>{event.description}</p>
                <small>📅 {event.date}</small>
              </div>
            )}
          </li>
        ))}
      </ul>

      {events.some((e) => e.status === EVENT_STATUS.COMPLETED) && (
        <button
          onClick={clearCompleted}
          style={{
            marginTop: "1rem",
            background: "#ff5555",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
          }}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default Timeline;
