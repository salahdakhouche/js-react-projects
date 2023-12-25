const submit = document.querySelector(".messages");
const butsubmit = document.querySelector(".submitmessage");
const input = document.querySelector('.inputmessage');
const myDiv = document.querySelector(".messageslist");
myDiv.scrollTop = myDiv.scrollHeight;


// function to show messages on the chat div

const showmessages = (data2)=>{
    for(let i = 0;i<data2.results.length;i++)
    {
        const singlemessage= document.createElement('DIV');
        const br= document.createElement('BR');
        singlemessage.className='siglemessage';
        const txtemail = document.createTextNode(data2.results[i].email);
        const txtmessage = document.createTextNode(data2.results[i].message);
        singlemessage.appendChild(txtemail);
        singlemessage.appendChild(br);
        singlemessage.appendChild(txtmessage);
        myDiv.appendChild(singlemessage);
        myDiv.scrollTop = myDiv.scrollHeight;
    }

}

submit.addEventListener('submit',async (e)=>{
    e.preventDefault();
    if(input.value=="") return;
    try {
        const message = submit.message.value;
        const res = await fetch('/addmessage',{
            method:'POST',
            body : JSON.stringify({message}),
            headers: {'Content-Type' : 'application/json'}
        });
        const data =await res.json();
        
        if(data.succes)
        {
            const res2 = await fetch('/dbmessage',{
                method:'GET'
                
            });
            let data2 =await res2.json();
            myDiv.innerHTML="";
            input.value="";
            showmessages(data2);

        }
        
    } catch (error) { console.log(error)
        
    }
    
    

});