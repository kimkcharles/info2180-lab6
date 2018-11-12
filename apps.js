window.onload = function() {
    var search = document.getElementById("search_btn");
    var httpRequest;
    var response;
    
    search.addEventListener("click", function(e) {
        e.preventDefault();
        
        httpRequest = new XMLHttpRequest();
        var searchWord=document.getElementById("search_form").elements.namedItem("lookup_word").value;
        var url = `request.php?q=${searchWord}`;
        httpRequest.onreadystatechange = getDefn;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    function getDefn(){
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                response = httpRequest.responseText;
                var result = document.querySelector('#result');
                //var res=response.replace(/(<([^>]+)>)/ig,"");
                //var res=striptags(response);
                result.innerHTML=response;
                
              } else {
                alert('There was a problem with the request.');
              }
         }
    }
    function striptags(str){
        str = str.replace("<p>","");
        str = str.replace("</p>","\n");
        str = str.replace("<h3>","");
        str = str.replace("</h3>","\n");
        return str;
    }
}


