import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    max-width: 100%;
    min-width: 20%;
    height: 85%;
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid #a1a1a1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic{
        width: 100%;
        height: 65%;
        img{
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }
    } 
    .card-header{
        margin-top: 0.5em;
        border-bottom:none;
        background-color:transparent;
    }
    .title {
        color:#444444;
    }
    .text {
        color:#444444;
      }
    .card-footer{
        border-top:none !important;
        background-color:transparent !important;
    }
`
interface CardProps {
    image: string;
    index: number;
    introduction: string;
}

export const Card: React.FC <CardProps> = ({image, index, introduction}) => {
    return (
        <CardContainer>
            <div className="pic">
                <img src={image}/>
            </div>
            <div className="card-header">
                # {index+1}
            </div>
            <div className="card-body">
                <h3 className="title">
                    Special title treatment
                </h3>
            </div>
            <div className="card-footer">
                <p className="text">
                    {introduction}
                </p>
            </div>
        </CardContainer>
    );
}