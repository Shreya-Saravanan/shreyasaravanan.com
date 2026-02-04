/* ================================================
   SHREYA SARAVANAN - PORTFOLIO
   Interactive JavaScript Module
   ================================================ */

// Project data (Shreya)
const projectsData = {
    1: {
        title: 'Global Terrorism Dashboard',
        category: 'Data Visualization',
        number: '01',
        tech: ['Python', 'Dash', 'Pandas', 'Flask', 'Plotly'],
        description: 'Analyzed a comprehensive dataset of 190,000+ records from the Global Terrorism Database using Python for exploratory data analysis, identifying key trends and patterns in terrorism incidents worldwide. Designed and developed a user-friendly interactive web dashboard with dynamic callbacks and customizable dropdown menus to enable users to search incidents, explore patterns, and support predictive analysis decisions.',
        architecture: 'The dashboard follows a layered architecture. The data layer uses Pandas for ETL operations on the raw CSV dataset, performing cleaning, aggregation, and transformation. The application layer is built on Flask with Dash, using callback functions to handle user interactions and dynamically update visualizations. Plotly generates interactive charts (choropleth maps, bar charts, time series) that respond to dropdown filters and date range selectors. The front-end uses Dash HTML and core components for layout and interactivity.',
        highlights: [
            'Processed and analyzed 190,000+ terrorism incident records',
            'Dynamic callbacks enabling real-time filter updates across all charts',
            'Choropleth world map with drill-down capability by region',
            'Time series analysis revealing trends across decades',
            'Customizable dropdown filters for attack type, target, and region'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    2: {
        title: 'Depression Dataset Analysis',
        category: 'Data Analysis',
        number: '02',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Tableau'],
        description: 'Utilized Python (Pandas, Matplotlib, Seaborn) for data cleaning, outlier handling, and visualization. Developed an interactive Tableau dashboard with advanced plots including violin plots to analyze key factors influencing depression. Applied statistical methods to identify correlations and trends in mental health data.',
        architecture: 'The analysis pipeline starts with data ingestion and cleaning using Pandas, handling missing values and outliers through IQR-based methods. The exploratory phase uses Matplotlib and Seaborn to generate distribution plots, correlation heatmaps, and violin plots for initial hypothesis formation. The final visualization layer is built in Tableau, connecting to the cleaned dataset and providing interactive dashboards with filters, parameter controls, and calculated fields for deeper exploration.',
        highlights: [
            'Comprehensive data cleaning pipeline handling missing values and outliers',
            'Statistical correlation analysis across multiple demographic factors',
            'Interactive Tableau dashboard with violin plots and advanced visualizations',
            'Identified key demographic and lifestyle factors correlated with depression',
            'Published insights with actionable recommendations for mental health research'
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    },
    3: {
        title: 'Job Application Tracker',
        category: 'Database Design',
        number: '03',
        tech: ['SQL Server', 'T-SQL', 'Data Encryption', 'Database Normalization'],
        description: 'Designed and developed a normalized SQL Server database for a Job Application Tracker, implementing tables, constraints, data encryption, and views to ensure data integrity, structure, and security. Applied database design principles including normalization and encryption techniques for secure data handling.',
        architecture: 'The database is designed following Third Normal Form (3NF) principles to minimize redundancy. Core entities include Users, Companies, Applications, Interviews, and Contacts, linked through foreign key relationships. Security is implemented using SQL Server\'s built-in encryption with symmetric keys and certificates for sensitive fields like salary expectations and notes. Database views provide pre-joined query results for common reporting needs, while stored procedures handle CRUD operations with input validation and error handling.',
        highlights: [
            'Normalized to 3NF ensuring data integrity and minimal redundancy',
            'Column-level encryption for sensitive data using symmetric keys',
            'Custom views for application status tracking and interview scheduling',
            'Stored procedures with input validation and transaction management',
            'Comprehensive constraint system including CHECK, UNIQUE, and FK constraints'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    4: {
        title: 'Arm Rehabilitation Assessment',
        category: 'Deep Learning',
        number: '04',
        tech: ['TensorFlow', 'PyTorch', 'MediaPipe', 'OpenCV', 'Flask'],
        description: 'Engineered a real-time rehabilitation assessment system consolidating ConvLSTM and LRCN-based architectures for exercise classification with 95%+ accuracy. Built web application for webcam-enabled analysis using MediaPipe for pose detection and real-time feedback on exercise effectiveness.',
        architecture: 'The system uses a multi-stage pipeline. The input stage captures video frames via webcam using OpenCV. MediaPipe\'s pose estimation model extracts 33 body landmarks in real-time, generating skeletal keypoint sequences. These sequences feed into two parallel deep learning architectures: ConvLSTM (combining spatial convolution with temporal LSTM) and LRCN (Long-term Recurrent Convolutional Network) for exercise classification. The Flask web server handles video streaming via WebSocket connections, processes frames server-side, and returns classification results and feedback to the browser interface in real-time.',
        highlights: [
            '95%+ classification accuracy across multiple rehabilitation exercises',
            'Real-time pose detection using MediaPipe with 33 body landmarks',
            'Dual architecture comparison: ConvLSTM vs LRCN for temporal modeling',
            'Live webcam-based assessment with instant visual feedback',
            'Flask web interface enabling remote rehabilitation monitoring'
        ],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    }
};

// DOM Elements
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');

// ================================================
// Custom Cursor
// ================================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let outlineX = 0;
let outlineY = 0;

function initCursor() {
    if (window.innerWidth <= 768) return;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-item, .tool-item, .timeline-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovering');
        });

        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovering');
        });
    });

    animateCursor();
}

