import React from 'react'
import LoggedInLayout from '../../components/layout/LoggedInLayout'
import SideBar from '../../components/sidebar/SideBar'

const Resume = () => {
  return (
    <LoggedInLayout>
    <div className="sidebar-backdrop"></div>
    <SideBar />
    <section className="user-dashboard">
        <div className="dashboard-outer">
            <div className="upper-title-box">
                <h3>My Resume</h3>
                <div className="text">Ready to jump back in?</div>
            </div>
            <div className="row">
                
            </div>
        </div>
    </section>
    </LoggedInLayout>
  )
}

export default Resume