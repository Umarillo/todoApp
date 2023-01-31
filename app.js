const App = {
  data() {
    return {
      inputValue: "",
      notes: [],
      addClicker: "Click",
      PlaceHolder: "Write to here",
      SearchHolder: "Search",
      currentTodoId: null,
      idCreater: null,
    };
  },
  methods: {
    addButton() {
      if (this.inputValue) {
        this.notes.push({
          id: this.idCreater++,
          title: this.inputValue,
        });
        this.inputValue = "";
      }
    },
    deleteClick(item) {
      this.notes.splice(item, 1);
    },

    changeClick(item) {
      this.inputValue = item.title;
      this.currentTodoId = item.id;
    },
    updateClicker() {
      const index = this.notes.findIndex((el) => el.id === this.currentTodoId);
      this.notes[index].title = this.inputValue;
      this.currentTodoId = this.inputValue = null
    },
  },
  mounted() {
    this.idCreater = this.notes.length + 1;
  },
};
Vue.createApp(App).mount("#app");
