/* ============================================================
   FlyDreamAir — Base JavaScript Utilities
   ============================================================ */

'use strict';

// ── App State ─────────────────────────────────────────────────
const FDA = {
  // Simulated flight data
  flights: [
    { id: 'FDA101', from: 'SYD', fromCity: 'Sydney', to: 'MEL', toCity: 'Melbourne', date: '2026-06-01', depart: '06:00', arrive: '07:30', duration: '1h 30m', price: 149, seats: 42, class: 'Economy' },
    { id: 'FDA102', from: 'SYD', fromCity: 'Sydney', to: 'MEL', toCity: 'Melbourne', date: '2026-06-01', depart: '10:15', arrive: '11:45', duration: '1h 30m', price: 189, seats: 18, class: 'Economy' },
    { id: 'FDA103', from: 'SYD', fromCity: 'Sydney', to: 'MEL', toCity: 'Melbourne', date: '2026-06-01', depart: '14:00', arrive: '15:30', duration: '1h 30m', price: 129, seats: 67, class: 'Economy' },
    { id: 'FDA104', from: 'SYD', fromCity: 'Sydney', to: 'BNE', toCity: 'Brisbane',  date: '2026-06-01', depart: '08:00', arrive: '09:15', duration: '1h 15m', price: 139, seats: 55, class: 'Economy' },
    { id: 'FDA105', from: 'SYD', fromCity: 'Sydney', to: 'BNE', toCity: 'Brisbane',  date: '2026-06-01', depart: '12:30', arrive: '13:45', duration: '1h 15m', price: 159, seats: 30, class: 'Economy' },
    { id: 'FDA106', from: 'MEL', fromCity: 'Melbourne', to: 'SYD', toCity: 'Sydney', date: '2026-06-01', depart: '09:00', arrive: '10:30', duration: '1h 30m', price: 159, seats: 22, class: 'Economy' },
    { id: 'FDA107', from: 'MEL', fromCity: 'Melbourne', to: 'PER', toCity: 'Perth',  date: '2026-06-01', depart: '07:30', arrive: '10:00', duration: '2h 30m', price: 249, seats: 40, class: 'Economy' },
    { id: 'FDA108', from: 'SYD', fromCity: 'Sydney', to: 'NRT', toCity: 'Tokyo',     date: '2026-06-01', depart: '21:00', arrive: '06:00+1', duration: '9h 00m', price: 899, seats: 15, class: 'Economy' },
    { id: 'FDA109', from: 'SYD', fromCity: 'Sydney', to: 'LAX', toCity: 'Los Angeles', date: '2026-06-01', depart: '22:30', arrive: '19:00', duration: '13h 30m', price: 1249, seats: 8, class: 'Economy' },
    { id: 'FDA110', from: 'BNE', fromCity: 'Brisbane', to: 'SYD', toCity: 'Sydney',  date: '2026-06-01', depart: '11:00', arrive: '12:15', duration: '1h 15m', price: 129, seats: 50, class: 'Economy' },
  ],

  // In-flight services
  services: [
    { id: 'meal-standard', name: 'Standard Meal',      category: 'meal',    price: 18,  icon: '🍽️',  desc: 'Choice of chicken or pasta with sides' },
    { id: 'meal-vegetarian', name: 'Vegetarian Meal',  category: 'meal',    price: 18,  icon: '🥗',  desc: 'Fresh seasonal vegetables and grains' },
    { id: 'meal-kids', name: 'Kids Meal',              category: 'meal',    price: 14,  icon: '🧒',  desc: 'Kid-friendly options with a treat' },
    { id: 'snack-pack', name: 'Snack Pack',            category: 'snack',   price: 9,   icon: '🍿',  desc: 'Chips, nuts, and a chocolate bar' },
    { id: 'drink-wine', name: 'Wine (Glass)',           category: 'drink',   price: 11,  icon: '🍷',  desc: 'Australian red or white wine' },
    { id: 'drink-beer', name: 'Beer',                   category: 'drink',   price: 9,   icon: '🍺',  desc: 'Selection of local and imported beers' },
    { id: 'drink-soft', name: 'Soft Drink',             category: 'drink',   price: 4,   icon: '🥤',  desc: 'Cola, lemonade, juice, or water' },
    { id: 'wifi', name: 'In-flight Wi-Fi',              category: 'extra',   price: 15,  icon: '📶',  desc: 'Full flight Wi-Fi access' },
    { id: 'entertainment', name: 'Entertainment Pack',  category: 'extra',   price: 8,   icon: '🎧',  desc: 'Premium headphones for the flight' },
    { id: 'blanket', name: 'Comfort Kit',               category: 'extra',   price: 12,  icon: '🛏️',  desc: 'Pillow, blanket, and eye mask' },
  ],

  // Airports
  airports: [
    { code: 'SYD', city: 'Sydney',      country: 'Australia' },
    { code: 'MEL', city: 'Melbourne',   country: 'Australia' },
    { code: 'BNE', city: 'Brisbane',    country: 'Australia' },
    { code: 'PER', city: 'Perth',       country: 'Australia' },
    { code: 'ADL', city: 'Adelaide',    country: 'Australia' },
    { code: 'OOL', city: 'Gold Coast',  country: 'Australia' },
    { code: 'CBR', city: 'Canberra',    country: 'Australia' },
    { code: 'NRT', city: 'Tokyo',       country: 'Japan' },
    { code: 'SIN', city: 'Singapore',   country: 'Singapore' },
    { code: 'LAX', city: 'Los Angeles', country: 'USA' },
    { code: 'LHR', city: 'London',      country: 'UK' },
    { code: 'DXB', city: 'Dubai',       country: 'UAE' },
  ],

  // Current booking session
  booking: {
    searchParams: null,
    selectedFlight: null,
    passengers: [],
    seats: [],
    services: [],
    payment: null,
  },

  // Reservations (simulated)
  reservations: [
    {
      id: 'REF-84921',
      flight: 'FDA101',
      from: 'SYD', fromCity: 'Sydney',
      to: 'MEL', toCity: 'Melbourne',
      date: '2026-05-15',
      depart: '06:00',
      arrive: '07:30',
      passengers: [{ name: 'John Smith', seat: '14A' }],
      status: 'confirmed',
      total: 149,
    },
    {
      id: 'REF-73310',
      flight: 'FDA108',
      from: 'SYD', fromCity: 'Sydney',
      to: 'NRT', toCity: 'Tokyo',
      date: '2026-06-20',
      depart: '21:00',
      arrive: '06:00',
      passengers: [{ name: 'John Smith', seat: '22B' }, { name: 'Jane Smith', seat: '22C' }],
      status: 'confirmed',
      total: 1798,
    },
  ],
};

