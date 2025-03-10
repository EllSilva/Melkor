import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {


    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
          let isActive = item.classList.contains('active');

          document.querySelectorAll('.faq-item').forEach(faq => {
              faq.classList.remove('active');
          });

          if (!isActive) {
              item.classList.add('active');
          }
      });
  });
  
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    

 


 
  
  },
  template: await get_template('./assets/js/view/home/home')
}