import React, {useState} from 'react'
import Navigation from "../../layouts/Navbar";
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/dashboard/Sidebar'


const ServiceProvider = () => {
   const[formOpen, setFormOpen]= useState(false)
   const [formContent, setFormContent]= useState({Address:'', City:'', State:'', Number:''})
   const [link, setLink]= useState('')
   const [uploadContent, setUploadContent]= useState('')

   const handleSubmit=(e)=>{
      e.preventDefault()
      if (formContent.Address && formContent.City && formContent.Number && formContent.State)
      {
         setFormOpen(false)
      }
   }

   const handleChange=(e)=>{
      const name = e.target.name
      const value = e.target.value
      setFormContent({...formContent, [name]:value})
   }

   const openCloseForm=()=>{
      setFormOpen(!formOpen)
   }

   const copyLink=()=>{ 
      navigator.clipboard.writeText(link)
      console.log(`copied! ${link}`);
   }

   const changeUpload=(e)=>{
      setUploadContent(e.target.files[0].name)
   }

   const chooseFile=(e)=>{
      e.preventDefault()
      const btn = document.querySelector('#defaultBtn')
      btn.click()
   }

   const defaultAddress= " No 10, landstone road, old shabolu  Estate, Ogun state.";
   const defaultNum= ' 08134578734';

   const newAddress= formContent.City; 
   const newState= formContent.State;

  return (
    <section className='service-provider'>
      <Navigation/>
      <h2 className='service-provider-h2'>Service Provider</h2>
      <div className="long-line"></div>
      <div className='flex-all'>
      <div>
         <Sidebar/>
         </div>

         <div>
            <div>
               <div className="top-p service-provider-center">
                  <div className="service-provider-img"></div>
                  <p> <Link to="/">  <span className="service-provider-link" >Change Profile Picture  </span></Link></p>
                  <p className='name'>Olusesan Peter</p>
                  <p>Plumber</p>
                  <div className="short-line"></div>
                  <p>Rating: 4.3</p>
                  <div className="short-line"></div>
                  <p>Lagos, Nigeria</p>
                  <div className="short-line"></div>
                  <p>CAC: RT3940209</p>
                  <div className="short-line"></div>
                  <p>Jobs completed - 115 </p>
               </div>
            
               <div className="service-provider-inline">
                  <p className='service-provider-first-p '>Your Subscription will expire on 28/04/2021, after which your services will no longer be visible on Renager.</p>
                  <p className='service-provider-second-p '>Choose from any of our existing subscription plans to renew before being disconnected. <Link to= '/'><span className="service-provider-link">Renew</span></Link></p>
               </div>
                     </div>
            
                     {/*/ Form */}
                     {formOpen && <form className='service-provider-form service-provider-inline' onSubmit={handleSubmit}>
                <div className="single-form">
                   <label className="name" htmlFor="Address">Address</label>
                   <br />
                   <input className='service-provider-input'
                     type="email"
                     name="Address"
                     placeholder='OlusesPeter@gmail.com'
                     value={formContent.Address}
                     onChange ={handleChange}
                   /></div>
                <div className="single-form">
                   <label className="name" htmlFor="City">City</label>
                   <br />
                   <input className='service-provider-input'
                     type="text"
                     name="City"
                     value={formContent.City}
                     onChange ={handleChange}
                   /></div>
                <div className="single-form">
                   <label className="name"htmlFor="firstName">State</label>
                   <br />
                   <input className='service-provider-input'
                     type="text"
                     name="State"
                     value={formContent.State}
                     onChange ={handleChange}
                   /></div>
                <div className="single-form">
                   <label className="name" htmlFor="firstName">Phone Number</label>
                   <br />
                   <input className='service-provider-input'
                     type="number"
                     name="Number"
                     value={formContent.Number}
                     onChange ={handleChange}
                   /></div>
                   <button className='service-provider-input service-provider-btn' type='submit'>Update Profile</button>
                     </form>}
            
                     <div className="long-line"></div>
                     {!formOpen &&
                     <div className='service-provider-top-down'>
               <p className='address service-provider-inline'>
                  <span className='name '>Address - </span>{newAddress || defaultAddress} <span onClick={openCloseForm} className='service-provider-link'>Update</span></p>
               <p className='number service-provider-inline'>
                  <span className='name'>Phone Number - </span>{formContent.Number || defaultNum} <span onClick={openCloseForm} className='service-provider-link'>Update</span></p>
                     </div>}
               <div className="long-line"></div>
                     <div className='service-provider-top-down  '>
                     <p className='url-p service-provider-inline'>Share your URL for others to rate your services</p>
                     <div className="url-combo ">
               <input
               className='url-input'
               type="url"
               name='link'
               value={link}
               onChange={(e)=>{setLink(e.target.value)}}
               placeholder='https://www.renager.com/service-provider/olusesan-peter/' />
                <img
               className='url-copy-icon '
               src='../Service-Provider-Img-Icons/copy.png'
               alt="copy"
               onClick={copyLink} />
                     </div>
                     </div>
                     <div className="long-line"></div>
            
                     <div className='service-provider-top-down '>
               <div >
                  <p className='upload-p url-p service-provider-inline'>Upload Pictures of your work (minimum of 6 images are required)</p>
                  <div className="upload-combo service-provider-inline"><input
                  className='upload-input'
                  type="text"
                  placeholder='No File Selected'
                  value={uploadContent}
                  onChange={(e)=>setUploadContent(e.target.value)}
                  />
                     <input  id='defaultBtn' hidden type="file" placeholder='none' onChange={changeUpload}
                   />
                     <button id='customBtn' className='upload-btn' onClick={chooseFile}>Choose File</button>
            
               </div><p className='service-provider-inline'>Supports: JPG, JPEG2000, PNG, PDF</p></div>
                     </div>
               <div className="long-line"></div>
                     <div>
               <section className='service-provider-flex service-provider-inline'>
                  <h2 >My Portfolio</h2>
                  <span className='service-provider-link'>Edit</span>
               </section>
               <div className="service-provider-container">
                  <div className="service-provider-container-box"></div>
                  <div className="service-provider-container-box"></div>
                  <div className="service-provider-container-box"></div>
                  <div className="service-provider-container-box"></div>
                  <div className="service-provider-container-box"></div>
                  <div className="service-provider-container-box"></div>
               </div>
                     </div>
         </div>
         </div>
    </section>
  )
}

export default ServiceProvider