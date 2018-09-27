$('#submit').on('click', function (event) {
    event.preventDefault();
    //var value = $(event).val();
    var newFriend = []
    var name = $('#name').val().trim();
    var photo = $('#photo').val().trim();
    var questionOne = $('#questionOne').val();
    var questionTwo = $('#questionTwo').val();
    var questionThree = $('#questionThree').val();
    var questionfour = $('#questionFour').val();
    var questionFive = $('#questionFive').val();
    var questionSix = $('#questionSix').val();
    var questionSeven = $('#questionSeven').val();
    var questionEight = $('#questionEight').val();
    var questionNine = $('#questionNine').val();
    var questionTen = $('#questionTen').val();
    console.log("Name: ", name, "Photo: ", photo, "Q1: ", questionOne, "Q2: ",questionTwo, questionThree, questionfour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen)
    
    console.log(newFriend);

    // var baseURL = window.location.origin;

    // $.post(baseURL + '/api/friends', newFriend, function (data) {
    //     $('#name').val("")
    //     $('#photo').val("")
    //     $('#questionOne').val("")
    //     $('#questionTwo').val("")
    //     $('#questionThree').val("")
    //     $('#questionFour').val("")
    //     $('#questionFive').val("")
    //     $('#questionSix').val("")
    //     $('#questionSeven').val("")
    //     $('#questionEight').val("")
    //     $('#questionNine').val("")
    //     $('#questionTen').val("")
    // });
    //return false;
});

// function showFriend() {
//     var baseURL = window.location.origin;

//     $.get('/api/friends')
// }