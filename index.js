const allStudentData = [
    {
      name: "Aarav",
      age: 22,
      skills: ["Python", "Data Science"],
    },
    {
      name: "Bhavik",
      age: 24,
      skills: ["Java", "Machine Learning"],
    },
    {
      name: "Deepa",
      age: 20,
      skills: ["JavaScript", "Web Development"],
    },
    {
      name: "Eesha",
      age: 23,
      skills: ["React", "UI/UX Design"],
    },
    {
      name: "Farhan",
      age: 21,
      skills: ["C++", "Algorithm Design"],
    },
    {
      name: "Gurmeet",
      age: 25,
      skills: ["Python", "Data Analysis"],
    },
    {
      name: "Harshita",
      age: 26,
      skills: ["JavaScript", "Full-stack Development"],
    },
    {
      name: "Ishan",
      age: 24,
      skills: ["React", "Mobile App Development"],
    },
    {
      name: "Jhanvi",
      age: 22,
      skills: ["Java", "Cloud Computing"],
    },
    {
      name: "Kavita",
      age: 23,
      skills: ["Python", "Cybersecurity"],
    },
    {
      name: "Laksh",
      age: 21,
      skills: ["JavaScript", "Blockchain Development"],
    },
    {
      name: "Mihir",
      age: 25,
      skills: ["React", "DevOps"],
    },
    {
      name: "Nitya",
      age: 24,
      skills: ["Java", "AI Engineering"],
    },
    {
      name: "Ojas",
      age: 22,
      skills: ["Python", "Data Visualization"],
    },
    {
      name: "Pranav",
      age: 26,
      skills: ["JavaScript", "Frontend Development"],
    },
    {
      name: "Riya",
      age: 23,
      skills: ["React", "Backend Development"],
    },
    {
      name: "Sarthak",
      age: 24,
      skills: ["Java", "Database Management"],
    },
    {
      name: "Tanya",
      age: 21,
      skills: ["Python", "Natural Language Processing"],
    },
    {
      name: "Utkarsh",
      age: 25,
      skills: ["JavaScript", "Cloud Computing"],
    },
    {
      name: "Vaibhav",
      age: 23,
      skills: ["React", "Machine Learning"],
    },
  ];
  
  var studentContainerDiv = document.getElementById("student-container");
  
  const filterButton = document.getElementById("filter-btn");
  
  filterButton.addEventListener("click", filterHandler);
  
  
  function filterHandler(){
  
      // Step 1: We want to get the value of filter keyword from the select tag
  
      const skill = document.getElementById("skills-select").value;
  
      // Step 2: Filter the allStudentData on the basis skill that we will get from step1
  
      const filteredStudentData = allStudentData.filter((studentData)=>{
          /*
  
              {
                  name: "Aarav",
                  age: 22,
                  skills: ["Python", "Data Science"],
              }
  
              studentData.skills.map(skill=>skill.toLowerCase())
              ["Python", "Data Science"] => ["python", "data science"]
  
              .join(", ")
              "python, data science"
  
              .includes("python")
              "python, data science" -> "python" 
  
  
          */
          return  studentData.skills.map(skill=>skill.toLowerCase()).join(", ").includes(skill.toLowerCase())
      })
  
      // Step 3: filteredStudentData.foreach() will be called to insert CARD UI in studentContainerDiv
  
      studentContainerDiv.innerHTML = ""; // It will remove all the existing CARD UI
  
      filteredStudentData.forEach((studentData)=>{
  
          const CARD_UI = createStudentCardUI(studentData)
  
          studentContainerDiv.append(CARD_UI)
  
      })
  
  }
  
  
  /**********************************************************************************************************
   * createStudentCardUI function will take studentData and will return CARD UI for the student
   * 
   * @param {Object} studentData - It will be an object, which contains name, age & skills.
   *                               E.G. :- { name : "Ankit", age: 26, skills : ["React", "Javascript"]}
   * 
   * @return {Node} - It will be HTML DOM NODE, which will be resposible to create the UI of the student card
   *                  <div>
   *                      <p>Ankit</p>
   *                      <p>26</p>
   *                      <p>React, Javascript</p>
   *                  </div>    
  ***********************************************************************************************************/
  function createStudentCardUI(studentData){
  
      const container = document.createElement("div");
      
      container.classList.add("studentCard")
  
      const namePElement = document.createElement("p");
  
      container.appendChild(namePElement);
  
      namePElement.innerText = studentData.name;
  
      const agePElement = document.createElement("p");
  
      container.appendChild(agePElement);
  
      agePElement.innerText = studentData.age;
  
      const skillsPElement = document.createElement("p");
  
      container.appendChild(skillsPElement);
  
      skillsPElement.innerText = studentData.skills.join(", ")
  
      return container
  
  }
  
  // for(let i = 0; i<allStudentData.length ; i++){
      
  //     const CARD_UI = createStudentCardUI(allStudentData[i])
  
  //     studentContainerDiv.append(CARD_UI)
      
  // }
  
  // for (const studentData of allStudentData){
      
  //     const CARD_UI = createStudentCardUI(studentData)
  
  //     studentContainerDiv.append(CARD_UI)
      
  // }
  
  allStudentData.forEach((studentData)=>{
  
      const CARD_UI = createStudentCardUI(studentData)
  
      studentContainerDiv.append(CARD_UI)
  
  })