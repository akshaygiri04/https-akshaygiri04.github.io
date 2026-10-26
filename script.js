// Example: Display an alert for visitors
document.addEventListener('DOMContentLoaded', function () {
    alert('Welcome to Akshay Giri’s Cybersecurity Updates Website!');
});

// Example: Log message when a user visits different sections of the page
document.querySelectorAll('section h2').forEach(function (heading) {
    heading.addEventListener('click', function () {
        console.log('You clicked: ' + heading.innerText);
    });
});

/* Future Idea: You can extend this file to add search functionality or fetch dynamic updates! */
