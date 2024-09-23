
// section 4

function showContent(project, linkId) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the clicked content
    const selectedContent = document.getElementById(project);
    selectedContent.classList.remove('hidden');

    // Remove active class from all buttons
    const links = document.querySelectorAll('nav button');
    links.forEach(link => {
        link.classList.remove('active-link');
    });

    // Add active class to the clicked button
    const activeLink = document.getElementById(linkId);
    activeLink.classList.add('active-link');
}

// section 4

function showContents(contentType, element) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden-content');
    });

    // Show the clicked content section
    document.getElementById('content-' + contentType).classList.remove('hidden-content');

    // Remove the active class from all buttons
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('active-link');
    });

    // Add the active class to the clicked button
    element.classList.add('active-link');
}




    const video = document.querySelector('video');
    const buttons = document.getElementById('playPauseButton');

    buttons.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        buttons.textContent = '⏸️'; // Change to pause icon
    } else {
        video.pause();
        buttons.textContent = '▶️'; // Change to play icon
    }
    });

    video.addEventListener('play', () => {
    buttons.textContent = '⏸️'; // Pause icon
    });

    video.addEventListener('pause', () => {
    buttons.textContent = '▶️'; // Play icon
    });




    // section 9

    function toggleAccordion(index) {
        const content = document.getElementById(`content-${index}`);
        const icon = document.getElementById(`icon-${index}`);
        const isHidden = content.classList.contains('hidden');
        
        // Close all accordions
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`content-${i}`).classList.add('hidden');
            document.getElementById(`icon-${i}`).innerHTML = '+';
            document.getElementById(`icon-${i}`).classList.remove('rotate-45');
        }

        // Toggle the clicked one
        if (isHidden) {
            content.classList.remove('hidden');
            icon.innerHTML = '×';
            icon.classList.add('rotate-45');
        } else {
            content.classList.add('hidden');
            icon.innerHTML = '+';
            icon.classList.remove('rotate-45');
        }
    }



    function countUp(start, end) {
        return {
        value: start,
        animated: false,
        init() {
            const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                this.animated = true;
                this.animateCount(start, end);
                observer.unobserve(entry.target); // Stop observing after animation
                }
            });
            });
            observer.observe(this.$el); // Observe the element
        },
        animateCount(start, end) {
            let duration = 2000; // Animation duration in milliseconds
            let startTime = null;
            
            const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            this.value = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
            };

            requestAnimationFrame(animate);
        }
        };
    }






// section 4 mobile content
    
    let currentIndex = 0;
    const appContents = document.querySelectorAll('.app-content');

    function displayContent(index) {
        appContents.forEach((content, i) => {
            content.classList.toggle('hidden', i !== index);
        });
    }

    function navigateTo(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= appContents.length) currentIndex = appContents.length - 1;
        displayContent(currentIndex);
    }

    // Initialize the first content section
    displayContent(currentIndex);



// animated style
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', `animate__${entry.target.dataset.animate}`);
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.2 });
const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => {
    observer.observe(el);
});




