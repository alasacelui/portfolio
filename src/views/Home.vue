<template>
  <div>
  
    <div class="main" id="top">
      <div
        class="
          jumbotron jumbotron-fluid
          text-white
          m-0
          text-sm-center text-lg-left
          p-5
        "
        id="section_one"
      >
      <div class="float-end">
        <div class="form-check form-switch">
          <input class="form-check-input" :class="!status? 'bg-success' : 'bg-danger' " type="checkbox" style="font-size:1.5rem" v-model="status"  @click="!status ? toggle() : untoggle()" title="hit me 🪓">
        </div>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                class="img-fluid"
                src="/img/myimage.webp"
                alt="Ace Manalo"
                width="450"
              />
            </div>
            <div class="col-md-6 text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <typewriter
                class="h1 font-weight-light"
                :speed="200"
                :full-erase="true"
                :interval="500"
                :words="[
                  'I\'m a Web Developer!',
                  'I\'m a Self-Taught Developer!',
                  'I\'m a Computerphile',
                ]"
              >
                <span>Hi! I'm Ace Manalo ,</span> <br />
              </typewriter>
              <div>
                <b-button class="mx-2 mt-5" :variant="!status ? 'success' : 'danger'" size="lg">
                  <b-link class="text-decoration-none text-white" href="https://www.github.com/alasacelui" target="blank">
                  <b-icon icon="github" aria-label="Help"></b-icon>
                  View Projects
                  </b-link></b-button
                >
                <b-button class="mt-5" :variant="!status ? 'success' : 'danger'" size="lg">
                  <b-link href="/docs/ace_resume.docx" download class="text-decoration-none text-white">
                  <b-icon icon="download" aria-label="Help"></b-icon>
                  Download Resume
                  </b-link></b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="jumbotron jumbotron-fluid m-0 p-5" id="section_two">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="display-5">About Me</h1>
              <br>
              <p v-for="(about, index) in about_me" :key="index">
                {{about}}
              </p>
            </div>
            <div class="col-md-6">
              <img class="img-fluid" src="/img/me.svg" width="450" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="jumbotron jumbotron-fluid m-0 p-5" id="section_three">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="mb-4" :class="!status? 'color_default': 'text-danger'">
               <b-icon icon="briefcase-fill"></b-icon> Work Experience</h2>
              <div class="row py-4" v-for="(exp, index) in work_experiences" :key="index">
                  <h4>{{ exp.company }}</h4>
                  <h5 class="mt-2">- {{ exp.position }}</h5>
                  <ul>
                    <li v-for="(task,index) in exp.tasks" :key="index"> 
                      {{ task }}
                    </li>
                  </ul>
                  <p class="font-italic">
                    {{ exp.date }}
                  </p>
                  <div>
                    <span :class="!status ?'badge success p-2 mx-1 mt-1' : 'badge dark p-2 mx-1 mt-1'" v-for="(tech , index) in exp.technologies" :key="index">
                      <b-link :href="`https://www.google.com/search?q=${tech}`" target="_blank" class="text-decoration-none text-white">

                      {{ tech }}
                      </b-link>
                    </span>
                    <hr>
                  </div>
                
                  
              </div>
            </div>
            <div class="col-md-6 px-lg-5">
             <h2 class="mb-4 " :class="!status? 'color_default': 'text-danger'">
            <i class="fas fa-code "></i> Skills</h2>
            <div class="row py-4" v-for="(skill,index) in skills" :key="index">
              <h4>{{ skill.type }}</h4>
              <div>
                 <span :class="!status ?'badge success p-2 mx-1 mt-1' : 'badge dark p-2 mx-1 mt-1'" v-for="(tech , index) in skill.technologies" :key="index">
                    <b-link :href="`https://www.google.com/search?q=${tech}`" target="_blank" class="text-decoration-none text-white">
                      {{ tech }}
                    </b-link>
                    </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="jumbotron jumbotron-fluid m-0 p-5" id="section_four">
        <div class="container">
          <h1 class="text-center display-5 mb-5 text-white">My Portfolio</h1>
          <!--Personal Project-->
          <div class="row">
            <br>
            <br>
            <h2 class="text-white mb-4">Personal Projects</h2>
            <div class="card mb-3 py-3" v-for="(proj, index) in personal_projects" :key="index">
              <div class="row" >
                <div class="col-md-5">
                 <img :src="proj.main_img" class="img-fluid portfolio_img" :alt="proj.title" @click="showImages(proj.imgs)">                  
                 
                </div>
                <div class="col-md-7">
                  <h3>{{ proj.title }}</h3>
                  <p>{{ proj.description }}</p>
                  <h6>End Users - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'" v-for="(user , index) in proj.end_user" :key="index">
                      {{ user }}
                    </span>
                  
                  </h6>

                   <div>
                    <h6>Technology  Used - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'" v-for="(tech , index) in proj.technologies" :key="index">
                       <b-link :href="`https://www.google.com/search?q=${tech}`" target="_blank" class="text-decoration-none text-white">
                                      {{ tech }}
                       </b-link>
                                    </span>
                    </h6>
                  </div>
                   <div v-if="proj.db">
                    <h6>Database - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'">
                                      {{ proj.db }}
                                    </span>
                    </h6>
                  </div>

                       <div>
                <b-button class="mx-2 mt-3" :variant="!status ? 'success' : 'danger'" size="md">
                    <i class="fas fa-code">  </i>
                    View Code
                   </b-button
                >
                <b-button class="mt-3" :variant="!status ? 'success' : 'danger'" size="md">
                   <b-link :href="proj.link" class="text-decoration-none text-white" target="blank">
                  <i class="fas fa-desktop">  </i>
                  Demo
                  </b-link></b-button
                >
                </div>
              </div>
     
              </div>

            </div>
           </div>

           
             

         
           <!--Work Project-->
           <div class="row py-5">
            <br>
            <br>
            <h2 class="text-white mb-4">Work Project</h2>
            <div class="card mb-3 py-3" v-for="(proj, index) in work_projects" :key="index">
              <div class="row" >
                <div class="col-md-5">
                   <img :src="proj.main_img" class="d-block w-100 portfolio_img" :alt="proj.title"  @click="showImages(proj.imgs)">
                </div>
                <div class="col-md-7">
                  <h3>{{ proj.title }}</h3>
                  <p>{{ proj.description }}</p>
                  <h6>End Users - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'" v-for="(user , index) in proj.end_user" :key="index">
                      {{ user }}
                    </span>
                  
                  </h6>

                   <div>
                    <h6>Technology Used - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'" v-for="(tech , index) in proj.technologies" :key="index">
                       <b-link :href="`https://www.google.com/search?q=${tech}`" target="_blank" class="text-decoration-none text-white">
                                      {{ tech }}
                       </b-link>
                                    </span>
                    </h6>
                  </div>

                   <div v-if="proj.db">
                    <h6>Database - <span :class="!status ?'badge success p-2 mx-1 mt-1 text-capitalize' : 'badge dark p-2 mx-1 mt-1 text-capitalize'">
                       <b-link :href="`https://www.google.com/search?q=${proj.db}`" target="_blank" class="text-decoration-none text-white">
                                      {{ proj.db }}
                       </b-link>
                                    </span>
                    </h6>
                  </div>

                       <div>
                <b-button class="mx-2 mt-3" :variant="!status ? 'success' : 'danger'" size="md">
                 <i class="fas fa-code">  </i>
                  View Code</b-button
                >
                <b-button class="mt-3" :variant="!status ? 'success' : 'danger'" size="md">
                  <i class="fas fa-desktop">  </i>
                  Demo</b-button
                >
              </div>

                 
                </div>
              </div>
            </div>
           </div>

                 <FsLightbox
                  :toggler="toggler"
                  :sources="images"
                  
                  />
          </div>
        </div>
      </div>

     <a class="btn-fab animate__animated animate__bounceIn" :class="!status ? 'text-success' : 'text-danger'" data-scroll-to='#top' href="javascript:void(0)" id="scroll_to_top" @click="scrollToTop" >
        <i class="fas fa-chevron-up" style="padding: 20px; font-size: 1.5rem; text-align: center; text-decoration: none;"></i>
    </a>
      <BaseFooter/>
   
  </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
