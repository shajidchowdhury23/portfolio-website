        // --- Customization Point: Easily modify your projects here! ---
        const projectsData = [

            {
                id: 3,
                name: "Password-Generator",
                description: "A python application that creates strong and customizable passwords using a mix of letters, numbers, and special characters. Built with Python’s random and string libraries, it lets users choose password length and complexity, ensuring both flexibility and security. The project demonstrates Python’s efficiency in building simple yet effective tools for protecting personal data and online accounts.",
                category: "python",
                techStack: ["Python"],
                githubUrl: "https://github.com/shajidchowdhury23/python-projects/blob/main/Password-Generator.py",
            },
            {
                id: 3,
                name: "QR-Code-Generator",
                description: "This Python tool generates QR codes from user-provided data and saves them as PNG files in a chosen folder. It validates the destination path, handles files reliably, and provides clear feedback, making it easy to use on its own or integrate into larger applications.",
                category: "python",
                techStack: ["Python"],
                githubUrl: "https://github.com/shajidchowdhury23/python-projects/blob/main/QR%20Code%20Generator.py",
            }
        ];

        const projectsGrid = document.getElementById('projectsGrid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const noProjectsMessage = document.getElementById('noProjectsMessage');
        
        /**
         * Renders the project cards into the grid container.
         * @param {Array} projects The array of projects to display.
         */
        function renderProjects(projects) {
            projectsGrid.innerHTML = ''; // Clear existing content

            if (projects.length === 0) {
                noProjectsMessage.style.display = 'block';
                return;
            }
            noProjectsMessage.style.display = 'none';

            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';

                const techTags = project.techStack.map(tech => 
                    `<span class="tag">${tech}</span>`
                ).join('');

                const liveLink = project.liveUrl 
                    ? `<a href="${project.liveUrl}" target="_blank" class="project-link"><i class="fas fa-desktop"></i> Live Demo</a>`
                    : '';

                card.innerHTML = `
                    <div>
                        <h3>${project.name}</h3>
                        <div class="tech-stack-container">${techTags}</div>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>
                        ${liveLink}
                    </div>
                `;
                projectsGrid.appendChild(card);
            });
        }

        /**
         * Filters the projects based on the selected category.
         * @param {string} category The category to filter by ('all', 'web_dev', etc.).
         */
        function filterProjects(category) {
            // 1. Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
            if (activeBtn) {
                 activeBtn.classList.add('active');
            }

            // 2. Filter data
            const filteredProjects = category === 'all' 
                ? projectsData 
                : projectsData.filter(project => project.category === category);

            // 3. Render the filtered results
            renderProjects(filteredProjects);
        }

        // --- Event Listeners for Interactivity ---

        // 1. Filter Buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                filterProjects(category);
            });
        });

        // 2. Mobile Menu Toggle (Replicating functionality from original file)
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // --- Initial Load ---
        window.addEventListener('load', () => {
            // Display all projects when the page first loads
            filterProjects('all'); 
            // Close mobile menu if resized
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });









