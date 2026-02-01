document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed', {
        strings: ['Python Wizard', 'Full Stack Developer', 'Creative Designer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true
    });

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    gsap.registerPlugin(ScrollTrigger);

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

    class LogoLoop {
        constructor(containerSelector, trackSelector, options = {}) {
            this.container = document.querySelector(containerSelector);
            this.track = document.querySelector(trackSelector);
            if (!this.container || !this.track) return;

            this.options = {
                speed: 1,
                direction: 'left',
                hoverSpeed: 0,
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
            this.measureDimensions();

            this.cloneItems();

            this.container.addEventListener('mouseenter', () => this.isHovered = true);
            this.container.addEventListener('mouseleave', () => this.isHovered = false);
            window.addEventListener('resize', () => {
                this.measureDimensions();
            });

            this.start();
        }

        measureDimensions() {
            this.originalChildren = Array.from(this.track.children);

            const gap = parseFloat(getComputedStyle(this.track).columnGap || '0');

            this.periodWidth = this.originalChildren.reduce((acc, child) => {
                return acc + child.getBoundingClientRect().width;
            }, 0) + (this.originalChildren.length * gap);
        }

        cloneItems() {
            const viewportWidth = window.innerWidth;
            const minWidthNeeded = viewportWidth * 2;

            let currentWidth = this.periodWidth;

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
            const deltaTime = (timestamp - this.lastTime) / 1000;
            this.lastTime = timestamp;

            const targetSpeed = this.isHovered ? this.options.hoverSpeed : this.options.speed;
            const directionMult = this.options.direction === 'left' ? 1 : -1;

            const smoothing = 0.1;
            this.velocity += (targetSpeed - this.velocity) * smoothing;

            const moveAmt = this.velocity * (deltaTime * 60) * directionMult;

            this.offset += moveAmt;

            if (this.offset >= this.periodWidth) {
                this.offset -= this.periodWidth;
            } else if (this.offset < 0) {
                this.offset += this.periodWidth;
            }

            this.track.style.transform = `translate3d(${-this.offset}px, 0, 0)`;

            this.rafId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    new LogoLoop('#logo-loop-container', '#logo-track', {
        speed: 1,
        hoverSpeed: 0,
        direction: 'left'
    });

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

    (function () {
        emailjs.init({
            publicKey: "MTQ7X_pz4x1Mdmz5z",
        });
    })();
});

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