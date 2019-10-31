import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Contact from './Contact'
import Form from './Form'
const App=()=>{
    const[item,setitem]=useState([])
    const getcontact=()=>{
        axios.get("http://localhost:3000/contacts").then(result=>{
            console.log(result)
            setitem(result.data)
            // setitem(result.data[0].Name)
            // setitem(JSON.stringify(data))****error****
        })
    }
    
    useEffect(()=>{
    getcontact();
    },[])
const addcontact=(item1,item2,item3,item4,item5)=>{
    if((item1.length===0)||(item2.length===0)||(item3.length===0)||(item4.length===0)){
        alert("Someitem is empty...")
    }else{
        axios.post("http://localhost:3000/addcontacts",{Name:item1,Number:item2,Company:item3,Email:item4,Group_Name:item5})
        .then(success=>{
         setitem([...item,success.data])
         getcontact();
        })
    }
}

const updatecontact=(updateid,Name,Number,Email,Company,Group_Name)=>{  
       
    var updateName=prompt("enter your new name",Name);
    var updatemobile=prompt("enter your new mobile number ",Number);
    var updateemail=prompt("enter your new email",Email);
    var updatecompany=prompt("enter your new company",Company);
    var updategroupname=prompt("enter your new group name",Group_Name);
     axios.put(" http://localhost:3000/updatecontact/"+updateid,{Name:updateName,Number:updatemobile,Company:updatecompany,Email:updateemail,Group_Name:updategroupname})
     .then(success=>{
      if(success.status===200 && success.statusText==="OK"){
        setitem(item.map(i=> i._id === updateid ? {...i,Name:updateName,Number:updatemobile,Company:updatecompany,Email:updateemail,Group_Name:updategroupname} : i ))
    }
    })  
    console.log(item);
   }

   const deltecontact=(deleteitems)=>{
    axios.delete("http://localhost:3000/deletecontact/"+deleteitems).then(success=>{
      if(success.status===200 && success.statusText==="OK"){
       //  settitle([title.filter(i=>i.id===deleteitems? false: true)])
       setitem(item.filter(i=>i._id!==deleteitems))
    //    getcontact();
      }
    })  
}

    return(
        <div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-12 col-xl-12">
            <h1 style={{textAlign:"center",background:"black",color:"lightgrey"}}>My Contacts</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-12 col-xl-12">
            <Form addcontact={addcontact}/>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-12 col-xl-12">
            <Contact personnames={item} updatecontact={updatecontact} deltecontact={deltecontact}/>
            </div>
        </div>
    </div>
    )
}
 
export default App;