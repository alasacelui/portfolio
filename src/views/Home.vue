<template>
  <div>
    <div class="main">
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
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                class="img-fluid"
                src="/img/myprofileII.png"
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
                <b-button class="mx-2 mt-5" variant="success" size="lg">
                  <b-icon icon="github" aria-label="Help"></b-icon>
                  View Projects</b-button
                >
                <b-button class="mt-5" variant="success" size="lg">
                  <b-icon icon="download" aria-label="Help"></b-icon>
                  Download Resume</b-button
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
              <h1 class="display-1">About Me</h1>
              <p v-for="(about, index) in about_me" :key="index">
                {{about}}
              </p>
            </div>
            <div class="col-md-6">
              <img class="img-fluid" src="/img/me.svg" width="450" alt="" />
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
              <h2 class="mb-4 color_default">
               <b-icon icon="briefcase-fill"></b-icon> Work Experience</h2>
              <div class="row py-4" v-for="(exp, index) in work_experiences" :key="index">
                  <h5>{{ exp.company }}</h5>
                  <h4>{{ exp.position }}</h4>
                  <ul>
                    <li v-for="(task,index) in exp.tasks" :key="index"> 
                      {{ task }}
                    </li>
                  </ul>
                  <p class="font-italic">
                    {{ exp.date }}
                  </p>
                  <div>
                    <span class="badge bg-secondary p-2 mx-1 mt-1" v-for="(tech , index) in exp.technologies" :key="index">
                      {{ tech }}
                    </span>
                    <hr>
                  </div>
                
                  
              </div>
            </div>
            <div class="col-md-6 px-lg-5">
             <h2 class="mb-4 color_default">
            <i class="fas fa-code "></i> Skills</h2>
            <div class="row py-4" v-for="(skill,index) in skills" :key="index">
              <h4>{{ skill.type }}</h4>
              <div>
                 <span class="badge bg-secondary p-2 mx-1 mt-1" v-for="(tech , index) in skill.technologies" :key="index">
                      {{ tech }}
                    </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
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
            'Html5', 'Css', 'Bootstrap', 'Javascript', 'Laravel', 'MySql'
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
            'Html5', 'Css', 'Bootstrap', 'Javascript', 'JQuery', 'Ajax', 'Laravel', 'MySql'
          ],

        }
      ],
      skills: [
        {
          type:'Front-end (Framework & Libraries)',
          technologies: [
            'HTML5','CSS3','Boostrap','MaterializeCss','Vuetify','Javascript',
            'JQuery','Chart.js','DataTables','Dropzone','Filepond','FancyBox','Vue.js'
          ]
        },
        {
          type:'Back-end',
          technologies: [
            'Firebase','AJAX','PHP','Laravel'
          ]
        },
        {
          type:'Tools',
          technologies: [
            'XAMPP','WAMP','VS Code','Sublime text 3','Chrome Dev Tools', 'Vue Devtools'
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
            'SQLite','MySQL', 'Postgres SQL','Firebase'
          ]
        },
      ]
    }
  },
  mounted() {
    VANTA.NET({
      el: "#section_one",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3fff6c,
      backgroundColor: 0x111111,
      points: 9.0,
      maxDistance: 17.0,
      spacing: 19.0,
    });
  },
};
</script>
<style>
.typewriter-msg {
  color: #fff !important;
  background: rgb(99, 187, 41) !important;
  font-weight: bold;
  padding: 0 1rem;
}
.color_default {
  color: rgb(89, 185, 97) !important;
}

</style>
