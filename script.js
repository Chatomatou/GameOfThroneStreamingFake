function search_translation()
{
    console.log("Search...");
    let div_element = document.getElementById("search");
    let input_element = document.getElementById("search_input");
    let stop_search = document.getElementById("icon_return");

    div_element.style.textAlign = "center";
    stop_search.style.visibility = "visible";
    input_element.style.visibility = "visible";
}

function stop_search_translation()
{    
    console.log("End of search...");

    let element = document.getElementById("search");
    let input_element = document.getElementById("search_input");
    let stop_search = document.getElementById("icon_return");

    element.style.textAlign = "left";
    stop_search.style.visibility = "hidden";
    input_element.style.visibility = "hidden";  
}
 