# Very Handy Powershell Script for very easy install

Since I am not in the business of writing command line tools, I wrote this handy powershell script which you can use for easy installs!
By default I have it for this project. You can very easily make another version by changing the repo.

You can then simply write in the terminal `get-react-flask Your-Awesome-Project-Name-Here`, where you simply put your desired project name instead of `Your-Awesome-Project-Name-Here`.

If you are not using Terminal on windows, you should. Here I'll show you how to create and edit your powershell profile, and simply copy and paste this code in

## Requirements
- Git
- Powershell
- Node with NPM (you can replace npm with yarn if you choose)
- Python

## Steps
1. Open Terminal (or powershell). I think powershell is default for the terminal
2. type `notepad $PROFILE`
3. Copy and paste the following in to the profile:

```powershell

function venv-new { python -m venv env }
function venv-start { ./env/Scripts/activate }

function get-react-flask($enterNewName) { 
	# Add new name after get-react-flask - Gets repo, renames it to new name, enters folder and removes .git from project
	git clone https://github.com/tristanisfeld/sync-react-flask.git &&
	Rename-Item ./sync-react-flask/ $enterNewName &&
	cd $enterNewName &&
	rm .git -r -Force &&

    venv-new &&
    venv-start &&

	pip install -r requirements.txt &&
	npm install
}

```

## Explanation
the `function venv-new...` and `function venv-start` are optional. If you choose to not use them, remove them and also remove the commands from the get-react-flask function. What those do, is provide a quick and handy way to create and start python environments

The get react flask function, will git clone the project, rename the project to whatever you typed beside the `get-react-flask` command. Then it will remove the `.git` folder (so then you can initialize it yourself for your own project, after you rename it in the package.json file). 

I will then use the venv-new function to create a new python environment, then the venv-start command to start the environemnt. If you keep those, you can simply use those in any python project.

It will then pip install all of the requirements, and then run npm install for all of the dependencies. 

From there, all you need to do is run `npm run start` in order to start the servers, and build:watch.  