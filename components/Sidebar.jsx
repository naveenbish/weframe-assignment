import React from 'react'
import {RxHamburgerMenu} from "react-icons/Rx";
import {TbDashboard, TbSettingsFilled} from 'react-icons/Tb';
import {MdOutlineMarkEmailUnread, MdContactPage} from 'react-icons/Md';
import {AiFillWechat, AiFillShop, AiOutlineRight} from 'react-icons/Ai';
import {PiSquaresFourThin, PiDotsNineBold} from 'react-icons/Pi';
import {BsFillCalendarFill, BsPersonWorkspace, BsArrowRight} from 'react-icons/Bs';
import {FaFileInvoiceDollar} from 'react-icons/Fa';
import {BiChevronDown} from 'react-icons/Bi'

const Sidebar = () => {
  return (
    <div className='side_bar'>
      
      <div className='flex gap-8 items-center'>
        <div className='text-xl'>weframetech</div>
        <div className='text-2xl text-[color:#6418C3]'><RxHamburgerMenu /></div>
      </div>
      
      <div>
        <div className='text-lg font-semibold'>MAIN MENU</div>    
      </div>
    
      <div className='flex flex-col gap-5'>
        <div className='icon text-[color:#464366]'><TbDashboard className='text-xl' />Dashboard</div>
        <div className='icon text-[color:#464366] flex justify-between'>
          <div className='flex items-center gap-3'>
            <MdOutlineMarkEmailUnread className='text-xl' />
            <div>Email</div>
          </div>
          <div className='flex items-center gap-3'><span className='text-[10px] font-bold py-1 px-[6px] text-white bg-[color:#5DCFFF] rounded-[50%]'>10</span><BiChevronDown className='text-2xl text-[color:#6418C3]' /></div>
        </div>
        <div className='icon text-[color:#6B6BD7]'><AiFillWechat className='text-xl' />Chat</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <PiSquaresFourThin className='text-xl' />
            <div>Kanban</div>
          </div>
          <div><AiOutlineRight /></div>
        </div>
        <div className='text-[color:#6B6BD7] icon flex justify-between'>
          <div className='flex items-center gap-3'>
            <MdContactPage className='text-xl' />
            <div>Contact</div>
          </div>
          <div className='bg-[color:#E328AF] text-white px-2 rounded-lg'>New</div>
        </div>
        <div className='icon text-[color:#6B6BD7]'><BsFillCalendarFill className='text-xl' />Calender</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <BsPersonWorkspace className='text-xl text-[color:#464366]' />
            <div>Courses</div>
          </div>
          <div><AiOutlineRight /></div>
        </div>
        <div className='icon text-[color:#6418C3]'><AiFillShop className='text-xl text-[color:#464366]' />Shop</div>
        <div className='icon text-[color:#6418C3] flex justify-between'>
          <div className='flex items-center gap-3'>
            <FaFileInvoiceDollar className='text-xl' />
            <div>Invoices</div>
          </div>
          <div><AiOutlineRight /></div>
        </div>
        <div className='icon text-[color:#6418C3]'><TbSettingsFilled className='text-xl' />Settings</div>
      </div>

      
      <div className='page-redirect'>
        <PiDotsNineBold className='text-2xl font-thin' />
        <div>
          <div>Increase Your</div>
          <div>work with kanaban</div>
        </div>
        <BsArrowRight className='text-2xl' />
        <div className='w-[60px] h-[60px] bg-[color:#37B6F2] relative left-[120px] bottom-[48px] quater-circ rounded-br-2xl'>
        </div>
      </div>

    </div>
  )
}

export default Sidebar