/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController'],
function(oj, ko, $, app) {

 function HomeViewModel() {
 var self = this;
 self.goChild1 = function() {
 app.router.go('homechild_1');
 };

 self.goChild2 = function() {
 app.router.go('homechild_2');
 }; 

 //self.handleActivated = function(info) { };
 //self.handleAttached = function(info) { };
 //self.handleBindingsApplied = function(info) { };
 //self.handleDetached = function(info) { };
 }
 return new HomeViewModel();
 }
);

