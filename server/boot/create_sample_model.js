
module.exports = function(app) {
  app.dataSources.db.automigrate('APIUser', function(err) {
    if (err) throw err;
 
    app.models.APIUser.create([
      {name: 'Pepik', password: 'Pepik', pin: '898981/9897', phone: '545488188', address: 'Vancouver', role:'admin'},
      {name: 'Fera', password: 'Fera', pin: '878738/9897', phone: '111111121', address: 'Kosice', role: 'doctor'},
      {name: 'Jera', password: 'Jera', pin: '788789/9898', phone: '111111231', address: 'Kosice', role: 'doctor'},
      {name: 'Dera', password: 'Dera', pin: '878788/9899', phone: '111111573', address: 'Kosice', role: 'doctor'},
      {name: 'Mira', password: 'Mira', pin: '878821/9897', phone: '111115481', address: 'Brno', role: 'patient'},
      {name: 'Kira', password: 'Kira', pin: '878348/9898', phone: '118111542', address: 'Brno', role: 'patient'},
      {name: 'Tira', password: 'Tira', pin: '128788/9899', phone: '111115443', address: 'Brno', role: 'patient'}
    ], function(err, APIUsers) {
      if (err) throw err;
 
      console.log('Models created: \n', APIUsers);
    });
  });
  app.dataSources.db.automigrate('Examination', function(err) {
    if (err) throw err;
 
    app.models.Examination.create([
      {date: '20.01.2015', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '2', patient_id: '5'},
      {date: '20.08.2015', description: 'Boli ho proste neco', recipe: 'Nogrip', doctor_id: '2', patient_id: '5'},
      {date: '05.12.2015', description: 'Boli ho proste neco', recipe: 'Paralen', doctor_id: '2', patient_id: '5'},
      {date: '10.02.2016', description: 'Boli ho proste neco', recipe: 'Nicorette', doctor_id: '2', patient_id: '6'},
      {date: '15.04.2016', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '3', patient_id: '6'},
      {date: '13.05.2016', description: 'Boli ho proste neco', recipe: 'Ibalgin', doctor_id: '3', patient_id: '7'},
    ], function(err, Examinations) {
      if (err) throw err;
 
      console.log('Models created: \n', Examinations);
    });
  });
  app.dataSources.db.automigrate('Commission', function(err) {
    if (err) throw err;
 
    app.models.Commission.create([
      {code: '54654', name: 'Rovnatka', note: 'Vyrob nebo vyndej z pusy', laboratory: 'Zlin', date: '20.01.2015', doctor_id: '2',patient_id: '5'},
    ], function(err, Commissions) {
      if (err) throw err;
 
      console.log('Models created: \n', Commissions);
    });
  });
  app.dataSources.db.automigrate('Visit', function(err) {
    if (err) throw err;
 
    app.models.Visit.create([
      {date: '20.03.2015', time: '12:00', doctor_id: '1', patient_id: '5', status: 'unconfirmed'},
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