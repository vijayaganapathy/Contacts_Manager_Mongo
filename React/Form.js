import React  from 'react';
 
const Form=(props)=>{ 
    const[name,setname]=React.useState("");
    const[company,setcompany]=React.useState("");
    const[mobile,setmobile]=React.useState("");
    const[email,setemail]=React.useState("");
    const[groupname,setgroupname]=React.useState("");
    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handlecompany=(e)=>{
        setcompany(e.target.value)
    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handlemobile=(e)=>{
        setmobile(e.target.value)
    }
    const handlegroupname=(e)=>{
        setgroupname(e.target.value)
    }
    const submit=()=>{
        props.addcontact(name,mobile,company,email,groupname);
        setgroupname("");
        setmobile("");
        setname("");
        setemail("");
        setcompany("");

    }

    return(<div>
        Name<input type="text" placeholder="Person" value={name} style={{margin:"5px"}} onChange={handlename}/>
        Company<input type="text" placeholder="Company" value={company} style={{margin:"5px"}} onChange={handlecompany}/>
        Mobile<input type="text" placeholder="Phone" value={mobile} style={{margin:"5px"}} onChange={handlemobile}/>
        Work<input type="text" placeholder="Email" value={email} style={{margin:"5px"}} onChange={handleemail}/>
        Group_Name<select style={{margin:"5px"}} value={groupname} onChange={handlegroupname}>
            <option>Select_group</option>
            <option>Colleagues</option>
            <option>Family</option>
            <option>Friends</option>
        </select>
        <button className="btn btn-primary btn-lg "  style={{width:"200px",margin:"10px",marginLeft:"40%",}} onClick={submit}>Save</button>
         </div>
    )
}
export default Form;