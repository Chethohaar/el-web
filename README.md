# EL Web — Sensor Data Dashboard

## Overview

EL Web is a lightweight web dashboard for collecting, visualizing, and exploring sensor data from our environmental monitoring network. Sensors push measurements (temperature, humidity, soil moisture, etc.) to a backend service, and this frontend fetches and displays the most recent readings and trends in an easy-to-read dashboard.

## Key Features

- **Live data display:** Current sensor values shown on the dashboard pages.
- **Per-plant views:** Individual plant pages (Plant1–Plant6) show focused data for each sensor node.
- **Simple, static frontend:** Built with plain HTML, CSS, and JavaScript for easy deployment.

## Architecture & Data Flow

1. Sensors collect measurements and send them to a backend API (HTTP POST / MQTT / other transport).
2. The backend stores data (time-series database, simple DB, or files) and exposes a read API.
3. The frontend periodically fetches data from the API and updates the dashboard charts and widgets.

This repository contains the frontend assets used to visualize the data. The backend implementation is intentionally flexible — any service that exposes the expected read endpoints will work.

## Files of Interest

- [index.html](index.html) — Main dashboard page that aggregates sensor feeds.
- [script.js](script.js) — Frontend logic: fetching data, updating UI, and rendering charts.
- [style.css](style.css) — Project styles for the dashboard and plant pages.
- [slidingitems.html](slidingitems.html) — UI demo / alternate layout used for sliding cards.
- [Plant1.html](Plant1.html) … [Plant6.html](Plant6.html) — Individual plant pages.
- [test.avif](test.avif) and [test3.avif](test3.avif) — Example image assets.

## Data Format (example)

Sensors typically provide JSON payloads. A common shape used by this dashboard is:

```
{
  "node_id": "plant-01",
  "timestamp": "2026-05-16T12:34:56Z",
  "measurements": {
    "temperature_c": 22.5,
    "humidity_pct": 58.2,
    "soil_moisture": 312
  }
}
```

The frontend expects the backend read endpoints to return recent measurements in a JSON array or a similar structure the `script.js` code can parse. If you adapt a different schema, update `script.js` accordingly.

## Running Locally

Since this is a static frontend, you can run it by opening `index.html` in a browser. For a better development experience (and to avoid CORS issues when fetching from an API), serve the directory with a simple static server. Example using Python:

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

If your backend API is on another host or port, either enable CORS on the backend or use a local proxy. Configure any API root or endpoints in `script.js`.

## Configuration

- API endpoint: edit `script.js` to point to your backend read endpoints.
- Polling interval: adjust the fetch interval in `script.js` if you need more or less frequent updates.

## Development Tips

- Keep sensor payloads small and include timestamps for reliable ordering.
- Use ISO 8601 timestamps (UTC) to avoid timezone problems.
- When adding new measurement types, update the frontend parsing and the UI widgets that display those values.

## Contributing

1. Fork the repo and create a feature branch.
2. Update `script.js` and frontend assets as needed.
3. Test locally and open a pull request with a short description of the change.

## License

This repository does not include a license file. Add a `LICENSE` if you want to define reuse terms.

## Contact

If you have questions about the data schema or backend integration, please add an issue with details about your sensor network and the API shape.
