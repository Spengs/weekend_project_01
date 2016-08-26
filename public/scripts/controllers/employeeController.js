myApp.controller("employeeController", ["$scope", function($scope) {
  // console.log("controller works");
  $scope.employees = [];
  $scope.employee = {};
  $scope.totalSalary = 0;
  $scope.monthlySalary = 0;
  // console.log($scope.employee);

  $scope.saveEmployee = function(){
    console.log($scope.employee);
    $scope.employee.salary = parseInt($scope.employee.salary);
    // $scope.monthlySalary = Math.round($scope.employee.salary / 12);
    $scope.salaryCost();
    $scope.employees.push($scope.employee);
    console.log($scope.employees);
    $scope.employee={};
    console.log($scope.monthlySalary);
  }


  // $scope.employee.salary = parseInt($scope.employee.salary);
  //         monthlySalary = Math.round(empInfo.employeesalary / 12);
  //         totalSalary = totalSalary + monthlySalary;

    $scope.salaryCost = function() {
      $scope.monthlySalary = Math.round($scope.employee.salary / 12);
      $scope.totalSalary = $scope.totalSalary += $scope.monthlySalary;
    }

    $scope.remove=function($index){
      // var myEl = angular.element( document.querySelector( 'li' ) );
      //             myEl.remove();
      $scope.employees.splice($index,1);
      $scope.totalSalary = $scope.totalSalary -= $scope.monthlySalary;
            }
      if($scope.employees.length == 0){
        $scope.totalSalary = 0;

      }



}]);







// $(document).ready(function() {
//     var array = [];
//     var monthlySalary = 0;
//     var totalSalary = 0;
//     $('#employeeinfo').on('submit', function(event) {
//         event.preventDefault();
//
//         // initialize a new variable as an empty object
//         var values = {};
//
//         // convert the form inputs into an array
//         var fields = $('#employeeinfo').serializeArray();
//         // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
//         fields.forEach(function(element, index, array) {
//             // review index notation vs. dot notation on objects
//             // here, dot notation wouldn't work
//             values[element.name] = element.value;
//
//         });
//         array.push(values);
//         console.log(array);
//         // clear out inputs
//         $('#employeeinfo').find('input[type=text]').val('');
//
//
//         // append to DOM
//         appendDom(values);
//         console.log(values);
//     });
//     $("#nix").on("click", function() {
//       // event.preventDefault();
//       // var empID = prompt("Enter Employee ID");
//       // for(var i = 0; i <= array.length; i++){
//       //   if(empID == array[i]){
//       //     $("#container").remove("#person");
//       //   }
//       // }
//
//
//
//
//       $('#container').children().last().remove();
//
//
//     });
//
//     function appendDom(empInfo) {
//         empInfo.employeesalary = parseInt(empInfo.employeesalary);
//         monthlySalary = Math.round(empInfo.employeesalary / 12);
//         totalSalary = totalSalary + monthlySalary;
//
//         $('#container').append('<div class="person"></div>');
//         var $el = $('#container').children().last();
//         $el.append('<p>' + "Name: " + empInfo.employeefirstname + ' '
//         + empInfo.employeelastname + ' | ' + "Number: " + empInfo.employeenumber
//         + ' | ' + "Title: " + empInfo.employeetitle + ' | ' + "Salary: " + empInfo.employeesalary
//         + ' | Company Salary Cost per Month = ' + totalSalary + '</p>');
//
//     }
//
// });
