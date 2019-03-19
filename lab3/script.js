Vue.component('star-rating', VueStarRating.default);


var app = new Vue({
  el: '#app',
  data: {
    number: '',
    min: 1,
    max: '',
    addedName: '',
    addedComment: '',
    comments: {},
    current: {},
    loading: true,
  },
  created: function() {
    this.xkcd();
  },
    computed: {
    month: function() {
      var month = new Array;
      if (this.current.month === undefined)
        return '';
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    }
  },
  watch: {
    number: function(value,oldvalue) {
      if (oldvalue === '') {
          this.max = value;
      } else {
          this.xkcd();
      }
    },
  },
  methods: {
    xkcd: function() {
      this.loading = true;
      fetch('https://xkcd.now.sh/' + this.number).then(response => {
        return response.json();
      }).then(json => {
        this.current = json;
        this.loading = false;
        this.number = json.num;
        return true;
      }).catch(err => {
        this.number = this.max;
      });
    },
    setRating: function(rating) {

    },
    previousComic: function() {
      this.number = this.current.num - 1;
    },
    nextComic: function() {
      this.number = this.current.num + 1;
    },
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive 
    },
    randomComic: function() {
      this.number = this.getRandom(1, this.max);
    },
    firstComic: function() {
      this.number = this.min;
    },
    lastComic: function() {
      this.number = this.max;
    },
    addComment: function() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({author:this.addedName + ' ' + new Date().toLocaleString(),text:this.addedComment});
      this.addedName = '';
      this.addedComment = '';
    },
    averageStar: function() {

    },
  }
});



