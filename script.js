// only for authorization
function validate_form()
{
    var log_field;
    var pass_field;
    
    log_field = document.getElementById("my_login")
    pass_field = document.getElementById("my_password")
    warning_block = document.getElementsByClassName("warning_message")

    
    
    if (log_field.value == "")
    {
        log_field.className += " wrong_input"
        warning_block[0].style["display"] = "block"
    }
    else
    {
        log_field.className = "custom_input success_input"
        warning_block[0].style["display"] = "none"
    }
    
    if (pass_field.value == "")
    {
       pass_field.className += " wrong_input"
       warning_block[1].style["display"] = "block"
    }
    else
    {
        pass_field.className = "custom_input success_input"
        warning_block[1].style["display"] = "none"
    }
    
    if (pass_field.value != "" && log_field.value != "")
    {
        window.location.href = "main.html"
    }
}

// universal validator
function common_validation()
{
    
    var all_input
    
    all_input = document.getElementsByClassName("custom_input")
    for (var i=0; i<all_input.length; i++)
    {
        if (all_input[i].value == "")
        {
            all_input[i].className = "custon_input wrong_input"
      
        }
        else
        {
            all_input[i].className = "custom_input"
        }
    }
}
