let project_details = [
  {
    project_name: "Learning Hub - Course Monitoring System",
    details:
      "A Java console-based individual project mainly focusing on the Automated Course Monitoring System will keep the records of all the courses,batches,faculties and the daywise update for every batch. It will also help the Faculty Head to maintain the course plan .",
    tech_stack: "Core Java | MySql | Hibernate | JDBC | github",
    data_base: "MYSQL",
    banner:
      "https://user-images.githubusercontent.com/105943862/208404419-08161b2c-5f41-4b6b-bd96-6bb0c7373eb5.png",
    deployed: "https://drive.google.com/file/d/1saLfU_G8BVNPWSjjBUcSpR9GBoeFcPJU/view?usp=sharing",
    gitlink: "https://github.com/abhishek-0713/Course-Monitoring-System",
  },

  {
    project_name: "MyWallet - Payment Wallet Application",
    details:
      "Payment Wallet Application in Java using Spring Boot with Source Code. This is restful service for the payment wallet application with all neccessary API. This project is developed to allow customers to make payments using wallets while making any purchase.",
    tech_stack:
      "Java | Spring Boot | Swagger | Lombok | Spring Security | github",
    data_base: "MYSQL",
    banner:
      "https://user-images.githubusercontent.com/105943862/208405349-4831d5d5-e049-45e7-a989-ba2babb0d9a6.png",
    deployed: "https://drive.google.com/file/d/1saLfU_G8BVNPWSjjBUcSpR9GBoeFcPJU/view?usp=sharing",
    gitlink: "https://github.com/abhishek-0713/MyWallet",
  },

  {
    project_name: "Zappos.com Clone",
    details:
      "Zappos is an E-commerce website, where you can buy clothing, handbags,accessories, and more. It is a Collaborative project made in 5 days. My task was to build the Hotels list page and provide different functionalities like sorting and filtering.",
    tech_stack: " JavaSript | HTML | CSS | github",
    data_base: "Json server",
    banner:
      "https://user-images.githubusercontent.com/105943862/200125583-f703c8da-e58b-4747-a4d6-19cf7d26e8ef.png",
    deployed: "https://zappos.netlify.app/",
    gitlink: "https://github.com/arijeet8008/excited-roof-1669",
  },

  {
    project_name: "DNAIndia.com Clone",
    details:
      "Clone of a news website DNA India which provides news related to India, sports, lifestyle, the world, and many more.Developed project in 5 days during the construct week.",
    tech_stack: "HTML | CSS | JavaScript | github",
    data_base: "local storage",
    banner:
      "https://github.com/rahulbnc463/Team_DNA/raw/main/readme_docs/1.png",
    deployed: "https://cerulean-nasturtium-c2ac46.netlify.app/",
    gitlink: "https://github.com/rahulbnc463/Team_DNA",
  },
  {
    project_name: "LEARNING MANAGEMENT SYSTEM - LMS",
    details:
      "This is a Solo Project based on Concept of Oops - STUDENT MANAGEMENT SYSTEM. There will be two kinds of users student, admin. login and signup functionality for both kind of user. Admin have special access.",
    tech_stack: "Oops | HTML | CSS | JavaScript | github",
    data_base: "local storage",
    banner:
      "https://user-images.githubusercontent.com/105943862/200131083-803dbb4a-fd82-4087-bcab-e5a2e9eb398e.png",
    deployed: "https://visionary-granita-4e517a.netlify.app/",
    gitlink: "https://github.com/abhishek-0713/Learning-Management-System-LMS",
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
