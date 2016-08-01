$(document).ready(function() {
    var array = [];
    var monthlySalary = 0;
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
        event.preventDefault();

        // initialize a new variable as an empty object
        var values = {};

        // convert the form inputs into an array
        var fields = $('#employeeinfo').serializeArray();
        // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
        fields.forEach(function(element, index, array) {
            // review index notation vs. dot notation on objects
            // here, dot notation wouldn't work
            values[element.name] = element.value;

        });

        // clear out inputs
        $('#employeeinfo').find('input[type=text]').val('');


        // append to DOM
        appendDom(values);
        console.log(values);
    });
    $("#nix").on("click", function() {
      $('#container').children().last().remove();
    });

    function appendDom(empInfo) {
        empInfo.employeesalary = parseInt(empInfo.employeesalary);
        monthlySalary = empInfo.employeesalary / 12;
        totalSalary = totalSalary + monthlySalary;

        $('#container').append('<div class="person"></div>');
        var $el = $('#container').children().last();
        $el.append('<p>' + "Name: " + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' | ' + "Number: " + empInfo.employeenumber + ' | ' + "Title: " + empInfo.employeetitle + ' | ' + "Salary: " + empInfo.employeesalary + ' | Company Salary Cost per Month = ' + totalSalary + '</p>');

    }

});
