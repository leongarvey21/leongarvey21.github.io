 // Get all elements with the class 'project'
 const projects = document.querySelectorAll('.project');
 let hoverTimeout;

 // Function to determine gradient based on project attributes or data
 function getGradientForProject(project) {
     const projectId = project.getAttribute('data-project');
     switch (projectId) {
         case 'project1':
             return 'linear-gradient(to right, #ef0db6, #CF0CF9)'; // Gradient for Project 1
         case 'project2':
             return 'linear-gradient(to right, #ff9300, #cbc730)'; // Gradient for Project 2
         case 'project3':
             return 'linear-gradient(to right, #E60E12, #FF9A32)'; // Gradient for Project 3
         case 'project4':
             return 'linear-gradient(to right, #0cff00, #00F6FF)'; // Gradient for Project 4
         case 'project5':
             return 'linear-gradient(to right, #0dd6ec, #598CF3)'; // Gradient for Project 5
         case 'project6':
             return 'linear-gradient(to right, #FF0004, #CF0CF9)'; // Gradient for Project 6
             case 'project7':
              return 'linear-gradient(to right, #3100ff, #CF0CF9)'; // Gradient for Project 7
         default:
             return 'linear-gradient(to right, #da14bd, #6c0c85)'; // Default gradient
     }
 }

 // Loop through each project element
 projects.forEach(project => {
     // Add event listener for mouseenter
     project.addEventListener('mouseenter', function() {
         // Set a timeout to add the transformation class and change background after 2 seconds
         hoverTimeout = setTimeout(() => {
             project.classList.add('transformed');
             document.body.style.transition = 'background-color 0.5s ease';
             document.body.style.background = getGradientForProject(project);
         }, 400);
     });

     // Add event listener for mouseleave
     project.addEventListener('mouseleave', function() {
         // Clear the timeout and remove the transformation class
         clearTimeout(hoverTimeout);
         project.classList.remove('transformed');

         // Restore default body background color with smooth transition
         document.body.style.transition = 'background-color 0.5s ease';
         document.body.style.background = '#f0f0f0';
     });
 });


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  // Toggle dropdown menu visibility
  const settingsButton = document.getElementById('settingsButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  settingsButton.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
  });

  // Close dropdown menu if clicked outside
  window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-toggle')) {
          if (dropdownMenu.classList.contains('show')) {
              dropdownMenu.classList.remove('show');
          }
      }
  });

  // Dark mode toggle
  document.getElementById('darkModeButton').addEventListener('click', function() {
      console.log('Dark Mode Button clicked');
      
      if (document.body.getAttribute('data-theme') === 'dark') {
          document.body.removeAttribute('data-theme');
      } else {
          document.body.setAttribute('data-theme', 'dark');
      }
      
      console.log('Current theme:', document.body.getAttribute('data-theme'));
  });

  // Placeholder for another option's functionality
  document.getElementById('anotherOption').addEventListener('click', function() {
      console.log('Another Option clicked');
      // Implement functionality for another option here
  });
});


// Dark mode finished //


// Scroll ANIMATION //


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'in-view' class to elements in the viewport
function onScroll() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('in-view');
    }
  });
}

// Add 'scroll' event listener
window.addEventListener('scroll', onScroll);

// Initial check in case elements are already in view
document.addEventListener('DOMContentLoaded', onScroll);




// Progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  }
  
  updateProgressBar(); 
  window.addEventListener('scroll', updateProgressBar);
  window.addEventListener('resize', updateProgressBar);
  
  
  
  
  // Progress circle
  function updateProgressCircle() {
    const progressElement = document.querySelector('.progress-circle-bar');
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;
  
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      scrollToTopElement.style.opacity = '1';
    } else {
      scrollToTopElement.style.opacity = '0';
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  
  const scrollToTopElement = document.querySelector('.scroll-to-top');
  scrollToTopElement.addEventListener('click', scrollToTop);
  
  
  updateProgressCircle();
  window.addEventListener('scroll', updateProgressCircle);
  window.addEventListener('resize', updateProgressCircle);


  // Fade About Leon. Garvey. //

 window.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.project-title-unique');
    const scrollY = window.scrollY;
    const maxScroll = 100; // Adjust this value to control fade distance

    if (window.innerWidth <= 390) {
        titles.forEach(title => {
            const opacity = Math.max(0, 1 - scrollY / maxScroll);
            title.style.opacity = opacity;
        });
    } else {
        titles.forEach(title => {
            title.style.opacity = 1; // Reset opacity to 1 when not in mobile view
        });
    }
});

/* CURSOR FOLLOWER */
