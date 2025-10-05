// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for hero subtitle
    var typed = new Typed('#typed', {
        strings: ['The Python Wizard', 'Full Stack Python Developer', 'FrontEnd Developer','BackEnd Developer','Creative Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Hero animations
    gsap.from('.animate-hero', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Hero Parallax Effect
    gsap.to('.hero', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            scrub: true,
            start: 'top top',
            end: 'bottom top'
        }
    });

    // Staggered Text Animation for About Section
    gsap.utils.toArray('#about p').forEach((paragraph, index) => {
        gsap.from(paragraph, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Section animations
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Skill item animations with more stagger and rotation
    gsap.utils.toArray('.skill-item').forEach((skill, index) => {
        gsap.from(skill, {
            opacity: 0,
            x: -50,
            rotation: -10,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Hover Animations for Skill Items
    gsap.utils.toArray('.skill-item').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.1,
                rotation: 5,
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                rotation: 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Project card animations with enhanced effects
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Hover Animations for Project Cards
    gsap.utils.toArray('.project-card .card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                y: -15,
                boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Contact form animation
    gsap.from('.contact-form', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Pulse Effect for Contact Form Button
    gsap.to('.contact-form button', {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Additional GSAP for contact items
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Footer animation
    gsap.from('footer', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    });

    // Section visibility on scroll
    gsap.utils.toArray('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => section.classList.add('visible'),
            onLeaveBack: () => section.classList.remove('visible')
        });
    });
});

// EmailJS sendMail function
function sendMail() {
    var parms = {
        name : document.getElementById("name1").value ,
        email : document.getElementById("email1").value ,
        message : document.getElementById("message1").value ,
        phone : document.getElementById("phone1").value 
    } 

    const serviceID ="service_23qbh77";
    const templateID ="template_lozinv4";


    emailjs
    .send(serviceID,templateID,parms)
    .then( res => {
        document.getElementById("name1").value = "" ;
        document.getElementById("email1").value = "";
        document.getElementById("message1").value = "";
        document.getElementById("phone1").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");    
    })
    .catch((err) => console.log(err)); 
}




document.addEventListener('DOMContentLoaded', function() {
    
  
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-element.before-reveal {
            opacity: 0;
        }

        .reveal-element.before-reveal.from-left {
            transform: translateX(-30px);
        }

        .reveal-element.before-reveal.from-right {
            transform: translateX(30px);
        }

        .reveal-element.before-reveal.from-bottom {
            transform: translateY(30px);
        }

        .reveal-element.before-reveal.fade-only {
            transform: none;
        }

        .reveal-element.before-reveal.scale-in {
            transform: scale(0.95);
        }

        .reveal-element.revealed {
            opacity: 1;
            transform: none;
        }

        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    const elementsToReveal = [
        { selector: '.me', animation: 'from-left' },
        { selector: '.txt1', animation: 'fade-only' },
        { selector: '.txt2', animation: 'from-bottom' },
        
        { selector: '.skilltxt', animation: 'scale-in' },
        { selector: '.grd1', animation: 'from-bottom', stagger: true },
        
        { selector: '.hpro', animation: 'fade-only' },
        { selector: '.box1', animation: 'from-bottom' },
        { selector: '.box2', animation: 'from-bottom' },
        { selector: '.box3', animation: 'from-bottom' },
        
        { selector: '.contact-title', animation: 'from-bottom' },
        { selector: '.address', animation: 'from-bottom' },
        { selector: '.freelance', animation: 'from-bottom' },
        { selector: '.email', animation: 'from-bottom' },
        { selector: '.phone', animation: 'from-bottom' },
        { selector: '.contact-form', animation: 'from-right' }
    ];

    elementsToReveal.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach((element, index) => {
            element.classList.add('reveal-element', 'before-reveal', config.animation);
            
            if (config.stagger && elements.length > 1) {
                const delayClass = `reveal-delay-${Math.min(index + 1, 6)}`;
                element.classList.add(delayClass);
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('before-reveal');
                entry.target.classList.add('revealed');
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach(element => {
            observer.observe(element);
        });
    });

    console.log('✨ Scroll reveal animations loaded - your layout is preserved!');
});