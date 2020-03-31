import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [{
      name :"Buy shopping", priority:"low"},
      {name:"Clean bathroom", priority:"low"},
      {name:"Groom the cat",priority:"low"}],
      newItem: "",
      radio: ""
    
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,priority:this.radio
        });
        this.newItem = "";
        this.radio="";
      }
      
    }
  });
});
