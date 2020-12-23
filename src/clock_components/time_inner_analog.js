import React from "react";
import styled from "styled-components";

export const TimeInnerAnalog = (properties) => {
         const MyDiv = styled.div`
           height: ${properties.outer_height};
           width: ${properties.outer_width};
           display: flex;
           justify-content: center;
           align-items: center;
           position: absolute;
         `;
        
        return (<MyDiv>
                
        </MyDiv>)
};
