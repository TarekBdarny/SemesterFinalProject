// name : Tarek Bdarny 
// id : 325347086

// fetching all the images and their information to use them in the project section
const url = './projectData.json';

// Create a function to fetch the JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Call the fetchData function to get the JSON data
fetchData(url)
  .then(data => {
    if (data) {
        const container  =  document.querySelector('.container');

        // creating the sticky div that have the arrow
        const createArrowForAboutMeSection = () => {
            let stickyDiv = document.createElement('div');
            stickyDiv.className = "stickyDiv";
            let arrowDiv = document.createElement('div');
            let arrow = document.createElement('img');
            arrow.src = "arrow-up (1).svg";
            arrowDiv.appendChild(arrow);
            stickyDiv.appendChild(arrowDiv);
            document.body.appendChild(stickyDiv);
        stickyDiv.onclick = () => window.location.href = "#navigation"
        
        }
        // create a nave bar
        const createNavigation = () =>{
            let logo = document.createElement('img');
            logo.src = "logo.png";
        let header = document.createElement('header');
        header.id = "navigation";
        let nav = document.createElement('nav');
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let aboutMeA = document.createElement('a');
        aboutMeA.href = "#aboutMe";
        aboutMeA.innerHTML = "About Me";
        li1.appendChild(aboutMeA)
        
        let li2 = document.createElement('li');
        let skillsA = document.createElement('a');
        skillsA.href = "#skills";
        skillsA.innerHTML = "Skills";
        li2.appendChild(skillsA); 
        
        let li3 = document.createElement('li');
        let projectA = document.createElement('a');
        projectA.href = "#projects";
        projectA.innerHTML = "Projects";
        li3.appendChild(projectA);
        
        
        ul.append(li1,li2,li3);
        nav.append(logo,ul);
        header.appendChild(nav);
        container.appendChild(header);
        }
        // about me section
        const createAboutMeSection = () => {
            let section = document.createElement('section');
            section.classList.add('aboutMeSection');
            section.id = "aboutMeSection"
            let aboutMeWrapper = document.createElement('div');
            aboutMeWrapper.className = 'aboutMeContent hidden';
            let image = document.createElement('img');
            image.src = "myImage.png";
            let aboutMeContent = document.createElement('div');
            let aboutMe = document.createElement('h1');
            aboutMe.innerHTML = "Hello I am Tarek Bdarny."
            let moreAbout = document.createElement('h3');
            moreAbout.innerHTML = " A collage student at Tel-Hai Qiryat Shmona, Becoming a Full-Stack Developer."
            let aboutMeFooter = document.createElement('div');
            aboutMeFooter.className = 'aboutMeFooter hidden';
            let footerContent = document.createElement('p');
            footerContent.innerHTML = "As a passionate and dedicated computer scientist, I thrive on tackling complex challenges and creating innovative solutions. My journey in the world of CS has been characterized by a relentless pursuit of knowledge and a deep commitment to continuous learning.";
        
            let contactMe = document.createElement('div');
            contactMe.classList.add("contactMe");
            let facebookA = document.createElement('a');
            let facebookIcon = document.createElement('i');
            facebookIcon.className ="fa-brands fa-facebook";
            facebookA.href = "https://www.facebook.com/profile.php?id=100008142828520";
            facebookA.appendChild(facebookIcon);
        
            let githubA = document.createElement('a');
            let githubIcon = document.createElement('i');
            githubIcon.className ="fa-brands fa-github";
            githubA.href = "https://github.com/TarekBdarny";
            githubA.appendChild(githubIcon);
        
            let instagramA = document.createElement('a');
            let instagramIcon = document.createElement('i');
            instagramIcon.className ="fa-brands fa-instagram";
            instagramA.href = "https://www.instagram.com/tarekbdarny/";
            instagramA.appendChild(instagramIcon);
        
            document.querySelectorAll('.contactMe a').forEach(a => a.target ="_blank");
        
            contactMe.append(facebookA , githubA , instagramA);
            aboutMeFooter.append(footerContent , contactMe);
            aboutMeContent.append(aboutMe , moreAbout);
            aboutMeWrapper.append(aboutMeContent , image , aboutMeFooter);
            section.appendChild(aboutMeWrapper);
            container.appendChild(section);
            
        
            
        }
        // skills and incoming skills
        const createSkillsSection = () => {
            let section = document.createElement('section');
            section.id = 'skills';
            section.classList.add('skills');
            const skillsWrapper = document.createElement('div');
            skillsWrapper.classList.add('Skills');
            let masteredSKills = document.createElement('ul');
            masteredSKills.className = 'masteredSKills hidden';
            let skillsH1 = document.createElement('h1');
            skillsH1.innerHTML = "My Skills";
            let java = document.createElement('li');
            java.classList.add('li');
            let javaLogo = document.createElement('i');
            javaLogo.className =  "fa-brands fa-java";
            let javaContent = document.createElement('p');
            javaContent.innerHTML = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
            let javaHeader = document.createElement('h2');
            javaHeader.innerHTML = "Java";
            java.append(javaLogo , javaHeader,javaContent);
        
            let javaScript = document.createElement('li');
            let javaScriptLogo = document.createElement('i');
            javaScriptLogo.className =  "fa-brands fa-js";
            let javaScriptContent = document.createElement('p');
            javaScriptContent.innerHTML = "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages,";
            let javaScriptHeader = document.createElement('h2');
            javaScriptHeader.innerHTML = "Java Script";
            javaScript.append(javaScriptLogo , javaScriptHeader,javaScriptContent);
        
        
        
            let html = document.createElement('li');
            let htmlLogo = document.createElement('i');
            htmlLogo.className =  "fa-brands fa-html5";
            let htmlContent = document.createElement('p');
            htmlContent.innerHTML = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. ";
            let htmlHeader = document.createElement('h2');
            htmlHeader.innerHTML = "html";
            html.append(htmlLogo , htmlHeader,htmlContent);
        
        
            let css = document.createElement('li');
            let cssLogo = document.createElement('i');
            cssLogo.className =  "fa-brands fa-css3";
            let cssContent = document.createElement('p');
            cssContent.innerHTML = "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.";
            let cssHeader = document.createElement('h2');
            cssHeader.innerHTML = "css";
            css.append(cssLogo , cssHeader,cssContent);
        
        
            masteredSKills.append(skillsH1,java , javaScript , html , css);
            skillsWrapper.appendChild(masteredSKills);
            section.append(skillsWrapper);
            
            const div = document.createElement('div');
            const incomingSkills = document.createElement('ul');
            incomingSkills.className = 'incomingSkills hidden';
            let incomingSkillsH1 = document.createElement('h1');
            incomingSkillsH1.innerHTML = "Incoming Skills";
        
            let bootStrap = document.createElement('li');
            let bootStrapLogo = document.createElement('i');
            bootStrapLogo.className =  "fa-brands fa-bootstrap";
            let bootStrapContent = document.createElement('p');
            bootStrapContent.innerHTML = "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components";
            let bootStrapHeader = document.createElement('h2');
            bootStrapHeader.innerHTML = "bootStrap";
            bootStrap.append(bootStrapLogo , bootStrapHeader,bootStrapContent);
        
            let react = document.createElement('li');
            let reactLogo = document.createElement('i');
            reactLogo.className =  "fa-brands fa-react";
            let reactContent = document.createElement('p');
            reactContent.innerHTML = "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.";
            let reactHeader = document.createElement('h2');
            reactHeader.innerHTML = "React";
            react.append(reactLogo , reactHeader,reactContent);
        
            let python = document.createElement('li');
             let pythonLogo = document.createElement('i');
            pythonLogo.className =  "fa-brands fa-python";
            let pythonContent = document.createElement('p');
            pythonContent.innerHTML = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.";
            let pythonHeader = document.createElement('h2');
            pythonHeader.innerHTML = "python";
            python.append(pythonLogo , pythonHeader,pythonContent);
            
            let NodeJS = document.createElement('li');
            let NodeJSLogo = document.createElement('i');
            NodeJSLogo.className =  "fa-brands fa-node-js";
            let NodeJSContent = document.createElement('p');
            NodeJSContent.innerHTML = "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.";
            let NodeJSHeader = document.createElement('h2');
            NodeJSHeader.innerHTML = "Node JS";
            NodeJS.append(NodeJSLogo , NodeJSHeader,NodeJSContent);
            
            // document.querySelectorAll('.Skills li').forEach(item => item.className = "li hidden")
            
            incomingSkills.append(incomingSkillsH1,bootStrap , react , python , NodeJS );
        
            div.append( incomingSkills);
            section.appendChild(div);
            container.appendChild(section);
        }
        // projects section
        const createProjectsSection = () => {
        let section = document.createElement('section');
        section.classList.add('footer');
        section.id = 'projects';
        let projectHeader = document.createElement('h1');
        projectHeader.innerHTML = "My Projects";
        let footerWrapper = document.createElement('div');
        footerWrapper.classList.add('footerWrapper');   
        footerWrapper.innerHTML =`
                <div class="imagesWrapper">
                <div class="macBook">
                <img src="${data.projects[0].image}" class="ProjectImage">
                <div class="content hide">
                <p class="desc">${data.projects[0].desc}</p>
                <p class="demoInfo"></p>
                <a href="${data.projects[0].link}"> <i class="fa-solid fa-link"></i> </a>
                </div>
                <div class="buttons">
                <button class="btn before"><i class="fa-solid fa-arrow-left"></i></button>
                <button class="btn after"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
                </div>
                
                `
            section.append(footerWrapper , projectHeader);
            container.appendChild(section);
        }
        // const createContactSection = () => {
           
        //     container.appendChild(contactMe);
        
        // }
        createArrowForAboutMeSection();
        createNavigation();
        createAboutMeSection();
        createSkillsSection();
        createProjectsSection();
        // createContactSection();
        
        // the index for what image to show in the laptop
        let index = 0;
        
        // to show the image when the arrow right is clicked to show the next image
        document.querySelector('.macBook .after').addEventListener('click', () =>{
            document.querySelector('.footerWrapper .macBook').className = "macBook"
        
            document.querySelector('.footerWrapper .macBook').classList.add('slideRight');
            document.querySelector('.footerWrapper .macBook').classList.remove('slideBackFromRight')
        
            document.querySelector('.footerWrapper .buttons').style.display = 'none';
        
            setTimeout(() => {
                document.querySelector('.footerWrapper .macBook').classList.remove('slideRight')
                document.querySelector('.footerWrapper .macBook').classList.add('slideBackFromRight')
                document.querySelector('.footerWrapper .buttons').style.display = 'flex';
                
            },2500)
        
            
            setTimeout(() => {
                index++;
                 console.log(index);
                if(index === data.projects.length)
                 index =0; 
                 if(index === 1){
                     document.querySelector('.footerWrapper img').src = data.projects[index].image;
                     document.querySelector('.footerWrapper .desc').innerHTML = data.projects[index].desc;
                     document.querySelector('.footerWrapper a').href = data.projects[index].link;
                     document.querySelector('.footerWrapper .demoInfo').innerHTML = " Email : "  + data.projects[index].email + " Password : " + data.projects[index].password;
                    }
                    else{
                     document.querySelector('.footerWrapper img').src = data.projects[index].image;
                     document.querySelector('.footerWrapper p').innerHTML = data.projects[index].desc;
                     document.querySelector('.footerWrapper a').href = data.projects[index].link;
                     document.querySelector('.footerWrapper .demoInfo').innerHTML = "" ;
                 }
        
                 
        
                },1500)
            setTimeout(() =>{document.querySelector('.footerWrapper').classList.remove('rotate')},2500)
        
        })
        // to show the image when the arrow left is clicked to show previous image
        document.querySelector('.macBook .before').addEventListener('click', () =>{
            document.querySelector('.footerWrapper .macBook').className = "macBook"
            document.querySelector('.footerWrapper .macBook').classList.add('slideLeft');
            document.querySelector('.footerWrapper .macBook').classList.remove('slideBackFromLeft')
        
            document.querySelector('.footerWrapper .buttons').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.footerWrapper .macBook').classList.remove('slideLeft')
            document.querySelector('.footerWrapper .macBook').classList.add('slideBackFromLeft')
        
            document.querySelector('.footerWrapper .buttons').style.display = 'flex';
                
            },2500);
            setTimeout(() => {
                index --;
        
                
                 if(index <0) index = data.projects.length-1;
                 console.log(index);
                 if(index === 1){
                     document.querySelector('.footerWrapper img').src = data.projects[index].image;
                     document.querySelector('.footerWrapper .desc').innerHTML = data.projects[index].desc;
                     document.querySelector('.footerWrapper a').href = data.projects[index].link;
                     document.querySelector('.footerWrapper .demoInfo').innerHTML = " Email : "  + data.projects[index].email + " Password: " + data.projects[index].password;
                    }
                    else{
                     document.querySelector('.footerWrapper img').src = data.projects[index].image;
                     document.querySelector('.footerWrapper p').innerHTML = data.projects[index].desc;
                     document.querySelector('.footerWrapper a').href = data.projects[index].link;
                     document.querySelector('.footerWrapper .demoInfo').innerHTML = "" ;
                 }
        
                },1500)
        
        })
        // to change the sticky div arrow color
        document.querySelector('.stickyDiv div').onmousemove = () => document.querySelector('.stickyDiv div img').src = "arrow-up (3).svg";
        document.querySelector('.stickyDiv div').onmouseout = () => document.querySelector('.stickyDiv div img').src = "arrow-up (1).svg";
        
        // a function that animate elements on scroll
         const observer = new IntersectionObserver((entires) =>{
            entires.forEach((entry) =>{
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('show');
                }
                else{
                    entry.target.classList.remove('show');
                }
            });
         });
         const hiddenElements = document.querySelectorAll('.hidden');
         hiddenElements.forEach((element) =>observer.observe(element));
        
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

