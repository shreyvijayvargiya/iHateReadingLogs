import { Button} from 'antd/dist/antd';

const App = () => {
    return (
        <div>
            <h1>Hello, Welcome to Next JS + Ant Design</h1>
            <Button
                color="link"
                type="link"
            >
                Ant Design Link Button
            </Button>
            <br />
             <Button
                color="link"
                type="dashed"
            >
                Ant Design Dashed Button
            </Button>
            <br />
            <a>Read article to know how to install</a>
        </div>
    )
};
export default App;
