
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
    this.movie();
  },
  watch: {
    number: function(value,oldvalue) {
      if (oldvalue === '') {
          this.max = value;
      } else {
          this.movie();
      }
    },
  },
  methods: {
    movie: function() {
      this.loading = true;
      fetch("https://api.themoviedb.org/3/movie/" + this.number + "?api_key=1f6a48b6fec3f6c6456c7a51c3926f44&language=en-US").then(response => {
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
    previousMovie: function() {
      this.number = this.current.num - 1;
    },
    nextMovie: function() {
      this.number = this.current.num + 1;
    },
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive 
    },
    randomMovie: function() {
      this.number = this.getRandom(1, this.max);
    },
    firstMovie: function() {
      this.number = this.min;
    },
    lastMovie: function() {
      this.number = this.max;
    },
    addComment: function() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({author:this.addedName + ' ' + new Date().toLocaleString(),text:this.addedComment});
      this.addedName = '';
      this.addedComment = '';
    },
  }
});



