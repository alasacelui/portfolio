<template>
    <footer class="py-5 text-white" id="footer">
        <div class="container">
     
      <div class="social-links mb-2">
        <a :href="link.link" target="blank" v-for="(link, index) in social_links" :key="index"><i :class="link.icon"></i>
      
        </a>
      </div>
      <div class="copyright">
        © 2021 | <strong><span>Ace Manalo <i class="fas fa-code"></i> </span></strong> 
      </div>
      <div class="credits">
      </div>
    </div>

  </footer>
</template>

<script>
export default {
    name:'Footer',
    data() {
        return {
            social_links:[
                {
                    link:'mailto: imdevaes@gmail.com',
                    icon:'fab fa-google-plus fa-2x me-2'
                },
                 {
                    link:'https://m.me/im.dev.aes',
                    icon:'fab fa-facebook-messenger fa-2x me-2'
                },
                 {
                    link:'viber://chat?number=911234567890',
                    icon:'fab fa-viber fa-2x me-2'
                },
                 {
                    link:'',
                    icon:'fab fa-discord fa-2x me-2'
                },
                 {
                    link:'',
                    icon:'fab fa-whatsapp fa-2x me-2'
                }
            ]
        }
    }
}
</script>

<style scoped>
#footer {
    background: #14151c;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 30px 0;
}
.social-links > a {
    color: rgb(209, 211, 207) !important;
}
</style>