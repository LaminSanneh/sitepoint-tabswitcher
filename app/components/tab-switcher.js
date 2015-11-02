import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    setSelectedTabItem: function(tabItem){
      if(this.get('selectedTabItem')){
        // Set previously set tab item isSelected property to false
        this.get('selectedTabItem').set('isSelected', false);
      }

      // Set currently set tab item isSelected property to true
      this.set('selectedTabItem', tabItem);
      this.get('selectedTabItem').set('isSelected', true);
    }
  }
});
