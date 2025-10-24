// --- Custom Certificate Data ---
// To modify the certificates, simply edit the objects in this array.
// The 'link' property is where you place the public verification URL.
const certificateData = [
    {
        title: "Business Analysis Fundamentals - IIBA endorsed",
        issuer: "Udemy",
        date: "September 25",
        link: "https://drive.google.com/file/d/1xPBf9HzlOap0cKje9VyhpbKUl0WjPaM3/view?usp=drive_link",
        description: "Successfully completed the professional course Business Analysis Fundamentals, endorsed by the International Institute of Business Analysis (IIBA) and offered through Udemy. Gained a comprehensive understanding of business analysis principles, including requirements gathering, stakeholder management, process modeling, and solution evaluation. Developed practical skills in identifying business needs, analyzing data, and recommending effective solutions to improve organizational performance. Demonstrated proficiency in applying internationally recognized business analysis frameworks and techniques, aligning with IIBA standards and best practices for professional excellence in the field."
    },
    {
        title: "Ethical Hacking from Scratch",
        issuer: "Udemy",
        date: "September 25",
        link: "https://drive.google.com/file/d/1PELHPnIMdcx8kRZEYFWexlso0FDXnC2h/view?usp=drive_link",
        description: "Successfully completed the professional course Ethical Hacking from Scratch offered by Udemy, gaining in-depth knowledge of cybersecurity fundamentals, penetration testing, and network security practices. Developed hands-on skills in identifying vulnerabilities, performing ethical attacks, and securing systems against potential threats. Acquired proficiency in using industry-standard tools and techniques for reconnaissance, exploitation, and post-exploitation analysis. Demonstrated a strong understanding of ethical hacking principles, cybersecurity protocols, and responsible digital security practices essential for safeguarding modern IT infrastructures."
    },
    {
        title: "Data Analytics with AI",
        issuer: "Sololearn",
        date: "October 25",
        link: "https://drive.google.com/file/d/1djUy2qGHuFsnq9L0F3l0uLrWKdIakTmW/view?usp=drive_link",
        description: "Successfully completed a professional short course in Data Analytics with AI, developing practical expertise in analyzing, interpreting, and visualizing data using AI-driven tools and techniques. Gained proficiency in leveraging machine learning models and AI platforms for data processing, pattern recognition, and predictive insights. Applied analytical methods to real-world datasets to support data-informed decision-making and business intelligence. Demonstrated the ability to integrate AI technologies effectively for automation, optimization, and strategic problem-solving in professional environments."
    },
    {
        title: "Prompt Engineering",
        issuer: "Sololearn",
        link: "https://drive.google.com/file/d/1xKADAPg-uSr5hRgDYX0kfhcro-jkra3Y/view?usp=drive_link",
        description: "Successfully completed a professional short course in Prompt Engineering, gaining hands-on experience in designing, refining, and optimizing effective prompts for AI systems such as ChatGPT. Developed strong skills in contextual prompt structuring, response optimization, and ethical AI usage. Applied advanced techniques to real-world scenarios involving content creation, data analysis, and problem-solving. Demonstrated the ability to leverage generative AI tools efficiently for professional communication, innovation, and productivity."
    }

];

// Function to render the certificates dynamically
function renderCertificates() {
    const gridContainer = document.getElementById('certificates-grid');
    if (!gridContainer) {
        console.error("Certificate grid container not found.");
        return;
    }

    // Clear any existing content
    gridContainer.innerHTML = '';

    certificateData.forEach(cert => {
        // Create the main certificate item element
        const item = document.createElement('div');
        item.classList.add('certificate-item');
        
        // Use a data attribute to store the link for easy access in the click handler
        item.dataset.link = cert.link;

        // Build the HTML structure for the certificate card
        item.innerHTML = `
            <div>
                <div class="cert-title">${cert.title}</div>
                <div class="cert-issuer">Issued by: ${cert.issuer}</div>
                <p class="cert-description">${cert.description}</p>
            </div>
            <div class="cert-info">
                <strong>Completed:</strong> ${cert.date}
                <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    View Credential
                </a>
            </div>
        `;
        
        // Add click event listener for interactivity: clicking anywhere on the card opens the link
        item.addEventListener('click', (event) => {
            // Check if the click originated from the 'View Credential' button itself
            // If so, we let the default link behavior take over to avoid opening two tabs.
            if (event.target.closest('.cert-link')) {
                return; 
            }
            // Open the link in a new tab when clicking anywhere else on the card
            window.open(item.dataset.link, '_blank');
        });

        // Append the item to the grid
        gridContainer.appendChild(item);
    });
}

// Initialize the rendering when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderCertificates);










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
