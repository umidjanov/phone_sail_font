export default function ComponentData() {
  return (
    <div className="section-content-responsive">
      <header className="section-header row">
        <h2 className="section-header-headline typography-section-headline">
          Significant others.
        </h2>
      </header>
      <div className="accordion-wrapper content-container">
        <ul
          className="accordion"
          data-component-list="Accordion"
          data-accordion
          role="list"
        >
          {/* Accordion Item: iPhone and Mac */}
          <li
            className="accordion-item column expanded"
            data-accordion-item="accordion-item-mac"
          >
            <h3 className="accordion-title">
              <button
                className="accordion-button"
                data-accordion-trigger
                aria-controls="accordion-item-mac-tray"
                id="accordion-item-mac-button"
                aria-expanded="true"
              >
                <span className="accordion-title-text">iPhone and Mac</span>
                <span className="accordion-icon">
                  <svg className="accordion-icon-svg" viewBox="0 0 17 8.85">
                    <polyline
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      fillRule="evenodd"
                      points="15 7.72 8.5 1.13 2 7.72"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id="accordion-item-mac-tray"
              className="accordion-tray"
              role="section"
              aria-labelledby="accordion-item-mac-button"
            >
              <div className="accordion-content">
                <p className="accordion-paragraph-text">
                  With iPhone Mirroring, you can view your iPhone screen on your
                  Mac and control it without picking up your phone...
                </p>
                <div className="image-container">
                  <img
                    src="/v/iphone/home/cb/images/overview/augment/mac__b2km5lqjzk1y_large.jpg"
                    alt="The same messages open on both MacBook Pro and iPhone 16."
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Accordion Item: iPhone and Apple Watch */}
          <li
            className="accordion-item column collapsed"
            data-accordion-item="accordion-item-watch"
          >
            <h3 className="accordion-title">
              <button
                className="accordion-button"
                data-accordion-trigger
                aria-controls="accordion-item-watch-tray"
                id="accordion-item-watch-button"
                aria-expanded="false"
              >
                <span className="accordion-title-text">
                  iPhone and Apple&nbsp;Watch
                </span>
                <span className="accordion-icon">
                  <svg className="accordion-icon-svg" viewBox="0 0 17 8.85">
                    <polyline
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      fillRule="evenodd"
                      points="15 1.13 8.5 7.72 2 1.13"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id="accordion-item-watch-tray"
              className="accordion-tray"
              role="section"
              aria-labelledby="accordion-item-watch-button"
              aria-hidden="true"
            >
              <div className="accordion-content">
                <p className="accordion-paragraph-text">
                  Misplaced your iPhone? The latest Apple Watch models can show
                  you its approximate distance and direction...
                </p>
                <div className="image-container">
                  <img
                    src="/v/iphone/home/cb/images/overview/augment/watch__dkk6to52k7ma_large.jpg"
                    alt="The same call can be taken by iPhone 16 and Apple Watch"
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Accordion Item: iPhone and AirPods */}
          <li
            className="accordion-item column collapsed"
            data-accordion-item="accordion-item-airpods"
          >
            <h3 className="accordion-title">
              <button
                className="accordion-button"
                data-accordion-trigger
                aria-controls="accordion-item-airpods-tray"
                id="accordion-item-airpods-button"
                aria-expanded="false"
              >
                <span className="accordion-title-text">iPhone and AirPods</span>
                <span className="accordion-icon">
                  <svg className="accordion-icon-svg" viewBox="0 0 17 8.85">
                    <polyline
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      fillRule="evenodd"
                      points="15 1.13 8.5 7.72 2 1.13"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id="accordion-item-airpods-tray"
              className="accordion-tray"
              role="section"
              aria-labelledby="accordion-item-airpods-button"
              aria-hidden="true"
            >
              <div className="accordion-content">
                <p className="accordion-paragraph-text">
                  Set up AirPods on iPhone with just a tap. You’ll love Adaptive
                  Audio...
                </p>
                <div className="image-container">
                  <img
                    src="/v/iphone/home/cb/images/overview/augment/airpods__cmw5fm88hrma_large.jpg"
                    alt="iPhone and AirPods working together"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
