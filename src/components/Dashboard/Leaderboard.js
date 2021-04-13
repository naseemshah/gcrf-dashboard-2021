import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Leaderboard(props) {
    return (
        <StyledLeaderBoard
            initial={{ opacity: 0, translateX: 2000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 2000 }}
            transition={{ delay: 1.5 }}
        >
            Leaderboard
        </StyledLeaderBoard>
    );
}

export default Leaderboard;

let StyledLeaderBoard = styled(motion.div)`


`