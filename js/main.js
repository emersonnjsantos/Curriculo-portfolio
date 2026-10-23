/* ==========================================================
   Portfólio Emerson Santos — comportamento
   ========================================================== */
(() => {
    'use strict';

    const GITHUB_USER = 'emersonnjsantos';
    const EMAIL = 'emer7681@gmail.com';
    const CV_PATH = 'assets/Curriculo-Emerson-Santos.pdf';
    const START_YEAR = 2023;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

    /* ---------- Dados: habilidades (extraídas do README) ---------- */
    const SKILLS = {
        'Linguagens': [
            ['Python', 'devicon-python-plain'], ['JavaScript', 'devicon-javascript-plain'],
            ['Java', 'devicon-java-plain'], ['Dart', 'devicon-dart-plain'],
            ['HTML5', 'devicon-html5-plain'], ['CSS3', 'devicon-css3-plain'],
        ],
        'IA & Dados': [
            ['TensorFlow', 'devicon-tensorflow-original'], ['PyTorch', 'devicon-pytorch-original'],
            ['LangChain', 'bi bi-link-45deg'], ['Streamlit', 'bi bi-bar-chart-line'],
            ['BeautifulSoup', 'bi bi-code-slash'],
        ],
        'Frameworks': [
            ['Flutter', 'devicon-flutter-plain'], ['React', 'devicon-react-original'],
            ['Django', 'devicon-django-plain'], ['Bootstrap', 'devicon-bootstrap-plain'],
            ['Node.js', 'devicon-nodejs-plain'], ['Express', 'devicon-express-original'],
        ],
        'Bancos de Dados': [
            ['MongoDB', 'devicon-mongodb-plain'], ['MySQL', 'devicon-mysql-plain'],
            ['Firebase', 'devicon-firebase-plain'],
        ],
        'Cloud & DevOps': [
            ['Docker', 'devicon-docker-plain'], ['Google Cloud', 'devicon-googlecloud-plain'],
            ['Azure', 'devicon-azure-plain'], ['AWS', 'devicon-amazonwebservices-plain-wordmark'],
            ['GitHub', 'devicon-github-original'],
        ],
        'Ferramentas': [
            ['IntelliJ IDEA', 'devicon-intellij-plain'], ['Sublime Text', 'devicon-sublimetext-plain'],
            ['Anaconda', 'devicon-anaconda-original'],
        ],
    };

    /* ---------- Dados: projetos de fallback (README) ---------- */
    const CATEGORIES = { ia: 'IA', flutter: 'Flutter', auto: 'Automação', web: 'Web & Dados' };
    const CAT_ICONS = { ia: 'bi-robot', flutter: 'bi-phone', auto: 'bi-gear-wide-connected', web: 'bi-window-stack' };

    const CURATED = {
        langchain_ask_images: { cat: 'ia', title: 'Agentes de IA', desc: 'Agentes inteligentes em Python com LangChain.', lang: 'Python' },
        RPA_Automacao: { cat: 'auto', title: 'Automação RPA', desc: 'Automação de processos com Python e Selenium.', lang: 'Python' },
        app_broadcasting_flutter: { cat: 'flutter', title: 'App Broadcasting', desc: 'Projeto Flutter com transmissão de dados e gerenciamento de estado.', lang: 'Dart' },
        bitcoim_price_flutter: { cat: 'flutter', title: 'Bitcoin Price', desc: 'Consulta em tempo real do preço do Bitcoin.', lang: 'Dart' },
        calcula_fuel_flutter: { cat: 'flutter', title: 'Calcula Fuel', desc: 'Calculadora para decidir entre álcool ou gasolina.', lang: 'Dart' },
        aprenda_ingles_flutter: { cat: 'flutter', title: 'Aprenda Inglês', desc: 'App educativo para aprender inglês com frases.', lang: 'Dart' },
        app_frases_diarias_Flutter: { cat: 'flutter', title: 'Frases Diárias', desc: 'App de frases motivacionais aleatórias.', lang: 'Dart' },
        Futter_apps: { cat: 'flutter', title: 'Coletânea de Apps Flutter', desc: 'Repositório com uma agenda de anotações e outros apps em Flutter.', lang: 'Dart' },
        app_restaurant_flutter: { cat: 'flutter', title: 'App Restaurant', desc: 'Aplicativo de restaurante desenvolvido em Flutter.', lang: 'Dart' },
        amanhecer_turismo_agencia: { cat: 'flutter', title: 'Amanhecer Turismo', desc: 'Aplicativo para agência de turismo desenvolvido em Flutter.', lang: 'Dart' },
    };

    const fallbackProjects = () =>
        Object.entries(CURATED).map(([repo, p]) => ({
            repo, title: p.title, desc: p.desc, cat: p.cat, lang: p.lang,
            url: `https://github.com/${GITHUB_USER}/${repo}`, stars: null,
        }));

    /* ---------- Tema claro/escuro ---------- */
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-bs-theme', savedTheme);
    $('#themeToggle').addEventListener('click', () => {
        const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);
        document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#0c0c0e' : '#f7f5f1';
    });

    /* ---------- Efeito de digitação ---------- */
    const phrases = ['Analista Full-Stack', 'Graduando em Ciência da Computação', 'Pós em Desenvolvimento Web', 'Pós em Indústria 4.0', 'Apps com Flutter', 'Automação RPA e Agentes de IA'];
    const typingEl = $('#typing');
    if (reduceMotion) {
        typingEl.textContent = phrases.join(' · ');
    } else {
        let p = 0, c = 0, deleting = false;
        const tick = () => {
            const word = phrases[p];
            typingEl.textContent = word.slice(0, c);
            let delay = deleting ? 40 : 85;
            if (!deleting && c === word.length) { deleting = true; delay = 1600; }
            else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 350; }
            c += deleting ? -1 : 1;
            setTimeout(tick, delay);
        };
        tick();
    }

    /* ---------- Habilidades ---------- */
    const skillsGrid = $('#skillsGrid');
    let totalTech = 0;
    skillsGrid.innerHTML = Object.entries(SKILLS).map(([group, items]) => {
        totalTech += items.length;
        const chips = items.map(([name, icon]) =>
            `<li class="skill-chip"><i class="${icon}"></i>${name}</li>`).join('');
        return `<div class="col-md-6 col-lg-4 reveal">
                    <div class="skill-card"><h3>${group}</h3><ul class="skill-list">${chips}</ul></div>
                </div>`;
    }).join('');
    $('#statTech').dataset.count = totalTech;
    $('#statYears').dataset.count = Math.max(1, new Date().getFullYear() - START_YEAR);

    /* ---------- Projetos (API do GitHub com fallback) ---------- */
    const filtersEl = $('#projectFilters');
    const gridEl = $('#projectsGrid');
    let projects = [];
    let activeFilter = 'all';

    const escapeHtml = (s = '') => s.replace(/[&<>"']/g, ch =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

    const categorize = (r) => {
        const text = `${r.name} ${r.description || ''} ${(r.topics || []).join(' ')}`.toLowerCase();
        if (r.language === 'Dart' || /flutter/.test(text)) return 'flutter';
        if (/langchain|\bia\b|\bai\b|agent|gpt|llm|machine|tensorflow|torch|openai|gemini/.test(text)) return 'ia';
        if (/rpa|automa|selenium|scrap|bot\b|crawler/.test(text)) return 'auto';
        return 'web';
    };

    const fromApi = (repos) => repos
        .filter(r => !r.fork && r.name.toLowerCase() !== 'curriculo-portfolio' && r.name !== GITHUB_USER)
        .map(r => {
            const cur = CURATED[r.name];
            return {
                repo: r.name,
                title: cur?.title || r.name.replace(/[_-]+/g, ' '),
                desc: cur?.desc || r.description || 'Repositório disponível no GitHub.',
                cat: cur?.cat || categorize(r),
                lang: r.language || cur?.lang || null,
                url: r.html_url,
                stars: r.stargazers_count,
            };
        });

    const renderFilters = () => {
        const present = [...new Set(projects.map(p => p.cat))];
        const buttons = [['all', 'Todos'], ...present.map(k => [k, CATEGORIES[k]])];
        filtersEl.innerHTML = buttons.map(([k, label]) =>
            `<button type="button" class="filter-btn ${k === activeFilter ? 'active' : ''}" data-filter="${k}">${label}</button>`).join('');
    };

    const renderProjects = () => {
        const list = projects.filter(p => activeFilter === 'all' || p.cat === activeFilter);
        gridEl.innerHTML = list.map((p, i) => `
            <div class="col-md-6 col-lg-4 project-col" style="animation-delay:${i * 60}ms">
                <a class="project-card" href="${p.url}" target="_blank" rel="noopener" aria-label="Abrir ${escapeHtml(p.title)} no GitHub">
                    <div class="project-top">
                        <i class="bi ${CAT_ICONS[p.cat]} project-icon"></i>
                        <i class="bi bi-arrow-up-right project-arrow"></i>
                    </div>
                    <h3>${escapeHtml(p.title)}</h3>
                    <p>${escapeHtml(p.desc)}</p>
                    <div class="project-meta">
                        <span class="project-tag cat">${CATEGORIES[p.cat]}</span>
                        ${p.lang ? `<span class="project-tag">${escapeHtml(p.lang)}</span>` : ''}
                        ${p.stars ? `<span><i class="bi bi-star-fill"></i> ${p.stars}</span>` : ''}
                    </div>
                </a>
            </div>`).join('');
        bindCardGlow();
        bindCursorHover();
    };

    filtersEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        activeFilter = btn.dataset.filter;
        renderFilters();
        renderProjects();
        bindCursorHover();
    });

    const bindCardGlow = () => $$('.project-card').forEach(card =>
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }));

    const loadProjects = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
            if (!res.ok) throw new Error(res.status);
            const data = fromApi(await res.json());
            if (!data.length) throw new Error('vazio');
            // Prioriza os projetos curados e depois os mais recentes
            projects = data.sort((a, b) => (CURATED[b.repo] ? 1 : 0) - (CURATED[a.repo] ? 1 : 0)).slice(0, 12);
        } catch (err) {
            projects = fallbackProjects();
        }
        $('#statProjects').dataset.count = projects.length;
        renderFilters();
        renderProjects();
        observeCounters();
    };

    /* ---------- Animação de revelação ao rolar ---------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('visible'); revealObserver.unobserve(en.target); }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => revealObserver.observe(el));

    /* ---------- Contadores animados ---------- */
    const animateCount = (el) => {
        const target = +el.dataset.count;
        if (reduceMotion) { el.textContent = target; return; }
        const duration = 1400, start = performance.now();
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    const counted = new WeakSet();
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting && !counted.has(en.target)) { counted.add(en.target); animateCount(en.target); }
        });
    }, { threshold: 0.6 });
    const observeCounters = () => $$('.stat-number').forEach(el => {
        if (counted.has(el)) { el.textContent = el.dataset.count; } else { counterObserver.observe(el); }
    });
    observeCounters();

    /* ---------- Navbar: estado de rolagem, link ativo e progresso ---------- */
    const navbar = $('#navbar');
    const progress = $('.scroll-progress');
    const sections = $$('main section[id]');
    const navLinks = $$('.site-nav .nav-link');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Fecha o menu mobile ao clicar em um link
    $$('.site-nav .nav-link').forEach(a => a.addEventListener('click', () => {
        const menu = $('#menu');
        if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }));

    /* ---------- Cursor personalizado ---------- */
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    function bindCursorHover() {
        if (!finePointer) return;
        const ring = $('.cursor-ring');
        $$('a, button, .skill-chip, input, textarea').forEach(el => {
            if (el.dataset.cursorBound) return;
            el.dataset.cursorBound = '1';
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
        });
    }
    if (finePointer && !reduceMotion) {
        document.body.classList.add('has-cursor');
        const dot = $('.cursor-dot'), ring = $('.cursor-ring');
        let mx = 0, my = 0, rx = 0, ry = 0;
        window.addEventListener('mousemove', (e) => {
            mx = e.clientX; my = e.clientY;
            dot.style.left = `${mx}px`; dot.style.top = `${my}px`;
        });
        const follow = () => {
            rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
            ring.style.left = `${rx}px`; ring.style.top = `${ry}px`;
            requestAnimationFrame(follow);
        };
        follow();
        bindCursorHover();
    }

    /* ---------- Download do currículo (com fallback para impressão) ---------- */
    $('#downloadCv').addEventListener('click', async () => {
        try {
            const res = await fetch(CV_PATH, { method: 'HEAD' });
            if (!res.ok) throw new Error('sem PDF');
            const a = document.createElement('a');
            a.href = CV_PATH; a.download = 'Curriculo-Emerson-Santos.pdf';
            document.body.appendChild(a); a.click(); a.remove();
        } catch {
            // PDF ainda não adicionado: abre o diálogo de impressão ("Salvar como PDF")
            window.print();
        }
    });

    /* ---------- Formulário de contato (abre o cliente de e-mail) ---------- */
    const form = $('#contactForm');
    const feedback = $('#formFeedback');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fields = ['name', 'email', 'message'].map(id => $(`#${id}`));
        let valid = true;
        fields.forEach(f => {
            const ok = f.value.trim() && (f.type !== 'email' || /^\S+@\S+\.\S+$/.test(f.value));
            f.classList.toggle('is-invalid', !ok);
            if (!ok) valid = false;
        });
        if (!valid) { feedback.textContent = 'Preencha os campos destacados.'; return; }

        const subject = $('#subject').value.trim() || `Contato pelo portfólio — ${$('#name').value.trim()}`;
        const body = `${$('#message').value.trim()}\n\n— ${$('#name').value.trim()} (${$('#email').value.trim()})`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        feedback.textContent = 'Abrindo seu aplicativo de e-mail...';
        form.reset();
    });
    $$('#contactForm .form-control').forEach(f => f.addEventListener('input', () => f.classList.remove('is-invalid')));

    /* ---------- Ano do rodapé ---------- */
    $('#year').textContent = new Date().getFullYear();

    loadProjects();
})();
