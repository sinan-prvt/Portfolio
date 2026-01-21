document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js
    var typed = new Typed('#typed', {
        strings: ['Python Wizard', 'Full Stack Developer', 'Creative Designer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true
    });

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with lag (handled by CSS transition or simple requestAnimationFrame if desired for smoother feel, but CSS is fine for simple lag)
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        // Simple interactivity
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scrolled State
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-lg');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2', 'shadow-lg');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            gsap.fromTo(mobileLinks,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' }
            );
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        });
    });

    // --- GSAP Animations ---

    // 1. Hero Text Reveal
    const openTl = gsap.timeline();
    openTl.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
    })
        .from('.reveal-img', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');

    // 2. Section Headers
    gsap.utils.toArray('section h2').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // 3. About Section Image Reveal
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // 4. Skills Infinite Loop (Custom Vanilla JS Implementation)
    class LogoLoop {
        constructor(containerSelector, trackSelector, options = {}) {
            this.container = document.querySelector(containerSelector);
            this.track = document.querySelector(trackSelector);
            if (!this.container || !this.track) return;

            this.options = {
                speed: 1, // pixels per frame (approx)
                direction: 'left', // 'left' or 'right'
                hoverSpeed: 0, // speed when hovered
                ...options
            };

            this.offset = 0;
            this.velocity = 0;
            this.rafId = null;
            this.lastTime = null;
            this.isHovered = false;
            this.itemWidth = 0;
            this.totalWidth = 0;

            this.init();
        }

        init() {
            // Measure original item width (assuming uniform or calculating total)
            this.measureDimensions();

            // Clone items to fill screen + buffer
            this.cloneItems();

            // Setup Event Listeners
            this.container.addEventListener('mouseenter', () => this.isHovered = true);
            this.container.addEventListener('mouseleave', () => this.isHovered = false);
            window.addEventListener('resize', () => {
                this.measureDimensions();
                // Re-cloning might be needed if screen gets much wider,
                // but for now simple measure is usually enough if we cloned enough initially
            });

            // Start Loop
            this.start();
        }

        measureDimensions() {
            // Calculate the width of one original set of items
            // We can do this by summing widths of original children,
            // but since we might have already cloned, relying on a "single set" logic is safer if we track it.
            // Simplified approach: treating current track children as the set to loop if not yet cloned,
            // or we could mark originals.
            // For this implementation, we'll assume init() is called once before cloning.

            // Actually, best to just get the total scroll width of the track content
            // But strict "seamless" looping requires knowing the exact width of one "period".

            // Let's assume the track currently contains exactly one set of logos.
            this.originalChildren = Array.from(this.track.children);

            // Calculate total width of original content including gaps
            // We get the gap from computed style
            const gap = parseFloat(getComputedStyle(this.track).columnGap || '0');

            this.periodWidth = this.originalChildren.reduce((acc, child) => {
                return acc + child.getBoundingClientRect().width;
            }, 0) + (this.originalChildren.length * gap); // Include gaps
        }

        cloneItems() {
            // Determine how many copies we need to cover the viewport width + extra
            // to ensure smooth infinite scrolling.
            const viewportWidth = window.innerWidth;
            const minWidthNeeded = viewportWidth * 2; // Safety buffer

            let currentWidth = this.periodWidth;

            // Keep cloning until we have enough width
            while (currentWidth < minWidthNeeded || this.track.children.length < this.originalChildren.length * 2) {
                this.originalChildren.forEach(child => {
                    const clone = child.cloneNode(true);
                    this.track.appendChild(clone);
                });
                currentWidth += this.periodWidth;
            }
        }

        start() {
            if (!this.rafId) {
                this.rafId = requestAnimationFrame(this.animate.bind(this));
            }
        }

        animate(timestamp) {
            if (!this.lastTime) this.lastTime = timestamp;
            const deltaTime = (timestamp - this.lastTime) / 1000; // seconds
            this.lastTime = timestamp;

            // Target speed calculation
            const targetSpeed = this.isHovered ? this.options.hoverSpeed : this.options.speed;
            const directionMult = this.options.direction === 'left' ? 1 : -1;

            // Smooth velocity transition (simple lerp)
            // Equivalent to 1 - Math.exp(-deltaTime / SMOOTH_TAU) where SMOOTH_TAU = 0.1
            const smoothing = 0.1;
            this.velocity += (targetSpeed - this.velocity) * smoothing;

            // Update Offset
            // Adjust speed factor to make "1" feel like a reasonable pixel/frame speed approx
            const moveAmt = this.velocity * (deltaTime * 60) * directionMult;

            this.offset += moveAmt;

            // Seamless Loop Logic
            // If we have scrolled past the width of one period, reset
            if (this.offset >= this.periodWidth) {
                this.offset -= this.periodWidth;
            } else if (this.offset < 0) {
                this.offset += this.periodWidth;
            }

            // Apply Transform
            this.track.style.transform = `translate3d(${-this.offset}px, 0, 0)`;

            this.rafId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    // Initialize LogoLoop
    new LogoLoop('#logo-loop-container', '#logo-track', {
        speed: 1, // Base speed
        hoverSpeed: 0, // Pause on hover
        direction: 'left'
    });

    // 5. Experience Timeline
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });

    // 6. Projects Reveal
    gsap.utils.toArray('.project-row').forEach((row, i) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: 'top 85%'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Initialize EmailJS
    (function () {
        emailjs.init({
            publicKey: "MTQ7X_pz4x1Mdmz5z",
        });
    })();
});

// Send Mail Function
function sendMail() {
    const btn = document.querySelector('#contactForm button');
    const originalText = btn.innerText;
    btn.innerText = 'Sending...';
    btn.disabled = true;

    var parms = {
        name: document.getElementById("name1").value,
        email: document.getElementById("email1").value,
        message: document.getElementById("message1").value,
        phone: document.getElementById("phone1").value
    }

    const serviceID = "service_23qbh77";
    const templateID = "template_lozinv4";

    emailjs.send(serviceID, templateID, parms)
        .then(res => {
            document.getElementById("name1").value = "";
            document.getElementById("email1").value = "";
            document.getElementById("message1").value = "";
            document.getElementById("phone1").value = "";
            console.log(res);
            alert("Your Message Sent Successfully!");
            btn.innerText = originalText;
            btn.disabled = false;
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send message. Please try again.");
            btn.innerText = originalText;
            btn.disabled = false;
        });
}