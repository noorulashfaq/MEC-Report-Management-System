import { useEffect, useState } from "react"
import "../sty.css";
import { onProposalsLoad, onPropose,Venue,Major,SubReport,Academic} from "../connect"
import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import Select from 'react-select';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Ivadd=()=>{

    const[info,setInfo]=useState("")

    const callPropose=async(iv)=>{
        info = await axios.post(`http://localhost:1234/iv/proposeIV`,iv)
        window.location.assign("/iv")

    }

    // ==========================

    const [iv,setIv]=useState({
        "date_of_visit_from":""  ,
    "date_of_visit_to":"" ,
    "details_of_the_industry_1":"" ,
    "details_of_the_industry_2":"", 
    "details_of_the_industry_3":"", 
    "name_of_the_contact_person_1":"", 
    "designation_of_the_contact_person_1":"" ,
    "phone_no_of_the_contact_person_1":0, 
    "email_of_the_contact_person_1":"", 
    "name_of_the_contact_person_2":"",
    "designation_of_the_contact_person_2":"" , 
    "phone_no_of_the_contact_person_2":0,
    "email_of_the_contact_person_2":"", 
    "name_of_the_contact_person_3":"",
    "designation_of_the_contact_person_3":"", 
    "phone_no_of_the_contact_person_3":0, 
    "email_of_the_contact_person_3":"" ,
    "name_of_the_inn":"", 
    "address_of_the_inn":"" , 
    "phone_no_of_the_inn":0,
    "students_count":0,
    "faculty_count":0, 
    "event_coordinator":"" ,
    "name_of_the_travel_1":"" , 
    "address_of_the_travel_1":"", 
    "bus_no_of_the_travel_1":0 ,
    "operator_of_the_travel_1":"", 
    "operator_contact_of_the_travel_1":0, 
    "name_of_the_travel_2":"",
    "address_of_the_travel_2":"", 
    "bus_no_of_the_travel_2":0 ,
    "operator_of_the_travel_2":"",
    "operator_contact_of_the_travel_2" :0, 
    "name_of_the_travel_3":"" , 
    "address_of_the_travel_3" :"", 
    "bus_no_of_the_travel_3":0, 
    "operator_of_the_travel_3":"", 
    "operator_contact_of_the_travel_3":0, 
    "faculty_accompanied" :"",
    "undertaking_from_parents": "" ,
    "acdyr_id":null,
    "sem_id":null
     })
     console.log(iv)
     const navigate = useNavigate()
     const handlechange=(e)=>{
        setIv((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
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
        <label>Details of the Industry to be Visited with Address 1</label>
        <input type='text' name="details_of_the_industry_1" onChange={handlechange} placeholder='Industry Details 1'/>
     </div>

     
<div className="form-group">
        <label>Details of the Industry to be Visited with Address 2</label>
        <input type='text' name="details_of_the_industry_2" onChange={handlechange} placeholder='Industry Details 2'/>
     </div>


     <div className="form-group">
        <label>Details of the Industry to be Visited with Address 3</label>
        <input  type='text' name="details_of_the_industry_3" onChange={handlechange} placeholder='Industry Details 3'/>
     </div>

     <div className='form-group'>
        <label>Date of the Industrial Visit Planned from</label>
        <input type='date' name='date_of_visit_from' onChange={handlechange} placeholder='Industrial Visit Date From'/>
        </div>

        <div className='form-group'>
        <label>Date of the Industrial Visit Planned to</label>
        <input type='date' name='date_of_visit_to' onChange={handlechange} placeholder='Industrial Visit Date To'/>
        </div>

        <div class="report-header">
    <h1 class="recent-Articles">Contact Person of the Industry</h1>
    </div> 
 
    <div className='form-group'>
        <label>Name of the Contact Person 1</label>
        <input type='text' name='name_of_the_contact_person_1' onChange={handlechange} placeholder='Name'/>
        </div>

        <div className='form-group'>
        <label>Designation of the Contact Person1</label>
        <input type='text' name='designation_of_the_contact_person_1' onChange={handlechange}placeholder='Designation'/>
        </div>
   
        <div className='form-group'>
        <label>Mobile No of the Contact Person 1</label>
        <input type='number' name='phone_no_of_the_contact_person_1' onChange={handlechange} placeholder='Mobile No'/>
        </div>

        <div className='form-group'>
        <label>Mail Id of the Contact person 1</label>
        <input type='email' name='email_of_the_contact_person_1'onChange={handlechange} placeholder='Mail Id'/>
        </div>

        <div className='form-group'>
        <label>Name of the Contact Person 2</label>
        <input type='text' name='name_of_the_contact_person_2' onChange={handlechange} placeholder='Name'/>
        </div>

        <div className='form-group'>
        <label>Designation of the Contact Person 2</label>
        <input type='text' name='designation_of_the_contact_person_2' onChange={handlechange}placeholder='Designation'/>
        </div>
   
        <div className='form-group'>
        <label>Mobile No of the Contact Person 2</label>
        <input type='number' name='phone_no_of_the_contact_person_2' onChange={handlechange} placeholder='Mobile No'/>
        </div>

        <div className='form-group'>
        <label>Mail Id of the Contat person 2 </label>
        <input type='email' name='email_of_the_contact_person_2'onChange={handlechange} placeholder='Mail Id'/>
        </div>
        
        <div className='form-group'>
        <label>Name of the Contact Person 3</label>
        <input type='text' name='name_of_the_contact_person_3' onChange={handlechange} placeholder='Name'/>
        </div>

        <div className='form-group'>
        <label>Designation of the Contact Person 3</label>
        <input type='text' name='designation_of_the_contact_person_3' onChange={handlechange}placeholder='Designation'/>
        </div>
   
        <div className='form-group'>
        <label>Mobile No of the Contact Person 3</label>
        <input type='number' name='phone_no_of_the_contact_person_3' onChange={handlechange} placeholder='Mobile No'/>
        </div>

        <div className='form-group'>
        <label>Mail Id of the Contat person 3</label>
        <input type='email' name='email_of_the_contact_person_3'onChange={handlechange} placeholder='Mail Id'/>
        </div>


        <div class="report-header">
    <h1 class="recent-Articles">Details of Lodging Planned</h1>
    </div> 


        <div className='form-group'>
        <label>Name of the Inn</label>
        <input type='text'name='name_of_the_inn' onChange={handlechange} placeholder='Hotel Name'/>
        </div>

        <div className='form-group'>
        <label>Address</label>
        <input type='text' name='address_of_the_inn' onChange={handlechange} placeholder='Hotel Address'/>
        </div>

        <div className='form-group'>
        <label>Phone No</label>
        <input type='number' name='phone_no_of_the_inn' onChange={handlechange} placeholder='Hotel Phone Number'/>
        </div>
         
        <div class="report-header">
    <h1 class="recent-Articles">No of Persons Visited</h1>
    </div> 
       
    <div className='form-group'>
        <label>Students Count</label>
        <input type='number' name='students_count' placeholder='No of students visited' onChange={handlechange}/>
       </div>
        
        
        <div className='form-group'>
        <label>Faculty Count</label>
        <input type='number' name='faculty_count' onChange={handlechange} placeholder='No of Faculty Visited'/>
        </div>

        <div className='form-group'>
        <label>Event Coordinator</label>
        <input type='text' name='event_coordinator' onChange={handlechange}/>
        </div>
        
        <div class="report-header">
    <h1 class="recent-Articles">Travels Details</h1>
    </div> 


{/* ----------------------------------- */}
    

        <div className='form-group'>
        <label>Name of The Travel 1</label>
        <input type='text' name='name_of_the_travel_1' onChange={handlechange} placeholder='Travels Name'/>
        </div>

        <div className='form-group'>
        <label>Address of the Travel 1</label>
        <input type='text' name='address_of_the_travel_1' onChange={handlechange} placeholder='Travels Address'/>
        </div>

        <div className='form-group'>
        <label>Bus No of the Travel 1</label>
        <input type='text' name='bus_no_of_the_travel_1' onChange={handlechange} placeholder='Reg Number of the Vehicle'/>
        </div>

        
        <div className='form-group'>
        <label>Name of the Travel Operator 1</label>
        <input type='text' name='operator_of_the_travel_1' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Operator Contact Number 1</label>
        <input type='text' name='operator_contact_of_the_travel_1' onChange={handlechange} placeholder='Contact Number'/>
        </div>

        {/* ---------------------------------- */}
        
        <div className='form-group'>
        <label>Name of The Travel 2</label>
        <input type='text' name='name_of_the_travel_2' onChange={handlechange} placeholder='Travel Name'/>
        </div>

        <div className='form-group'>
        <label>Address of the Travel 2</label>
        <input type='text' name='address_of_the_travel_2' onChange={handlechange} placeholder='Travel Name'/>
        </div>

        <div className='form-group'>
        <label>Bus No of the Travel 2</label>
        <input type='text' name='bus_no_of_the_travel_2' onChange={handlechange} placeholder='Reg Number of the Vehicle'/>
        </div>

        
        <div className='form-group'>
        <label>Name of the Travel Operator 2</label>
        <input type='text' name='operator_of_the_travel_2' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Operator Contact Number 2</label>
        <input type='text' name='operator_contact_of_the_travel_2' onChange={handlechange} placeholder='Contact Number'/>
        </div>

        {/* --------------------------------- */}

        <div className='form-group'>
        <label>Name of The Travel 3</label>
        <input type='text' name='name_of_the_travel_3' onChange={handlechange} placeholder='Travel Name'/>
        </div>

        <div className='form-group'>
        <label>Address of the Travel 3</label>
        <input type='text' name='address_of_the_travel_3' onChange={handlechange} placeholder='Travel Name'/>
        </div>

        <div className='form-group'>
        <label>Bus No of the Travel 3</label>
        <input type='text' name='bus_no_of_the_travel_3' onChange={handlechange} placeholder='Reg Number of the Vehicle'/>
        </div>

        
        <div className='form-group'>
        <label>Name of the Travel Operator 3</label>
        <input type='text' name='operator_of_the_travel_3' onChange={handlechange} placeholder='Travel Operator Name'/>
        </div>

        <div className='form-group'>
        <label>Operator Contact Number 3</label>
        <input type='text' name='operator_contact_of_the_travel_3' onChange={handlechange} placeholder='Contact Number'/>
        </div>

        {/* ------------------------------------------------ */}

        <div className='form-group'>
        <label>Faculty accompanied</label>
        <select type='text' name='faculty_accompanied' onChange={handlechange}>
        <option value="">Select faculty...</option>
                    <option value="1"> Sridhar</option>
                   <option value="2"> Pragadheesh</option> 
        </select>
        </div>
        
        <div className="form-group">
                <label>Undertaking from Parents Collected for all Students</label>
                <select name="undertaking_from_parents" onChange={handlechange}>
                <option value="">Select yes or no...</option>
                   <option value="YES"> YES</option>
                   <option value="NO"> NO</option> 
                </select>
             </div>

             <div className="form-group">
             <label htmlFor="acdyr_id">Academic Year:</label>
      <select name="acdyr_id" className="form-group" onChange={handlechange}>
                        <option value="">Select Academic Year</option>
                        <option value="1"> 2023</option>
                   <option value="2"> 2024</option>                            
                        </select></div>

                            <div className="form-group">
      <label htmlFor="sem">Semester :</label>
      <select name="sem_id" onChange={handlechange}>
        <option value="0">Odd Sem</option>
        <option value="1">Even Sem</option>
      </select><br />      
    </div>
    

        
        
         
         

             

   
     

      
    </div>
    

    <h1 style={{color:'red'}}>{info}</h1>
         
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