let inscription = document.getElementById("insc");
const connection = document.getElementById("conn");
const formconnection = document.querySelector(".connection");
const forminscription = document.querySelector(".connection2");
const insform = document.querySelector('.connection2 form');
const connform = document.querySelector('.connection form');


inscription.addEventListener("click", ()=>{
    inscription.style.display="none";
    connection.style.display="inline";
    formconnection.style.display="none";
    forminscription.style.display="block";
});

connection.addEventListener("click", ()=>{
    inscription.style.display="inline";
    connection.style.display="none";
    formconnection.style.display="block";
    forminscription.style.display="none";
});

// hand the inscription form
insform.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const insname=insform.insname.value;
    const inslastname=insform.inslastname.value;
    const insemail=insform.insemail.value;
    const inspass=insform.inspass.value;
    const inscription=insform.inscription.value;
    try {
        const res = await fetch('/',{
            method:'POST',
            body: JSON.stringify({insname,inslastname,insemail,inspass,inscription}),
            headers: {'Content-Type' : 'application/json'}
            
        });
        const data = await res.json();
        if(data.error) alert('email deja existant');
        if(data.email) location.assign('/message');
    } catch (error) {
        console.log(error);
    }
    


})


connform.addEventListener('submit',async (e)=>{
    e.preventDefault();

    const connemail = connform.connemail.value;
    const connpasseword = connform.connpasseword.value;
    const connection = connform.connection.value;
    try {
        const res = await fetch('/',{
            method:'POST',
            body: JSON.stringify({connemail,connpasseword,connection}),
            headers: {'Content-Type' : 'application/json'}
            
        });
        const data = await res.json();
        if(data.logged=='succes') {location.assign('/message');}
        else alert(data.logged);
    } catch (error) { console.log(error);
        
    }
    
});