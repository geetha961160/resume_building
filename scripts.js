// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Form submission handler
    const resumeForm = document.getElementById("resumeForm");

    // Display fields in Bio-data
    const biodataName = document.getElementById("biodataName");
    const biodataEmail = document.getElementById("biodataEmail");
    const biodataSkills = document.getElementById("biodataSkills");
    const biodataExperience = document.getElementById("biodataExperience");
    const biodataEducation = document.getElementById("biodataEducation");
    const biodataAchievements = document.getElementById("biodataAchievements");
    const biodataObjective = document.getElementById("biodataObjective");
    const biodataReferences = document.getElementById("biodataReferences");

    // Delete Button
    const deleteBtn = document.getElementById("deleteBtn");

    // Load data from localStorage on Bio-data Page
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
        const {
            name,
            email,
            skills,
            experience,
            education,
            achievements,
            objective,
            references
        } = JSON.parse(storedData);

        // Populate the Bio-data Page
        if (biodataName) biodataName.textContent = name;
        if (biodataEmail) biodataEmail.textContent = email;
        if (biodataSkills) biodataSkills.textContent = skills;
        if (biodataExperience) biodataExperience.textContent = experience;
        if (biodataEducation) biodataEducation.textContent = education;
        if (biodataAchievements) biodataAchievements.textContent = achievements;
        if (biodataObjective) biodataObjective.textContent = objective;
        if (biodataReferences) biodataReferences.textContent = references;
    }

    // Delete Bio-data when the delete button is clicked
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            // Remove data from localStorage
            localStorage.removeItem("resumeData");

            // Clear displayed content
            if (biodataName) biodataName.textContent = "";
            if (biodataEmail) biodataEmail.textContent = "";
            if (biodataSkills) biodataSkills.textContent = "";
            if (biodataExperience) biodataExperience.textContent = "";
            if (biodataEducation) biodataEducation.textContent = "";
            if (biodataAchievements) biodataAchievements.textContent = "";
            if (biodataObjective) biodataObjective.textContent = "";
            if (biodataReferences) biodataReferences.textContent = "";

            // Optional: Provide feedback to the user
            alert("Bio-data has been deleted.");
        });
    }
});
