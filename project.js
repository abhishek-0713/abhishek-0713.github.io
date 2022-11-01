let project_details = [
  {
    project_name: "Zappos.com Clone",
    details:
      "Zappos is an E-commerce website, where you can buy clothing, handbags,accessories, and more. It is a Collaborative project made in 5 days. My task was to build the Hotels list page and provide different functionalities like sorting and filtering.",
    tech_stack: " API | JavaSript | ES6 | Local storage | HTML | CSS | github",
    data_base: "Json server",
    banner:
      "https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    deployed: "https://zappos.netlify.app/",
    gitlink: "https://github.com/arijeet8008/excited-roof-1669",
  },

  {
    project_name: "DNAIndia.com Clone",
    details:
      "Clone of a news website DNA India which provides news related to India, sports, lifestyle, the world, and many more.Developed project in 5 days during the construct week.",
    tech_stack: "HTML, CSS, JavaScript, github",
    data_base: "local storage",
    banner:
      "https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    deployed: "https://cerulean-nasturtium-c2ac46.netlify.app/",
    gitlink: "https://github.com/rahulbnc463/Team_DNA",
  },
];

project_details.forEach((project) => {
  let Projects_Div = document.getElementById("projects_div");

  let Maindiv = document.createElement("div");
  Maindiv.className = "main";

  let pictureDiv = document.createElement("div");
  pictureDiv.className = "picture";

  let laptopDiv = document.createElement("div");
  let screenDiv = document.createElement("div");
  let img = document.createElement("img");
  img.src = project.banner;
  screenDiv.append(img);
  laptopDiv.append(screenDiv);
  let base = document.createElement("div");
  let lower_base = document.createElement("div");

  pictureDiv.append(laptopDiv, base, lower_base);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.className = "project_description";

  let nameDiv = document.createElement("div");
  nameDiv.innerText = project.project_name;
  nameDiv.style.color = "var(--skin-color)";
  let projectDetails = document.createElement("div");
  projectDetails.innerHTML = `<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
  let buttonsDiv = document.createElement("div");
  let deployedBtn = document.createElement("button");
  deployedBtn.innerText = "Deployed";

  deployedBtn.onclick = () => {
    window.open(project.deployed, "_blank");
  };

  let gitBtn = document.createElement("button");
  gitBtn.innerText = "GitHub";
  gitBtn.onclick = () => {
    window.open(project.gitlink, "_blank");
  };

  buttonsDiv.append(deployedBtn, gitBtn);
  descriptionDiv.append(nameDiv, projectDetails, buttonsDiv);

  Maindiv.append(pictureDiv, descriptionDiv);
  Projects_Div.append(Maindiv);
});

// Mobile view tabs.........

let content = document.getElementById("content");
let bars = document.querySelector("#bar");
let cross = document.getElementById("cross");
bars.onclick = () => {
  content.style.display = "flex";
  cross.style.display = "flex";
  bars.style.display = "none";
};

cross.onclick = () => {
  closedFun();
};

let contentDiv = document.querySelectorAll("#content>a");
contentDiv.forEach((ele) => {
  ele.onclick = () => {
    closedFun();
  };
});

document.onscroll = () => {
  closedFun();
};

let closedFun = () => {
  content.style.display = "none";
  bars.style.display = "flex";
  cross.style.display = "none";
};
