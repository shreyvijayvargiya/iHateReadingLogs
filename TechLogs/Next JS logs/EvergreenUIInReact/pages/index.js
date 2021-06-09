import React, { useState } from 'react';
import { Button, Pane,Heading, Tablist, Tab, Paragraph } from 'evergreen-ui';


const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [tabs] = React.useState(['Logs', 'Creativity', 'Repos'])
    return (
        <Pane style={{ width: '50%', margin: "auto", padding: 20, textAlign:'center' }}>
            <Heading size="600">Hello, Welcome to Evergreen UI in React </Heading>
            <br />
            <a href=""  style={{ textDecoration: "none", margin: 40 }}>
                <Button>
                    Read the instructions
                </Button>
            </a>
            <br />
            <Pane height={120} style={{ margin: 40 }}>
                <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                    {tabs.map((tab, index) => (
                    <Tab
                        key={tab}
                        id={tab}
                        onSelect={() => setSelectedIndex(index)}
                        isSelected={index === selectedIndex}
                        aria-controls={`panel-${tab}`}
                    >
                        {tab}
                    </Tab>
                    ))}     
                </Tablist>
                <Pane padding={16} background="tint1" flex="1">
                    {tabs.map((tab, index) => (
                    <Pane
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== selectedIndex}
                        display={index === selectedIndex ? 'block' : 'none'}
                    >
                        <Paragraph>{tab}</Paragraph>
                        <a target="_blank" style={{ textDecoration: "none"}} href={`https://ihatereading.in/${(tab).toLowerCase()}`}>
                            <Button>
                                Visit {tab}
                            </Button>
                        </a>
                    </Pane>
                    ))}
            </Pane>
            </Pane>
        </Pane>
    );
};
export default App;
