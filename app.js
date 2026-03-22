// ==========================================
//  澳新蜜月之旅 · 交互脚本 v3
// ==========================================

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  //  0. Particles Background
  // ═══════════════════════════════════════════
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    const PARTICLE_COUNT = 80;
    const CONNECT_DIST = 120;
    let mouse = { x: -999, y: -999 };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Track mouse for interactive connection lines
    document.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    document.addEventListener('mouseleave', () => {
      mouse.x = -999;
      mouse.y = -999;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.8 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
        // Random warm/cool color
        const colors = ['rgba(212,164,76,', 'rgba(91,168,213,', 'rgba(59,191,160,', 'rgba(159,141,224,', 'rgba(255,255,255,'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(91,168,213,' + (0.08 * (1 - dist / CONNECT_DIST)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse interaction
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(212,164,76,' + (0.15 * (1 - mDist / 150)) + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  // ═══════════════════════════════════════════
  //  1. Overview – Horizontal Scroll Cards
  // ═══════════════════════════════════════════
  function renderOverview() {
    const track = document.getElementById('overviewTrack');
    const progressEl = document.getElementById('ovProgress');
    if (!track) return;

    // Render cards
    track.innerHTML = TRIP_DATA.days.map(d => `
      <div class="ov-card" data-day="${d.day}"
           style="--card-accent:${d.color};--card-glow:${d.color}40">
        <img class="ov-card__img" src="${d.image}" alt="${d.title}" loading="lazy" />
        <div class="ov-card__overlay"></div>
        <span class="ov-card__badge ${d.country === 'australia' ? 'au' : 'nz'}">
          ${d.country === 'australia' ? '🇦🇺 AU' : '🇳🇿 NZ'}
        </span>
        <div class="ov-card__body">
          <div class="ov-card__day">Day ${d.day}</div>
          <div class="ov-card__date">${d.date} ${d.weekday}</div>
          <div class="ov-card__title">${d.title}</div>
          <div class="ov-card__loc">${d.location}</div>
        </div>
      </div>
    `).join('');

    // Click → scroll to day card
    track.querySelectorAll('.ov-card').forEach(card => {
      card.addEventListener('click', () => {
        const dayCard = document.querySelector(`.day-card[data-day="${card.dataset.day}"]`);
        if (dayCard) dayCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // 3D tilt on hover (desktop only)
    if (!('ontouchstart' in window)) {
      track.querySelectorAll('.ov-card').forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `translateY(-8px) scale(1.03) perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    // Progress dots
    if (progressEl) {
      progressEl.innerHTML = TRIP_DATA.days.map((d, i) =>
        `<div class="ov-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`
      ).join('');

      progressEl.querySelectorAll('.ov-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = +dot.dataset.index;
          const cards = track.querySelectorAll('.ov-card');
          if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
      });
    }

    // Update progress dots on scroll
    track.addEventListener('scroll', () => {
      if (!progressEl) return;
      const cards = track.querySelectorAll('.ov-card');
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closest = 0, minDist = Infinity;
      cards.forEach((c, i) => {
        const cRect = c.getBoundingClientRect();
        const cCenter = cRect.left + cRect.width / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      progressEl.querySelectorAll('.ov-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === closest);
      });
    });

    // Arrow scroll
    const leftBtn = document.querySelector('.ov-arrow--left');
    const rightBtn = document.querySelector('.ov-arrow--right');
    if (leftBtn) leftBtn.addEventListener('click', () => track.scrollBy({ left: -240, behavior: 'smooth' }));
    if (rightBtn) rightBtn.addEventListener('click', () => track.scrollBy({ left: 240, behavior: 'smooth' }));
  }

  // ═══════════════════════════════════════════
  //  2. Map
  // ═══════════════════════════════════════════
  let map, routeLayer, markerLayer;

  function initMap() {
    const el = document.getElementById('map');
    if (!el) return;

    map = L.map('map', {
      center: [-42, 170],
      zoom: 5,
      zoomControl: false,
      attributionControl: false
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18, subdomains: 'abcd'
    }).addTo(map);

    routeLayer = L.layerGroup().addTo(map);
    markerLayer = L.layerGroup().addTo(map);

    renderDaySelector();
    showAllRoutes();
  }

  function renderDaySelector() {
    const el = document.getElementById('day-selector');
    if (!el) return;

    let html = '<button class="day-btn active" data-day="all">全部</button>';
    TRIP_DATA.days.forEach(d => {
      html += `<button class="day-btn" data-day="${d.day}" style="--btn-c:${d.color}">D${d.day}</button>`;
    });
    el.innerHTML = html;

    el.addEventListener('click', e => {
      const btn = e.target.closest('.day-btn');
      if (!btn) return;
      el.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const day = btn.dataset.day;
      day === 'all' ? showAllRoutes() : showDayRoute(+day);
    });
  }

  function pulseIcon(color) {
    return L.divIcon({
      className: '',
      html: `<div class="pulse-marker" style="background:${color};color:${color}"></div>`,
      iconSize: [10, 10], iconAnchor: [5, 5]
    });
  }

  function showAllRoutes() {
    routeLayer.clearLayers();
    markerLayer.clearLayers();
    const infoEl = document.getElementById('route-info');
    if (infoEl) infoEl.innerHTML = '';

    const all = [];
    TRIP_DATA.days.forEach(d => {
      markerLayer.addLayer(
        L.marker([d.coords.lat, d.coords.lng], { icon: pulseIcon(d.color) })
          .bindPopup(`<strong>Day ${d.day}</strong><br>${d.title}<br><small>${d.location}</small>`)
      );
      all.push([d.coords.lat, d.coords.lng]);

      if (d.route && d.route.length > 1) {
        routeLayer.addLayer(
          L.polyline(d.route.map(r => [r.lat, r.lng]), {
            color: d.color, weight: 2.5, opacity: .55, dashArray: '8 6'
          })
        );
      }
    });

    // inter-day links
    for (let i = 0; i < TRIP_DATA.days.length - 1; i++) {
      const a = TRIP_DATA.days[i], b = TRIP_DATA.days[i + 1];
      routeLayer.addLayer(
        L.polyline([[a.coords.lat, a.coords.lng], [b.coords.lat, b.coords.lng]], {
          color: '#fff', weight: 1, opacity: .1, dashArray: '4 8'
        })
      );
    }
    if (all.length) map.fitBounds(all, { padding: [40, 40] });
  }

  function showDayRoute(dayNum) {
    routeLayer.clearLayers();
    markerLayer.clearLayers();
    const d = TRIP_DATA.days.find(x => x.day === dayNum);
    if (!d) return;
    updateRouteInfo(d);

    if (d.route && d.route.length > 0) {
      const pts = d.route.map(r => [r.lat, r.lng]);
      routeLayer.addLayer(L.polyline(pts, { color: d.color, weight: 3.5, opacity: .85 }));

      d.route.forEach((r, i) => {
        const info = r.dist ? `<br><small style="color:${d.color}">${r.dist}</small>` : '';
        markerLayer.addLayer(
          L.marker([r.lat, r.lng], { icon: pulseIcon(d.color) })
            .bindPopup(`<strong>${r.name}</strong>${info}`)
        );

        const label = r.name.length > 10 ? r.name.slice(0, 10) + '…' : r.name;
        markerLayer.addLayer(L.marker([r.lat, r.lng], {
          icon: L.divIcon({
            className: '',
            html: `<div style="display:flex;align-items:center;gap:3px;transform:translate(7px,-10px);white-space:nowrap">
              <div style="background:${d.color};color:#fff;min-width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;box-shadow:0 2px 6px rgba(0,0,0,.4)">${i + 1}</div>
              <span style="color:#fff;font-size:10px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,.8);background:rgba(0,0,0,.45);padding:1px 5px;border-radius:3px">${label}</span>
            </div>`,
            iconSize: [0, 0], iconAnchor: [0, 0]
          })
        }));

        // distance label on segment midpoint
        if (i > 0 && r.dist) {
          const p = d.route[i - 1];
          markerLayer.addLayer(L.marker([(p.lat + r.lat) / 2, (p.lng + r.lng) / 2], {
            icon: L.divIcon({
              className: '',
              html: `<div style="background:rgba(0,0,0,.65);color:${d.color};font-size:9px;font-weight:600;padding:1px 5px;border-radius:6px;border:1px solid ${d.color}30;white-space:nowrap;transform:translate(-50%,-50%)">${r.dist}</div>`,
              iconSize: [0, 0], iconAnchor: [0, 0]
            })
          }));
        }
      });

      map.fitBounds(pts, { padding: [60, 60], maxZoom: 12 });
    } else {
      markerLayer.addLayer(
        L.marker([d.coords.lat, d.coords.lng], { icon: pulseIcon(d.color) })
          .bindPopup(`<strong>Day ${d.day}</strong><br>${d.title}`)
      );
      map.setView([d.coords.lat, d.coords.lng], 8);
    }
  }

  function updateRouteInfo(d) {
    let el = document.getElementById('route-info');
    if (!el) return;
    let html = '';
    if (d.driveInfo) {
      html = `<div class="route-info-panel">
        <span class="route-info-item">🚗 总距离 <strong>${d.driveInfo.totalKm}</strong></span>
        <span class="route-info-item">⏱️ 驾驶 <strong>${d.driveInfo.totalTime}</strong></span>
        <span class="route-info-item">🏨 住宿 <strong>${d.stay || ''}</strong></span>
      </div>`;
    } else if (d.transport) {
      html = `<div class="route-info-panel">
        <span class="route-info-item">✈️ <strong>${d.transport.detail}</strong></span>
        <span class="route-info-item">🏨 <strong>${d.stay || ''}</strong></span>
      </div>`;
    } else if (d.stay) {
      html = `<div class="route-info-panel">
        <span class="route-info-item">🏨 住宿 <strong>${d.stay}</strong></span>
      </div>`;
    }
    el.innerHTML = html;
  }

  // ═══════════════════════════════════════════
  //  3. Daily Cards
  // ═══════════════════════════════════════════
  function renderDailyCards() {
    const el = document.getElementById('daily-cards');
    if (!el) return;

    el.innerHTML = TRIP_DATA.days.map(d => {
      let transport = '';
      if (d.driveInfo) transport = `<div class="card-transport">🚗 自驾 ${d.driveInfo.totalKm} · ${d.driveInfo.totalTime}</div>`;
      else if (d.transport) transport = `<div class="card-transport">${d.transport.mode === 'flight' ? '✈️' : '🚌'} ${d.transport.detail}</div>`;

      let route = '';
      if (d.route && d.route.length > 1) {
        const stops = d.route.map(r => {
          const dist = r.dist ? ` <small>(${r.dist})</small>` : '';
          return `<span>${r.name}${dist}</span>`;
        });
        route = `<div class="card-route">${stops.join(' → ')}</div>`;
      }

      return `
        <article class="day-card" data-day="${d.day}" style="--card-color:${d.color}">
          <div class="card-img">
            <img src="${d.image}" alt="${d.title}" loading="lazy" />
            <div class="card-badge">DAY ${d.day} · ${d.weekday}</div>
          </div>
          <div class="card-body">
            <div class="card-meta">${d.date} ${d.weekday}</div>
            <h3 class="card-title">${d.title}</h3>
            <div class="card-loc">📍 ${d.location}</div>
            ${d.stay ? `<div class="card-stay">🏨 住宿：${d.stay}</div>` : ''}
            ${transport}
            ${route}
            <ul class="card-hl">${d.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
            ${d.food ? `<div class="card-food">${d.food}</div>` : ''}
            ${d.tips ? `<div class="card-tips">${d.tips}</div>` : ''}
            ${d.budget ? `<div class="card-budget">💲 ${d.budget}</div>` : ''}
          </div>
        </article>`;
    }).join('');
  }

  // ═══════════════════════════════════════════
  //  4. Tips
  // ═══════════════════════════════════════════
  function renderTips() {
    const el = document.getElementById('tips-grid');
    if (!el) return;
    el.innerHTML = TRIP_DATA.tips.map(t => `
      <div class="tip-card reveal">
        <div class="tip-icon">${t.icon}</div>
        <div class="tip-title">${t.title}</div>
        <ul class="tip-items">${t.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    `).join('');
  }

  // ═══════════════════════════════════════════
  //  5. Scroll Observer
  // ═══════════════════════════════════════════
  function initObserver() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal,.day-card').forEach(el => io.observe(el));
  }

  // ═══════════════════════════════════════════
  //  6. Count-up
  // ═══════════════════════════════════════════
  function initCountUp() {
    const els = document.querySelectorAll('.stat-val[data-count]');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const target = +e.target.dataset.count;
        const start = performance.now();
        const dur = 1400;
        (function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          e.target.textContent = Math.floor(ease * target);
          if (p < 1) requestAnimationFrame(tick); else e.target.textContent = target;
        })(start);
        io.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    els.forEach(s => io.observe(s));
  }

  // ═══════════════════════════════════════════
  //  7. Stagger delays
  // ═══════════════════════════════════════════
  function stagger() {
    document.querySelectorAll('.tip-card').forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; });
  }

  // ═══════════════════════════════════════════
  //  8. Image fallback
  // ═══════════════════════════════════════════
  function imgFallback() {
    document.querySelectorAll('.card-img img, .ov-card__img').forEach(img => {
      img.addEventListener('error', function () {
        this.style.display = 'none';
        const p = this.closest('.card-img') || this.parentElement;
        p.style.background = 'linear-gradient(135deg,#1a2436,#0d1321)';
        p.insertAdjacentHTML('beforeend', '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:2.5rem;opacity:.25">🏞️</div>');
      });
    });
  }

  // ═══════════════════════════════════════════
  //  Init
  // ═══════════════════════════════════════════
  function init() {
    initParticles();
    renderOverview();
    initMap();
    renderDailyCards();
    renderTips();
    requestAnimationFrame(() => {
      initObserver();
      stagger();
      imgFallback();
      initCountUp();
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
