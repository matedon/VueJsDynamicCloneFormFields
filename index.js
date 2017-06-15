window.app = new Vue({
  el: '#app',
  data: {
    apartment: {
      price: '',
      rooms: ''
    },
    apartments: [],
  },
  mounted: function () {
    /*
     * The "data-apartments" could come from serverside (already saved apartments)
     */
    this.apartments = JSON.parse(this.$el.dataset.apartments)
  },
  methods: {
    addNewApartment: function () {
      this.apartments.push(Vue.util.extend({}, this.apartment))
    },
    removeApartment: function (index) {
      Vue.delete(this.apartments, index);
    },
    sumbitForm: function () {
      /*
       * You can remove or replace the "submitForm" method.
       * Remove: if you handle form sumission on server side.
       * Replace: for example you need an AJAX submission.
       */
      console.info('<< Form Submitted >>')
      console.info('Vue.js apartments object:', this.apartments)
      window.testSumbit()
    }
  }
})

/*
 * This is not Vue.js code, just a bit of jQuery to test what data would be submitted.
 */
window.testSumbit = function () {
  if (!window.jQuery) {
    console.warn('jQuery not present!')
    return false
  }
  console.info('Submitted (serverside) array:', jQuery('form').serializeJSON())
}