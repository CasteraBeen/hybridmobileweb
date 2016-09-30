/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController'],
 function(oj, ko, $, app) {
 function HomeChild2ViewModel() {
 var self = this;
 self.goBack = function() {
 window.history.back();
 };
 self.goHome = function() {
 app.router.go('home');
 }
 self.goHomeChild1 = function() {
 app.router.go('homechild_1');
 }
 }
 return new HomeChild2ViewModel();
 }
);

