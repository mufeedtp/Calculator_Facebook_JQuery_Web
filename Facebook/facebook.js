$(document).ready(function(){
    $('#singup-form').validate({
        rules:{
            firstname:{
                required:true,
                minlength:4,
            },
            npasssword:{
                required: true,
                equalTo: {

                }
            },
            cpasssword:{
                required: true,
                equalTo: "#new-passsword"
            },
            mobileoremail: {
                email:true
            }

        },
        messages:{
            npasssword : {
                equalTo : "dsdsdssf"
            }
        }
    })
    // $('#new-passsword').blur(function(){

    //     if($(this).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
    //         $('#lblpass').hide();
    //     }
    //     else{
    //         $('#lblpass').show();
    //     }
    // })

})