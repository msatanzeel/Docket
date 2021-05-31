var add=document.querySelector("#add");

var tit;
var desc;

// update();

function update()
{
        console.log("updating the list...");
    
        tit=document.getElementById("title").value;
    
        desc=document.querySelector("#description").value;

        console.log(tit,desc);

        var arr=[];
        
        
        // console.log(document.getElementById("title").innerHTML);

        if(  (localStorage.getItem("Json_items")===`` || localStorage.getItem("Json_items")==null) && (tit && desc) )
        {
            arr.push([tit,desc]);
            localStorage.setItem('Json_items',JSON.stringify(arr));
        }
        else if(tit && desc)
        {
            JsonStr=localStorage.getItem('Json_items');
            arr=JSON.parse(JsonStr);
            arr.push([tit,desc]);
            localStorage.setItem('Json_items',JSON.stringify(arr));  
        }

        // console.log("38");
        console.log(localStorage.getItem("Json_items"));
        // console.log("40");

        if(localStorage.getItem("Json_items")===``)
        return;

        JsonStr=localStorage.getItem('Json_items');
        
        // console.log(JsonStr);
        arr=JSON.parse(JsonStr);
        localStorage.setItem('Json_items',JSON.stringify(arr)); 
        console.log(arr); 

        

        document.getElementById("title").value='';
        document.getElementById("description").value='';

        
    
        // populate the table
    
        
        var tbody=document.getElementById("tbody");
        str="";

            for(let i=0;i<arr.length;i++)
            {
                str+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>${arr[i][0]}</td>
                <td>${arr[i][1]}</td>
                <td><button type="button" class="btn btm-sm btn-secondary" onclick=deleted(${i})>Delete</button></td>
                </tr>`;
            
            }
            console.log(str);
    
            tbody.innerHTML=str;
            // console.log("line 70");

        
        
        
        
}

update();
add.addEventListener("click",update);


//deleting the element


function deleted(ind)
{
    console.log("deleting the item");
    JsonStr=localStorage.getItem('Json_items');
    arr=JSON.parse(JsonStr);
    arr.splice(ind,1);
    localStorage.setItem("Json_items",JSON.stringify(arr));
    update();
}

var clr=document.getElementById('clear');

clr.addEventListener("click",()=>{
    console.log("deleting the item");
    JsonStr=localStorage.getItem('Json_items');
    arr=JSON.parse(JsonStr);
    arr.splice(0,arr.length);
    localStorage.setItem("Json_items",JSON.stringify(arr));
    update();
});







