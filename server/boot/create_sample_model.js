
module.exports = function(app) {
  app.dataSources.db.automigrate('Patient', function(err) {
    if (err) throw err;
 
    app.models.Patient.create([
      {name: 'Pepik', pin: '898981/9897', phone: '54548888', address: 'Vancouver'},
      {name: 'Fera', pin: '8787878/9897', phone: '1111111', address: 'Kosice'},
    ], function(err, Patients) {
      if (err) throw err;
 
      console.log('Models created: \n', Patients);
    });
  });
  app.dataSources.db.automigrate('Owner', function(err) {
    if (err) throw err;
 
    app.models.Owner.create([
      {name: 'Milena', pin: '154545/9897', phone: '87878', address: 'Zlin'},
      {name: 'Venceslav', pin: '8787878/9897', phone: '1111111', address: 'Brno'},
    ], function(err, Owners) {
      if (err) throw err;
 
      console.log('Models created: \n', Owners);
    });
  });
  app.dataSources.db.automigrate('Examination', function(err) {
    if (err) throw err;
 
    app.models.Examination.create([
      {date: '2016-03-11', description: 'Boli ho proste neco', recipe: 'Ibalgin', patientId: '898981/9897'},
    ], function(err, Examinations) {
      if (err) throw err;
 
      console.log('Models created: \n', Examinations);
    });
  });
  app.dataSources.db.automigrate('Commission', function(err) {
    if (err) throw err;
 
    app.models.Commission.create([
      {code: '54654', name: 'Rovnatka', note: 'Vyrob nebo vyndej z pusy', laboratory: 'Zlin', date: '2016-05-12', patientId: '898981/9897', ownerId:'154545/9897'},
    ], function(err, Commissions) {
      if (err) throw err;
 
      console.log('Models created: \n', Commissions);
    });
  });
  app.dataSources.db.automigrate('Visit', function(err) {
    if (err) throw err;
 
    app.models.Visit.create([
      {date: '2016-03-12', time: '12:00',patientId: '898981/9897', ownerId:'154545/9897'},
    ], function(err, Visits) {
      if (err) throw err;
 
      console.log('Models created: \n', Visits);
    });
  });
};