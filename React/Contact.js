import React  from 'react';
 
const Contact=(props)=>{ 
    return(<div>
        <table className="table">
            <thead className="thead-dark">
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Company</th>
                <th>Group_Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                 
                {
                 props.personnames.map(i=>{
                     return(<tr key={i._id}>
                         <td>{i.Name}</td>
                         <td>{i.Number}</td>
                         <td>{i.Email}</td>
                         <td>{i.Company}</td>
                         <td>{i.Group_Name}</td>
                         <td>
                         <button className="btn btn-danger btn-sm" style={{float:"right"}}
                         onClick={()=>props.deltecontact(i._id)}>Delete</button>
                         <button className="btn btn-primary btn-sm" style={{float:"right",marginRight:"10px"}} 
                         onClick={()=>props.updatecontact(i._id,i.Name,i.Number,i.Email,i.Company,i.Group_Name)}>Edit</button>
                         </td>
                     </tr>
                     )
                 })
             } 
                 
            </tbody>
        </table>
         </div>
    )
}
export default Contact;