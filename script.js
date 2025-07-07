
    // select the menu to be expanded
    const offCanvasMenu = document.querySelector(".menu-expanded");
      //select the close button
      const closeButton = document.querySelector(".menu-close");
      const overlay = document.querySelector('.overlay');
      const arrowIcon = document.querySelectorAll(".arrow-icon")
      const expandedMenuDesktop = document.getElementById("expanded-menu__desktop")
      console.log(arrowIcon)
      console.log(arrowIcon[0].src)

      function toggleMenu() {
      // display the menu
      offCanvasMenu.style.display = "block";
      overlay.classList.add('active');
    }
    function closeMenu() {
      offCanvasMenu.style.display = "none";
      overlay.classList.remove('active');
    }
      
      //select the nav-item for the dropdown menu
      const navItem = document.querySelectorAll(".nav-item");
      console.log("selects the expandable nav", navItem);

      
           
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener('click', function(event) {
        // console.log(event.target);
        const dropdownMenu = event.target.nextElementSibling;
         console.log(dropdownMenu);
         dropdownMenu.classList.toggle('show');
         arrowIcon[i].src = dropdownMenu.classList.contains('show')? "./images/icon-arrow-up.svg" : "./images/icon-arrow-down.svg" 
        
    });
    
    }
   
    
  