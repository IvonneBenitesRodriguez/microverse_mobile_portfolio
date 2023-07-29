const closeBtn = document.querySelector('.create-x');
const hamburgerIcon = document.querySelector('.hamb-icon');
const mobileMenuBlue = document.querySelector('.mobile-menu-blue');
const portfolioLink = document.getElementById('portfolio-section');
const aboutLink = document.getElementById('about-section');
const contactLink = document.getElementById('contact-section');

function appear() {
  mobileMenuBlue.style.display = 'block';
  // document.body.style.overflow = 'hidden';
}

function disappear() {
  mobileMenuBlue.style.display = 'none';
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', disappear);
hamburgerIcon.addEventListener('click', appear);
portfolioLink.addEventListener('click', disappear);
aboutLink.addEventListener('click', disappear);
contactLink.addEventListener('click', disappear);

// begin the project of pop-up window:
const projectName = document.querySelector('.projectname');
const workSections = document.querySelector('.works');
const modal = document.querySelector('.modal-example');
const modalImg = document.querySelector('.modal-img');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');

// create the array of project's objects:
const projectsData = [
  {
    id: 'card1',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads, no accounts or sign-ups required.',
    imageLink: './img/Snapshoot-Portfolio-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Back End Dev',
    company: 'CANOPY',
    year: '2015',
    sourceLink: 'https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio',
    demoLink: 'https://ivonnebenitesrodriguez.github.io/microverse_mobile_portfolio/',
    icon: 'Counter.svg',
    seeBtn: 'See Project',
  },
  {
    id: 'card2',
    name: 'Multi-Post<br/>Stories',
    description: 'A daily selection of privately personalized reads, no accounts or sign-ups required.',
    imageLink: './img/Snapshoot-Portfolio-2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio',
    demoLink: 'https://ivonnebenitesrodriguez.github.io/microverse_mobile_portfolio/',
    icon: 'Counter.svg',
    seeBtn: 'See Project',
  },
  {
    id: 'card3',
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads, no accounts or sign-ups required.',
    imageLink: './img/Snapshoot-Portfolio-3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Back End Dev',
    company: 'FACEBOOK',
    year: '2015',
    sourceLink: 'https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio',
    demoLink: 'https://ivonnebenitesrodriguez.github.io/microverse_mobile_portfolio/',
    icon: 'Counter.svg',
    seeBtn: 'See Project',
  },
  {
    id: 'card4',
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads, no accounts or sign-ups required.',
    imageLink: './img/Snapshoot-Portfolio-4.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Lead Developer',
    company: 'UBER',
    year: '2018',
    sourceLink: 'https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio',
    demoLink: 'https://ivonnebenitesrodriguez.github.io/microverse_mobile_portfolio/',
    icon: 'Counter.svg',
    seeBtn: 'See Project',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projectsData.length; i += 1) {
  workSections.innerHTML += `
          <div class="card-works'>
                        <figure class="desktop-first">
                          <img src='${projectsData[i].imageLink}' alt='work 1' class='' />
                        </figure>
                <div class='left-block'>
                          <h2 class='primary-text'>${projectsData[i].name}</h2>
                          <div class='list-card-primary'>
                                <ul>
                                  <li><a href="#" class="canopy-card-1">${projectsData[i].company}</a></li>
                                  <li><a href="#" class="back">${projectsData[i].role}</a></li>
                                  <li><a href="#" class="year">${projectsData[i].year}</a></li>
                                </ul>
                          </div>      
                      <p class="work-text">${projectsData[i].description}</p>
                      <div class="buttons-group">
                          <ul class="buttons">
                              <li><button class="button-bg"><a href="#">${projectsData[i].technologies[0]}</a></button></li>
                              <li><button class="button-bg"><a href="#">${projectsData[i].technologies[1]}</a></button></li>
                              <li><button class="button-bg"><a href="#">${projectsData[i].technologies[2]}</a></button></li>
                          </ul>
                      </div>
                     <button type='button' class='normal-btn btn btn-enabled project-modal-${i}'>See project</a></button>
                  </div>
              </div>
             
     `;
}

for (let i = 0; i < projectsData.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    projectName.innerHTML = projectsData[i].name;
    modalImg.src = projectsData[i].imageLink;
    company.innerHTML = projectsData[i].company;
    role.innerHTML = projectsData[i].role;
    year.innerHTML = projectsData[i].year;

    modal.innerHTML = `
                        
                            <div class='modal-head'>
                                <h2 class='projectname'>${projectsData[i].name}</h2>
                                <button type='button' class='closeModal'>&times;</button>
                            </div>
                            <div class='modal-body'>
                              <div class='short-desc'>    
                                    <h4 class='company'>${projectsData[i].company}</h4>
                                    <span></span>
                                    <h4 class='role'>${projectsData[i].role}</h4>
                                    <span></span>
                                    <h4 class='year'>${projectsData[i].year}</h4>
                              </div>
                              <img src='${projectsData[i].imageLink}' alt='img' class='modal-img'>
                              <div class='project-desc'>
                                    <p class='desc'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. In voluptatem pariatur modi rerum error ea
                                        consequatur, excepturi eum maiores! Quo quibusdam culpa ratione.?Lorem ipsum dolor sit amet. consectetur
                                        adispicing elit.
                                    </p>
                                    <div class='desc-btn'>
                                      <ul class='project_lang'>
                                          <li><a href='' class='lang1' title='html'>html</a></li>
                                          <li><a href='' class='lang1' title='css'>css</a></li>
                                          <li><a href='' class='lang1' title='javascript'>javascript</a></li>
                                      </ul>
                                    <div class='final'>
                                      <button type='button' class='modal-btn external'><a href="https://ivonnebenitesrodriguez.github.io/microverse_mobile_portfolio/" class="externalLink">See live<i class='fa fa-external-link' aria-hidden='true'></i></a></button>
                                      <button type='button' class='modal-btn github'><a href="https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio" class="githubLink">See source<i class='fa fa-github'></i></a></button>
                                    </div>    
                              </div>
                            </div>
                          </div>
                             
                                    `;

    document.querySelector('.works').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
    document.querySelector('.presentation-part').classList.add('blur');
    document.querySelector('.about-myself').classList.add('blur');
    document.querySelector('.contact-form').classList.add('blur');
    modal.classList.add('show');

    document.querySelector('.closeModal').addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.reload();
      document.querySelector('.header').classList.remove('blur');
      document.querySelector('.show').classList.remove('blur');
    });
  });
}

const email = document.querySelector('#email');
const validationMessageAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
  const regexInfo = /[A-Z]/;
  const emailContent = email.value;
  if (regexInfo.test(emailContent)) {
    validationMessageAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});
