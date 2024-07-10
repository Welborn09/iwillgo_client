/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { fetchOpportunity } from '../../../../Apis/Opportunities.api';
import opportunityModel from '../../../../models/opportunity.model';
import { MemberDetailsContainer, MemberDetailsHeader, MemberDetailsTitle, MemberDetailsRow, MemberDetailsLeftPanel,
         MemberDetailsTitleDiv, MemberDetailsLeftImage, MemberDetailsRightPanel, MemberDetailsH3, MemberDetailsField,
         MemberDetailsCountDiv, MemberDetailCountSection, MemberDetailCountButtons, MemberDetailCountSpan, MemberDetailsCountText
 } from '../../styles/MemberDetails.styles';
 import backgroundImage from './../../assets/images/trash_cleanup.jpg';

const EventDetails = ({eventId}) => {    
    const [eventDetails, setEventDetails] = useState(new opportunityModel);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {                
        if (!loading)
            fetchEvent();
    }, []);

    const fetchEvent = () => {
        console.log('*** incoming eventId ***', eventId);
        setLoading(true);
        fetchOpportunity(eventId)
            .then((response) => {
            setLoading(false);
            console.log('*** eventDetails response ***', response);
            setEventDetails(response);
        });
    }

    return (
        <>
          <MemberDetailsContainer>
            {loading ? (
            <MemberDetailsTitle>
                ...Data Loading.....
            </MemberDetailsTitle>
           ) : (
            <>
                <MemberDetailsHeader>
                    <MemberDetailsTitleDiv>
                        <MemberDetailsTitle>{eventDetails.eventName}</MemberDetailsTitle>
                    </MemberDetailsTitleDiv>
                    <MemberDetailsCountDiv>
                        <MemberDetailCountSection>
                            <MemberDetailCountButtons>
                                <MemberDetailsCountText>Joined</MemberDetailsCountText>
                                <MemberDetailCountSpan>{eventDetails.memberCount}</MemberDetailCountSpan></MemberDetailCountButtons>                            
                        </MemberDetailCountSection>  
                    </MemberDetailsCountDiv>
                </MemberDetailsHeader>
                
                <MemberDetailsRow>            
                    <MemberDetailsLeftPanel>
                        <MemberDetailsLeftImage  src={backgroundImage} alt="" />
                                  
                    </MemberDetailsLeftPanel>
            
                    <MemberDetailsRightPanel>
                        <MemberDetailsH3>Description</MemberDetailsH3>
                        <MemberDetailsField>{eventDetails.description}</MemberDetailsField>
                        <MemberDetailsH3>Project Details</MemberDetailsH3>
                        <ul>
                        <li>Location: {eventDetails.address}, {eventDetails.city}, {eventDetails.state} {eventDetails.zip}</li>
                        <li>Dolor Sit Amet</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                        </ul>
                    </MemberDetailsRightPanel>
            
                </MemberDetailsRow>
            </>            
           )}; 
          </MemberDetailsContainer>
           
        </>
    );
  }
  
  export default EventDetails;