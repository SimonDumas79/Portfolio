import { setupUI } from "./navigation.js";

let skills = "";
let projects = "";
let experiences = "";
let page = document.querySelector("#page");
window.onload = () =>{
	console.log("window.onload called");
	
	const url = "../portfolio/data/content.json";
	const xhr = new XMLHttpRequest();
	let json;
	xhr.onload = (e) =>
	{
		console.log(`In onload - HTTP Status Code = ${e.target.status}`);
		try
		{
			json = JSON.parse(e.target.responseText);
            
            for (const [key, value] of Object.entries(json.skills)) {
                skills += `<div class = "skill">${value.icon}${value.name}</div>`;
            }
            for (const [key, value] of Object.entries(json.projects)) {
                projects += `<div class = "project">${value.icon}${value.name}<h3>About</h3><p class='project-content'>${value.content}</p><h4>Status:</h4><p class='project-status'>${value.status}</p>
                <div class="info-toggle-button">
                    <div class="info-toggle-piece"></div>
                    <div class="info-toggle-piece"></div>
                </div>
                </div>`;
            }
            for (const [key, value] of Object.entries(json.experiences)) {
                experiences += `<div class = "experience">
                ${value.icon}${value.name}<h3>About</h3><p class='experience-content'>${value.content}</p>
                <div class="info-toggle-button">
                    <div class="info-toggle-piece"></div>
                    <div class="info-toggle-piece"></div>
                </div>
                </div>`;
            }

            page.innerHTML = skills;

		}
		catch (e)
		{
            console.log(e)
			return;
		}
		
	};
	xhr.onerror = e => console.log(`In onerror - HTTP Status Code = ${e.target.status}`);
	xhr.open("GET", url);
	xhr.send();

    setupUI();
    setupPages();
}

const setupPages = () =>
{
    let skillsTab = document.querySelector("#skills");
    let projectsTab = document.querySelector("#projects");
    let experienceTab = document.querySelector("#experiences");
    
    let skillsLink = document.querySelectorAll(".skills-link");
    let projectsLink = document.querySelectorAll(".projects-link");
    let experienceLink = document.querySelectorAll(".experience-link");

    skillsTab.onclick = () =>
    {
        page.innerHTML = skills;
        let currentSelected = document.querySelector(".selected-page");
        if(currentSelected)
        {
            currentSelected.classList.toggle("selected-page");
        }
        skillsTab.classList.toggle("selected-page");
        if(!page.classList.contains("skill-selected"))
        {
            page.classList.toggle("skill-selected")
        }
    }
    skillsLink[0].onclick = skillsTab.onclick;
    skillsLink[1].onclick = skillsTab.onclick;

    projectsTab.onclick = () =>
    {
        page.innerHTML = projects;
        let currentSelected = document.querySelector(".selected-page");
        if(currentSelected)
        {
            currentSelected.classList.toggle("selected-page");
        }
        projectsTab.classList.toggle("selected-page");
        if(page.classList.contains("skill-selected"))
        {
            page.classList.toggle("skill-selected")
        }
        setupPagesArrows();
        
    }
    projectsLink[0].onclick = projectsTab.onclick;
    projectsLink[1].onclick = projectsTab.onclick;

    experienceTab.onclick = () =>
    {
        page.innerHTML = experiences;
        let currentSelected = document.querySelector(".selected-page");
        if(currentSelected)
        {
            currentSelected.classList.toggle("selected-page");
        }
        experienceTab.classList.toggle("selected-page");
        if(page.classList.contains("skill-selected"))
        {
            page.classList.toggle("skill-selected")
        }
        setupPagesArrows();
    }
    experienceLink[0].onclick = experienceTab.onclick;
    experienceLink[1].onclick = experienceTab.onclick;
}

const setupPagesArrows = () =>
{
    let arrows = document.querySelectorAll(".info-toggle-button");

    for(const arrow of arrows)
    {
        arrow.onclick = () =>
        {
            if(!arrow.classList.contains("selected-arrow"))
            {
                let selected = document.querySelector(".selected-arrow");
                if(selected)
                {
                    selected.classList.toggle("selected-arrow");
                    selected.parentNode.classList.toggle("selected-arrow-parent");
                }
            }
            
        
            arrow.classList.toggle("selected-arrow")
            arrow.parentNode.classList.toggle("selected-arrow-parent");
        };
    }
}