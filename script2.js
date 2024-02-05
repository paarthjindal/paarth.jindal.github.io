var count = 0;
function toggleMode()
{
    count++;
    if(count % 2 == 0)
    {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "style-dark.css"; 
        document.head.appendChild(linkElement);
    }
    else
    {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "style-light.css";
        document.head.appendChild(linkElement);
    }
}