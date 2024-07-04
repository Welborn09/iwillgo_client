/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import styled from 'styled-components';
import './../styles/timelineItem.css';

const TimelineItemContainer = styled.section`
  padding: 50px 20px;
  //background: #f1f1f1;
  text-align: center;
`;


const Tlcontent = styled.h1`
`;

const Para = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #e2e2e2;
`;

const TimelineItem = () => {
    return (
        <TimelineItemContainer className='timeline row'>
            <div className='col-lg-4'>
                <div className='tl-item'>
                    <div className="tl-bg bg-1"></div>
                    <div className='tl-content'>
                        <Tlcontent>Help Children</Tlcontent>
                        <Para>
                            Approximately 1 in 6 children experiencing food insecurity in the United States.
                        </Para>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 my-4 my-lg-0'>
                <div className='tl-item'>
                    <div className="tl-bg bg-2"></div>
                    <div className='tl-content'>
                        <Tlcontent>Development Matters</Tlcontent>                    
                        <Para>
                            Approximately 1 in 6 children experiencing food insecurity in the United States.
                        </Para>
                    </div>                    
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='tl-item'>
                    <div className="tl-bg bg-3"></div>
                    <div className='tl-content'>
                        <Tlcontent>Environment</Tlcontent>
                        <Para>
                            Approximately 1 in 6 children experiencing food insecurity in the United States.
                        </Para>
                    </div>
                </div>
            </div>
        </TimelineItemContainer>
    );
};

export default TimelineItem;