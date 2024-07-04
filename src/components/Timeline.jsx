/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import styled from 'styled-components';
import TimelineItem from './TimelineItem';


const TimelineContainer = styled.section`
  padding: 50px 20px;
  //background: #f1f1f1;
  text-align: center;
`;



const Timeline = () => {
    return (
        <TimelineContainer>
            <div className='container pb-md-5'>
                <TimelineItem />
            </div>
        </TimelineContainer>
    );

}

export default Timeline;