
$(document).ready(function() {
    //enable tooltip
    $('[data-toggle="tooltip"]').tooltip();

    console.log("Hi");
    // Event listener for tooltip show event
    $('#myButton').on('shown.bs.tooltip', function () {
        console.log('Tooltip shown');
        // Here you can perform any actions you need when the tooltip is triggered
    });

    // Event listener for tooltip hide event
    $('#myButton').on('hidden.bs.tooltip', function () {
        console.log('Tooltip hidden');
        // Here you can perform any actions you need when the tooltip is hidden
    });
});

