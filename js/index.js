// Skills Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('skillsToggle');
    const toggleText = document.getElementById('toggleText');
    const technicalSkills = document.getElementById('technicalSkills');
    const softSkills = document.getElementById('softSkills');

    let showingTechnical = true;
    let isAnimating = false;

    toggleButton.addEventListener('click', function() {
        if (isAnimating) return; // Prevent multiple clicks during animation
        isAnimating = true;

        if (showingTechnical) {
            // Fade out technical skills
            technicalSkills.classList.remove('fade-in');
            technicalSkills.classList.add('fade-out');

            setTimeout(() => {
                technicalSkills.style.display = 'none';
                technicalSkills.classList.remove('fade-out');

                // Fade in soft skills
                softSkills.style.display = 'block';
                // Force reflow to ensure the animation triggers
                void softSkills.offsetWidth;
                softSkills.classList.add('fade-in');

                toggleText.textContent = 'Show Technical Skills';
                showingTechnical = false;
                isAnimating = false;
            }, 300);

        } else {
            // Fade out soft skills
            softSkills.classList.remove('fade-in');
            softSkills.classList.add('fade-out');

            setTimeout(() => {
                softSkills.style.display = 'none';
                softSkills.classList.remove('fade-out');

                // Fade in technical skills
                technicalSkills.style.display = 'block';
                // Force reflow to ensure the animation triggers
                void technicalSkills.offsetWidth;
                technicalSkills.classList.add('fade-in');

                toggleText.textContent = 'Show Soft Skills';
                showingTechnical = true;
                isAnimating = false;
            }, 300);
        }
    });

    // Initialize technical skills with fade-in class
    technicalSkills.classList.add('fade-in');
});

