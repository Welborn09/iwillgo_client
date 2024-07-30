/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React, { useEffect, useState } from 'react';
import { fetchOpportunity } from '../../../../Apis/Opportunities.api';
import opportunityModel from '../../../../models/opportunity.model';
import { MemberDetailsContainer, MemberDetailsHeader, MemberDetailsTitle, MemberDetailsRow, MemberDetailsLeftPanel,
         MemberDetailsTitleDiv, MemberDetailsLeftImage, MemberDetailsRightPanel, MemberDetailsH3, MemberDetailsField,
         MemberDetailsCountDiv, MemberDetailCountSection, MemberDetailCountButtons, MemberDetailCountSpan, MemberDetailsCountText
 } from '../../styles/MemberDetails.styles';
 import backgroundImage from './../../assets/images/trash_cleanup.jpg';

const EventDetails = ({eventId}) => {    
    const [eventDetails, setEventDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {           
        fetchEvent();
    }, [eventId]);

    const fetchEvent = () => {
        console.log('*** incoming eventId ***', eventId);
        setLoading(true);
        fetchOpportunity(eventId)
            .then((response) => {
            console.log('*** eventDetails response ***', response);
            setEventDetails(response);
            setLoading(false);
        });
    }

    if (loading) {
        return <MemberDetailsTitle>...Data Loading.....</MemberDetailsTitle>;
    }

    if (!eventDetails) {
        return <MemberDetailsTitle>No event details available</MemberDetailsTitle>;
    }

    return (
        <>
          <MemberDetailsContainer>
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
                        <MemberDetailsField>Location: {eventDetails.address}, {eventDetails.city}, {eventDetails.state} {eventDetails.zip}</MemberDetailsField>
                        <MemberDetailsField>Team Leader: {eventDetails.hostId.firstName} {eventDetails.hostId.lastName}</MemberDetailsField>

                        {/* <ul>
                        <li>Location: {eventDetails.address}, {eventDetails.city}, {eventDetails.state} {eventDetails.zip}</li>
                        <li>Team Leader: {eventDetails.hostId.firstName} {eventDetails.hostId.lastName}</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                        </ul> */}
                    </MemberDetailsRightPanel>
            
                </MemberDetailsRow>
          </MemberDetailsContainer>           
        </>
    );
  }
  
  export default EventDetails;