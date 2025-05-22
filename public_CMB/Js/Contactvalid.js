document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  const radios = form.querySelectorAll("input[type='radio'][required]");

  form.addEventListener("submit", (e) => {
    let isValid = true;

    inputs.forEach((input) => {
      const error = input.nextElementSibling;
      if (!input.value.trim()) {
        error.textContent = `${input.previousElementSibling.textContent} is required.`;
        error.style.display = "block";
        isValid = false;
      } else {
        error.textContent = "";
        error.style.display = "none";
      }
    });

    const radioGroups = [...new Set([...radios].map(r => r.name))];
    radioGroups.forEach(group => {
      const groupRadios = form.querySelectorAll(`input[name="${group}"]`);
      const groupError = groupRadios[groupRadios.length - 1].parentElement.nextElementSibling;
      const isChecked = [...groupRadios].some(r => r.checked);
      if (!isChecked) {
        groupError.textContent = `Please select a ${group}.`;
        groupError.style.display = "block";
        isValid = false;
      } else {
        groupError.textContent = "";
        groupError.style.display = "none";
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    // Categories data
    const categories = [
        {
            id: 1,
            name: "Food Security",
            count: 12,
            icon: "fa-utensils"
        },
        {
            id: 2,
            name: "Agriculture",
            count: 8,
            icon: "fa-seedling"
        },
        {
            id: 3,
            name: "Education",
            count: 10,
            icon: "fa-graduation-cap"
        },
        {
            id: 4,
            name: "Health",
            count: 15,
            icon: "fa-heartbeat"
        },
        {
            id: 5,
            name: "Water & Sanitation",
            count: 7,
            icon: "fa-tint"
        },
        {
            id: 6,
            name: "Environment",
            count: 6,
            icon: "fa-leaf"
        },
        {
            id: 7,
            name: "Human Rights",
            count: 9,
            icon: "fa-balance-scale"
        },
        {
            id: 8,
            name: "Microfinance",
            count: 5,
            icon: "fa-hand-holding-usd"
        },
        {
            id: 9,
            name: "Disaster Response",
            count: 4,
            icon: "fa-house-damage"
        },
        {
            id: 10,
            name: "Women's Empowerment",
            count: 8,
            icon: "fa-female"
        },
        {
            id: 11,
            name: "Child Welfare",
            count: 7,
            icon: "fa-child"
        },
        {
            id: 12,
            name: "Community Development",
            count: 11,
            icon: "fa-users"
        }
    ];

    // Render category cards
    const categoriesGrid = document.getElementById('categories-grid');
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count} Organizations</p>
            <button class="category-btn">View Organizations</button>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
});




document.getElementById("hotlineForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("userLocation").value.trim();
  const service = document.getElementById("serviceNeeded").value;
  const resultsDiv = document.getElementById("hotlineResults");

  if (!location || !service) {
    alert("Please provide both location and service needed.");
    return;
  }

  // Simulated NGO data (this will later come from a backend or map data)
  const ngoData = [
    {
      name: "Helping Hands Gulu",
      location: "Gulu",
      services: ["food", "health"],
      contact: "+256 770 123456"
    },
    {
      name: "WellSpring Uganda",
      location: "Gulu",
      services: ["water", "education"],
      contact: "+256 774 654321"
    }
  ];

  const matchedNGOs = ngoData.filter(
    ngo =>
      ngo.location.toLowerCase() === location.toLowerCase() &&
      ngo.services.includes(service)
  );

  resultsDiv.innerHTML = "";

  if (matchedNGOs.length === 0) {
    resultsDiv.innerHTML = `<p>No NGOs found in ${location} offering ${service} services.</p>`;
  } else {
    matchedNGOs.forEach(ngo => {
      const card = document.createElement("div");
      card.className = "ngo-card";
      card.innerHTML = `
        <h4>${ngo.name}</h4>
        <p><strong>Location:</strong> ${ngo.location}</p>
        <p><strong>Contact:</strong> ${ngo.contact}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
});

