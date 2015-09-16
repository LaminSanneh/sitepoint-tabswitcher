import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    setSelectedTabItem: function(tabItem){ 
      this.set('selectedTabItem', tabItem);
    }
  }
});
