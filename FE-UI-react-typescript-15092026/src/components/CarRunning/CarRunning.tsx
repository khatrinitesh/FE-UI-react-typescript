import { CarFront, Cloud, Gauge, MapPin, Wind } from "lucide-react";

import "./CarRunning.css";

const CarRunning = () => {
  return (
    <main className="car-running-page">
      <div className="car-running-container">
        {/* Heading */}

        <header className="car-running-heading">
          <span>ANIMATION COMPONENT</span>

          <h1>
            Car <strong>Running</strong>
          </h1>

          <p>
            A smooth CSS-powered car running animation with a moving road and
            animated environment.
          </p>
        </header>

        {/* Scene */}

        <section className="car-scene">
          {/* Sky */}

          <div className="car-sky">
            <div className="car-sun" />

            <div className="car-cloud car-cloud-one">
              <Cloud size={55} />
            </div>

            <div className="car-cloud car-cloud-two">
              <Cloud size={42} />
            </div>

            <div className="car-cloud car-cloud-three">
              <Cloud size={48} />
            </div>
          </div>

          {/* Mountains */}

          <div className="car-mountains">
            <span />
            <span />
            <span />
          </div>

          {/* Trees */}

          <div className="car-trees">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="car-tree">
                <div className="car-tree-top" />
                <div className="car-tree-trunk" />
              </div>
            ))}
          </div>

          {/* Road */}

          <div className="car-road">
            <div className="road-line road-line-one" />
            <div className="road-line road-line-two" />
            <div className="road-line road-line-three" />
            <div className="road-line road-line-four" />
            <div className="road-line road-line-five" />
            <div className="road-line road-line-six" />
          </div>

          {/* Car */}

          <div className="car-wrapper">
            {/* Exhaust Smoke */}

            <div className="car-smoke">
              <span />
              <span />
              <span />
            </div>

            <div className="car">
              {/* Body */}

              <div className="car-body">
                <div className="car-roof">
                  <div className="car-window car-window-front" />
                  <div className="car-window car-window-back" />
                </div>

                <div className="car-hood" />

                <div className="car-front">
                  <div className="car-headlight" />
                  <div className="car-grille" />
                </div>

                <div className="car-door car-door-front">
                  <span />
                </div>

                <div className="car-door car-door-back">
                  <span />
                </div>

                <div className="car-handle car-handle-one" />
                <div className="car-handle car-handle-two" />

                {/* Wheels */}

                <div className="car-wheel car-wheel-front">
                  <div className="car-wheel-inner">
                    <div className="car-wheel-hub" />
                  </div>
                </div>

                <div className="car-wheel car-wheel-back">
                  <div className="car-wheel-inner">
                    <div className="car-wheel-hub" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed Lines */}

          <div className="speed-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        {/* Stats */}

        <div className="car-stats">
          <div className="car-stat">
            <div className="car-stat-icon">
              <CarFront size={19} />
            </div>

            <div>
              <span>VEHICLE</span>
              <strong>Sport Car</strong>
            </div>
          </div>

          <div className="car-stat">
            <div className="car-stat-icon">
              <Gauge size={19} />
            </div>

            <div>
              <span>SPEED</span>
              <strong>120 km/h</strong>
            </div>
          </div>

          <div className="car-stat">
            <div className="car-stat-icon">
              <Wind size={19} />
            </div>

            <div>
              <span>ENGINE</span>
              <strong>Running</strong>
            </div>
          </div>

          <div className="car-stat">
            <div className="car-stat-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>ROAD</span>
              <strong>Highway</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarRunning;
