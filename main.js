'use strict';

// ── App State ─────────────────────────────────────────────────
const FDA = {
  flights: [
    // SYD → MEL
    { id:'FDA101', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-05-30', depart:'06:00', arrive:'07:30',   duration:'1h 30m',  price:119,  seats:55, stops:0 },
    { id:'FDA102', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-05-30', depart:'13:00', arrive:'14:30',   duration:'1h 30m',  price:149,  seats:30, stops:0 },
    { id:'FDA103', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'07:30', arrive:'09:00',   duration:'1h 30m',  price:139,  seats:42, stops:0 },
    { id:'FDA104', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'18:00', arrive:'19:30',   duration:'1h 30m',  price:169,  seats:20, stops:0 },
    { id:'FDA105', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'06:00', arrive:'07:30',   duration:'1h 30m',  price:149,  seats:42, stops:0 },
    { id:'FDA106', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'10:15', arrive:'11:45',   duration:'1h 30m',  price:189,  seats:18, stops:0 },
    { id:'FDA107', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'14:00', arrive:'15:30',   duration:'1h 30m',  price:129,  seats:67, stops:0 },
    { id:'FDA108', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-02', depart:'08:00', arrive:'09:30',   duration:'1h 30m',  price:159,  seats:35, stops:0 },
    { id:'FDA109', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-02', depart:'20:00', arrive:'21:30',   duration:'1h 30m',  price:109,  seats:60, stops:0 },
    { id:'FDA110', from:'SYD', fromCity:'Sydney',     to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'11:00', arrive:'12:30',   duration:'1h 30m',  price:179,  seats:25, stops:0 },
    // MEL → SYD
    { id:'FDA201', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'09:00', arrive:'10:30',   duration:'1h 30m',  price:139,  seats:45, stops:0 },
    { id:'FDA202', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-05-31', depart:'07:00', arrive:'08:30',   duration:'1h 30m',  price:119,  seats:50, stops:0 },
    { id:'FDA203', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'09:00', arrive:'10:30',   duration:'1h 30m',  price:159,  seats:22, stops:0 },
    { id:'FDA204', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'15:30', arrive:'17:00',   duration:'1h 30m',  price:179,  seats:30, stops:0 },
    { id:'FDA205', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-06-02', depart:'12:00', arrive:'13:30',   duration:'1h 30m',  price:149,  seats:40, stops:0 },
    { id:'FDA206', from:'MEL', fromCity:'Melbourne',  to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'08:30', arrive:'10:00',   duration:'1h 30m',  price:129,  seats:55, stops:0 },
    // SYD → BNE
    { id:'FDA301', from:'SYD', fromCity:'Sydney',     to:'BNE', toCity:'Brisbane',    date:'2026-05-30', depart:'07:00', arrive:'08:15',   duration:'1h 15m',  price:119,  seats:60, stops:0 },
    { id:'FDA302', from:'SYD', fromCity:'Sydney',     to:'BNE', toCity:'Brisbane',    date:'2026-06-01', depart:'08:00', arrive:'09:15',   duration:'1h 15m',  price:139,  seats:55, stops:0 },
    { id:'FDA303', from:'SYD', fromCity:'Sydney',     to:'BNE', toCity:'Brisbane',    date:'2026-06-01', depart:'12:30', arrive:'13:45',   duration:'1h 15m',  price:159,  seats:30, stops:0 },
    { id:'FDA304', from:'SYD', fromCity:'Sydney',     to:'BNE', toCity:'Brisbane',    date:'2026-06-02', depart:'16:00', arrive:'17:15',   duration:'1h 15m',  price:129,  seats:45, stops:0 },
    { id:'FDA305', from:'SYD', fromCity:'Sydney',     to:'BNE', toCity:'Brisbane',    date:'2026-06-03', depart:'09:30', arrive:'10:45',   duration:'1h 15m',  price:149,  seats:35, stops:0 },
    // BNE → SYD
    { id:'FDA401', from:'BNE', fromCity:'Brisbane',   to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'10:00', arrive:'11:15',   duration:'1h 15m',  price:109,  seats:55, stops:0 },
    { id:'FDA402', from:'BNE', fromCity:'Brisbane',   to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'11:00', arrive:'12:15',   duration:'1h 15m',  price:129,  seats:50, stops:0 },
    { id:'FDA403', from:'BNE', fromCity:'Brisbane',   to:'SYD', toCity:'Sydney',      date:'2026-06-02', depart:'14:30', arrive:'15:45',   duration:'1h 15m',  price:119,  seats:40, stops:0 },
    { id:'FDA404', from:'BNE', fromCity:'Brisbane',   to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'08:00', arrive:'09:15',   duration:'1h 15m',  price:139,  seats:30, stops:0 },
    // MEL → PER
    { id:'FDA501', from:'MEL', fromCity:'Melbourne',  to:'PER', toCity:'Perth',       date:'2026-05-31', depart:'06:00', arrive:'08:30',   duration:'2h 30m',  price:219,  seats:45, stops:0 },
    { id:'FDA502', from:'MEL', fromCity:'Melbourne',  to:'PER', toCity:'Perth',       date:'2026-06-01', depart:'07:30', arrive:'10:00',   duration:'2h 30m',  price:249,  seats:40, stops:0 },
    { id:'FDA503', from:'MEL', fromCity:'Melbourne',  to:'PER', toCity:'Perth',       date:'2026-06-02', depart:'13:00', arrive:'15:30',   duration:'2h 30m',  price:229,  seats:30, stops:0 },
    { id:'FDA504', from:'MEL', fromCity:'Melbourne',  to:'PER', toCity:'Perth',       date:'2026-06-03', depart:'09:00', arrive:'11:30',   duration:'2h 30m',  price:199,  seats:55, stops:0 },
    // PER → MEL
    { id:'FDA601', from:'PER', fromCity:'Perth',      to:'MEL', toCity:'Melbourne',   date:'2026-05-30', depart:'08:00', arrive:'13:30',   duration:'2h 30m',  price:229,  seats:40, stops:0 },
    { id:'FDA602', from:'PER', fromCity:'Perth',      to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'10:00', arrive:'15:30',   duration:'2h 30m',  price:249,  seats:35, stops:0 },
    { id:'FDA603', from:'PER', fromCity:'Perth',      to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'14:00', arrive:'19:30',   duration:'2h 30m',  price:209,  seats:50, stops:0 },
    // SYD → ADL
    { id:'FDA701', from:'SYD', fromCity:'Sydney',     to:'ADL', toCity:'Adelaide',    date:'2026-05-30', depart:'07:30', arrive:'09:30',   duration:'2h 00m',  price:169,  seats:40, stops:0 },
    { id:'FDA702', from:'SYD', fromCity:'Sydney',     to:'ADL', toCity:'Adelaide',    date:'2026-06-01', depart:'11:00', arrive:'13:00',   duration:'2h 00m',  price:189,  seats:35, stops:0 },
    { id:'FDA703', from:'SYD', fromCity:'Sydney',     to:'ADL', toCity:'Adelaide',    date:'2026-06-02', depart:'15:00', arrive:'17:00',   duration:'2h 00m',  price:149,  seats:50, stops:0 },
    { id:'FDA704', from:'SYD', fromCity:'Sydney',     to:'ADL', toCity:'Adelaide',    date:'2026-06-03', depart:'08:00', arrive:'10:00',   duration:'2h 00m',  price:179,  seats:45, stops:0 },
    // ADL → SYD
    { id:'FDA801', from:'ADL', fromCity:'Adelaide',   to:'SYD', toCity:'Sydney',      date:'2026-05-31', depart:'09:00', arrive:'11:00',   duration:'2h 00m',  price:159,  seats:45, stops:0 },
    { id:'FDA802', from:'ADL', fromCity:'Adelaide',   to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'13:00', arrive:'15:00',   duration:'2h 00m',  price:179,  seats:30, stops:0 },
    { id:'FDA803', from:'ADL', fromCity:'Adelaide',   to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'10:30', arrive:'12:30',   duration:'2h 00m',  price:149,  seats:55, stops:0 },
    // SYD → PER
    { id:'FDA901', from:'SYD', fromCity:'Sydney',     to:'PER', toCity:'Perth',       date:'2026-05-30', depart:'06:30', arrive:'11:00',   duration:'4h 30m',  price:299,  seats:35, stops:0 },
    { id:'FDA902', from:'SYD', fromCity:'Sydney',     to:'PER', toCity:'Perth',       date:'2026-06-01', depart:'09:00', arrive:'13:30',   duration:'4h 30m',  price:329,  seats:28, stops:0 },
    { id:'FDA903', from:'SYD', fromCity:'Sydney',     to:'PER', toCity:'Perth',       date:'2026-06-02', depart:'14:00', arrive:'18:30',   duration:'4h 30m',  price:279,  seats:45, stops:0 },
    { id:'FDA904', from:'SYD', fromCity:'Sydney',     to:'PER', toCity:'Perth',       date:'2026-06-03', depart:'20:00', arrive:'00:30+1', duration:'4h 30m',  price:249,  seats:50, stops:0 },
    // PER → SYD
    { id:'FDA1001', from:'PER', fromCity:'Perth',     to:'SYD', toCity:'Sydney',      date:'2026-05-31', depart:'07:00', arrive:'13:00',   duration:'4h 30m',  price:289,  seats:40, stops:0 },
    { id:'FDA1002', from:'PER', fromCity:'Perth',     to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'10:00', arrive:'16:00',   duration:'4h 30m',  price:319,  seats:30, stops:0 },
    { id:'FDA1003', from:'PER', fromCity:'Perth',     to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'15:00', arrive:'21:00',   duration:'4h 30m',  price:269,  seats:45, stops:0 },
    // SYD → NRT
    { id:'FDA1101', from:'SYD', fromCity:'Sydney',    to:'NRT', toCity:'Tokyo',       date:'2026-05-30', depart:'21:00', arrive:'06:00+1', duration:'9h 00m',  price:849,  seats:20, stops:0 },
    { id:'FDA1102', from:'SYD', fromCity:'Sydney',    to:'NRT', toCity:'Tokyo',       date:'2026-06-01', depart:'21:00', arrive:'06:00+1', duration:'9h 00m',  price:899,  seats:15, stops:0 },
    { id:'FDA1103', from:'SYD', fromCity:'Sydney',    to:'NRT', toCity:'Tokyo',       date:'2026-06-03', depart:'22:00', arrive:'07:00+1', duration:'9h 00m',  price:799,  seats:25, stops:0 },
    // SYD → SIN
    { id:'FDA1201', from:'SYD', fromCity:'Sydney',    to:'SIN', toCity:'Singapore',   date:'2026-05-31', depart:'10:00', arrive:'17:00',   duration:'7h 00m',  price:649,  seats:30, stops:0 },
    { id:'FDA1202', from:'SYD', fromCity:'Sydney',    to:'SIN', toCity:'Singapore',   date:'2026-06-01', depart:'09:00', arrive:'16:00',   duration:'7h 00m',  price:699,  seats:22, stops:0 },
    { id:'FDA1203', from:'SYD', fromCity:'Sydney',    to:'SIN', toCity:'Singapore',   date:'2026-06-02', depart:'23:00', arrive:'06:00+1', duration:'7h 00m',  price:599,  seats:40, stops:0 },
    // SIN → SYD
    { id:'FDA1301', from:'SIN', fromCity:'Singapore', to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'08:00', arrive:'19:00',   duration:'7h 00m',  price:679,  seats:25, stops:0 },
    { id:'FDA1302', from:'SIN', fromCity:'Singapore', to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'11:00', arrive:'22:00',   duration:'7h 00m',  price:729,  seats:18, stops:0 },
    { id:'FDA1303', from:'SIN', fromCity:'Singapore', to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'14:00', arrive:'01:00+1', duration:'7h 00m',  price:619,  seats:35, stops:0 },
    // SYD → LAX
    { id:'FDA1401', from:'SYD', fromCity:'Sydney',    to:'LAX', toCity:'Los Angeles', date:'2026-05-31', depart:'22:00', arrive:'19:00',   duration:'13h 30m', price:1149, seats:12, stops:0 },
    { id:'FDA1402', from:'SYD', fromCity:'Sydney',    to:'LAX', toCity:'Los Angeles', date:'2026-06-01', depart:'22:30', arrive:'19:00',   duration:'13h 30m', price:1249, seats:8,  stops:0 },
    { id:'FDA1403', from:'SYD', fromCity:'Sydney',    to:'LAX', toCity:'Los Angeles', date:'2026-06-03', depart:'21:00', arrive:'17:30',   duration:'13h 30m', price:1099, seats:15, stops:0 },
    // MEL → BNE
    { id:'FDA1501', from:'MEL', fromCity:'Melbourne', to:'BNE', toCity:'Brisbane',    date:'2026-05-30', depart:'08:00', arrive:'09:45',   duration:'1h 45m',  price:159,  seats:45, stops:0 },
    { id:'FDA1502', from:'MEL', fromCity:'Melbourne', to:'BNE', toCity:'Brisbane',    date:'2026-06-01', depart:'11:30', arrive:'13:15',   duration:'1h 45m',  price:179,  seats:35, stops:0 },
    { id:'FDA1503', from:'MEL', fromCity:'Melbourne', to:'BNE', toCity:'Brisbane',    date:'2026-06-02', depart:'17:00', arrive:'18:45',   duration:'1h 45m',  price:149,  seats:50, stops:0 },
    // BNE → MEL
    { id:'FDA1601', from:'BNE', fromCity:'Brisbane',  to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'07:30', arrive:'09:15',   duration:'1h 45m',  price:149,  seats:50, stops:0 },
    { id:'FDA1602', from:'BNE', fromCity:'Brisbane',  to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'14:00', arrive:'15:45',   duration:'1h 45m',  price:169,  seats:35, stops:0 },
    { id:'FDA1603', from:'BNE', fromCity:'Brisbane',  to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'10:00', arrive:'11:45',   duration:'1h 45m',  price:139,  seats:55, stops:0 },
    // SYD → DXB
    { id:'FDA1701', from:'SYD', fromCity:'Sydney',    to:'DXB', toCity:'Dubai',       date:'2026-05-30', depart:'21:30', arrive:'05:00+1', duration:'14h 00m', price:1399, seats:10, stops:0 },
    { id:'FDA1702', from:'SYD', fromCity:'Sydney',    to:'DXB', toCity:'Dubai',       date:'2026-06-02', depart:'22:00', arrive:'05:30+1', duration:'14h 00m', price:1299, seats:14, stops:0 },
    // SYD → LHR
    { id:'FDA1801', from:'SYD', fromCity:'Sydney',    to:'LHR', toCity:'London',      date:'2026-05-31', depart:'19:00', arrive:'06:00+1', duration:'21h 00m', price:1899, seats:8,  stops:1 },
    { id:'FDA1802', from:'SYD', fromCity:'Sydney',    to:'LHR', toCity:'London',      date:'2026-06-03', depart:'20:30', arrive:'07:30+1', duration:'21h 00m', price:1749, seats:12, stops:1 },
    // MEL → ADL
    { id:'FDA1901', from:'MEL', fromCity:'Melbourne', to:'ADL', toCity:'Adelaide',    date:'2026-05-30', depart:'09:00', arrive:'10:10',   duration:'1h 10m',  price:99,   seats:60, stops:0 },
    { id:'FDA1902', from:'MEL', fromCity:'Melbourne', to:'ADL', toCity:'Adelaide',    date:'2026-06-01', depart:'13:30', arrive:'14:40',   duration:'1h 10m',  price:119,  seats:50, stops:0 },
    { id:'FDA1903', from:'MEL', fromCity:'Melbourne', to:'ADL', toCity:'Adelaide',    date:'2026-06-03', depart:'07:00', arrive:'08:10',   duration:'1h 10m',  price:109,  seats:45, stops:0 },
    // ADL → MEL
    { id:'FDA2001', from:'ADL', fromCity:'Adelaide',  to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'11:00', arrive:'12:10',   duration:'1h 10m',  price:109,  seats:55, stops:0 },
    { id:'FDA2002', from:'ADL', fromCity:'Adelaide',  to:'MEL', toCity:'Melbourne',   date:'2026-06-02', depart:'15:00', arrive:'16:10',   duration:'1h 10m',  price:129,  seats:40, stops:0 },
    { id:'FDA2003', from:'ADL', fromCity:'Adelaide',  to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'09:30', arrive:'10:40',   duration:'1h 10m',  price:99,   seats:60, stops:0 },
    // NRT → SYD (Tokyo to Sydney)
    { id:'FDA2101', from:'NRT', fromCity:'Tokyo',     to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'10:00', arrive:'21:00',   duration:'9h 00m',  price:879,  seats:18, stops:0 },
    { id:'FDA2102', from:'NRT', fromCity:'Tokyo',     to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'11:30', arrive:'22:30',   duration:'9h 00m',  price:929,  seats:14, stops:0 },
    { id:'FDA2103', from:'NRT', fromCity:'Tokyo',     to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'09:00', arrive:'20:00',   duration:'9h 00m',  price:829,  seats:22, stops:0 },
    // NRT → MEL (Tokyo to Melbourne)
    { id:'FDA2201', from:'NRT', fromCity:'Tokyo',     to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'10:30', arrive:'22:30',   duration:'10h 00m', price:919,  seats:16, stops:0 },
    { id:'FDA2202', from:'NRT', fromCity:'Tokyo',     to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'12:00', arrive:'00:00+1', duration:'10h 00m', price:949,  seats:12, stops:0 },
    { id:'FDA2203', from:'NRT', fromCity:'Tokyo',     to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'09:30', arrive:'21:30',   duration:'10h 00m', price:869,  seats:20, stops:0 },
    // MEL → NRT (Melbourne to Tokyo)
    { id:'FDA2301', from:'MEL', fromCity:'Melbourne', to:'NRT', toCity:'Tokyo',       date:'2026-05-30', depart:'20:00', arrive:'06:00+1', duration:'10h 00m', price:909,  seats:15, stops:0 },
    { id:'FDA2302', from:'MEL', fromCity:'Melbourne', to:'NRT', toCity:'Tokyo',       date:'2026-06-02', depart:'21:30', arrive:'07:30+1', duration:'10h 00m', price:879,  seats:18, stops:0 },
    { id:'FDA2303', from:'MEL', fromCity:'Melbourne', to:'NRT', toCity:'Tokyo',       date:'2026-06-03', depart:'19:00', arrive:'05:00+1', duration:'10h 00m', price:849,  seats:25, stops:0 },
    // DXB → SYD (Dubai to Sydney)
    { id:'FDA2401', from:'DXB', fromCity:'Dubai',     to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'08:00', arrive:'00:00+1', duration:'14h 00m', price:1349, seats:12, stops:0 },
    { id:'FDA2402', from:'DXB', fromCity:'Dubai',     to:'SYD', toCity:'Sydney',      date:'2026-06-01', depart:'09:30', arrive:'01:30+1', duration:'14h 00m', price:1299, seats:10, stops:0 },
    { id:'FDA2403', from:'DXB', fromCity:'Dubai',     to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'07:00', arrive:'23:00',   duration:'14h 00m', price:1249, seats:15, stops:0 },
    // DXB → MEL (Dubai to Melbourne)
    { id:'FDA2501', from:'DXB', fromCity:'Dubai',     to:'MEL', toCity:'Melbourne',   date:'2026-05-31', depart:'08:30', arrive:'01:30+1', duration:'15h 00m', price:1379, seats:10, stops:0 },
    { id:'FDA2502', from:'DXB', fromCity:'Dubai',     to:'MEL', toCity:'Melbourne',   date:'2026-06-02', depart:'10:00', arrive:'03:00+1', duration:'15h 00m', price:1329, seats:12, stops:0 },
    // MEL → DXB (Melbourne to Dubai)
    { id:'FDA2601', from:'MEL', fromCity:'Melbourne', to:'DXB', toCity:'Dubai',       date:'2026-05-30', depart:'22:00', arrive:'05:30+1', duration:'15h 00m', price:1359, seats:11, stops:0 },
    { id:'FDA2602', from:'MEL', fromCity:'Melbourne', to:'DXB', toCity:'Dubai',       date:'2026-06-02', depart:'21:00', arrive:'04:30+1', duration:'15h 00m', price:1299, seats:14, stops:0 },
    // SIN → MEL (Singapore to Melbourne)
    { id:'FDA2701', from:'SIN', fromCity:'Singapore', to:'MEL', toCity:'Melbourne',   date:'2026-05-30', depart:'09:00', arrive:'19:30',   duration:'8h 00m',  price:679,  seats:28, stops:0 },
    { id:'FDA2702', from:'SIN', fromCity:'Singapore', to:'MEL', toCity:'Melbourne',   date:'2026-06-01', depart:'10:30', arrive:'21:00',   duration:'8h 00m',  price:699,  seats:22, stops:0 },
    { id:'FDA2703', from:'SIN', fromCity:'Singapore', to:'MEL', toCity:'Melbourne',   date:'2026-06-03', depart:'08:00', arrive:'18:30',   duration:'8h 00m',  price:649,  seats:32, stops:0 },
    // MEL → SIN (Melbourne to Singapore)
    { id:'FDA2801', from:'MEL', fromCity:'Melbourne', to:'SIN', toCity:'Singapore',   date:'2026-05-31', depart:'09:00', arrive:'15:30',   duration:'8h 00m',  price:689,  seats:25, stops:0 },
    { id:'FDA2802', from:'MEL', fromCity:'Melbourne', to:'SIN', toCity:'Singapore',   date:'2026-06-02', depart:'10:30', arrive:'17:00',   duration:'8h 00m',  price:669,  seats:30, stops:0 },
    // LHR → SYD (London to Sydney)
    { id:'FDA2901', from:'LHR', fromCity:'London',    to:'SYD', toCity:'Sydney',      date:'2026-05-30', depart:'21:00', arrive:'06:00+2', duration:'21h 00m', price:1849, seats:9,  stops:1 },
    { id:'FDA2902', from:'LHR', fromCity:'London',    to:'SYD', toCity:'Sydney',      date:'2026-06-02', depart:'20:00', arrive:'05:00+2', duration:'21h 00m', price:1749, seats:11, stops:1 },
    // LAX → SYD (Los Angeles to Sydney)
    { id:'FDA3001', from:'LAX', fromCity:'Los Angeles', to:'SYD', toCity:'Sydney',    date:'2026-05-31', depart:'22:30', arrive:'07:00+2', duration:'15h 00m', price:1199, seats:10, stops:0 },
    { id:'FDA3002', from:'LAX', fromCity:'Los Angeles', to:'SYD', toCity:'Sydney',    date:'2026-06-02', depart:'23:00', arrive:'07:30+2', duration:'15h 00m', price:1149, seats:13, stops:0 },
    // SYD → OOL (Gold Coast)
    { id:'FDA3101', from:'SYD', fromCity:'Sydney',    to:'OOL', toCity:'Gold Coast',  date:'2026-05-30', depart:'07:00', arrive:'08:10',   duration:'1h 10m',  price:109,  seats:55, stops:0 },
    { id:'FDA3102', from:'SYD', fromCity:'Sydney',    to:'OOL', toCity:'Gold Coast',  date:'2026-06-01', depart:'11:00', arrive:'12:10',   duration:'1h 10m',  price:129,  seats:45, stops:0 },
    { id:'FDA3103', from:'SYD', fromCity:'Sydney',    to:'OOL', toCity:'Gold Coast',  date:'2026-06-03', depart:'15:30', arrive:'16:40',   duration:'1h 10m',  price:119,  seats:40, stops:0 },
    // OOL → SYD (Gold Coast to Sydney)
    { id:'FDA3201', from:'OOL', fromCity:'Gold Coast', to:'SYD', toCity:'Sydney',     date:'2026-05-31', depart:'09:00', arrive:'10:10',   duration:'1h 10m',  price:99,   seats:60, stops:0 },
    { id:'FDA3202', from:'OOL', fromCity:'Gold Coast', to:'SYD', toCity:'Sydney',     date:'2026-06-01', depart:'13:00', arrive:'14:10',   duration:'1h 10m',  price:119,  seats:50, stops:0 },
    { id:'FDA3203', from:'OOL', fromCity:'Gold Coast', to:'SYD', toCity:'Sydney',     date:'2026-06-03', depart:'17:00', arrive:'18:10',   duration:'1h 10m',  price:109,  seats:45, stops:0 },
    // SYD → CBR (Canberra)
    { id:'FDA3301', from:'SYD', fromCity:'Sydney',    to:'CBR', toCity:'Canberra',    date:'2026-05-30', depart:'06:30', arrive:'07:20',   duration:'0h 50m',  price:79,   seats:65, stops:0 },
    { id:'FDA3302', from:'SYD', fromCity:'Sydney',    to:'CBR', toCity:'Canberra',    date:'2026-06-01', depart:'12:00', arrive:'12:50',   duration:'0h 50m',  price:99,   seats:55, stops:0 },
    { id:'FDA3303', from:'SYD', fromCity:'Sydney',    to:'CBR', toCity:'Canberra',    date:'2026-06-03', depart:'17:00', arrive:'17:50',   duration:'0h 50m',  price:89,   seats:60, stops:0 },
    // CBR → SYD (Canberra to Sydney)
    { id:'FDA3401', from:'CBR', fromCity:'Canberra',  to:'SYD', toCity:'Sydney',      date:'2026-05-31', depart:'08:00', arrive:'08:50',   duration:'0h 50m',  price:79,   seats:65, stops:0 },
    { id:'FDA3402', from:'CBR', fromCity:'Canberra',  to:'SYD', toCity:'Sydney',      date:'2026-06-02', depart:'14:00', arrive:'14:50',   duration:'0h 50m',  price:99,   seats:55, stops:0 },
    { id:'FDA3403', from:'CBR', fromCity:'Canberra',  to:'SYD', toCity:'Sydney',      date:'2026-06-03', depart:'18:30', arrive:'19:20',   duration:'0h 50m',  price:89,   seats:60, stops:0 },
  ],


  services: [
    { id: 'meal-standard',   name: 'Standard Meal',     category: 'meal',  price: 18, icon: '🍽️', desc: 'Choice of chicken or pasta with sides' },
    { id: 'meal-vegetarian', name: 'Vegetarian Meal',   category: 'meal',  price: 18, icon: '🥗', desc: 'Fresh seasonal vegetables and grains' },
    { id: 'meal-kids',       name: 'Kids Meal',         category: 'meal',  price: 14, icon: '🧒', desc: 'Kid-friendly options with a treat' },
    { id: 'snack-pack',      name: 'Snack Pack',        category: 'snack', price: 9,  icon: '🍿', desc: 'Chips, nuts, and a chocolate bar' },
    { id: 'drink-wine',      name: 'Wine (Glass)',      category: 'drink', price: 11, icon: '🍷', desc: 'Australian red or white wine' },
    { id: 'drink-beer',      name: 'Beer',              category: 'drink', price: 9,  icon: '🍺', desc: 'Selection of local and imported beers' },
    { id: 'drink-soft',      name: 'Soft Drink',        category: 'drink', price: 4,  icon: '🥤', desc: 'Cola, lemonade, juice, or water' },
    { id: 'wifi',            name: 'In-flight Wi-Fi',   category: 'extra', price: 15, icon: '📶', desc: 'Full flight Wi-Fi access' },
    { id: 'entertainment',   name: 'Entertainment Pack',category: 'extra', price: 8,  icon: '🎧', desc: 'Premium headphones for the flight' },
    { id: 'blanket',         name: 'Comfort Kit',       category: 'extra', price: 12, icon: '🛏️', desc: 'Pillow, blanket, and eye mask' },
  ],

  airports: [
    { code: 'SYD', city: 'Sydney',       country: 'Australia' },
    { code: 'MEL', city: 'Melbourne',    country: 'Australia' },
    { code: 'BNE', city: 'Brisbane',     country: 'Australia' },
    { code: 'PER', city: 'Perth',        country: 'Australia' },
    { code: 'ADL', city: 'Adelaide',     country: 'Australia' },
    { code: 'OOL', city: 'Gold Coast',   country: 'Australia' },
    { code: 'CBR', city: 'Canberra',     country: 'Australia' },
    { code: 'NRT', city: 'Tokyo',        country: 'Japan' },
    { code: 'SIN', city: 'Singapore',    country: 'Singapore' },
    { code: 'LAX', city: 'Los Angeles',  country: 'USA' },
    { code: 'LHR', city: 'London',       country: 'UK' },
    { code: 'DXB', city: 'Dubai',        country: 'UAE' },
  ],

  booking: {
    searchParams: null,
    selectedFlight: null,
    passengers: [],
    seats: [],
    services: {},
    payment: null,
  },

  reservations: [
    {
      id: 'REF-84921',
      flightId: 'FDA101',
      from: 'SYD', fromCity: 'Sydney',
      to: 'MEL', toCity: 'Melbourne',
      date: '2026-05-15',
      depart: '06:00', arrive: '07:30',
      passengers: [{ name: 'John Smith', seat: '14A' }],
      status: 'confirmed',
      total: 149,
    },
    {
      id: 'REF-73310',
      flightId: 'FDA108',
      from: 'SYD', fromCity: 'Sydney',
      to: 'NRT', toCity: 'Tokyo',
      date: '2026-06-20',
      depart: '21:00', arrive: '06:00',
      passengers: [{ name: 'John Smith', seat: '22B' }, { name: 'Jane Smith', seat: '22C' }],
      status: 'confirmed',
      total: 1798,
    },
  ],
};

// ── On-demand flight generation for any date ──────────────────
// Instead of pre-generating, we generate flights for a date when needed
const _generatedDates = new Set(FDA.flights.map(f => f.date));

const _templateFlights = (() => {
  const seen = new Set();
  return FDA.flights.filter(f => {
    const key = `${f.from}-${f.to}-${f.depart}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
})();

let _idCounter = 9000;

function ensureFlightsForDate(dateStr) {
  if (_generatedDates.has(dateStr)) return;
  _generatedDates.add(dateStr);
  const dow = new Date(dateStr + 'T00:00:00').getDay();
  const weekendAdj = (dow === 0 || dow === 6) ? 20 : 0;
  const seed = dateStr.replace(/-/g,'').slice(-3);
  const cycleAdj = (parseInt(seed) % 31) - 15;
  const seats = 15 + (parseInt(seed) % 50);
  _templateFlights.forEach(f => {
    FDA.flights.push({
      ...f,
      id:    'FDA' + (++_idCounter),
      date:  dateStr,
      price: Math.max(59, f.price + weekendAdj + cycleAdj),
      seats,
    });
  });
}
const storage = {
  set(key, value)  { try { sessionStorage.setItem('fda_' + key, JSON.stringify(value)); } catch(e) {} },
  get(key)         { try { const v = sessionStorage.getItem('fda_' + key); return v ? JSON.parse(v) : null; } catch(e) { return null; } },
  clear(key)       { try { sessionStorage.removeItem('fda_' + key); } catch(e) {} },
};

// ── DOM helpers ───────────────────────────────────────────────
function $(sel, parent = document)  { return parent.querySelector(sel); }
function $$(sel, parent = document) { return Array.from(parent.querySelectorAll(sel)); }
function createElement(tag, cls = '', html = '') {
  const el = document.createElement(tag);
  if (cls)  el.className = cls;
  if (html) el.innerHTML = html;
  return el;
}

// ── mountChrome — inject navbar + footer ──────────────────────
function mountChrome(activePage = '') {
  const nb = document.getElementById('navbar-mount');
  const ft = document.getElementById('footer-mount');
  if (nb) nb.outerHTML = renderNavbar(activePage);
  if (ft) ft.outerHTML = renderFooter();
  initNavbar();
}

// ── Navbar ────────────────────────────────────────────────────
function initNavbar() {
  const navbar = $('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(43,160,197,0.18)'
      : '0 2px 8px rgba(43,160,197,0.10)';
  }, { passive: true });
}

// ── User session ──────────────────────────────────────────────
function getUser() {
  try { return JSON.parse(sessionStorage.getItem('fda_user')) || null; } catch(e) { return null; }
}
function setUser(user) {
  try { sessionStorage.setItem('fda_user', JSON.stringify(user)); } catch(e) {}
}
function logoutUser() {
  try { sessionStorage.removeItem('fda_user'); } catch(e) {}
}

function renderNavbar(activePage = '') {
  const user = getUser();
  const authSection = user
    ? `<div style="display:flex;align-items:center;gap:var(--gap-sm)">
         <a href="reservations.html" style="
           display:flex;align-items:center;gap:6px;
           font-family:var(--font-display);font-weight:600;font-size:0.9rem;
           color:var(--text-dark);padding:6px 14px;border-radius:var(--radius-full);
           background:var(--grey-light);transition:all var(--transition-fast);
           text-decoration:none;
         " onmouseover="this.style.background='rgba(91,196,232,0.15)'" onmouseout="this.style.background='var(--grey-light)'">
           <span style="font-size:1rem">👤</span>
           <span>${user.name}</span>
         </a>
         <button onclick="handleLogout()" class="btn btn-secondary btn-sm">Logout</button>
       </div>`
    : `<div style="display:flex;align-items:center;gap:var(--gap-sm)">
         <a href="login.html" class="btn btn-secondary btn-sm">Login</a>
         <a href="login.html" class="btn btn-primary btn-sm">Sign Up</a>
       </div>`;

  return `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <div class="brand-icon">✈️</div>
        <span>Fly</span>DreamAir
      </a>
      <ul class="navbar-nav">
        <li><a href="index.html" class="nav-link ${activePage==='home' ?'active':''}">Home</a></li>
        ${user ? `<li><a href="reservations.html" class="nav-link ${activePage==='reservations' ?'active':''}">My Bookings</a></li>` : ''}
      </ul>
      <div class="navbar-actions">
        ${authSection}
      </div>
    </div>
  </nav>`;
}

function handleLogout() {
  logoutUser();
  showToast('Logged out successfully', 'info');
  setTimeout(() => window.location.href = 'index.html', 600);
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="grid-4">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div class="brand-icon">✈️</div>
            <span style="color:var(--sky-blue-light);font-family:var(--font-display);font-weight:800;font-size:1.3rem;">Fly</span><span style="color:white;font-family:var(--font-display);font-weight:800;font-size:1.3rem;">DreamAir</span>
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

// ── Date / time helpers ───────────────────────────────────────
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

// formatChip — used by search.html date strip
function formatChip(dateStr) {
  if (!dateStr) return { day: '', dm: '' };
  const d = new Date(dateStr + 'T00:00:00');
  return {
    day: d.toLocaleDateString('en-AU', { weekday: 'short' }),
    dm:  d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }),
  };
}

// timeBucket — used by search.html filter
function timeBucket(timeStr) {
  if (!timeStr) return 'any';
  const h = parseInt(timeStr.split(':')[0], 10);
  if (h < 6)  return 'early';
  if (h < 12) return 'morning';
  if (h < 18) return 'afternoon';
  return 'evening';
}

// ── Flight helpers ────────────────────────────────────────────
function searchFlights(params) {
  const { from, to } = params;
  return FDA.flights.filter(f => f.from === from && f.to === to);
}

function getFlightById(id) {
  return FDA.flights.find(f => f.id === id) || null;
}

// ── Seat map ──────────────────────────────────────────────────
function generateSeatMap(rows = 30, cols = ['A','B','C','D','E','F']) {
  const takenSeats = new Set();
  for (let i = 0; i < 40; i++) {
    const r = Math.floor(Math.random() * rows) + 1;
    const c = cols[Math.floor(Math.random() * cols.length)];
    takenSeats.add(`${r}${c}`);
  }
  return { rows, cols, takenSeats };
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(message, type = 'info', duration = 3000) {
  let container = $('#toast-container');
  if (!container) {
    container = createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(container);
  }
  const colours = { info:'var(--sky-blue-dark)', success:'var(--success)', warning:'var(--warning)', error:'var(--danger)' };
  const icons   = { info:'ℹ️', success:'✅', warning:'⚠️', error:'❌' };
  const toast = createElement('div');
  toast.style.cssText = `background:white;border-left:4px solid ${colours[type]||colours.info};border-radius:10px;padding:12px 18px;box-shadow:0 4px 20px rgba(0,0,0,0.12);font-family:var(--font-body);font-size:0.9rem;color:var(--text-dark);display:flex;align-items:center;gap:10px;min-width:260px;max-width:380px;animation:slideInRight 0.3s ease both;cursor:pointer;`;
  toast.innerHTML = `<span>${icons[type]||icons.info}</span><span>${message}</span>`;
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
  overlay = createElement('div');
  overlay.id = 'modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(26,58,74,0.5);backdrop-filter:blur(4px);z-index:5000;display:flex;align-items:center;justify-content:center;padding:16px;animation:fadeIn 0.2s ease both;';
  const modal = createElement('div');
  modal.style.cssText = 'background:white;border-radius:20px;padding:32px;max-width:480px;width:100%;box-shadow:0 20px 60px rgba(26,58,74,0.25);animation:fadeInUp 0.3s ease both;';
  const actionsHTML = actions.map(a => `<button class="btn ${a.class||'btn-primary'}" onclick="${a.onclick}">${a.label}</button>`).join('');
  modal.innerHTML = `<h3 style="font-family:var(--font-display);color:var(--text-dark);margin-bottom:12px;">${title}</h3><div style="color:var(--text-mid);font-size:0.95rem;line-height:1.6;margin-bottom:24px;">${content}</div><div style="display:flex;gap:12px;justify-content:flex-end;">${actionsHTML}</div>`;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

function closeModal() {
  const o = $('#modal-overlay');
  if (o) o.remove();
}

// ── Form validation ───────────────────────────────────────────
function validateEmail(email)    { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validatePhone(phone)    { return /^[\d\s\+\-\(\)]{8,15}$/.test(phone); }
function validateNotEmpty(value) { return value && value.trim().length > 0; }

function showFieldError(input, message) {
  clearFieldError(input);
  input.style.borderColor = 'var(--danger)';
  input.parentNode.appendChild(createElement('div', 'form-error', message));
}
function clearFieldError(input) {
  input.style.borderColor = '';
  const e = input.parentNode.querySelector('.form-error');
  if (e) e.remove();
}

// ── Booking state ─────────────────────────────────────────────
function saveBooking(data)  { Object.assign(FDA.booking, data); storage.set('booking', FDA.booking); }
function loadBooking()      { const s = storage.get('booking'); if (s) Object.assign(FDA.booking, s); return FDA.booking; }
function clearBooking()     { FDA.booking = { searchParams:null, selectedFlight:null, passengers:[], seats:[], services:{}, payment:null }; storage.clear('booking'); }

// ── Reservations ──────────────────────────────────────────────
function getReservations() {
  const saved = storage.get('reservations');
  if (saved) return saved;
  // Only show default sample reservations if user is logged in
  const user = getUser();
  return user ? FDA.reservations : [];
}
function saveReservation(res)        { const all = getReservations(); all.unshift(res); storage.set('reservations', all); return res; }
function generateRef()               { return 'REF-' + Math.floor(10000 + Math.random() * 90000); }

// ── Extra page-level CSS injected once ────────────────────────
(function injectPageStyles() {
  if (document.getElementById('fda-page-styles')) return;
  const s = document.createElement('style');
  s.id = 'fda-page-styles';
  s.textContent = `
    .app-main { padding-top: var(--nav-height); }
    .hero      { padding-top: 0; min-height: calc(100vh - var(--nav-height)); }

    /* ── Flight row ── */
    .flight-row {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr 1fr auto;
      align-items: center;
      gap: var(--gap-md);
      padding: var(--gap-md) var(--gap-lg);
      background: var(--white);
      border: 1px solid rgba(91,196,232,0.15);
      border-radius: var(--radius-md);
      margin-bottom: var(--gap-sm);
      transition: all var(--transition-fast);
    }
    .flight-row:hover { box-shadow: var(--shadow-md); border-color: var(--sky-blue-light); transform: translateY(-1px); }
    .flight-row .time  { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); }
    .flight-row .stops { font-size: 0.85rem; color: var(--text-mid); }
    .flight-row .price { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--sky-blue-dark); text-align:right; }

    /* ── Date chips ── */
    .date-chips { display: flex; gap: var(--gap-sm); overflow-x: auto; padding-bottom: 4px; margin-bottom: var(--gap-md); }
    .date-chip  {
      flex-shrink: 0; padding: 10px 16px; border-radius: var(--radius-md);
      border: 2px solid var(--grey-light); background: var(--white);
      cursor: pointer; text-align: center; transition: all var(--transition-fast);
      min-width: 90px;
    }
    .date-chip .day   { display: block; font-family: var(--font-display); font-size: 0.8rem; font-weight: 600; color: var(--text-mid); }
    .date-chip .price { display: block; font-size: 0.8rem; color: var(--text-light); margin-top: 2px; }
    .date-chip.active, .date-chip:hover { border-color: var(--sky-blue); background: rgba(91,196,232,0.08); }
    .date-chip.active .day { color: var(--sky-blue-dark); }

    /* ── Filter bar ── */
    .filter-bar {
      display: flex; flex-wrap: wrap; gap: var(--gap-md); align-items: flex-end;
      background: var(--white); border: 1px solid var(--grey-light);
      border-radius: var(--radius-md); padding: var(--gap-md);
      margin-bottom: var(--gap-md);
    }
    .filter-group { display: flex; flex-direction: column; gap: 4px; }
    .filter-group label { font-family: var(--font-display); font-size: 0.75rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.05em; }
    .filter-group .form-control { min-width: 130px; }
    input[type=range] { accent-color: var(--sky-blue); width: 130px; }

    /* ── Seat map ── */
    .seat-map-wrap { overflow-x: auto; }
    .seat-map { display: inline-flex; flex-direction: column; gap: 6px; padding: var(--gap-md); }
    .seat-row  { display: flex; align-items: center; gap: 6px; }
    .seat-row-num { width: 24px; text-align: center; font-size: 0.75rem; color: var(--text-light); font-family: var(--font-display); font-weight: 600; flex-shrink: 0; }
    .seat-aisle { width: 20px; flex-shrink: 0; }
    .seat {
      width: 34px; height: 34px; border-radius: 6px 6px 4px 4px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 600; font-family: var(--font-display);
      cursor: pointer; border: 2px solid transparent; transition: all var(--transition-fast);
      flex-shrink: 0;
    }
    .seat.available  { background: var(--grey-light); color: var(--text-mid); border-color: transparent; }
    .seat.available:hover { background: rgba(91,196,232,0.2); border-color: var(--sky-blue); color: var(--sky-blue-dark); }
    .seat.taken      { background: #ddd; color: #aaa; cursor: not-allowed; }
    .seat.selected   { background: var(--sky-gradient); color: white; border-color: var(--sky-blue-dark); }
    .seat-legend { display: flex; gap: var(--gap-lg); margin-bottom: var(--gap-md); flex-wrap: wrap; }
    .seat-legend-item { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--text-mid); }
    .legend-dot { width: 16px; height: 16px; border-radius: 4px; flex-shrink: 0; }

    /* ── Service cards ── */
    .service-card {
      border: 2px solid var(--grey-light); border-radius: var(--radius-md);
      padding: var(--gap-md); cursor: pointer; transition: all var(--transition-fast);
      display: flex; align-items: center; gap: var(--gap-md);
    }
    .service-card:hover  { border-color: var(--sky-blue-light); box-shadow: var(--shadow-sm); }
    .service-card.active { border-color: var(--sky-blue); background: rgba(91,196,232,0.06); }
    .service-icon { font-size: 1.8rem; flex-shrink: 0; }
    .service-qty  { display: flex; align-items: center; gap: 8px; margin-left: auto; flex-shrink: 0; }
    .qty-btn { width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--grey-mid); background: white; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all var(--transition-fast); }
    .qty-btn:hover { border-color: var(--sky-blue); color: var(--sky-blue-dark); }
    .qty-val { font-family: var(--font-display); font-weight: 700; min-width: 20px; text-align: center; }

    /* ── Booking summary sidebar ── */
    .summary-card { position: sticky; top: calc(var(--nav-height) + 16px); }
    .summary-row  { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--grey-light); font-size: 0.9rem; }
    .summary-row:last-child { border-bottom: none; }
    .summary-total { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--text-dark); }

    /* ── Confirmation ── */
    .confirm-hero { background: var(--sky-gradient); padding: var(--gap-xxl) 0; text-align: center; }
    .confirm-icon { font-size: 4rem; margin-bottom: var(--gap-md); }
    .ref-badge { display: inline-block; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.4); border-radius: var(--radius-full); padding: 8px 24px; font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: white; letter-spacing: 0.1em; margin-top: var(--gap-md); }

    /* ── Reservations ── */
    .res-card { border: 1px solid rgba(91,196,232,0.15); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: var(--gap-md); transition: all var(--transition-normal); }
    .res-card:hover { box-shadow: var(--shadow-md); }
    .res-header { background: linear-gradient(135deg, var(--sky-blue-dark), var(--teal)); padding: var(--gap-md) var(--gap-lg); display: flex; justify-content: space-between; align-items: center; }
    .res-body { padding: var(--gap-lg); background: white; }
    .res-route { display: flex; align-items: center; gap: var(--gap-md); margin-bottom: var(--gap-md); }
    .res-city  { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; }
    .res-arrow { color: var(--sky-blue); font-size: 1.2rem; }

    /* ── Step bar ── */
    .step-bar { display: flex; align-items: center; gap: 0; padding: var(--gap-md) 0; overflow-x: auto; }

    @media (max-width: 768px) {
      .flight-row { grid-template-columns: 1fr 1fr; }
      .flight-row .price, .flight-row button { grid-column: span 2; }
    }
  `;
  document.head.appendChild(s);
})();

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadBooking();
});


