import React from 'react'
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
// import { CopilotPopup } from "@copilotkit/react-ui";
import McqQns from './McqQns';

const HomePage = () => {
    return (
        <>
            <CopilotKit url="http://localhost:5174/api">
                <McqQns />
            </CopilotKit>


        </>
    )
}

export default HomePage