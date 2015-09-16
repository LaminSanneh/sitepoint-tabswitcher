import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    clicked: function(tabItem){
      this.sendAction("setSelectedTabItemAction", tabItem);
    }
  }
});
