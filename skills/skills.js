// --- EASILY CUSTOMIZABLE SKILLS DATA ---

// Proficiency is rated from 0 to 100
const skillsData = {
    frontend: [
        { name: "Python", proficiency: 90 },
        { name: "JavaScript (ES6+)", proficiency: 95 },
        { name: "HTML5 / CSS3", proficiency: 100 },
        { name: "Bootstrap & Responsive Design", proficiency: 85 },
        { name: "Ethical Hacking and Cybersecurity", proficiency: 85 }
    ],
    backend: [
        { name: "Project Management", proficiency: 80 },
        { name: "Business Analytics", proficiency: 70 },
        { name: "HR Management", proficiency: 85 },
        { name: "Communication and Networking", proficiency: 75 }
    ],
    tools: [
        { name: "English", proficiency: 95 },
        { name: "Bangla", proficiency: 90 },
        { name: "Japanese", proficiency: 80 },
    ]
};

// --- RENDERING AND INTERACTIVITY LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all skill categories
    renderSkills('frontend-list', skillsData.frontend);
    renderSkills('backend-list', skillsData.backend);
    renderSkills('tools-list', skillsData.tools);
    
    // 2. Animate the progress bars after a slight delay
    // This allows the browser to render the initial state (width 0) before applying the transition.
    setTimeout(animateSkills, 100); 
});

/**
 * Renders skill items into the specified container.
 * @param {string} containerId - The ID of the HTML element to append skills to.
 * @param {Array<Object>} skills - Array of skill objects {name, proficiency}.
 */
function renderSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    if (!container) return;

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');

        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.proficiency}%</span>
            </div>
            <div class="progress-bar-container">
                <div 
                    class="progress-bar-fill" 
                    data-proficiency="${skill.proficiency}"
                ></div>
            </div>
        `;
        container.appendChild(skillItem);
    });
}

/**
 * Animates the progress bars by setting their final width based on data-proficiency.
 */
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    
    progressBars.forEach(bar => {
        const proficiency = bar.getAttribute('data-proficiency');
        // Set the width, which triggers the CSS transition (1.5s ease-out)
        bar.style.width = `${proficiency}%`;
    });
}





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