// ── Storage helpers ───────────────────────────────────────────
const storage = {
  set(key, value) {
    try { sessionStorage.setItem('fda_' + key, JSON.stringify(value)); } catch(e) {}
  },
  get(key) {
    try {
      const v = sessionStorage.getItem('fda_' + key);
      return v ? JSON.parse(v) : null;
    } catch(e) { return null; }
  },
  clear(key) {
    try { sessionStorage.removeItem('fda_' + key); } catch(e) {}
  }
};

// ── DOM helpers ───────────────────────────────────────────────
function $(selector, parent = document) {
  return parent.querySelector(selector);
}

function $$(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function createElement(tag, className = '', innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// ── Navigation ────────────────────────────────────────────────
function initNavbar() {
  const navbar = $('.navbar');
  if (!navbar) return;

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(43, 160, 197, 0.18)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(43, 160, 197, 0.10)';
    }
  }, { passive: true });
}

// ── Flight search ─────────────────────────────────────────────
function searchFlights(params) {
  const { from, to, date, passengers } = params;
  return FDA.flights.filter(f =>
    f.from === from &&
    f.to   === to   &&
    f.date === date
  );
}

function getFlightById(id) {
  return FDA.flights.find(f => f.id === id) || null;
}

// ── Formatting ────────────────────────────────────────────────
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

