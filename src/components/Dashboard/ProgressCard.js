import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Milestone from './Milestone';
import StudentInfo from './StudentInfo';

function ProgressCard({userStudentDetails}) {
    let completedQuestBadges = parseInt(userStudentDetails["# of Quests Completed"])
    let completedSkillBadges = parseInt(userStudentDetails["# of Skill Badges Completed"])
    let totalBadgesTaken = completedQuestBadges + completedSkillBadges
    console.log(completedQuestBadges,completedSkillBadges,totalBadgesTaken);
    let clamp = (val, min, max)  =>{
        return val > max ? max : val < min ? min : val;
    }
    console.log(clamp((totalBadgesTaken/12)*100,0,100));
    let milestones = [
        {
            milestoneTitle: "Milestone #1 - Complete any 8 quests & 4 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 8 ? completedQuestBadges : 8,
            milestoneCompletedSkillBadges: completedSkillBadges < 4 ? completedSkillBadges : 4,
            hasMilestoneUnlocked: totalBadgesTaken >= 12 ? true : false,
            milestoneProgressPercentage: clamp((totalBadgesTaken/12)*100,0,100),
            maxQuestBadges: 8,
            maxSkillBadges: 4,
            milestoneColor: "#4285F4",
            completedText: "WOHOOO! WAY TO GO BUDDY! 🎉" 
        },
        {
            milestoneTitle: "Milestone #2 - Complete any 16 quests & 8 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 16 ? completedQuestBadges : 16,
            milestoneCompletedSkillBadges: completedSkillBadges < 8 ? completedSkillBadges : 8,
            hasMilestoneUnlocked: totalBadgesTaken >= 24 ? true : false,
            milestoneProgressPercentage: clamp((totalBadgesTaken/24)*100,0,100),
            maxQuestBadges: 16,
            maxSkillBadges: 8,
            milestoneColor: "#FBBC05",
            completedText: "Keep up the good work! 🔥" 
        },
        {
            milestoneTitle: "Milestone #3 - Complete any 24 quests & 12 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 24 ? completedQuestBadges : 24,
            milestoneCompletedSkillBadges: completedSkillBadges < 12 ? completedSkillBadges : 12,
            hasMilestoneUnlocked: totalBadgesTaken >= 36 ? true : false,
            milestoneProgressPercentage: clamp((totalBadgesTaken/36)*100,0,100),
            maxQuestBadges: 24,
            maxSkillBadges: 12,
            milestoneColor: "#34A853",
            completedText: "You are awesome! 🤩🔥" 

        },
        {
            milestoneTitle: "Ultimate Milestone: Complete 30 Quests & all 15 Skill Badges",
            milestoneCompletedQuestBadges: completedQuestBadges < 30 ? completedQuestBadges : 30,
            milestoneCompletedSkillBadges: completedSkillBadges < 15 ? completedSkillBadges : 15,
            hasMilestoneUnlocked: totalBadgesTaken >= 45 ? true : false,
            milestoneProgressPercentage: clamp((totalBadgesTaken/45)*100,0,100),
            maxQuestBadges: 30,
            maxSkillBadges: 15,
            milestoneColor: "#EA4335",
            completedText: "Congrats! You totally rock! 💯" 

        }
    ]
    console.log(milestones);
    return (
        <StyledProgressCard
            initial={{ opacity: 0, translateX: 2000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 2000 }}
            transition={{ delay: 0.5 }}
        >
            <h1 className="greet-student">Welcome {userStudentDetails['Student Name']}!</h1>
            <div className="progress-bars-container">
                {
                    milestones.map((milestone,id) =>{
                        return <Milestone 
                            key={id}
                            milestoneData={milestone}
                        />
                    })
                }
            </div>
            <StudentInfo studentData={userStudentDetails} />
            <p className="quest-message">Quest badges and Skill badges completed since your enrollment date will only be counted for progress. </p>
        </StyledProgressCard>
    );
}

export default ProgressCard;

let StyledProgressCard = styled(motion.div)`
    .progress-bars-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .greet-student{
        font-size: 25px;
        text-align: center;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }
    .progress-item{
        display: flex;
        flex-direction: column;
        width: 280px;
        margin: 10px;
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
            display: flex;
            align-items: center;
            padding: 5px 10px;
            height: 30px;
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
                height: 100%;
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
            }
        }
    }
    .quest-message{
        font-size: 10px;
        text-align: center;
    }
`