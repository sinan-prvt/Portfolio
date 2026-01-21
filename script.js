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
    gsap.from('.about-img-wrapper', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });

    // 4. Skills Stagger
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.2)'
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