import React from 'react'
import LoggedInLayout from '../../components/layout/LoggedInLayout'
import SideBar from '../../components/sidebar/SideBar'
import { useSelector } from 'react-redux'
import { authSelector } from '../../features/auth/authSlice'
import StatsCards from '../../components/cards/StatsCards'

const Dashboard = () => {
  const { user } = useSelector(authSelector)
  return (
    <LoggedInLayout>
       <div className="sidebar-backdrop"></div>
       <SideBar />
       <section className='user-dashboard'>
          <div className="dashboard-outer">
            <div className="upper-title-box">
              <h3>Howdy, { user.username}!!</h3>
              <div class="text">Ready to jump back in?</div>
            </div>
            <div className='row'>
              {[1,2,3,4].map((_, idx) => (
                <StatsCards key={idx} title={'Applied Jobs'} icon='flaticon-briefcase' count={22} />
              ))}
            </div>
            <div className='row'>
              
            </div>
          </div>
       </section>
    </LoggedInLayout>
  )
}

export default Dashboard