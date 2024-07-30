/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsGridContainer, EventsGrid, EventsGridMain, GridItem, GridItemCard, EventDetailsLink,
         EventItemImage, GridItemColumn2, GridItemDateUL, GridItemDateLI,
         EventDetailsLinkLI, GridItemBody, GridItemCardTitle, GridItemSubBody, GridItemSubBodyColumn1,
         GridItemSubBodyColumn1P, GridItemSubBodyColumnLink, EventDetailsLinkSpan,
         EventsGridSection} from '../styles/Member.styles';
import { fetchOpportunities } from '../../../Apis/Opportunities.api';
import Card1 from './../assets/images/trash_cleanup.jpg';
import EventDetails from '../Pages/Events/EventDetails';

const EventsGridComponent = ({onShowModal}) => {    
  const [events, setEventsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
    useEffect(() => {
        if (!loading)
            fetchEvents();
    }, []);

    const fetchEvents = () => {
        setLoading(true);
        fetchOpportunities()
            .then((response) => {
                console.log('*** events response ***', response);
                sortData(response);
                setLoading(false);
            });
    }

    const sortData = (data) => {
        let sortedData;
        sortedData = [...data].sort((a, b) => {
            return a.eventDate.localeCompare(b.eventDate);
          });
          setEventsArray(sortedData);
      }

    const ConvertDate = (date) => {
        //console.log('*** incoming date ***', date); 
        var dt = new Date(date);
        const day = dt.getDate();
        const month = dt.toLocaleString('default', { month: 'long' });
        var ret = day + ' ' + month;
        //console.log(ret);
        return ret;
    };

    const handleClick = (e, eventId) => {
        e.preventDefault();                
        console.log('*** handleClick ***', eventId);
        onShowModal(<EventDetails eventId={eventId} />);
    };  

    function createLink(eventId) {
        console.log('*** incoming eventId ***', eventId);
        return '/Member/Events/EventDetails?eventId=' + eventId;
    }

    return (
        <>
        {loading ? (
            <div>...Data Loading.....</div>
        ) : (
            <EventsGridSection>
                <EventsGridMain>
                    <EventsGridContainer>
                        <EventsGrid>
                            { events.map(item =>
                                    <GridItem key={item.eventID}>
                                        <GridItemCard>
                                            <EventDetailsLink onClick={(e) => handleClick(e, item.eventID)}>
                                                <EventItemImage src={Card1} />
                                            </EventDetailsLink>
                                            <EventDetailsLink>
                                                <GridItemColumn2>
                                                    <GridItemDateUL>
                                                        <GridItemDateLI>
                                                            <EventDetailsLinkSpan onClick={(e) => handleClick(e, item.eventID)}>
                                                                {ConvertDate(item.eventDate)}
                                                            </EventDetailsLinkSpan>
                                                        </GridItemDateLI>
                                                    </GridItemDateUL>
                                                </GridItemColumn2>
                                            </EventDetailsLink>
                                        </GridItemCard>
                                        <GridItemBody>
                                            <GridItemSubBody>
                                                <GridItemSubBodyColumn1>
                                                    <GridItemCardTitle>{item.eventName}</GridItemCardTitle>
                                                    <GridItemSubBodyColumn1P>{item.eventTimeFrom}-{item.eventTimeTo} &nbsp; {item.city}, {item.state}</GridItemSubBodyColumn1P>
                                                    <GridItemSubBodyColumnLink onClick={(e) => handleClick(e, item.eventID)}>Read More</GridItemSubBodyColumnLink>
                                                </GridItemSubBodyColumn1>
                                            </GridItemSubBody>
                                        </GridItemBody>
                                    </GridItem>
                                )
                            }
                        </EventsGrid>
                    </EventsGridContainer>
                </EventsGridMain>
            </EventsGridSection>
        )};        
    </>
    );
  }
  
  export default EventsGridComponent;