const { Blogs } = require("../components")

const App = () => {
    return (
        <div className="container">
            <h2 className="title has-text-danger m-6 has-text-centered is-2">Demo of Bulma CSS with Next JS</h2>
            <hr />
            <Blogs />
        </div>
    )
};
export default App;
