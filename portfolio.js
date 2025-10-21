// --- EASILY CUSTOMIZABLE CONTENT ---

const userData = {
    name: "Shajid Chowdhury",
    title: "Technology and Innovation Enthusiast",
    profilePicUrl: "./images/shajid.jpg", // Placeholder image
    aboutMeContent: [
            "With a profound interest in technology and computing, I bring a foundation rooted in understanding complex digital systems and emerging tech trends. My technical acumen extends from software development and data analysis to exploring the intricacies of network architecture. I am continually seeking out new tools and methodologies to enhance efficiency and innovation in a rapidly evolving technological landscape.",
            "Beyond the keyboard, my curiosity drives me to delve into diverse fields, most notably business and entrepreneurship. I recognize that true innovation often lies at the intersection of technical capability and strategic market understanding. This dual focus allows me to not only build robust solutions but also to envision and execute their successful implementation in a real-world commercial context.",
            "I approach every challenge with a growth mindset, consistently prioritizing learning and self-improvement. Whether mastering a new programming language or dissecting a business model, my commitment remains the same: to integrate technical expertise with a broad, strategic perspective to drive meaningful and measurable impact."
    ]
};


// --- DOM MANIPULATION (DO NOT EDIT BELOW THIS LINE UNLESS ADVANCED) ---

document.addEventListener('DOMContentLoaded', () => {
    // Update Name and Title
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-title').textContent = userData.title;

    // Update Profile Picture URL
    document.getElementById('profile-pic').src = userData.profilePicUrl;
    
    // Update About Me Section
    const aboutSection = document.querySelector('.about-me-section p').parentElement;
    
    // Clear existing content paragraphs
    const paragraphs = aboutSection.querySelectorAll('p');
    paragraphs.forEach(p => p.remove());

    // Insert new content paragraphs
    userData.aboutMeContent.forEach(text => {
        const newParagraph = document.createElement('p');
        // Simple function to process **bold** text (for example)
        newParagraph.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        aboutSection.appendChild(newParagraph);

    });
});

// --- NEW: Mobile Menu Toggle Logic ---

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing userData and content update logic here) ...
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggles the 'active' class to show/hide the menu on mobile
            navLinks.classList.toggle('active');
        });

        // Optional: Hide menu after a link is clicked on mobile
        navLinks.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 850) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});
