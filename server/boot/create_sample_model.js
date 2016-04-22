
module.exports = function(app) {
  app.dataSources.db.automigrate('APIUser', function(err) {
    if (err) throw err;
 
    app.models.APIUser.create([
      {name: 'Pepik', pin: '898981/9897', phone: '54548888', address: 'Vancouver', role:'admin'},
      {name: 'Fera', pin: '8787878/9897', phone: '1111111', address: 'Kosice', role: 'doctor'},
      {name: 'Jera', pin: '8787878/9898', phone: '1111112', address: 'Kosice', role: 'doctor'},
      {name: 'Dera', pin: '8787878/9899', phone: '1111113', address: 'Kosice', role: 'doctor'},
      {name: 'Mira', pin: '8788/9897', phone: '11111541', address: 'Brno', role: 'patient'},
      {name: 'Kira', pin: '8788/9898', phone: '11111542', address: 'Brno', role: 'patient'},
      {name: 'Tira', pin: '8788/9899', phone: '11111543', address: 'Brno', role: 'patient'}
    ], function(err, APIUsers) {
      if (err) throw err;
 
      console.log('Models created: \n', APIUsers);
    });
  });
  app.dataSources.db.automigrate('Examination', function(err) {
    if (err) throw err;
 
    app.models.Examination.create([
      {date: '2016-03-11', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '2', patient_id: '5'},
      {date: '2016-03-12', description: 'Boli ho proste neco', recipe: 'Nogrip', doctor_id: '2', patient_id: '5'},
      {date: '2016-03-13', description: 'Boli ho proste neco', recipe: 'Paralen', doctor_id: '2', patient_id: '5'},
      {date: '2016-03-14', description: 'Boli ho proste neco', recipe: 'Nicorette', doctor_id: '2', patient_id: '6'},
      {date: '2016-03-15', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '3', patient_id: '6'},
      {date: '2016-03-16', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '3', patient_id: '7'},
    ], function(err, Examinations) {
      if (err) throw err;
 
      console.log('Models created: \n', Examinations);
    });
  });
  app.dataSources.db.automigrate('Commission', function(err) {
    if (err) throw err;
 
    app.models.Commission.create([
      {code: '54654', name: 'Rovnatka', note: 'Vyrob nebo vyndej z pusy', laboratory: 'Zlin', date: '2016-05-12', APIuserId: '1'},
    ], function(err, Commissions) {
      if (err) throw err;
 
      console.log('Models created: \n', Commissions);
    });
  });
  app.dataSources.db.automigrate('Visit', function(err) {
    if (err) throw err;
 
    app.models.Visit.create([
      {date: '2016-03-12', time: '12:00', doctor_id: '1', patient_id: '5', status: 'unconfirmed'},
    ], function(err, Visits) {
      if (err) throw err;
 
      console.log('Models created: \n', Visits);
    });
  });
  app.dataSources.db.automigrate('Act', function(err) {
    if (err) throw err;
 
    app.models.Act.create([
      {note: 'Trhani zubu', examination_id: '1'},
      {note: 'Trhani zubu', examination_id: '1'},
      {note: 'Vrtani zubu', examination_id: '3'},
      {note: 'Cisteni kanalku', examination_id: '4'},
    ], function(err, Acts) {
      if (err) throw err;
 
      console.log('Models created: \n', Acts);
    });
  });
};