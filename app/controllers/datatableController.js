var app
(function() {
    
    var CustomersController = function ($scope) {
      var vm = $scope;

      // Generate random name data for testing
      var firstNames = ['Alan', 'Alice', 'Amber', 'Amanda', 'Barney', 'Bobby', 'Bethany', 'Casey', 'Clayton', 'Cody', 'Dillon', 'Dianne', 'Edward', 'Ethan', 'Eleanor', 'Frank', 'Francene', 'Gary', 'George', 'Georgia', 'Helen', 'Harry', 'Isaac', 'Julia', 'Justin', 'Keith', 'Kathleen', 'Larry', 'Martin', 'Mary', 'Mark', 'Megan', 'Nathan', 'Oliver', 'Philip', 'Ray', 'Rebecca', 'Steve', 'Sara', 'Tina', 'Terry', 'Vince', 'Walter', 'Zeke'];
      var lastNames = ['Adams', 'Brown', 'Blevins', 'Clayton', 'Dixon', 'Edwards', 'Fitzgerald', 'Gray', 'Greene', 'Harris', 'Ibanez', 'Jensen', 'Jefferson', 'Johnson', 'Kennedy', 'Lewis', 'Lincoln', 'Martin', 'McGuire', 'Motz', 'Meyer', 'Newton', 'Penn', 'Richards', 'Russell', 'Smith', 'Stevens', 'Sweet', 'Turner', 'Thompson', 'Vick', 'Waters', 'White', 'Woods'];
     
    
      // Array of row objects to display in the table
      vm.filteredNames = [];
    
      for (var i = 1; i <= 1150; i++) {
        var d = new Date('1/1/1970');
        d.setDate(d.getDate() + Math.floor(Math.random() * 15000));
        vm.filteredNames.push({
          isSelected: false,
          id: i,
          firstName: firstNames.randomElement(),
          lastName: lastNames.randomElement(),
          birthday: d
        
        });
      }

      // Create a selection Set for rows that can be processed by both this app and ngRows
      vm.selected = new Set();
    
      // Update the array upon checking/unchecking the table
      vm.toggleSelected = function (row) {    
        vm.filteredNames.forEach(function (x) {
          if(x.id == row.id){
            if(x.isSelected == false){
              x.isSelected = true;
            }else{
              x.isSelected = false;
            }
          }
        })
      };
    
      vm.selectAll = function(){
        vm.filteredNames.forEach(function (row) {
         row.isSelected = true;
        })
      }

      vm.deselectAll = function(){
        vm.filteredNames.forEach(function (row) {
          row.isSelected = false;
         })
      }
        
       
    };
    
    CustomersController.$inject = ['$scope'];

    app = angular.module('datatableApp')
      .controller('DatatableController', CustomersController);
    
}());

// Return a random element from an array
Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};