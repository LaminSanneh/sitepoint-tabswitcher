import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ["isSelected"],
  isSelected: Ember.computed.alias('item.isSelected'),
  actions:{
    clicked: function(tabItem){
      this.sendAction("setSelectedTabItemAction", tabItem);
    }
  }
});
