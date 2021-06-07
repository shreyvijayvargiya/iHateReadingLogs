import React, { useState } from "react";


const App = () => {

    const ContentOne = (title) => {
        return (
            <div>
                <p className="text-2xl">{title}</p>
                <img className="w-80 rounded-xl h-80 mx-auto"  src="/logs.jpeg" /> 
                <br />
                <hr />
                <a target="_blank"
                    href="https://www.ihatereading.in/logs"
                >
                    <button  
                        className="rounded-md my-2 w-80 p-2 bg-blue-500 hover:bg-blue-600"
                    > 
                            Read
                    </button>
                </a>
            </div>
        );
    };
    const ContentTwo = (title) => {
        return (
            <div>
                <p className="text-2xl">{title}</p>
                <img className="w-80 h-80 rounded-xl mx-auto" src="/creativity.jpeg" /> 
                <br />
                <hr />
                <a target="_blank"
                    href="https://www.ihatereading.in/creativity"
                >
                    <button  
                        className="rounded-md my-2 w-80 p-2 bg-yellow-500 hover:bg-yellow-600"
                    > 
                            View
                    </button>
                </a>
            </div>
        );
    };
    const ContentThree = (title) => {
        return (
            <div>
                <p className="text-2xl">{title}</p>
                <img className="w-80 rounded-xl h-80 mx-auto" src="/projects.jpeg" /> 
                <br />
                <hr />
                <a target="_blank"
                    href="https://www.ihatereading.in/projects"
                >
                    <button  
                        className="rounded-md my-2 w-80 p-2 bg-green-500 hover:bg-green-600"
                    > 
                            Visit
                    </button>
                </a>
            </div>
        );
    };

    const tabContent = [
        {
            id: 1,
            heading: 'Logs',
            content: heading => <ContentOne title={heading} />,
        },
        {
            id: 2,
            heading: 'Creativity',
            content: heading => <ContentTwo title={heading} />
        },
        {
            id: 3,
            heading: 'Projects',
            content: heading => <ContentThree title={heading} />
        }
    ];

    const [ activeTab, setActiveTab ] = useState(1);
    const [ currentTab, setCurrentTab ] = useState(tabContent[0]);

    function handleTabClick(currentTab){
        setActiveTab(currentTab);
        const currentTabContent = tabContent.filter(item => item.id === currentTab);
        setCurrentTab(currentTabContent[0]);
    };


    console.log(currentTab.content(currentTab.heading))

    return (
        <div className="py-10 px-20 text-center">
            <p className="text-center text-4xl">Custom Tabs in React</p>
            <button className="p-2 rounded-md mx-auto hover:bg-green-600 bg-green-500 my-2">
                <a href="https://shreyvijayvargiya26.medium.com/5-steps-to-develop-custom-tabs-in-react-d0ec1c05d3af" target="_blank">React the story</a>
            </button>
            <div className="mx-auto w-8/12 p-4">
                <div className="flex flex-wrap justify-around items-center">
                    {tabContent.map(item => {
                        return (
                            <div key={item.id} 
                                className={`p-4 cursor-pointer w-4/12 border border-gray-100 
                                    ${activeTab === item.id && 'bg-yellow-400' }
                                `}
                                onClick={() => handleTabClick(item.id)}
                            >
                                <p className="my-auto mx-auto text-center">{item.heading}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="p-4">
                    {currentTab.content().type(currentTab.heading)}
                </div>
            </div>
        </div>
    )
};
export default App;
