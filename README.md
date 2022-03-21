# Sync React Flask
This is not a library. This is not a framework.

This is a project starter!

This is simply for beginning a new project with very little configuration.
Very little opinions. Just preconfigured to work to auto-reload browser on save!

Setting up React and Flask is quite time consuming. And trying to do so with create-creact-app, you have to npm run eject, and change some routes and paths, etc. So I created a custom project setup. You just need to run git clone, and then a few install commands, start the server, and it'll just work.


## Getting Started
- Download: `git clone https://github.com/tristanisfeld/sync-react-flask.git`
- open folder and remove git from project

Follow these steps:
* (optional) - Create and start a new python environment, then
1. run: `pip install -r requirements.txt`
2. run: `npm install`
3. run: `npm run build` (this is to get an initial build setup)
4. run: `python ./server/app.py` (to run python server)
5. open a new terminal tab (or new command line) in this directory
6. run: `npm run start` (this will run build:watch and browser-sync)
  
If it automagically loads in your browser with the welcome message, everything is working.
Go to the src folder, and edit the sass files or the js files and test if reloading works as it should.

From here, go to your package.json file, change the name of the project.
You can run a git init, and begin your project.



## Troubleshooting
If the browsersync portion fails:
- get the: "Running on http://..." portion of the python tab for the flask server. Copy that,
- open the configs/browsersync.js file, and remove the default proxy server location, and paste yours in strings.
The default is: "http://127.0.0.1:5000/", and maybe your's is not that.


## npm scripts
- `npm run build` - Creates a production build
- `npm run build:watch` - create a development and watches the files
- `npm run start` - Requires the python server to be running. Runs the build:watch script, along with the minimal browsersync.js file, using concurrently so you do not need to have 2 terminals open for both of these. 



## Notes About Webpack Config
The only opinionated thing about this project, is the webpack configuration. I do not like the defaults, or standard webpack setup. I like having more control.

Please feel free to create some other configs for other languages or images, etc. I use typescript and sass, so those are the faults. In this setup, it is very easy to create your own config. Simply copy one of the typescript or sass configs, create a new file and paste the config. Then change anything as you want, various loaders, etc.

The naming of the output files for css and js, are using the get name from key convention. I.E., if you don't want the filenames to be 'main.bundle.js' you would change the key in the entry portion of the `configs/loaders/TypeScriptReactConfig.js`:

```Javascript
    entry: {
        "scripts/main": path.resolve(__dirname, '../..', './src/index.tsx')

    },
```

scripts, is the destination folder for the js which gets built into the `./server/app/static` folder. So they get added to `./server/app/static/scripts`, with the filename of main. If you would like to change the destination, to myAwesomeJs in a folder called js, it would look like this:

```Javascript
entry: {
        "js/myAwesomeJs": path.resolve(__dirname, '../..', './src/index.tsx')

    },
```


If you would like to change the name of server and app, you can edit these in the `./configs/projectPaths.js` file. Just make sure you rename the files and folders themselves as well.


- Server: The folder for flask or django, etc.
- src: folder to manage all code to be built and send to server/app

## Sass
Just optional since I use it all the time, Sass contains a css reset by default. If you don't want to use it, simply remove the line `@use './utilities/reset';`.


## Browsersync
This is barebones  browsersync configuration. Add any additional settings you'd like.



## Project To Do's
I will be changing the flask portion of this soon, to use the blueprint setup instead.
I'll also soon look into a Django version of this project setup.
