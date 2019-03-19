var app = new Vue({
  created: function() {
    this.getItems();
  },
  el: '#app',
  data: {
    items: [],
    text: '',
    show: 'all',
    type: '',
    drag: {},
  },
  computed: {
    unbudgetedItems: function() {
      return this.items.filter(function(item) {
	return !item.budgeted;
      });
    },
    filteredItems: function() {
      if (this.show === 'unbudgeted')
	return this.items.filter(function(item) {
	  return !item.budgeted;
	});
      if (this.show === 'budgeted')
	return this.items.filter(function(item) {
	  return item.budgeted;
	});
      return this.items;
    },
  },
  methods: {
    getItems: function() {
      axios.get("/api/items").then(response => {
        this.items = response.data;
        return true;
      }).catch(err => {
      });
    },
    addItem: function() {
      axios.post("/api/items", {
        text: this.text,
        type: this.type,
        budgeted: false
      }).then(response => {
        this.text = "";
        this.type = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
    },
    budgetItem: function(item) {
      axios.put("/api/items/" + item.id, {
        text: item.text,
        type: item.type,
        budgeted: !item.budgeted,
        orderChange: false,
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
    deleteItem: function(item) {
      axios.delete("/api/items/" + item.id).then(response => {
        this.getItems();
        return true;
      }).catch(err => {
      });
    },
    showAll: function() {
      this.show = 'all';
    },
    showUnBudgeted: function() {
      this.show = 'unbudgeted';
    },
    showBudgeted: function() {
      this.show = 'budgeted';
    },
    deleteBudgeted: function() {
      this.items.forEach(item => {
        if (item.budgeted)
          this.deleteItem(item)
      });
    },
    dragItem: function(item) {
      this.drag = item;
    },
    dropItem: function(item) {
      axios.put("/api/items/" + this.drag.id, {
        text: this.drag.text,
        type: this.drag.type,
        budgeted: this.drag.budgeted,
        orderChange: true,
        orderTarget: item.id
      }).then(response => {
        this.getItems();
        return true;
      }).catch(err => {
      });
    },
    sortExpenses: function() {
      function compare(a,b) {
        if (a.type < b.type)
          return -1;
        if (a.type > b.type)
          return 1;
        return 0;
      }
      this.items.sort(compare);
    },
  }
});