module.exports = data = {
    "id": "root",
    "name": "Parent",
    "type": "directory",
    "children": [
        {
            "id": "root/src",
            "path": "root/src",
            "name": "src",
            "type": "directory",
            "children": [
                {
                    "type": "directory",
                    "id": "root/src/components",
                    "name": "components",
                    "path": "root/src/components",
                    "children": [
                        {
                            "name": "index.jsx",
                            "type": "file",
                            "id": "components/index",
                            "path": "root/src/components/index.jsx"
                        },
                        {
                            "name": "Home",
                            "id": "components/home",
                            "path": "root/src/components/home",
                            "type": "directory",
                            "children": [
                                {
                                    "name": "index.jsx",
                                    "type": "file",
                                    "path": "root/src/components/home/index.jsx",
                                    "id": "home/index"
                                },
                                {
                                    "name": "styles.jsx",
                                    "type": "file",
                                    "path": "root/src/components/home/styles.jsx",
                                    "id": "home/styles"
                                }
                            ]
                        },
                        {
                            "type": "directory",
                            "name": "About",
                            "path": "root/src/components/about",
                            "id": "root/about",
                            "children": [
                                {
                                    "name": "index.jsx",
                                    "type": "file",
                                    "path": "root/src/components/about/index.jsx",
                                    "id": "about/index"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "root/src/tests",
                    "type": "directory",
                    "name": "tests",
                    "path": "root/src/tests",
                    "children": [
                        {
                            "id": "src/tests",
                            "name": "App.Tests.js",
                            "path": "root/src/tests/App.Tests.js",
                            "type": "file",
                            "content": "\nimport { render, screen } from '@testing-library/react';\nimport App from '../App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});\n"
                        }
                    ]
                },
                {
                    "id": "root/src/App.js",
                    "name": "App.js",
                    "path": "root/src/App.js",
                    "type": "file",
                    "content": "\nfunction App() {\n    return (\n      <div className=\"App\">\n        <header className=\"App-header\">\n          <p>Welcome to custom repo of Create React App</p>\n        </header>\n      </div>\n    );\n  }\n  \n  export default App;\n"
                },
                {
                    "id": "root/src/index.js",
                    "name": "index.js",
                    "path": "root/src/index.js",
                    "type": "file",
                    "content": "\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nimport { ChakraProvider } from '@chakra-ui/react';\n\nReactDOM.render(\n  <ChakraProvider>\n    <App />\n  </ChakraProvider>,\n  document.getElementById('root')\n);\n\nreportWebVitals();\n\n\n"
                },
                {
                    "id": "root/src/setupTests.js",
                    "name": "setupTests.js",
                    "path": "root/src/setupTests.js",
                    "type": "file",
                    "content": "\nimport '@testing-library/jest-dom';\n"
                },
                {
                    "id": "root/src/reportWebVitals.js",
                    "name": "reportWebVitals.js",
                    "path": "root/src/reportWebVitals.js",
                    "type": "file",
                    "content": "\nconst reportWebVitals = onPerfEntry => {\n    if (onPerfEntry && onPerfEntry instanceof Function) {\n      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n        getCLS(onPerfEntry);\n        getFID(onPerfEntry);\n        getFCP(onPerfEntry);\n        getLCP(onPerfEntry);\n        getTTFB(onPerfEntry);\n      });\n    }\n  };\n  \n  export default reportWebVitals;\n"
                },
                {
                    "name": "modules",
                    "type": "directory",
                    "path": "root/src",
                    "id": "root/src/modules",
                    "children": [
                        {
                            "name": "index.jsx",
                            "type": "file",
                            "path": "root/src/modules/index.jsx",
                            "id": "modules/index"
                        },
                        {
                            "id": "modules/header",
                            "type": "directory",
                            "name": "Header",
                            "path": "root/src/modules/header",
                            "children": [
                                {
                                    "name": "index.jsx",
                                    "type": "file",
                                    "path": "root/src/modules/header/index.jsx",
                                    "id": "header/index"
                                },
                                {
                                    "name": "styles.jsx",
                                    "type": "file",
                                    "path": "root/src/modules/header/styles.jsx",
                                    "id": "header/styles"
                                }
                            ]
                        },
                        {
                            "id": "modules/navbar",
                            "type": "directory",
                            "name": "Navbar",
                            "path": "root/src/modules/navbar",
                            "children": [
                                {
                                    "name": "index.jsx",
                                    "type": "file",
                                    "path": "root/src/modules/navbar/index.jsx",
                                    "id": "header/index"
                                },
                                {
                                    "name": "styles.jsx",
                                    "type": "file",
                                    "path": "root/src/modules/navbar/styles.jsx",
                                    "id": "navbar/styles"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "directory",
                    "name": "utils",
                    "path": "root/src/utils",
                    "id": "root/src/utils",
                    "children": [
                        {
                            "name": "firebase.js",
                            "type": "file",
                            "path": "root/src/utils/firebase.js",
                            "id": "utils/firebase"
                        },
                        {
                            "name": "globalStyles.scss",
                            "type": "file",
                            "path": "root/src/utils/globalStyles.scss",
                            "id": "utils/globalStyles",
                            "content": "\n@import \"~bulma/bulma\";\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n"
                        }
                    ]
                }
            ]
        },
        {
            "name": "package.json",
            "type": "file",
            "path": "root/package.json",
            "id": "root/package",
            "content": "\n{\n    \"name\": \"custom-repo-ihate-reading\",\n    \"version\": \"1.0.0\",\n    \"scripts\": {\n        \"start\": \"react-scripts start\",\n        \"build\": \"react-scripts build\",\n        \"test\": \"react-scripts test\",\n        \"eject\": \"react-scripts eject\"\n    },\n    \"dependencies\": {\n        \"react\": \"^16.13.1\",\n        \"react-dom\": \"^16.13.1\",\n        \"bulma\": \"^0.9.3\",\n        \"node-sass\": \"^6.0.1\"\n    }\n}\n"
        },
        {
            "name": ".env",
            "id": "root/.env",
            "type": "file",
            "path": "root/.env"
        },
        {
            "name": ".gitignore",
            "type": "file",
            "path": "root/.gitignore",
            "id": "root/gitignore",
            "content": "\nnode_modules\n\n.next\n\nyarn.lock\n\nyarn-error.log\n\n.DS_Store\n\n"
        },
        {
            "name": "public",
            "type": "directory",
            "path": "root/public",
            "id": "root/public",
            "children": [
                {
                    "name": "robots.txt",
                    "type": "file",
                    "path": "root/public/robots.txt",
                    "id": "root/public/robots",
                    "content": "\n# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n"
                },
                {
                    "name": "index.html",
                    "type": "file",
                    "path": "root/public/index.html",
                    "id": "root/public/index",
                    "content": "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta\n      name=\"description\"\n      content=\"Web site created using create-react-app\"\n    />\n    <link rel=\"apple-touch-icon\" href=\"%PUBLIC_URL%/logo192.png\" />\n    <link rel=\"manifest\" href=\"%PUBLIC_URL%/manifest.json\" />\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n  </body>\n</html>\n\n"
                }
            ]
        }
    ]
}