function formatDateShort(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Seat map generator ────────────────────────────────────────
function generateSeatMap(rows = 30, cols = ['A','B','C','D','E','F']) {
  const takenSeats = new Set();
  // Randomly mark some seats as taken
  for (let i = 0; i < 40; i++) {
    const row = Math.floor(Math.random() * rows) + 1;
    const col = cols[Math.floor(Math.random() * cols.length)];
    takenSeats.add(`${row}${col}`);
  }
  return { rows, cols, takenSeats };
}

// ── Toast notifications ───────────────────────────────────────
function showToast(message, type = 'info', duration = 3000) {
  let container = $('#toast-container');
  if (!container) {
    container = createElement('div', '');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed; bottom: 24px; right: 24px;
      z-index: 9999; display: flex; flex-direction: column; gap: 8px;
    `;
    document.body.appendChild(container);
  }

  const colours = {
    info:    'var(--sky-blue-dark)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    error:   'var(--danger)',
  };

  const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };

  const toast = createElement('div', '');
  toast.style.cssText = `
    background: white;
    border-left: 4px solid ${colours[type] || colours.info};
    border-radius: 10px;
    padding: 12px 18px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 260px;
    max-width: 380px;
    animation: slideInRight 0.3s ease both;
    cursor: pointer;
  `;
  toast.innerHTML = `<span>${icons[type] || icons.info}</span><span>${message}</span>`;
  toast.addEventListener('click', () => removeToast(toast));

  container.appendChild(toast);

  setTimeout(() => removeToast(toast), duration);
}

function removeToast(toast) {
  toast.style.opacity = '0';
  toast.style.transform = 'translateX(20px)';
  toast.style.transition = 'all 0.25s ease';
  setTimeout(() => toast.remove(), 250);
}

// ── Modal ─────────────────────────────────────────────────────
function showModal(title, content, actions = []) {
  let overlay = $('#modal-overlay');
  if (overlay) overlay.remove();

  overlay = createElement('div', '');
  overlay.id = 'modal-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(26,58,74,0.5);
    backdrop-filter: blur(4px); z-index: 5000;
    display: flex; align-items: center; justify-content: center;
    padding: 16px; animation: fadeIn 0.2s ease both;
  `;

  const modal = createElement('div', '');
  modal.style.cssText = `
    background: white; border-radius: 20px;
    padding: 32px; max-width: 480px; width: 100%;
    box-shadow: 0 20px 60px rgba(26,58,74,0.25);
    animation: fadeInUp 0.3s ease both;
  `;

  const actionsHTML = actions.map(a =>
    `<button class="btn ${a.class || 'btn-primary'}" onclick="${a.onclick}">${a.label}</button>`
  ).join('');

  modal.innerHTML = `
    <h3 style="font-family:var(--font-display);color:var(--text-dark);margin-bottom:12px;">${title}</h3>
    <div style="color:var(--text-mid);font-size:0.95rem;line-height:1.6;margin-bottom:24px;">${content}</div>
    <div style="display:flex;gap:12px;justify-content:flex-end;">${actionsHTML}</div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

function closeModal() {
  const overlay = $('#modal-overlay');
  if (overlay) overlay.remove();
}

// ── Form validation ───────────────────────────────────────────
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[\d\s\+\-\(\)]{8,15}$/.test(phone);
}

function validateNotEmpty(value) {
  return value && value.trim().length > 0;
}

function showFieldError(input, message) {
  clearFieldError(input);
  input.style.borderColor = 'var(--danger)';
  const err = createElement('div', 'form-error', message);
  input.parentNode.appendChild(err);
}

function clearFieldError(input) {
  input.style.borderColor = '';
  const existing = input.parentNode.querySelector('.form-error');
  if (existing) existing.remove();
}

// ── Booking state helpers ─────────────────────────────────────
function saveBooking(data) {
  Object.assign(FDA.booking, data);
  storage.set('booking', FDA.booking);
}

function loadBooking() {
  const saved = storage.get('booking');
  if (saved) Object.assign(FDA.booking, saved);
  return FDA.booking;
}

function clearBooking() {
  FDA.booking = { searchParams: null, selectedFlight: null, passengers: [], seats: [], services: [], payment: null };
  storage.clear('booking');
}

// ── Reservation helpers ───────────────────────────────────────
function getReservations() {
  const saved = storage.get('reservations');
  return saved || FDA.reservations;
}

function saveReservation(reservation) {
  const reservations = getReservations();
  reservations.unshift(reservation);
  storage.set('reservations', reservations);
  return reservation;
}

function generateRef() {
  return 'REF-' + Math.floor(10000 + Math.random() * 90000);
}

// ── Page transitions ──────────────────────────────────────────
function navigateTo(page, params = {}) {
  if (Object.keys(params).length > 0) {
    saveBooking(params);
  }
  window.location.href = page;
}

// ── Navbar HTML (shared across pages) ────────────────────────
function renderNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <div class="brand-icon">✈️</div>
        <span>Fly</span>DreamAir
      </a>
      <ul class="navbar-nav">
        <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="search.html" class="nav-link ${activePage === 'search' ? 'active' : ''}">Search Flights</a></li>
        <li><a href="reservations.html" class="nav-link ${activePage === 'reservations' ? 'active' : ''}">My Bookings</a></li>
      </ul>
      <div class="navbar-actions">
        <a href="search.html" class="btn btn-primary btn-sm">Book Now</a>
      </div>
    </div>
  </nav>`;
}

// ── Footer HTML ────────────────────────────────────────────────
function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="grid-4">
        <div>
          <div class="navbar-brand" style="margin-bottom:12px;">
            <div class="brand-icon">✈️</div>
            <span style="color:var(--sky-blue-light);font-family:var(--font-display);font-weight:800;">Fly</span><span style="color:white;font-family:var(--font-display);font-weight:800;">DreamAir</span>
          </div>
          <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;line-height:1.6;">Your journey starts here. Fly with confidence.</p>
        </div>
        <div>
          <h4>Destinations</h4>
          <a href="#">Domestic Flights</a>
          <a href="#">International Flights</a>
          <a href="#">Flight Deals</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#">Manage Booking</a>
          <a href="#">Check-in Online</a>
          <a href="#">Baggage Info</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About FlyDreamAir</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 FlyDreamAir. All rights reserved. | CSIT214 IT Project Management — University of Wollongong</p>
      </div>
    </div>
  </footer>`;
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  loadBooking();
});
