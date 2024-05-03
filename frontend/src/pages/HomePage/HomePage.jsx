import React from 'react'
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
import McqQns from './McqQns';

const HomePage = () => {
    return (
        <>
            {/* <div className="bg-black text-white">Copilotkit testing</div>
            <CopilotKit url="http://localhost:5174/api">

                <div style={{ "--copilot-kit-primary-color": "#7D5BA6" }}>

                    <CopilotPopup
                        instructions={
                            "Help the user manage a todo list. If the user provides a high level goal, " +
                            "break it down into a few specific tasks and add them to the list"
                        }
                        defaultOpen={true}
                        labels={{
                            title: "Todo List Copilot",
                            initial: "Hi you! 👋 I can help you manage your documents.",
                        }}
                        clickOutsideToClose={false}
                    />


                </div>

            </CopilotKit> */}
            <McqQns/>
            
        </>
    )
}

export default HomePage