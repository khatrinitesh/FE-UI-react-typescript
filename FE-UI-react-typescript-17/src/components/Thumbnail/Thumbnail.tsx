import { useState } from "react";
import { useThumbnailStore } from "../../store/useThumbnailStore";
import { THUMBNAIL_STATUS } from "./thumbnailConstants";

const Thumbnail = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const {
    thumbnails,
    addThumbnail,
    removeThumbnail,
    selectThumbnail,
    clearThumbnails,
  } = useThumbnailStore();

  const handleAdd = () => {
    if (!url.trim()) return;
    addThumbnail(url, title);
    setUrl("");
    setTitle("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h2>🖼 Thumbnail Gallery</h2>

      {/* Add Thumbnail */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: "6px", width: "200px" }}
        />
        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "6px", width: "150px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Thumbnails Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "10px",
        }}
      >
        {thumbnails.map((thumb) => (
          <div
            key={thumb.id}
            onClick={() => selectThumbnail(thumb.id)}
            style={{
              border:
                thumb.status === THUMBNAIL_STATUS.SELECTED
                  ? "3px solid #007bff"
                  : "1px solid #ccc",
              borderRadius: "6px",
              padding: "4px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              src={thumb.url}
              alt={thumb.title || "thumbnail"}
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            {thumb.title && (
              <p style={{ fontSize: "12px", marginTop: "4px" }}>
                {thumb.title}
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeThumbnail(thumb.id);
              }}
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Clear All */}
      {thumbnails.length > 0 && (
        <button
          onClick={clearThumbnails}
          style={{
            marginTop: "1rem",
            background: "#ff5555",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Thumbnail;
