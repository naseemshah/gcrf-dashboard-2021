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
            progress card
        </StyledProgressCard>
    );
}

export default ProgressCard;

let StyledProgressCard = styled(motion.div)`



`