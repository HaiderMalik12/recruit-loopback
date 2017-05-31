const async = require('async');
module.exports = function (app) {

const mysql = app.dataSources.mysqlIDs ;

  mysql.autoupdate(['Company','Job','Candidate','Account','AccountGroup','Applications']
    ,err => {
    if(err) throw err;
    console.log('Models Synced!');
  });
  // async.parallel({
  //    job: async.apply(createJob),
  //    candidate: async.apply(createCandidate),
  //    company : async.apply(createCompany),
  //    account : async.apply(createAccount),
  //    accountGroup:  async.apply(createAccountGroup)
  // }, function (err, results) {
  //   if (err) throw err;
  //    createApplication(results.job, results.candidate, function (err) {
  //     console.log('> models created sucessfully');
  //   });
  // });
  //
  //
  // function createCompany(cb) {
  //   mysql.automigrate('Company', err => {
  //     if (err) throw err;
  //
  //     app.models.Company.create({
  //       name: 'SRO',
  //       address: 'UK LONDON'
  //     }, cb);
  //
  //   })
  // }
  // function createAccount(cb) {
  //   mysql.automigrate('Account', err => {
  //     if (err) throw err;
  //
  //     app.models.Account.create({
  //       first_name: 'Haider',
  //       last_name : 'Malik',
  //       email:'haidermalik50444@gmail.com',
  //       password: 'password12',
  //       account_group_id: 1
  //     }, cb);
  //
  //   })
  // }
  //
  // function createAccountGroup(cb) {
  //   mysql.automigrate('AccountGroup', err => {
  //     if (err) throw err;
  //
  //     app.models.AccountGroup.create({
  //       name : 'NEW ACCOUNT GROUP'
  //     }, cb);
  //
  //   })
  // }
  // function createCandidate(cb) {
  //   mysql.automigrate('Candidate', err => {
  //     if (err) throw err;
  //
  //     app.models.Candidate.create({
  //       first_name: 'Hiader',
  //       last_name: 'Malik',
  //       username: 'HaiderMalik12',
  //       email: 'haider@gmail.com',
  //       password: 'password12',
  //       company_id: 1
  //     }, cb)
  //
  //   })
  // }
  //
  // function createJob(cb) {
  //
  //   mysql.automigrate('Job', err => {
  //     if (err) throw err;
  //
  //     app.models.Job.create({
  //       title: 'Node.js Developer',
  //       job_type: 'IT',
  //       keywords: ['New', 'Permanent', 'Logo'],
  //       position: 'Fulltime',
  //       company_id : 1
  //     }, cb)
  //
  //   })
  // }
  //
  // function createApplication(job, cand, cb) {
  //
  //   mysql.automigrate('Applications', err => {
  //     if (err) throw err;
  //
  //     app.models.Applications.create({
  //       source: 'Monster',
  //       contacted: 1,
  //       hired: false,
  //       job_id: job.id,
  //       candidate_id: cand.id
  //     }, cb)
  //
  //   })
  // }
};
