const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});




// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Add animation on scroll for service cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Add animation class for CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
    .service-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .service-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    .service-card:nth-child(2) {
        transition-delay: 0.2s;
    }
    .service-card:nth-child(3) {
        transition-delay: 0.4s;
    }
</style>
`);



// the ngo grid system

    // NGO data with a focus on food-related organizations
    const ngos = [
        {
            id: 1,
            name: "Uganda Food Bank",
            focus: "Food Distribution & Security",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 2,
            name: "Feed the Hungry Uganda",
            focus: "Hunger Relief",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 3,
            name: "Kampala Food Network",
            focus: "Urban Food Security",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 4,
            name: "Sustainable Harvest Uganda",
            focus: "Agricultural Development",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 5,
            name: "Community Nutrition Initiative",
            focus: "Nutrition & Health",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 6,
            name: "Rural Food Access Program",
            focus: "Rural Food Security",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 7,
            name: "Uganda School Meals Project",
            focus: "School Feeding Programs",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 8,
            name: "Food for Life Uganda",
            focus: "Sustainable Food Systems",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 9,
            name: "Maternal & Child Nutrition",
            focus: "Mother & Child Health",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 10,
            name: "Emergency Food Relief Uganda",
            focus: "Disaster Response",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 11,
            name: "Farmers First Uganda",
            focus: "Farmer Support & Training",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 12,
            name: "Food Waste Reduction Network",
            focus: "Food Waste Management",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 13,
            name: "Uganda Water Project",
            focus: "Water & Sanitation",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 14,
            name: "Bwindi Community Program",
            focus: "Conservation & Community",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 15,
            name: "Uganda Rural Fund",
            focus: "Education & Healthcare",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 16,
            name: "TASO Uganda",
            focus: "HIV/AIDS Support",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 17,
            name: "Raising Voices",
            focus: "Gender-Based Violence",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 18,
            name: "FINCA Uganda",
            focus: "Microfinance",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 19,
            name: "Uganda Village Project",
            focus: "Public Health",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 20,
            name: "Conservation Through Public Health",
            focus: "Wildlife Conservation",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 21,
            name: "Uganda Women's Network",
            focus: "Women's Rights",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 22,
            name: "Child's i Foundation",
            focus: "Child Welfare",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 23,
            name: "Reach Out Mbuya",
            focus: "HIV/AIDS & Poverty",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 24,
            name: "Uganda Network of AIDS Service",
            focus: "HIV/AIDS Advocacy",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 25,
            name: "Food Rights Alliance",
            focus: "Food Policy & Advocacy",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 26,
            name: "Hunger Fighters Uganda",
            focus: "Food Distribution",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 27,
            name: "Nutrition for All",
            focus: "Nutrition Education",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 28,
            name: "Sustainable Agriculture Network",
            focus: "Farming Practices",
            rating: 4,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 29,
            name: "Food Security Partners",
            focus: "Multi-sector Collaboration",
            rating: 5,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 30,
            name: "Community Food Initiatives",
            focus: "Local Food Systems",
            rating: 4,
            image: "https://via.placeholder.com/100"
        }
    ];

    function renderProfiles(){// Render NGO cards
    const ngoGrid = document.getElementById('ngo-grid');
    
    ngos.forEach(ngo => {
        const ngoCard = document.createElement('div');
        ngoCard.className = 'ngo-card';
        
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= ngo.rating) {
                stars += '<i class="fas fa-star star filled"></i>';
            } else {
                stars += '<i class="fas fa-star star"></i>';
            }
        }
        
        ngoCard.innerHTML = `
            <div class="ngo-content">
                <img src="${ngo.image}" alt="${ngo.name}" class="ngo-avatar">
                <h3 class="ngo-name">${ngo.name}</h3>
                <p class="ngo-focus">Focus: ${ngo.focus}</p>
                <div class="ngo-rating">
                    ${stars}
                </div>
                <div class="ngo-actions">
                    <button class="donate-btn">Donate</button>
                    <button class="profile-btn">View Profile</button>
                </div>
            </div>
        `;
        
        ngoGrid.appendChild(ngoCard);
    });
}
document.addEventListener('DOMContentLoaded', renderProfiles);