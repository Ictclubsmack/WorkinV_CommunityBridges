

const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});


  


  const toggleContent = document.getElementById('toggleContent');
  const missionHTML = `
    <h3>Our Mission</h3>
    <p>
      Community Bridges helps broadcast the activities and success stories of NGOs,
      showcasing their contributions and promoting awareness of their role in society.
      Through features like geolocation mapping, users can easily discover foodbanks, 
      aid organizations, and support services in their area. We also provide progress tracking 
      tools that enable NGOs to monitor their work, share their impact with donors, and strengthen 
      their ability to secure funding.
    </p>
  `;

  const goalHTML = `
    <h3>Our Goal</h3>
    <p>
      At its heart, Community Bridges is about creating meaningful connections—
      between organizations and communities, between need and support, and between 
      young changemakers and the future they’re building. We believe that by bridging these gaps,
      we can inspire greater collaboration, resilience, and impact across Uganda.
    </p>
  `;

  document.getElementById('showMissionBtn').addEventListener('click', () => {
    toggleContent.innerHTML = missionHTML;
  });

  document.getElementById('showGoalBtn').addEventListener('click', () => {
    toggleContent.innerHTML = goalHTML;
  });
