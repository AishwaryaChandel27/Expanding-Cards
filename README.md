# Expanding Image Cards

A small browser interaction demo in which clicking a photographic panel expands it and reveals its title. The project demonstrates DOM event handling and CSS transitions without a framework.

## What it implements

- Select one of five image panels.
- Keep only the selected panel active.
- Animate changes in panel width and title visibility.

## How it works

`project2/index.html` defines the panels, `index.css` styles their active and inactive states, and `index.js` switches the `active` class on click. Images are stored in `project2/images/`; there is no backend, database or build tool.

## Current limitations

The interaction is click-based; dedicated keyboard controls and accessibility tests are not implemented. The source uses the class name `panal` consistently. No automated tests or package manifest are present.

## Run locally

The commands below were checked against source paths and manifests; application startup was not tested unless explicitly stated.
Use a browser and Python 3 for a local static server. No dependency installation is required.

```bash
git clone --branch main https://github.com/AishwaryaChandel27/Expanding-Cards.git
cd Expanding-Cards
python -m http.server 8000 --bind 127.0.0.1 --directory project2
```
Open `http://localhost:8000`.

## Usage

Open the page and click each card. Confirm that only one card remains expanded and inspect the CSS media query on a narrow viewport.

## Source map

| Path | Responsibility |
| --- | --- |
| [project2/index.html](project2/index.html) | Markup |
| [project2/index.css](project2/index.css) | Layout and transitions |
| [project2/index.js](project2/index.js) | Selection logic |
| [project2/images](project2/images) | Local photographs |

## Validation

Documentation was checked against the repository snapshot on 28 October 2026. No application test suite was run for this repository. Provider availability, browser behavior, builds and deployment are unverified.

## Demo capture

Suggested addition: a short recording of the usage workflow above, with synthetic inputs and visible limitations. No new screenshot or recording was produced in this audit.

## Contributing

Open an issue with reproduction steps or submit a focused pull request. Keep prototype behavior and future plans clearly distinguished, and include verification steps for changes.

## License

No license file was found. A manifest or older README license label does not replace an explicit license grant.

Maintained in [AishwaryaChandel27’s repositories](https://github.com/AishwaryaChandel27).
