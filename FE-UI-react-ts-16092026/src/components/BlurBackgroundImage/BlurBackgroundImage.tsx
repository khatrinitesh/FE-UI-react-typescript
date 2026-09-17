import "./BlurBackgroundImage.css";

export const BlurBackgroundImage = () => {
  return (
    <section className="blurBackground">
      <img className="blurBackgroundImage" src="/images/background.jpg" alt="" />

      <div className="blurBackgroundOverlay" />

      <div className="blurBackgroundContent">
        <h2 className="blurBackgroundTitle">Blur Background</h2>

        <p className="blurBackgroundDescription">Content stays sharp while the background image remains blurred.</p>
      </div>
    </section>
  );
};
