import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var tabItems = [
      {
        title: 'Tab 1',
        content: 'Some content for the tab 1'
      }, 
      {
        title: 'Tab 2',
        content: 'Some content for the tab 2'
      },
      {
        title: 'Tab 3',
        content: 'Some content for the tab 3'
      }
    ];
    return tabItems;
  }
});
