import React from 'react'
import DashboardSideBar from '../../layouts/dashboard/Sidebar';
import {Link} from 'react-router-dom'
import Navigation from "../../layouts/Navbar";

const Upload = () => {
  return (
    <>
    <Navigation/>
      <h2 className='service-provider-h2'>Upload Properties</h2>
      <div className="long-line"></div>
      <div className='flex-all'>
        <div><DashboardSideBar/></div>
        <section className='upload-container-all'>
        
            <div className='upload-lease-bcg'>
              <Link to='/lease'> <img src="./Upload-Images-Icon/LeaseOne.png" alt="lease" />
            <img className='upload-lease-icon' src="./Upload-Images-Icon/LeaseOneTop.png" alt="lease" />
            </Link>
            </div>
        
          <Link to='/sell'>
            <div className='upload-sell-bcg'>
              <img className='upload-sell-bcg-first' src="./Upload-Images-Icon/sellBcg.png" alt="sell" />
              <img className='upload-sell-bcg-second' src="./Upload-Images-Icon/sellBcgTwo.png" alt="sell" />
              <img className='upload-sell-bcg-third' src="./Upload-Images-Icon/sellOneIcon.png" alt="sell" />
              <div className="upload-sell-bcg-sixth">
                <img className='upload-sell-bcg-fourth' src="./Upload-Images-Icon/Sell a Property.png" alt="sell" />
                <img className='upload-sell-bcg-fifth' src="./Upload-Images-Icon/info-sell.png" alt="sell" />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </>
  )
}

export default Upload