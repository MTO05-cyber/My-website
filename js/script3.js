// Get URL project ID
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// All projects
const projects = {
  1: {
    title: "Smart Home Systeem",
    description:
      "Dit project demonstreert mijn kennis van IoT en netwerken. Met een Raspberry Pi, DHT22-sensoren en Node-RED heb ik een smart home omgeving gemaakt met live dashboard.",
    skills: [
      "MQTT",
      "Node-RED",
      "Python",
      "Dashboard UI",
      "Raspberry Pi",
      "Networking",
    ],
  },

  2: {
    title: "Rent-a-car site",
    description:
      "Een volledige website voor autoverhuur, inclusief automatisch factuursysteem en contractgenerator. https://rent-mto.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },

  3: {
    title: "PSU Calculator",
    description:
      "Een webtool waarmee gebruikers kunnen berekenen hoeveel watt hun PC nodig heeft op basis van componenten.",
    skills: ["JavaScript", "Front-end logica", "UI Design"],
  },

  4: {
    title: "Netwerk Installeren",
    description:
      "Configuratie van routers, switches en VLANs voor een bedrijfsnetwerk. Inclusief subnetting en security.",
    skills: [
      "Routing",
      "Switching",
      "VLANs",
      "Subnetting",
      "Firewall Configuratie",
    ],
  },

  5: {
    title: "AP App",
    description:
      "Een app die alle Access Point sites en hun informatie in één systeem samenbrengt. Zo hoeft men niet meer naar meerdere sites.",
    skills: ["App Design", "UI/UX", "JavaScript", "API koppelingen"],
  },

  6: {
    title: "Windows Server",
    description:
      "Setup van een volledige Windows Server omgeving voor een klein bedrijf. Inclusief Active Directory, file server en user management.",
    skills: [
      "Windows Server",
      "Active Directory",
      "PowerShell",
      "User Management",
    ],
  },
};

const project = projects[id] || {
  title: "Project niet gevonden",
  description: "Gelieve een project te kiezen",
};

document.getElementById("project-title").innerText = project.title;
document.getElementById("project-description").innerText = project.description;

const skillsTitle = document.querySelector(".skills-title");
const skillsList = document.getElementById("project-skills");

if (!project.skills) {
  skillsTitle.style.display = "none";
  skillsList.style.display = "none";
} else {
  project.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.innerText = skill;
    skillsList.appendChild(li);
  });
}