function animateCursor() {
    // Smooth follow for dot
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    // Slower follow for outline
    outlineX += (mouseX - outlineX) * 0.1;
    outlineY += (mouseY - outlineY) * 0.1;

    if (cursorDot && cursorOutline) {
        cursorDot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
        cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
    }

    requestAnimationFrame(animateCursor);
}

// ================================================
// Navigation
// ================================================
function initNavigation() {
    // Smooth scroll for anchor links only
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Only prevent default for anchor links (starting with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // For external links (like resume.html), let the browser handle normally
        });
    });

    // Update active state on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ================================================
// Theme Toggle
// ================================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ================================================
// Project Detail Page
// ================================================
function initProjectDetail() {
    const detailSection = document.getElementById('projectDetail');
    if (!detailSection) return;

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = projectsData[projectId];

    if (!project) {
        window.location.href = 'index.html#projects';
        return;
    }

    document.title = project.title + ' | Shreya Saravanan';

    document.getElementById('detailNumber').textContent = project.number;
    document.getElementById('detailCategory').textContent = project.category;
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailDescription').textContent = project.description;
    document.getElementById('detailArchitecture').textContent = project.architecture;

    const detailImage = document.getElementById('detailImage');
    detailImage.src = project.image;
    detailImage.alt = project.title;

    const highlightsList = document.getElementById('detailHighlights');
    highlightsList.innerHTML = project.highlights
        .map(h => `<li>${h}</li>`)
        .join('');

    const stackContainer = document.getElementById('detailStack');
    stackContainer.innerHTML = project.tech
        .map(t => `<span>${t}</span>`)
        .join('');
}

// ================================================
// Skill Bars Animation
// ================================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');

                setTimeout(() => {
                    bar.style.width = `${progress}%`;
                }, 200);

                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// ================================================
// Scroll Animations
// ================================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.timeline-card, .project-item, .skill-category, .tool-item'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// ================================================
// Contact Form
// ================================================
function initContactForm() {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn--submit');

        // Loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Success state
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        submitBtn.querySelector('.btn-content span').textContent = 'Message Sent!';
        submitBtn.querySelector('.btn-content i').className = 'fas fa-check';

        // Reset form
        contactForm.reset();

        // Reset button after delay
        setTimeout(() => {
            submitBtn.classList.remove('success');
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-content span').textContent = 'Send Message';
            submitBtn.querySelector('.btn-content i').className = 'fas fa-paper-plane';
        }, 3000);
    });
}

// ================================================
// Parallax Effects
// ================================================
function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 10;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;

            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// ================================================
// Magnetic Buttons
// ================================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn--primary, .social-link');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ================================================
// Text Scramble Effect
// ================================================
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="scramble">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// ================================================
// Smooth Reveal on Load
// ================================================
function initLoadAnimation() {
    document.body.classList.add('loaded');

    // Animate sections on load
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
}

// ================================================
// Initialize Everything
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNavigation();
    initTheme();
    initProjectDetail();
    initSkillBars();
    initScrollAnimations();
    if (contactForm) initContactForm();
    initParallax();
    initMagneticButtons();
    initLoadAnimation();
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Come back! | Shreya Saravanan';
    } else {
        document.title = 'Shreya Saravanan | Data Analyst';
    }
});
