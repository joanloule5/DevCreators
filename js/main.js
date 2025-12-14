// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Mobile dropdowns
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.main-nav')) {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        }
    });
});

// Dans js/main.js, ajouter :
function loadServices() {
    const services = [
        {
            icon: 'fas fa-chess-king',
            title: 'Stratégie Digitale',
            description: 'Planification et conseil pour maximiser votre présence en ligne.',
            expert: 'Loule Joan',
            link: 'loule-joan.html',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-palette',
            title: 'Design UI/UX',
            description: 'Interfaces intuitives et expériences utilisateur mémorables.',
            expert: 'Blandine Dounakon',
            link: 'blandine-dounakon.html',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-code',
            title: 'Développement Frontend',
            description: 'Applications web modernes avec React, Vue.js ou Angular.',
            expert: 'Aurel Tona',
            link: 'aurel-tona.html',
            color: '#10b981'
        },
        {
            icon: 'fas fa-server',
            title: 'Développement Backend',
            description: 'APIs robustes et architectures serveur performantes.',
            expert: 'Yann Fondja',
            link: 'yann-fondja.html',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-cloud',
            title: 'DevOps & Infrastructure',
            description: 'Déploiement continu, conteneurisation et monitoring.',
            expert: 'Yann Heussieu',
            link: 'yann-heussieu.html',
            color: '#ef4444'
        }
    ];
    
    const container = document.getElementById('services-container');
    if (!container) return;
    
    services.forEach(service => {
        const serviceHTML = `
            <div class="service-card">
                <div class="service-icon" style="background-color: ${service.color}20; color: ${service.color};">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-expert">
                    <i class="fas fa-user-tie"></i>
                    Expert : <a href="${service.link}">${service.expert}</a>
                </div>
                <a href="${service.link}" class="btn-service">Voir le profil</a>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

// Appeler la fonction au chargement
document.addEventListener('DOMContentLoaded', loadServices);

// Dans js/main.js, ajouter :
function loadTeam() {
    const team = [
        {
            name: 'Loule Joan',
            role: 'Directeur Stratégique',
            bio: 'Expert en stratégie digitale avec 8 ans d\'expérience.',
            skills: ['Stratégie', 'Management', 'Business'],
            page: 'loule-joan.html'
        },
        {
            name: 'Dounakon Blandine',
            role: 'Designer UI/UX',
            bio: 'Passionnée par la création d\'expériences utilisateur intuitives.',
            skills: ['Figma', 'Adobe XD', 'Prototypage'],
            page: 'blandine-dounakon.html'
        },
        {
            name: 'Tona Aurel',
            role: 'Développeur Frontend',
            bio: 'Spécialiste React et Vue.js pour des interfaces performantes.',
            skills: ['React', 'Vue.js', 'TypeScript'],
            page: 'aurel-tona.html'
        },
        {
            name: 'Fondja Yann',
            role: 'Développeur Backend',
            bio: 'Architecte d\'APIs robustes et systèmes distribués.',
            skills: ['Node.js', 'Python', 'MongoDB'],
            page: 'yann-fondja.html'
        },
        {
            name: 'Heussieu Yann',
            role: 'Ingénieur DevOps',
            bio: 'Expert en déploiement continu et infrastructure cloud.',
            skills: ['Docker', 'AWS', 'Kubernetes'],
            page: 'yann-heussieu.html'
        }
    ];
    
    const container = document.getElementById('team-container');
    if (!container) return;
    
    team.forEach(member => {
        const memberHTML = `
            <div class="team-card">
                <div class="team-avatar">
                    <span>${member.name.charAt(0)}</span>
                </div>
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
                <div class="team-skills">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <a href="${member.page}" class="team-link">Voir profil détaillé <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        container.innerHTML += memberHTML;
    });
}

// Ajouter au DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    
    loadTeam();
    // ... code navigation existant
});

// Dans js/main.js, ajouter :
function updateFooterLinks() {
    const teamList = document.querySelector('.team-list');
    if (!teamList) return;
    
    const members = [
        {name: 'Loule Joan', page: 'loule-joan.html'},
        {name: 'Dounakon Blandine', page: 'blandine-dounakon.html'},
        {name: 'Tona Aurel', page: 'aurel-tona.html'},
        {name: 'Fondja Yann', page: 'yann-fondja.html'},
        {name: 'Heussieu Yann', page: 'yann-heussieu.html'}
    ];
    
    members.forEach(member => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${member.page}">${member.name}</a>`;
        teamList.appendChild(li);
    });
}

// Ajouter au DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    
    updateFooterLinks();
    // ... code navigation existant
});
