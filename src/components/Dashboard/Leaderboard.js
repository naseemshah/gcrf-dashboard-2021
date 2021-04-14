import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Leaderboard({studentsData}) {
    console.log(studentsData);
    return (
        <StyledLeaderBoard
            initial={{ opacity: 0, translateX: 2000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 2000 }}
            transition={{ delay: 1.5 }}
        >
            {   studentsData.data.map((student,id)=>{
                if(student["Student Name"]===""){
                    return null
                }else{
                    return <div 
                                key={id} 
                                className="leaderboard-item"
                                style={{ 
                                    background: id === 0 ? 
                                        'rgba(255, 215, 0, 0.156)' : 
                                        id === 1 ? 'rgba(192, 192, 192, 0.24)' : 
                                        id === 2 ? 'rgba(205, 127, 50, 0.24)' : 'white' 
                                }}
                            >
                        <div className="leaderboard-wrapper">
                            <p className="leaderboard-rank">#{id+1}</p>
                            <div className="leaderboard-student-info-container">
                                <p className="leaderboard-name">{student["Student Name"]}</p>
                                <p className="leaderboard-insitution">{student["Institution"]?.replace("[Referred] ", "")}</p>
                            </div>
                        </div>
                        <div className="leaderboard-badges-container">
                            <div className="leaderboard-badges">{student["# of Quests Completed"]} qB</div>
                            <div className="leaderboard-badges">{student["# of Skill Badges Completed"]} sB</div>
                        </div>
                    </div>
                }
            })
            }
        </StyledLeaderBoard>
    );
}

export default Leaderboard;

let StyledLeaderBoard = styled(motion.div)`
    width: 450px;
    box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
    border-radius: 15px;
    overflow: hidden;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    .leaderboard-wrapper{
        min-width: 250px;
    }
    .leaderboard-item{
        display: flex;
        background-color: #ffffff;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 10px;
        transition: all 0.2s ease-in-out;
        :hover{
            background-color: rgba(52, 168, 83, 0.179)!important;
        }
    }
    .leaderboard-student-info-container{
        max-width: 200px;
    }
    .leaderboard-rank{
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        width: 80px;
        text-transform: capitalize;
        color: #000000;
        padding: 0;
        margin: 0;
    }
    .leaderboard-name{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        text-transform: capitalize;
        color: #000000;
        padding: 0;
        margin: 0;
    }
    .leaderboard-insitution{
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        text-transform: capitalize;
        color: #000000;
        padding: 0;
        margin: 0;
        white-space: wrap;
        /* margin-right: 10px; */
    }
    .leaderboard-badges-container{
        display: flex;
        .leaderboard-badges{
            background: #4285F4;
            border-radius: 8px;
            padding: 10px;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 27px;
            text-transform: capitalize;
            color: #FFFFFF;
            margin-left: 10px;
            width: 50px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
    @media only screen and (max-width: 550px) {
        .leaderboard-badges-container{
            flex-direction: column!important;
        }
        .leaderboard-badges{
            padding: 5px!important;
            margin: 0 20px 5px 0!important;
        }
    }
    @media only screen and (max-width: 400px) {
        
        .leaderboard-wrapper{
            width: 180px!important;
            max-width: unset;
            min-width: unset;
        }
    }
`