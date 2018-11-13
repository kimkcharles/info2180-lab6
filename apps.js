window.onload = function(){
   
    var search = document.getElementById("search_btn");
    var getAllButton = document.querySelector('#all_btn');
    var httpRequest;
    var xmlRequest;
    var response;
    var result = document.querySelector('#results');
    var lookup=document.getElementById("search_form").elements.namedItem("lookup_word");
    
    search.addEventListener("click", function(e) {
        e.preventDefault();
        
        httpRequest = new XMLHttpRequest();
        var searchWord=lookup.value.toLocaleLowerCase().trim();
        var url = `request1.php?q=${searchWord}`;
        httpRequest.onreadystatechange = getDefn;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    
    function getDefn(){
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                 
                
                response = httpRequest.responseText;
                
                //var res=response.replace(/(<([^>]+)>)/ig,"");
                //var res=striptags(response);
                result.innerHTML=response;
                
              } else {
                alert('There was a problem with the request.');
              }
         }
    }
    
    
    // function striptags(str){
    //     str = str.replace("<p>","");
    //     str = str.replace("</p>","\n");
    //     str = str.replace("<h3>","");
    //     str = str.replace("</h3>","\n");
    //     return str;
    // }

   
   
 
    getAllButton.addEventListener("click", function(element){
        element.preventDefault();
        var url = "request.php?q=&all=true";
        xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = displayAllDefinitions;
        xmlRequest.open('GET',url,true);
        xmlRequest.send();
        
    });
    
    function displayAllDefinitions(){
        if(xmlRequest.readyState === XMLHttpRequest.DONE){
            if(xmlRequest.status === 200){
                $(result).empty();
                let defns = xmlRequest.responseXML.getElementsByTagName('definition');
                var list = document.createElement('ol');
                for(let i=0;i<defns.length;i++){
                    
                    var def = document.createElement('LI');
                    var h =  document.createElement('H3');
                    var name = defns[i].getAttribute("name").toLocaleUpperCase();
                    h.innerHTML = name;
                    var p1 =  document.createElement('P');
                    var t1 = defns[i].textContent;
                    p1.innerHTML = t1;
                    var p2 =  document.createElement('P');
                    var t2 = `-${defns[i].getAttribute("author")}`;
                    p2.innerHTML = t2;
                    
                    def.append(h);
                    def.append(p1);
                    def.append(p2);
                    list.appendChild(def);
                    
                    result.appendChild(list);
                };
            }
        }
    }
    
};