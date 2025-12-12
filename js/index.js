document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('skillsToggle');
    const toggleText = document.getElementById('toggleText');
    const technicalSkills = document.getElementById('technicalSkills');
    const softSkills = document.getElementById('softSkills');

    let showingTechnical = true;
    let isAnimating = false;

    toggleButton.addEventListener('click', function() {
        if (isAnimating) return;
        isAnimating = true;

        if (showingTechnical) {
            technicalSkills.classList.remove('fade-in');
            technicalSkills.classList.add('fade-out');

            setTimeout(() => {
                technicalSkills.style.display = 'none';
                technicalSkills.classList.remove('fade-out');
                softSkills.style.display = 'block';
                void softSkills.offsetWidth;
                softSkills.classList.add('fade-in');

                toggleText.textContent = 'Show Technical Skills';
                showingTechnical = false;
                isAnimating = false;
            }, 300);

        } else {
            softSkills.classList.remove('fade-in');
            softSkills.classList.add('fade-out');

            setTimeout(() => {
                softSkills.style.display = 'none';
                softSkills.classList.remove('fade-out');

                technicalSkills.style.display = 'block';
                void technicalSkills.offsetWidth;
                technicalSkills.classList.add('fade-in');

                toggleText.textContent = 'Show Soft Skills';
                showingTechnical = true;
                isAnimating = false;
            }, 300);
        }
    });

    technicalSkills.classList.add('fade-in');
});

function sendEmail() {
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const subject = document.getElementById('messageSubject').value;
    const message = document.getElementById('messageBody').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailtoLink = `mailto:adrian.donnelly15@outlook.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    window.location.href = mailtoLink;

    const modal = bootstrap.Modal.getInstance(document.getElementById('emailModal'));
    modal.hide();
    document.getElementById('contactForm').reset();
}

