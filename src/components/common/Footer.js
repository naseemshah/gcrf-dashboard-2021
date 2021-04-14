import React from 'react';
import styled from 'styled-components'

function footer(props) {
    return (
        <StyledFooter>
            <p>Made for 2021 Google Cloud Ready Facilitators & Students with 💖 by <a href="https://naseemshah.dev/">Naseem Shah (@ns4k_tv).</a> <a href="https://github.com/naseemshah/gcrf-dashboard-2021">contribute here</a></p>
        </StyledFooter>
    );
}

export default footer;

let StyledFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px auto;
    padding: 10px; 
    box-sizing: border-box;
    p{
        text-align: center;
        font-size: 11px;
    }
`