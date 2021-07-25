const repositoryTree = {
    id: "root",
	name: "Parent",
    type: "directory",
    children: [
        {
            type: "directory",
            id: "root/components",
            name: "components",
            path: "root",
            children: [
                {
                    name: "index.jsx",
                    type: "file",
                    id: "components/index",
                    path: "root/components/index.jsx"
                },
                {
                    name: "Home",
                    id: "components/home",
                    path: "root/components/home",
                    type: "directory",
                    children: [
                        {
                            name: "index.jsx",
                            type: "file",
                            path: "root/components/home/index.jsx",
                            id: "home/index",
                        },
                        {
                            name: "styles.jsx",
                            type: "file",
                            path: "root/components/home/styles.jsx",
                            id: "home/styles",
                        },
                    ]
                },
                {
                    type: "directory",
                    name: "About",
                    path: "root/components/about",
                    id: "root/about",
                    children: [
                        {
                            name: "index.jsx",
                            type: "file",
                            path: "root/components/about/index.jsx",
                            id: "about/index"
                        }
                    ]
                },
            ],
        },

    {
        name: "package.json",
        type: "file",
        path: "root/package.json",
        id: "root/package"
    },
    {
        name: "modules",
        type: "directory",
        path: "root",
        id: "root/modules",
        children: [
            {
                name: "index.jsx",
                type: "file",
                path: "root/modules/index.jsx",
                id: "modules/index"
            },
            {
                id: "modules/header",
                type: "directory",
                name: "Header",
                path: "root/modules/header",
                children:[
                    {
                        name: "index.jsx",
                        type: "file",
                        path: "root/modules/header/index.jsx",
                        id: "header/index"
                    },
                    {
                        name: "styles.jsx",
                        type: "file",
                        path: "root/modules/header/styles.jsx",
                        id: "header/styles"
                    }
                ],
            },
            {
                id: "modules/navbar",
                type: "directory",
                name: "Navbar",
                path: "root/modules/navbar",
                children: [
                    {
                        name: "index.jsx",
                        type: "file",
                        path: "root/modules/navbar/index.jsx",
                        id: "header/index"
                    },
                    {
                        name: "styles.jsx",
                        type: "file",
                        path: "root/modules/navbar/styles.jsx",
                        id: "navbar/styles"
                    },
                ]
            }
        ]
    },
    {
        name: ".gitignore",
        type: "file",
        path: "root/.gitignore",
        id: "root/gitignore"
    },
    {
        type: "directory",
        name: "pages",
        path: "root/pages",
        id: "root/pages",
        children: [
            {
                name: "index.jsx",
                type: "file",
                path: "root/pages/index.js",
                id: "pages/index"
            },
            {
                name: "_app.js",
                type: "file",
                path: "root/pages/_app.js",
                id: "pages/_app"
            },
            {
                name: "_document.js",
                type: "file",
                path: "root/pages/_document.js",
                id: "pages/_document"
            }
        ]
    },
    {
        type: "directory",
        name: "utils",
        path: "root/utils",
        id: "root/utils",
        children: [
            {
                name: "index.jsx",
                type: "file",
                path: "root/utils/index.js",
                id: "utils/index"
            },
            {
                name: "firebase.js",
                type: "file",
                path: "root/utils/firebase.js",
                id: "utils/firebase"
            },
            {
                name: "strapi.js",
                type: "file",
                path: "root/utils/strapi.js",
                id: "utils/strapi"
            }
        ]
    },
    {
        name: "next.config.js",
        id: "root/nextconfig",
        type: "file",
        path: "root/nextconfig.js",
    },
    ],
};

module.exports = repositoryTree;