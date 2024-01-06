// id = home, skills, projetos, exp
// class = tab

{/* <header>
            <div>
                <a ><img id="logo" src="../assets/invader.png" alt=""></a>
            </div>
            <nav>
                <a id="a-home" >Home</a>
                <a id="a-skills" >Skills</a>
                <a id="a-projetos" >Projeto</a>
                <a id="a-exp" >Exp</a>
                <a id="a-contato" >Contato</a>
            </nav> */}


const buttonHome = document.querySelector('#a-home');
const buttonSkills = document.querySelector('#a-skills');
const buttonProjetos = document.querySelector('#a-projetos');
const buttonExp = document.querySelector('#a-exp');
const buttonContato = document.querySelector('#a-contato');

const tabHome = document.querySelector('#home');
const tabSkills = document.querySelector('#skills');
const tabProjetos = document.querySelector('#projetos');
const tabExp = document.querySelector('#exp');
const tabContato = document.querySelector('#contato');


function navHome() {
    tabHome.classList.remove('hidetab')
    tabSkills.classList.add('hidetab')
    tabProjetos.classList.add('hidetab')
    tabExp.classList.add('hidetab')
    tabContato.classList.add('hidetab')
}

function navSkills() {
    tabHome.classList.add('hidetab')
    tabSkills.classList.remove('hidetab')
    tabProjetos.classList.add('hidetab')
    tabExp.classList.add('hidetab')
    tabContato.classList.add('hidetab')
}

function navProjetos() {
    tabHome.classList.add('hidetab')
    tabSkills.classList.add('hidetab')
    tabProjetos.classList.remove('hidetab')
    tabExp.classList.add('hidetab')
    tabContato.classList.add('hidetab')
}

function navExp() {
    tabHome.classList.add('hidetab')
    tabSkills.classList.add('hidetab')
    tabProjetos.classList.add('hidetab')
    tabExp.classList.remove('hidetab')
    tabContato.classList.add('hidetab')
}

function navContato() {
    tabHome.classList.add('hidetab')
    tabSkills.classList.add('hidetab')
    tabProjetos.classList.add('hidetab')
    tabExp.classList.add('hidetab')
    tabContato.classList.remove('hidetab')
}

// const buttonIds = {
//     'a-home': tabHome,
//     'a-skills': tabSkills,
//     'a-projetos': tabProjetos,
//     'a-exp': tabExp
//   };
  
//   const tabs = Object.values(buttonIds);
  
//   function hideAllTabs() {
//     tabs.forEach(tab => {
//       tab.classList.add('hidetab');
//     });
//   }
  
//   function handleNavigation(event) {
//     const tabId = event.target.id;
//     hideAllTabs();
//     buttonIds[tabId].classList.remove('hidetab');
//   }
  
//   Object.values(buttonIds).forEach(button => {
//     button.addEventListener('click', handleNavigation);
//   });
  