(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{243:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return l}));var t=n(1),r=n(9),i=(n(0),n(309)),s={id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},o=[{value:"Installation and Usage",id:"installation-and-usage",children:[]},{value:"CLI arguments",id:"cli-arguments",children:[{value:"--dir",id:"--dir",children:[]},{value:"--moduleType",id:"--moduletype",children:[]},{value:"--framework",id:"--framework",children:[]},{value:"--layout",id:"--layout",children:[]}]},{value:"Project types",id:"project-types",children:[]},{value:"create-single-spa",id:"create-single-spa",children:[]},{value:"generator-single-spa",id:"generator-single-spa",children:[]},{value:"webpack-config-single-spa",id:"webpack-config-single-spa",children:[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]},{value:"webpack-config-single-spa-ts",id:"webpack-config-single-spa-ts",children:[{value:"Installation",id:"installation-2",children:[]},{value:"Usage",id:"usage-2",children:[]}]},{value:"webpack-config-single-spa-react-ts",id:"webpack-config-single-spa-react-ts",children:[{value:"Installation",id:"installation-3",children:[]},{value:"Usage",id:"usage-3",children:[]}]},{value:"single-spa-web-server-utils",id:"single-spa-web-server-utils",children:[{value:"Installation",id:"installation-4",children:[]},{value:"getImportMaps",id:"getimportmaps",children:[]}]}],c={rightToc:o},p="wrapper";function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa."),Object(i.b)("p",null,"The CLI is called ",Object(i.b)("inlineCode",{parentName:"p"},"create-single-spa")," (",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/"}),"Github link"),"). It is primarily intended for the creation of new projects, but may also be useful for migrating existing projects (especially migrating CRA or frameworkless projects)."),Object(i.b)("h2",{id:"installation-and-usage"},"Installation and Usage"),Object(i.b)("p",null,"If you wish to have create-single-spa globally available, run the following in a terminal"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --global create-single-spa\n\n# or\nyarn global add create-single-spa\n")),Object(i.b)("p",null,"Then run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa\n")),Object(i.b)("p",null,"Alternatively, you may use create-single-spa without global installation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm init single-spa\n\n# or\nnpx create-single-spa\n\n# or \nyarn create single-spa\n")),Object(i.b)("p",null,"This will open up a CLI prompt asking you what kind of project you want to create or update."),Object(i.b)("h2",{id:"cli-arguments"},"CLI arguments"),Object(i.b)("p",null,"You may pass arguments to create-single-spa like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Different ways of doing the same thing\ncreate-single-spa --framework react\nnpm init single-spa --framework react\nnpx create-single-spa --framework react\nyarn create single-spa --framework react\n")),Object(i.b)("p",null,"Here are the available CLI options:"),Object(i.b)("h3",{id:"--dir"},"--dir"),Object(i.b)("p",null,"You may specify which directory create-single-spa runs in through either of the following ways:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Two ways of doing the same thing\ncreate-single-spa my-dir\ncreate-single-spa --dir my-dir\n")),Object(i.b)("h3",{id:"--moduletype"},"--moduleType"),Object(i.b)("p",null,"You can specify which kind of microfrontend you are creating with the ",Object(i.b)("inlineCode",{parentName:"p"},"--moduleType")," CLI argument:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa --moduleType root-config\ncreate-single-spa --moduleType app-parcel\ncreate-single-spa --moduleType util-module\n")),Object(i.b)("h3",{id:"--framework"},"--framework"),Object(i.b)("p",null,"You can specify which framework you're using with the ",Object(i.b)("inlineCode",{parentName:"p"},"--framework")," CLI argument. Note that if you specify a framework that you may omit the ",Object(i.b)("inlineCode",{parentName:"p"},"--moduleType"),", as it is inferred to be ",Object(i.b)("inlineCode",{parentName:"p"},"app-parcel"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"create-single-spa --framework react\ncreate-single-spa --framework vue\ncreate-single-spa --framework angular\n")),Object(i.b)("h3",{id:"--layout"},"--layout"),Object(i.b)("p",null,"When generating a root config, the ",Object(i.b)("inlineCode",{parentName:"p"},"--layout")," CLI argument indicates that you want to use ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/layout-overview"}),"single-spa-layout")," in your root config."),Object(i.b)("h2",{id:"project-types"},"Project types"),Object(i.b)("p",null,"create-single-spa asks you if you'd like to create a single-spa application, a utility module, or a root-config. All three module types assume that you are using the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/recommended-setup"}),"recommended setup"),"."),Object(i.b)("p",null,"If you select that you'd like to create a single-spa application, you will be prompted for which framework you'd like to choose. React is implemented with premade configurations for babel + webpack + jest. Angular is implemented with Angular CLI and ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:""}),"single-spa-angular"),". Vue is implemented with Vue CLI and ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/ecosystem/ecosystem-vue#vue-cli"}),"vue-cli-plugin-single-spa"),"."),Object(i.b)("h1",{id:"npm-packages"},"NPM packages"),Object(i.b)("p",null,"Within the create-single-spa repo, there are several NPM packages. The following sections document each package:"),Object(i.b)("h2",{id:"create-single-spa"},"create-single-spa"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa"}),"Github project")),Object(i.b)("p",null,"The core CLI, which invokes ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#generator-single-spa"}),"generator-single-spa"),"."),Object(i.b)("h2",{id:"generator-single-spa"},"generator-single-spa"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa"}),"Github project")),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://yeoman.io/"}),"Yeoman generator")," that prompts the user and then creates files. This is primarily invoked via the create-single-spa CLI, but can also be ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://yeoman.io/authoring/composability.html"}),"composed")," if you'd like to customize it."),Object(i.b)("h2",{id:"webpack-config-single-spa"},"webpack-config-single-spa"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa"}),"Github project")),Object(i.b)("p",null,"A shareable, customizable webpack config that is used for utility modules and single-spa applications."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa webpack-merge\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(i.b)("h2",{id:"webpack-config-single-spa-react"},"webpack-config-single-spa-react"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react"}),"Github project")),Object(i.b)("p",null,"A shareable, customizable webpack config that adds react-specific configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),"."),Object(i.b)("h3",{id:"installation-1"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react webpack-merge\n")),Object(i.b)("h3",{id:"usage-1"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-react');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(i.b)("h2",{id:"webpack-config-single-spa-ts"},"webpack-config-single-spa-ts"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts"}),"Github project")),Object(i.b)("p",null,"A shareable, customizable webpack config that adds typescript-specific configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),". Note that webpack-config-single-spa-ts has a peerDependency on ",Object(i.b)("inlineCode",{parentName:"p"},"typescript"),"."),Object(i.b)("h3",{id:"installation-2"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-ts webpack-merge\n")),Object(i.b)("h3",{id:"usage-2"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-ts');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const singleSpaTs = require('webpack-config-single-spa-ts');\n\n// Alternatively, you may modify a webpack config directly\nconst myOtherWebpackConfig = {/* ... */}\nconst finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig)\n")),Object(i.b)("h2",{id:"webpack-config-single-spa-react-ts"},"webpack-config-single-spa-react-ts"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts"}),"Github project")),Object(i.b)("p",null,"A shareable, customizable webpack config that creates a webpack config that works with both react and typescript. Note that webpack-config-single-spa-react-ts simply merges the config from webpack-config-single-spa-react with that of webpack-config-single-spa-ts."),Object(i.b)("h3",{id:"installation-3"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-react-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react-ts webpack-merge\n")),Object(i.b)("h3",{id:"usage-3"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-react-ts');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    \n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    \n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n    \n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    \n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(i.b)("h2",{id:"single-spa-web-server-utils"},"single-spa-web-server-utils"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa-web-server-utils")," package is a collection of functions that help when implementing a web server for an index.html file. This package can be used to inline import maps into an HTML, which helps with the performance of your application. Additionally, it can be used to modify a browser import map so that it's suitable for usage in NodeJS for dynamic module loading and server rendering (",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/ssr-overview#a-module-loading"}),"Dynamic Module Loading")," and ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/ssr-overview#intro-to-ssr"}),"Server Rendering"),"))."),Object(i.b)("p",null,"The web server utils poll the import map from a URL and generate a ",Object(i.b)("inlineCode",{parentName:"p"},"browserImportMap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"nodeImportMap")," from the response."),Object(i.b)("h3",{id:"installation-4"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-web-server-utils\n\n# alternatively\nyarn add single-spa-web-server-utils\n")),Object(i.b)("h3",{id:"getimportmaps"},"getImportMaps"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getImportMaps")," function accepts an object parameter and returns a promise that resolves with an object with two import maps: ",Object(i.b)("inlineCode",{parentName:"p"},"browserImportMap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"nodeImportMap"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const { getImportMaps } = require('single-spa-web-server-utils');\nconst http = require('http');\nconst ejs = require('ejs');\nconst fs = require('fs');\nconst path = require('path');\n\nconst htmlTemplate = ejs.compile(fs.readFileSync(path.resolve(process.cwd(), 'views/index.html'), 'utf-8'));\n\nhttp.createServer((req, res) => {\n  getImportMaps({\n    // required\n    // The URL at which the server\n    url: 'https://my-cdn.com/live.importmap',\n\n    // optional - defaults to 30000\n    // The ms to wait when polling the import map\n    pollInterval: 30000,\n\n    // optional - defaults to false\n    // Whether to allow for import-map-overrides via cookies sent in the request.\n    // More details about overrides via cookies at\n    // https://github.com/joeldenning/import-map-overrides/blob/master/docs/api.md#node\n    allowOverrides: true,\n\n    // optional - only needed when allowOverrides is true\n    // The IncomingMessage from an http server. This is used to gather\n    // cookies for import-map-overrides\n    req,\n\n    // optional\n    // This allows you to remove entries from the downloaded import map\n    // from the returned `nodeImportMap`. This is useful for customizing\n    // an import map that is used in the browser so that it can be used\n    // for dynamic NodeJS module loading. Each key is a string import specifier.\n    // Keys that you return `true` for are preserved in the nodeImportMap.\n    nodeKeyFilter(key) {\n      return true;\n    }\n  })\n  .then(({browserImportMap, nodeImportMap}) => {\n    console.log(browserImportMap, nodeImportMap);\n\n    // Example of how to inline a browser import map\n    const htmlWithInlinedImportMap = htmlTemplate({importMap: browserImportMap});\n    res.setResponseHeader('Content-Type', 'text/html');\n    res.status(200).send(htmlWithInlinedImportMap);\n\n    // Example of how to apply a NodeJS import map\n    // More info at https://github.com/node-loader/node-loader-import-maps\n    global.nodeLoader.setImportMapPromise(Promise.resolve(nodeImportMap));\n    import('module-in-import-map');\n  });\n});\n")))}l.isMDXComponent=!0},309:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return b}));var t=n(0),r=n.n(t),i=r.a.createContext({}),s=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},o=function(e){var a=s(e.components);return r.a.createElement(i.Provider,{value:a},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},l=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),l=s(n),b=t,g=l[o+"."+b]||l[b]||p[b]||i;return n?r.a.createElement(g,Object.assign({},{ref:a},c,{components:n})):r.a.createElement(g,Object.assign({},{ref:a},c))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=l;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:t,s[1]=o;for(var b=2;b<i;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);