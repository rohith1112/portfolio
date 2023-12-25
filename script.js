        function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('show');
        }
        function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('show');
        }
        document.addEventListener('DOMContentLoaded', function () {
            const sidebar = document.querySelector('.sidebar');
        
            function showSidebar() {
                sidebar.classList.add('show');
            }
        
            function hideSidebar() {
                sidebar.classList.remove('show');
            }
        
            // Toggle sidebar visibility on button click
            const menuButton = document.querySelector('.menu-button');
            menuButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevents the body click event from being triggered
                showSidebar();
            });
        
            // Hide sidebar when clicking outside of it
            document.body.addEventListener('click', function (event) {
                const isMenuButton = event.target.closest('.menu-button');
                const isSidebar = event.target.closest('.sidebar');
        
                if (!isMenuButton && !isSidebar) {
                    hideSidebar();
                }
            });
        
            // Close sidebar when clicking on the hide button
            const hideButton = document.querySelector('.sidebar .hide-button');
            hideButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevents the body click event from being triggered
                hideSidebar();
            });
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            // Smooth scrolling for anchor links
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach((link) => {
              link.addEventListener("click", (e) => {
                e.preventDefault();
          
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
          
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust the offset as needed
                    behavior: "smooth",
                  });
                }
              });
            });
          });
          
          function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('show');
          }
          
          function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('show');
          }


          // JavaScript to handle the popup functionality
          document.addEventListener("DOMContentLoaded", function () {
            var popupContainer = document.getElementById("popup-container");
            var closeBtn = document.getElementById("close-btn");
            var knowMoreBtn = document.querySelector(".knowmore");
            var skillsSection = document.getElementById("skills");
            var logo = document.querySelector('.logo img');
          
            function openPopup() {
              popupContainer.style.display = "flex";
              skillsSection.style.visibility = "hidden";
            }
          
            function closePopup() {
              popupContainer.style.display = "none";
              skillsSection.style.visibility = "visible";
            }
          
            knowMoreBtn.addEventListener("click", openPopup);
            closeBtn.addEventListener("click", closePopup);
          
            window.addEventListener("click", function (event) {
              if (!popupContainer.contains(event.target) && event.target !== knowMoreBtn) {
                closePopup();
              }
            });
          
            logo.addEventListener('click', function () {
              location.reload();
            });
          });


function openResume() {
  // Change the file path accordingly
  var filePath = 'resume.pdf';

  // Open the file in a new window or tab
  window.open(filePath, '_blank');
}


$(document).ready(function () {
  // Toggle class on hover for desktop
  $('.skill-box').hover(
    function () {
      $(this).toggleClass('active');
    },
    function () {
      $(this).toggleClass('active');
    }
  );

  // Toggle class on click for mobile
  $('.skill-box').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });

  // Prevent link clicks on mobile to avoid navigation
  $('.skill-box a').on('click', function (e) {
    if ($(this).parent().hasClass('active')) {
      e.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop -60,
          behavior: "smooth"
        });
      }
    });
  });
});

