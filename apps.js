window.onload = function() {
    var search = document.getElementById("search_btn");
    var httpRequest;
    var response;
    search.addEventListener("click", function(e) {
        e.preventDefault();
        
        httpRequest = new XMLHttpRequest();

        var url = "request.php?q=definition";
        httpRequest.onreadystatechange = getDefn;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    function getDefn(){
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                response = httpRequest.responseText;
                var defns = document.querySelector('#defns');
                //var res=response.replace(/(<([^>]+)>)/ig,"");
                var res=striptags(response);
                // defns.innerHTML=response;
                // alert(response);
                alert(res);
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


