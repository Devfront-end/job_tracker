document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobApplicationForm');
    const jobList = document.getElementById('jobList');
    const resetButton = document.getElementById('resetButton');
    const addButton = document.getElementById('addButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const companyName = document.getElementById('companyName').value;
        const position = document.getElementById('position').value;
        const applicationDate = document.getElementById('applicationDate').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Company Name:</strong> ${companyName}<br>
            <strong>Position:</strong> ${position}<br>
            <strong>Application Date:</strong> ${applicationDate}
        `;

        jobList.appendChild(listItem);
        form.reset();

        // Show the "Reset" button
        resetButton.style.display = 'block';

        // Center the "Reset" button within its parent container
        resetButton.style.margin = '0 auto';
    });

    resetButton.addEventListener('click', function () {
        form.reset();
        while (jobList.firstChild) {
            jobList.removeChild(jobList.firstChild);
        }

        // Hide the "Reset" button again
        resetButton.style.display = 'none';
    });

    addButton.addEventListener('click', function () {
        resetButton.style.display = 'block';
    });
});