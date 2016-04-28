
module.exports = function(app) {
  app.dataSources.db.automigrate('APIUser', function(err) {
    if (err) throw err;
 
    app.models.APIUser.create([
      {name: 'Pepik', password: 'Pepik', pin: '898981/9897', phone: '545488188', address: 'In the middle, Vancouver', role:'admin'},
      {name: 'Fera', password: 'Fera', pin: '878738/9897', phone: '111111121', address: 'Jany Hlavske 14, Kosice', role: 'doctor'},
      {name: 'Jera', password: 'Jera', pin: '788789/9898', phone: '111111231', address: 'Na vyhlidce 124, Plzen', role: 'doctor'},
      {name: 'Dera', password: 'Dera', pin: '878788/9899', phone: '111111573', address: 'Lazy 147, Zlin', role: 'doctor'},
      {name: 'Mira', password: 'Mira', pin: '878821/9897', phone: '111115481', address: 'Kralovo pole 10, Brno', role: 'patient'},
      {name: 'Kira', password: 'Kira', pin: '878348/9898', phone: '118111542', address: 'U duboveho haje, Praha', role: 'patient'},
      {name: 'Tira', password: 'Tira', pin: '128788/9899', phone: '111115443', address: 'Novosady, Zlin', role: 'patient'},
      {name: 'Jan', password: 'Jan', pin: '920513/4415', phone: '721547874', address: 'Podlesi 4515, Zlin', role: 'patient'},
      {name: 'Frantisek', password: 'Frantisek', pin: '568412/5214', phone: '777555111', address: 'Fricova 18, Brno', role: 'patient'},
      {name: 'Milena', password: 'Milena', pin: '845145/3215', phone: '604515414', address: 'Zaskolova 4141, Praha', role: 'patient'},
      {name: 'Bohumil', password: 'Bohumil', pin: '878821/9897', phone: '714152147', address: 'Vyskocila 15, Jihlava', role: 'patient'},
      {name: 'Jaroslava', password: 'Jaroslava', pin: '878308/9898', phone: '711541845', address: 'Na rozjezdu, Tlumacov', role: 'patient'},
      {name: 'Tomas', password: 'Tomas', pin: '681111/4424', phone: '603541587', address: 'Vodni 12, Rackova', role: 'patient'},   
    ], function(err, APIUsers) {
      if (err) throw err;
 
      console.log('Models created: \n', APIUsers);
    });
  });
  app.dataSources.db.automigrate('Examination', function(err) {
    if (err) throw err;
 
    app.models.Examination.create([
      {date: '20.01.2015', description: 'Preventivni prohlidka', recipe: '', doctor_id: '2', patient_id: '10'},
      {date: '20.08.2015', description: 'Cisteni kanalku', recipe: 'Nogrip', doctor_id: '4', patient_id: '8'},
      {date: '05.12.2015', description: 'Cisteni kanalku', recipe: 'Paralen', doctor_id: '4', patient_id: '9'},
      {date: '10.02.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '2', patient_id: '6'},
      {date: '12.04.2016', description: 'Obrusovani korunky', recipe: 'Ibalgin', doctor_id: '3', patient_id: '5'},
      {date: '13.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '3', patient_id: '7'},
      {date: '20.03.2015', description: 'Preventivni prohlidka', recipe: '', doctor_id: '4', patient_id: '12'},
      {date: '20.04.2016', description: 'Trhani zubu', recipe: 'Nogrip', doctor_id: '4', patient_id: '13'},
      {date: '20.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '4', patient_id: '11'},
      {date: '25.04.2016', description: 'Cisteni kanalku', recipe: 'Nicorette', doctor_id: '2', patient_id: '6'},
      {date: '26.04.2016', description: 'Cisteni kanalku', recipe: 'Ibalgin', doctor_id: '3', patient_id: '10'},
      {date: '26.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '3', patient_id: '7'},
      {date: '27.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '4', patient_id: '11'},
      {date: '27.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '2', patient_id: '5'},
      {date: '27.04.2016', description: 'Trhani zubu', recipe: 'Paralen', doctor_id: '4', patient_id: '5'},
      {date: '28.04.2016', description: 'Vymena plomby', recipe: 'Nicorette', doctor_id: '2', patient_id: '6'},
      {date: '28.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '3', patient_id: '6'},
      {date: '29.04.2016', description: 'Preventivni prohlidka', recipe: '', doctor_id: '3', patient_id: '7'},      
    ], function(err, Examinations) {
      if (err) throw err;
 
      console.log('Models created: \n', Examinations);
    });
  });
  app.dataSources.db.automigrate('Commission', function(err) {
    if (err) throw err;
 
    app.models.Commission.create([
      {code: '54654', name: 'Rovnatka', note: 'Vyrobit vrchni dil rovnatek', laboratory: 'Zlin', date: '20.08.2015', doctor_id: '2',patient_id: '5'},
      {code: '11545', name: 'Proteza', note: 'Vyrob nebo vyndej z pusy', laboratory: 'Zlin', date: '10.09.2015', doctor_id: '3',patient_id: '8'},
      {code: '23541', name: 'Rovnatka', note: 'Vyrobit vrchni dil rovnatek', laboratory: 'Brno', date: '27.12.2015', doctor_id: '2',patient_id: '12'},
      {code: '98415', name: 'Proteza', note: 'Vyrob nebo vyndej z pusy', laboratory: 'Zlin', date: '08.03.2016', doctor_id: '4',patient_id: '7'},
      {code: '32154', name: 'Rovnatka', note: 'Vyrobit spodni dil rovnatek', laboratory: 'Praha', date: '24.04.2016', doctor_id: '3',patient_id: '9'},
    ], function(err, Commissions) {
      if (err) throw err;
 
      console.log('Models created: \n', Commissions);
    });
  });
  app.dataSources.db.automigrate('Visit', function(err) {
    if (err) throw err;
 
    app.models.Visit.create([
      {date: '20.03.2016', time: '12:00', doctor_id: '2', patient_id: '5', status: 'confirmed'},
      {date: '20.03.2016', time: '10:00', doctor_id: '4', patient_id: '10', status: 'confirmed'},
      {date: '20.04.2016', time: '14:00', doctor_id: '3', patient_id: '12', status: 'confirmed'},
      {date: '26.04.2016', time: '11:00', doctor_id: '4', patient_id: '9', status: 'confirmed'},
      {date: '27.04.2016', time: '09:00', doctor_id: '2', patient_id: '8', status: 'confirmed'},
      {date: '27.04.2016', time: '08:00', doctor_id: '3', patient_id: '6', status: 'confirmed'},
      {date: '28.04.2016', time: '16:00', doctor_id: '4', patient_id: '7', status: 'confirmed'},
      {date: '28.04.2016', time: '07:15', doctor_id: '4', patient_id: '8', status: 'confirmed'},
      {date: '28.04.2016', time: '12:30', doctor_id: '3', patient_id: '9', status: 'confirmed'},
      {date: '29.04.2016', time: '12:45', doctor_id: '2', patient_id: '12', status: 'new'},
      {date: '29.04.2016', time: '13:00', doctor_id: '2', patient_id: '11', status: 'new'},
    ], function(err, Visits) {
      if (err) throw err;
 
      console.log('Models created: \n', Visits);
    });
  });
  app.dataSources.db.automigrate('Act', function(err) {
    if (err) throw err;
 
    app.models.Act.create([
      {note: 'Trhani zubu', examination_id: '1'},
      {note: 'Trhani zubu', examination_id: '6'},
      {note: 'Vrtani zubu', examination_id: '3'},
      {note: 'Cisteni kanalku', examination_id: '4'},
    ], function(err, Acts) {
      if (err) throw err;
 
      console.log('Models created: \n', Acts);
    });
  });
};