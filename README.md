# FlyDreamAir Booking System

A front-end mockup of an airline booking site. Built for CSIT214 IT Project Management at UoW.

You can search flights, pick seats, add meals, sign in, and edit existing bookings. It all runs in the browser. There is no backend.

## Pages

- `index.html` — home and flight search form
- `search.html` — results, with filters for stops, price and departure time
- `seats.html` — seat map across First, Business and Economy
- `services.html` — meals, drinks and baggage per passenger, with a running total
- `login.html` — sign in and sign up
- `reservations.html` — list of existing bookings with Modify and Cancel
- `payment.html` — page where passenger and payment info is added
- `confirmation.html` — confirmation of booking
## Tech stack

HTML, CSS, vanilla JS. No frameworks, no build step.

Styles are in `styles.css` (sky-blue and teal, Montserrat and Open Sans). Shared data and helpers are in `main.js`. Booking state goes into `localStorage` and `sessionStorage` so edits survive a page reload.

## Running it

Open `index.html` in a browser. That works for most things.

If you hit file-path quirks (some browsers block `fetch` on `file://` URLs), run a server from the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Layout

```
FlyDreamAir-Booking-System/
├── index.html
├── search.html
├── seats.html
├── services.html
├── payment.html
├── confirmation.html
├── login.html
├── reservations.html
├── main.js             shared data and helpers
├── styles.css          styles
└── README.md
```

## Data

Everything is faked. `main.js` exposes a global `FDA` object:

- `FDA.flights` — flights and seats remaining
- `FDA.airports` — airport codes and cities
- `FDA.services` — meals, drinks, baggage, extras
- `FDA.reservations` — seed bookings on the My Bookings page
- `FDA.tripExtras` — insurance, lounge, priority boarding, carbon offset

New bookings get written to `localStorage`, so they persist between page loads. They reset if you clear browser storage.

## Caveats

No server, no database, no real payments. Sign-in is fake. This is a UI prototype.

## Contributors

- ESPV17
- Sageabdallah
