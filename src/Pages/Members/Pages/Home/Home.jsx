/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import MemberHeaderSection  from '../../Components/MemberHeaderSection';
import EventsGridComponent from '../../Components/EventsGrid';


const  MemberHome = ({onShowModal}) => {
    return (
        <>
            <MemberHeaderSection />
            <EventsGridComponent onShowModal={onShowModal} />
        </>
    );
  }
  
  export default MemberHome;