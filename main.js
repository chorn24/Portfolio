function ToggleDark() {
    var element1 = document.body;
    element1.classList.toggle("DarkModeBody");

    var element2 = document.getElementById("HeadBod");
    if(element2.classList.contains("Header_"))
    {
        element2.classList.remove("Header_")
        element2.classList.add("DarkModeHeader")
    }
    else
    {
        element2.classList.remove("DarkModeHeader")
        element2.classList.add("Header_")
    }
    // element2.classList.toggle("DarkModeHeader");
    
    var element3 = document.getElementById("DarkModeTable");
    element3.classList.toggle("DarkBackground");

    var element3 = document.getElementById("DarkModeTable1");
    element3.classList.toggle("DarkBackground");

    var element3 = document.getElementById("DarkModeTable2");
    element3.classList.toggle("DarkBackground");

    var element3 = document.getElementById("DarkModeTable3");
    element3.classList.toggle("DarkBackground");

    var element4 = document.getElementById("DarkMode");
    element4.classList.toggle("ButtonDark")

    var element4 = document.getElementById("Me");
    element4.classList.toggle("DarkMe")

    var element5 = document.getElementById("Res");
    element5.classList.toggle("ResinButtonDark")

    var element6 = document.getElementById("In");
    element6.classList.toggle("ResinButtonDark")
    
}