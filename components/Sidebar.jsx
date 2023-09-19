import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SpeedIcon from '@mui/icons-material/Speed';
import EmailIcon from '@mui/icons-material/Email';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import GridViewIcon from '@mui/icons-material/GridView';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='side_bar'>
      
      <div className='flex gap-8 items-center'>
        <div className='text-xl'>weframetech</div>
        <div className='text-2xl text-[color:#6418C3]'><MenuIcon /></div>
      </div>
      
      <div>
        <div className='text-lg font-semibold'>MAIN MENU</div>    
      </div>
    
      <div className='flex flex-col gap-5'>
        <div className='icon text-[color:#464366]'><SpeedIcon className='text-xl' />Dashboard</div>
        <div className='icon text-[color:#464366] flex justify-between'>
          <div className='flex items-center gap-3'>
            <EmailIcon className='text-xl' />
            <div>Email</div>
          </div>
          <div className='flex items-center gap-3'><span className='text-[10px] font-bold py-1 px-[6px] text-white bg-[color:#5DCFFF] rounded-[50%]'>10</span><ExpandMoreIcon className='text-4xl text-[color:#6418C3]' /></div>
        </div>
        <div className='icon text-[color:#6B6BD7]'><MapsUgcIcon className='text-xl' />Chat</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <GridViewIcon className='text-xl' />
            <div>Kanban</div>
          </div>
          <div><ArrowForwardIosIcon /></div>
        </div>
        <div className='text-[color:#6B6BD7] icon flex justify-between'>
          <div className='flex items-center gap-3'>
            <ContactPageIcon className='text-xl' />
            <div>Contact</div>
          </div>
          <div className='bg-[color:#E328AF] text-white px-2 rounded-lg'>New</div>
        </div>
        <div className='icon text-[color:#6B6BD7]'>< CalendarMonthIcon /> Calender</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <OndemandVideoIcon className='text-xl text-[color:#464366]' />
            <div>Courses</div>
          </div>
          <div><ArrowForwardIosIcon /></div>
        </div>
        <div className='icon text-[color:#6418C3]'><StoreIcon className='text-xl text-[color:#464366]' />Shop</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <DescriptionIcon className='text-xl' />
            <div>Invoices</div>
          </div>
          <div><ArrowForwardIosIcon /></div>
        </div>
        <div className='icon text-[color:#6418C3]'><SettingsIcon className='text-xl' />Settings</div>
      </div>

      
      <div className='page-redirect'>
        <ViewCompactIcon className='text-2xl font-thin rotate-90' />
        <div className='z-10'>
          <div>Increase Your</div>
          <div>work with kanaban</div>
        </div>
        <ArrowRightAltIcon className='text-2xl' />
        <div className='w-[60px] h-[60px] bg-[color:#37B6F2] relative left-[120px] bottom-[53px] quater-circ rounded-br-2xl'>
        </div>
      </div>

    </div>
  )
}

export default Sidebar