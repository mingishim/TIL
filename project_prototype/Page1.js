$(document).ready(function() {
    $('#btnValidate').click(function() {
    var sEmail = $('#txtEmail').val();
    if ($.trim(sEmail).length == 0) {
    alert('Please enter valid email address');
    e.preventDefault();
    }
    if (validateEmail(sEmail)) {
    alert('올바른 이메일입니다');
    }
    else {
    alert('잘못된 이메일입니다');
    e.preventDefault();
    }
    });
    });