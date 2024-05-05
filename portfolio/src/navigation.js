const setupUI = () =>
{
    const menuToggleButton = document.querySelector("#menu-toggle-button");
    const menuToggleBars = document.querySelectorAll(".menu-toggle-piece");
    const menuToggleButtonMobile = document.querySelector("#menu-toggle-button-mobile");
    const menuToggleBarsMobile = document.querySelectorAll(".menu-toggle-piece-mobile");
    let sidebar = document.querySelector("#sidebar-nav");
    let dropdown = document.querySelector("#dropdown-nav")
    let menuVisible = false;
    let mobileMenuVisible = false;
    menuToggleButton.onclick = () =>
    {
        menuVisible = !menuVisible;
        if(menuVisible)
        {
            //make the hamburger into an X
            menuToggleButton.style.transform = "translateX(350px)";
            menuToggleBars[0].style.transform = "rotate(45deg)";
            menuToggleBars[0].style.width = "42.5px";
            menuToggleBars[1].style.width = "0px";
            menuToggleBars[2].style.transform = "rotate(-45deg)";
            menuToggleBars[2].style.width = "42.5px";

            
            sidebar.style.transform = "translateX(350px)";
        }
        else
        {
            //make the X into a hamburger
            menuToggleButton.style.transform = "translateX(0px)";
            menuToggleBars[0].style.transform = "rotate(0deg)";
            menuToggleBars[0].style.width = "36px";
            menuToggleBars[1].style.width = "36px";
            menuToggleBars[2].style.transform = "rotate(0deg)";
            menuToggleBars[2].style.width = "36px";

            
            sidebar.style.transform = "translateX(0px)";
        }
    }

    menuToggleButtonMobile.onclick = () =>
    {
        mobileMenuVisible = !mobileMenuVisible;
        if(mobileMenuVisible)
        {
            //make the hamburger into an X
            menuToggleButtonMobile.style.transform = "translateY(75px)";
            menuToggleBarsMobile[0].style.transform = "rotate(45deg)";
            menuToggleBarsMobile[0].style.width = "42.5px";
            menuToggleBarsMobile[1].style.width = "0px";
            menuToggleBarsMobile[1].style.transform = "translateX(-5px)";
            menuToggleBarsMobile[2].style.transform = "rotate(-45deg)";
            menuToggleBarsMobile[2].style.width = "42.5px";

            
            dropdown.style.transform = "translateY(75px)";
        }
        else
        {
            //make the X into a hamburger
            menuToggleButtonMobile.style.transform = "translateX(0px)";
            menuToggleBarsMobile[0].style.transform = "rotate(0deg)";
            menuToggleBarsMobile[0].style.width = "36px";
            menuToggleBarsMobile[1].style.width = "36px";
            menuToggleBarsMobile[1].style.transform = "translateX(0px)";
            menuToggleBarsMobile[2].style.transform = "rotate(0deg)";
            menuToggleBarsMobile[2].style.width = "36px";

            
            dropdown.style.transform = "translateX(0px)";
        }
    }


    let switchThemeButtom = document.querySelector("button");
    let about = document.querySelector("#about");
    let aboutArrows = document.querySelectorAll(".about-arrow");
    let aboutMeInfo = document.querySelector("#about-me-info");
    let aboutBBInfo = document.querySelector("#about-bb-info");
    aboutArrows[0].onclick = () =>
    {
        if(aboutArrows[0].classList.contains("bb-styles"))
        {
            about.classList.toggle("bb-styles");
            aboutArrows[0].classList.toggle("bb-styles");
            aboutArrows[1].classList.toggle("bb-styles");
            aboutMeInfo.classList.toggle("bb-styles");
            aboutBBInfo.classList.toggle("bb-styles");
        }
    }

    aboutArrows[1].onclick = () =>
    {
        if(aboutArrows[1].classList.contains("bb-styles"))
        {
            about.classList.toggle("bb-styles");
            aboutArrows[0].classList.toggle("bb-styles");
            aboutArrows[1].classList.toggle("bb-styles");
            aboutMeInfo.classList.toggle("bb-styles");
            aboutBBInfo.classList.toggle("bb-styles");
        }
        
    }
}

export {setupUI};