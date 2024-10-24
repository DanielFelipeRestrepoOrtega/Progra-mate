function redirectToProfile(url) {
    window.location.href = url;
}
document.addEventListener("DOMContentLoaded", function () {
    const profileCard = document.querySelector('.profile-card');
    const skills = document.querySelectorAll('.skills li');
    const experience = document.querySelectorAll('.experience li');
    const education = document.querySelectorAll('.education li');

    profileCard.addEventListener('mouseenter', () => {
        profileCard.style.transform = 'scale(1.05)';
    });

    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'scale(1)';
    });

    setTimeout(() => {
        skills.forEach((skill, index) => {
            skill.style.animationDelay = `${index * 100}ms`;
            skill.style.opacity = 1;
        });
    }, 1000);

    setTimeout(() => {
        experience.forEach((exp, index) => {
            exp.style.animationDelay = `${index * 100}ms`;
            exp.style.opacity = 1;
        });
    }, 1500);

    setTimeout(() => {
        education.forEach((edu, index) => {
            edu.style.animationDelay = `${index * 100}ms`;
            edu.style.opacity = 1;
        });
    }, 2000);
});

