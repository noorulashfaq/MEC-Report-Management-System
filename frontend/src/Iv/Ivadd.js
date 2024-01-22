
import { useEffect, useState } from "react"
import "../sty.css";
import { onProposalsLoad, onPropose,Venue,Major,SubReport,Academic} from "../connect"
import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import Select from 'react-select';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Ivadd=()=>{

    const callPropose=async()=>{
        window.location.assign("/iv")

    }

    // ==========================

    const [iv,setIv]=useState({
        "Details_of_the_industry_with_address":""  ,
        "Date_of_visit":"",
        "Name": "",
        "Designation_for_industry_person":""  ,
        "Mobile_number_of_the_contact_person":0 ,
        "Mail_id": "",
        "Name_of_the_Inn": "",
        "Address_lodging_planned": "" ,
        "Mobile_number_of_the_inn": 0,
        "No_of_Students_visited": 0 ,
        "No_of_Faculty_visited": 0,
        "Name_of_travels": "",
        "Registration_no_1":0,
        "Registration_no_2":0,
        "Registration_no_3":0,
        "Name_of_the_operator_1": "" ,
        "Name_of_the_operator_2": "" ,
        "Name_of_the_operator_3": "" ,
        "Operator_contact_no_1":  0,
        "Operator_contact_no_2":  0,
        "Operator_contact_no_3":  0,
        "Faculty_name": "" ,
         "designation" :"",
        "Faculty_Mobile_no":0 ,
        "undertaking_parents_collected_for_students":"" 
     })
     
     const navigate = useNavigate()
     const handlechange=(e)=>{
        setIv((prev)=>({...prev,[e.target.name]:e.target.value}))
     }
     console.log(iv)
     const handleClick = async (e)=>{
        e.preventDefault()
        try{
           alert(JSON.stringify(iv))
           await axios.post("http://localhost:1234/iv/insert",iv)
           // alert(JSON.stringify(t.data.records))
     
           navigate("/")
        }catch(err){
            console.log(err)
        }
     }

    return(
        <>
         <body>
        <div class="main" >

            
         


<div className="report-container" style={{justifyContent:'center'}}>
    <div class="report-header">
        <h1 class="recent-Articles" style={{backgroundColor:"transparent"}}>EVENT PROPOSAL</h1>
    </div>
    <div className="addform" style={{justifyContent:'center'}}>

    {/* <label htmlFor="event-type">Select Event Type:</label>
    <select id="event-type" onChange={handleChange} value={eventType}>
        <option value="seminar">Seminar</option>
        <option value="workshop">Workshop</option>
      </select> */}
 





<div className="form-group">
        <label>Detail of the Industry to be Visited with Address</label>
        <textarea  type='text' name="Details_of_the_industry_with_address" onChange={handlechange} placeholder='Industry Details '/>
     </div>

     <div className='form-group'>
        <label>Date of the Industrial Visit Planned</label>
        <input type='date' name='Date_of_visit' onChange={handlechange} placeholder='Industrial Visit Date'/>
        </div>

        <div class="report-header">
    <h1 class="recent-Articles">Contact Person of the Industry</h1>
    </div> 
 
    <div className='form-group'>
        <label>Name</label>
        <input type='text' name='Name' onChange={handlechange} placeholder='Name'/>
        </div>

        <div className='form-group'>
        <label>Designation</label>
        <input type='text' name='Designation_for_industry_person' onChange={handlechange}placeholder='Designation'/>
        </div>
   
        <div className='form-group'>
        <label>Mobile No</label>
        <input type='number' name='Mobile_number_of_the_contact_person' onChange={handlechange} placeholder='Mobile No'/>
        </div>

        <div className='form-group'>
        <label>Mail Id</label>
        <input type='text' name='Mail_id'onChange={handlechange} placeholder='Mail Id'/>
        </div>

        <div class="report-header">
    <h1 class="recent-Articles">Details of Lodging Planned</h1>
    </div> 


        <div className='form-group'>
        <label>Name of the Inn</label>
        <input type='text'name='Name_of_the_Inn' onChange={handlechange} placeholder='Inn Name'/>
        </div>

        <div className='form-group'>
        <label>Address</label>
        <input type='text' name='Address_lodging_planned' onChange={handlechange} placeholder='Address'/>
        </div>

        <div className='form-group'>
        <label>Phone No</label>
        <input type='number' name='Mobile_number_of_the_inn' onChange={handlechange} placeholder='Ph.No'/>
        </div>
         
        <div class="report-header">
    <h1 class="recent-Articles">No of Persons Visited</h1>
    </div> 
       
    <div className='form-group'>
        <label>Student</label>
        <input type='number' placeholder=' Total no.of Visited Students' name='No_of_students_visited' onChange={handlechange}/>
       </div>
        
        
        <div className='form-group'>
        <label>Faculty</label>
        <input type='number' name='No_of_Faculty_visited' onChange={handlechange} placeholder='No of Faculty Visited'/>
        </div>
        
        <div class="report-header">
    <h1 class="recent-Articles">Travels Details</h1>
    </div> 

        <div className='form-group'>
        <label>Name of The Travel</label>
        <input type='text' name='Name_of_travels' onChange={handlechange} placeholder='Travel Name'/>
        </div>

        <div className='form-group'>
        <label>Registration No_1</label>
        <input type='text' name='Registration_no_1' onChange={handlechange} placeholder='Reg.No of the Travel'/>
        </div>

        <div className='form-group'>
        <label>Registration No_2</label>
        <input type='text' name='Registration_no_2' onChange={handlechange} placeholder='Reg.No of the Travel'/>
        </div>

        <div className='form-group'>
        <label>Registration No_3</label>
        <input type='text' name='Registration_no_3' onChange={handlechange} placeholder='Reg.No of the Travel'/>
        </div>

        <div className='form-group'>
        <label>Name of the Travel Operator_1</label>
        <input type='text' name='Name_of_the_operator_1' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Name of the Travel Operator_2</label>
        <input type='text' name='Name_of_the_operator_2' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Name of the Travel Operator_3</label>
        <input type='text' name='Name_of_the_operator_3' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Contact Number_1</label>
        <input type='text' name='Operator_contact_no_1' onChange={handlechange} placeholder='Contact Number'/>
        </div>

        <div className='form-group'>
        <label>Contact Number_2</label>
        <input type='text' name='Operator_contact_no_2' onChange={handlechange} placeholder='Contact Number'/>
        </div>

        <div className='form-group'>
        <label>Contact Number_3</label>
        <input type='text' name='Operator_contact_no_3' onChange={handlechange} placeholder='Contact Number'/>
        </div>
         
         <div>
                <label>Faculty Member</label>
                <select>
                   <option value="" > Name of the Faculty</option>
                   <option value="" > Name of the Faculty</option>
                   
                </select>
             </div>

             <div>
                <label>Undertaking from Parents Collected for all Students</label>
                <select>
                   <option value="YES"> YES</option>
                   <option value="NO"> NO</option> 
                </select>
             </div>

   
     

      
    </div>
    

    <h1 style={{color:'red'}}>Sent</h1>
         
    <div className='row mt-5 justify-content-around'>
        <input type='button' onClick={callPropose} value="Send Proposal" className='col-3 btn btn-primary' />
                        <input type='button' onClick={()=>{
                                    window.location.assign("/ivproposal")

                        }}
        //                 onClick={()=>{
        //                     setSeminar(()=>{
        //                         return{
        
      
        // "event_name":"",
        // "event_title":"",
        // "event_organizer":"",
        // "event_sponsor":"",
        // "event_date":"",
        // "event_venue":"",
        // "guest_name":"",
        // "guest_designation":"",
        // "guest_address":"",
        // "guest_phone_number":0,
        // "guest_email":"",
        // "student_count":0,
        // "faculty_count":0,
        // "others_count":0,
        // "proposal_date":"",
        // "proposal_hod":"",
        // "proposal_principal":"",
        // "event_budget":0,
        // "event_coordinator":"",
        // "coordinator_designation":406,
        // "acdyr_id":"",
        // "dept_id":0,
        // "sem_id":0
        
        //                         }
        //                     })
        //                 }}
                        value="Clear" className='col-3 btn btn-danger' />
                    </div>   
        
         
    
      

 </div>
 
 </div>
        
 </body>
        </>
    )
}

export default Ivadd