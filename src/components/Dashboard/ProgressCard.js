import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function ProgressCard(props) {
    return (
        <StyledProgressCard
            initial={{ opacity: 0, translateX: 2000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 2000 }}
            transition={{ delay: 0.5 }}
        >
            <div className="progress-bars-container">
                <div 
                    className="progress-item"
                >   
                    <p className="progress-title">Milestone #1 - Complete any 8 quests & 4 skill badges in the program  ✅</p>
                    <div 
                        className="progress-bar"
                        style={{
                            boxShadow: "0 0 0 2px #4285F4 inset"
                        }}
                    >
                       <p>Wohooo! way to go buddy! 🎉</p>
                       <div 
                        className="progress-width"
                        style={{
                            backgroundColor: "#4285F4"
                        }}
                       ></div>
                    </div>
                    <div className="progress-info-container">
                        <p className="progress-percentage">100% completed</p>
                        <div className="progress-info">
                            <p>8/8 QB</p>
                            <p>2/4 SB</p>
                        </div>
                    </div>
                </div>
            
                <div 
                    className="progress-item"
                >   
                    <p className="progress-title">Milestone #2 - Complete any 16 quests & 8 skill badges in the program 🔒</p>
                    <div 
                        className="progress-bar"
                        style={{
                            boxShadow: "0 0 0 2px #FBBC05 inset"
                        }}
                    >
                       <p>Wohooo! way to go buddy! 🎉</p>
                       <div 
                        className="progress-width"
                        style={{
                            backgroundColor: "#FBBC05"
                        }}
                       ></div>
                    </div>
                    <div className="progress-info-container">
                        <p className="progress-percentage">100% completed</p>
                        <div className="progress-info">
                            <p>8/8 QB</p>
                            <p>2/4 SB</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </StyledProgressCard>
    );
}

export default ProgressCard;

let StyledProgressCard = styled(motion.div)`
    .progress-item{
        display: flex;
        flex-direction: column;
        width: 280px;
        .progress-title{
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            line-height: 15px;
            text-transform: uppercase;
            color: #000000;
        }
        .progress-bar{
            position: relative;
            /* box-shadow: 0px 0px 0px 20px #4285F4 inset; */
            border-radius: 40px;
            overflow: hidden;
            padding: 5px 10px;
            box-sizing: border-box;
            p{
                z-index: 1;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                text-transform: uppercase;
                color: #FFFFFF;
                text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
                margin: 0;
                padding: 0;
            }
            .progress-width{
                position: absolute;
                left: 0;
                top: 0;
                width: 80%;
                height: 100%;
                z-index: -1;
            }
        }
        .progress-info-container{
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            p{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                text-transform: uppercase;
                color: #000000;
                margin: 0;
                padding: 0;
            }
            .progress-info{
                display: flex;
                :last-child{
                    margin-left: 5px;
                }
            }
        }
    }


`