import BaseFooter from '@/components/BaseFooter'
export default {
  name: "Home",
  components: {FsLightbox, BaseFooter},
  data() {
    return {
      status: false,
      toggler: false,
      images:[],
      about_me:[
        'My name is Ace Lui D. Manalo. I\'m a Web Developer. I really love to code and make awesome projects out of it.',
        'I\'ve always been fascinated with Web Development, particularly back-end programming, since I was in college.',
        'At the present, I\'m continuing to sharpen my skills in programming by studying every night and working my side projects as a freelancer . It\'s something I do every night before I go to bed.',
        'I\'m a Self-Taught Programmer & I am aiming to become a Fullstack Web Developer.'
      ],
      work_experiences:[
        {
          company:'Global Business Solution',
          position:'Web Application Developer',
          tasks:[
                  'Specialized in Fullstack',
                  'Develop a Web Application based on client\'s requirements.',
                  'Contributed code templates that benefit both Web Designers and Editors.',
                  'Optimize Website Performance.'
                ],
          date:'February 2020 - May 2020 ',
          technologies:[
            'Html5', 'Css3', 'Bootstrap', 'Javascript', 'Laravel', 'MySQL'
          ],

        },
         {
          company:'Eonbotz Robotics Inc.',
          position:'Web Application Developer',
          tasks:[
                  'Specialized in Fullstack',
                  'Develop a Basic Education School Management System',
                  'Create a Weekly Report for the Web Applicaton\'s status',
                  'Optimize Website Performance.',
                  'Configure Server\'s Maintenance'
                ],
          date:'March 2021 - July 2021 ',
          technologies:[
            'Html5', 'Css3', 'Bootstrap', 'Javascript', 'JQuery', 'Ajax', 'Laravel', 'MySQL'
          ],

        }
      ],
      skills: [
        {
          type:'Front-end (Framework & Libraries)',
          technologies: [
            'HTML5','CSS3','Bootstrap','MaterializeCss','Vuetify','Javascript',
            'JQuery','AJAX','Chart.js','DataTables','Dropzone','Filepond','FancyBox','Vue.js'
          ]
        },
        {
          type:'Back-end',
          technologies: [
            'Firebase','PHP','Laravel','Rest Api'
          ]
        },
        {
          type:'Tools',
          technologies: [
            'XAMPP','WAMP','VS Code','Sublime text 3','Chrome Dev Tools', 'Vue Devtools','Postman'
          ]
        },
        {
          type:'Version Control',
          technologies: [
            'Git','Github'
          ]
        },
        {
          type:'Databases',
          technologies: [
            'SQLite','MySQL', 'PostgreSQL','Firebase'
          ]
        },
      ],
      personal_projects:[
        {
           main_img: '/img/act/landingpage.webp',
           imgs: ['/img/act/fulllandingpage.webp','/img/act/track.webp'],
           title:'Ace-Covid-Tracker 📍',
           description:'A Single Page Application that can track a Covid-19 Cases by country . With a bonus feature of getting top 25 trending news around the Philippines.',
           end_user: ['admin', 'guest'],
           technologies:['Html5', 'Css3', 'Axios', 'Vue-Chart', 'Vuetify', 'Vue.js'],
           db: '',
           repo:'',
           link:'https://ace-covid-tracker.netlify.app',
        },
          {
           main_img: '/img/am/landingpage.webp',
           imgs: ['/img/am/fulllandingpage.webp','/img/am/latestmovie.webp','/img/am/people.webp'],
           title:'Ace-Movie 🎬',
           description:'A Single Page Application that provides information about the Latest upto the Top Rated Movies across the film industry .',
           end_user: ['admin', 'guest'],
           backends: [],
           technologies:['Html5', 'Css3', 'Axios', 'Vuetify', 'Vue.js'],
           db: '',
           repo:'',
           link:'https://ace-movie.netlify.app',
        }
      ],
      work_projects: [
        {
          main_img: '/img/sms/dashboard.webp',
          imgs: ['/img/sms/dashboard.webp', '/img/sms/grading.webp', '/img/sms/payment.webp' ],
          title:'School Management System 🖥️',
          description:'Student Management System - An Automated Basic Education Enrolment System with Online Payment Request and Academic Grading Module .',
          end_user: ['admin', 'registrar','cashier','teacher','parent','student'],
          technologies: ['Html5', 'Css3','Bootstrap', 'Javascript', 'JQuery', 'Ajax', 'Laravel'],
          db:'MySQL'

        }
      ]
    }
  },
  


  mounted() {
    window.addEventListener("scroll", this.onScroll);
    VANTA.NET({
      el: "#section_one",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 750.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3fff6c,
      backgroundColor: 0x111111,
      points: 9.0,
      maxDistance: 17.0,
      spacing: 19.0,
    });

    VANTA.BIRDS({
      el: "#section_four",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xd1616,
      color1: 0xff00,
      quantity:2.00,
      backgroundAlpha: 0.00
    })
  },

  
 beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    scrollToTop() {
         document.querySelector('#scroll_to_top').addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('data-scroll-to')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
    },
    showImages(imgs){
      this.images = []
      this.toggler = !this.toggler
      this.images = imgs
    },
    toggle() {
      this.status = false;
      VANTA.NET({
        el: "#section_one",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe6033a,
        backgroundColor: 0x0,
        points: 9.00
      })

      VANTA.BIRDS({
      el: "#section_four",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xd1616,
      color1: 0x0,
      color2: 0xff001e,
      quantity:2.00,
      backgroundAlpha: 0.00
    })
    },
    untoggle() {
      this.status = true;

      VANTA.NET({
      el: "#section_one",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 750.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3fff6c,
      backgroundColor: 0x111111,
      points: 9.0,
      maxDistance: 17.0,
      spacing: 19.0,
    });

      VANTA.BIRDS({
      el: "#section_four",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xd1616,
      color1: 0xff00,
      quantity:2.00,
      backgroundAlpha: 0.00
    })

    },
    onScroll(e) {

    if(document.documentElement.scrollTop <= 800) {
      document.querySelector('#scroll_to_top').style.display = "none";
      } else {
      document.querySelector('#scroll_to_top').style.display = "block";
    }
  }

},


    


};
</script>
<style>
/* .typewriter-msg {
  color: #fff !important;
  background: rgb(99, 187, 41) !important;
  font-weight: bold;
  padding: 0 1rem;
} */
.color_default {
  color: rgb(89, 185, 97) !important;
}
.portfolio_img {
  width: 100% !important;
  height: 100% !important;
}
#section_four {
  background: rgb(17, 17, 17) !important;
}

.form-check-input:checked {
  border-color: rgb(0, 0, 0) !important;
}
.form-check-input:hover {
  cursor: pointer;
}
.dark {
  background: rgb(255, 121, 121) !important;
}
.dark:hover {
  cursor: pointer;
  background: rgb(255, 71, 87) !important;
}
.success {
  background: rgb(26, 188, 156) !important;
}
.success:hover {
  cursor: pointer;
  background: rgb(22, 160, 133) !important;
}

.btn-fab {
    width: 64px;
    height: 64px;
    text-align: center;
    position: fixed;
    bottom: 64px;
    right: 64px;
    border-radius: 50%;
    color: white;
    background-color: #28272b;
    cursor: pointer;
    display:none;
}

</style>
