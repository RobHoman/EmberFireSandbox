window.TetrisTable = Ember.Application.create();

//TetrisTable.ApplicationAdapter = DS.FixtureAdapter.extend();
//TetrisTable.ApplicationAdapter = DS.LSAdapter.extend({
//    namespace: 'todos-emberjs'
//});

TetrisTable.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://luminous-torch-5640.firebaseio.com/')
});
