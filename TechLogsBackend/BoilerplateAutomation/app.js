const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const chalk = require('chalk');
const exec= require('child_process').execSync;
const cliProgress = require('cli-progress');
const { indexFileCode, packageFileCode } = require('./filesCode');


const schema = {
	properties: {
		projectname: {
			description:  'Enter the project name \n\n',
			type: 'string',
			required: true,
			color: 'rgb(255,131,0)'
		}
	}
};

const bar1 = new cliProgress.SingleBar({ }, cliProgress.Presets.shades_classic);
 

prompt.start();

const messageTheme = chalk.bold.rgb(255,131,0);

process.stdout.write(messageTheme('Welcome to React Project Automation \n\n'));
process.stdout.write(messageTheme('Please Follow the mentiond steps!!! \n\n' ));


prompt.get( schema, ( err, result) => {

	process.stdout.write(`Entered Project Name is ${result.projectname} \n\n `);

	process.stdout.write(chalk.bold.green('Project Directory Created Successfully \n\n ' ));
	
	process.stdout.write(chalk.bold.blue('Moving inside the directory \n\n '));

	exec(`mkdir ${result.projectname}`, (err, stderr, stdout)=>{
		if(err){
			console.log(err +'\n\n');
			return;
		}
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		process.stdout.write(chalk.bold.black(`${stdout} \n\n `));
	});

	process.stdout.write(chalk.bold.green('Seting up the project directory for you \n\n '));

	const folderCreatingString = `cd ${result.projectname} && mkdir pages, components, modules, public`
	exec(folderCreatingString, (err, stderr, stdout)=>{
		if(err){
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		}
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		process.stdout.write(chalk.bold.green(`Project Setup Done \n\n`));
		console.log(chalk.bold.black(`${stdout} \n\n`));
	});

	process.stdout.write(messageTheme('Creating package.json file \n\n '));

	const packageFilePath = path.join(__dirname + `/${result.projectname}` +'/package.json');

	fs.appendFileSync(packageFilePath, packageFileCode, (err) => {
		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		process.stdout.write(chalk.bold.green(`package.json file scripts added successfully \n\n`));
	});
	

	process.stdout.write(chalk.bold.yellow('Creating index.js file inside pages folder \n\n '));

	const indexFilePath = path.join(__dirname + `/${result.projectname}` + '/pages/index.js');

	fs.writeFileSync(indexFilePath, indexFileCode, (err) => {
		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		process.stdout.write(chalk.bold.black(`Index.js file code added inside pages folder \n\n`));
	});

	process.stdout.write(chalk.bold.green(`Index.js file inside pages added successfully \n\n`));

	process.stdout.write(messageTheme(' Installing next, react and react-dom npm package\n\n '));

	process.stdout.write(chalk.bold.green(`This will take time, PLEASE WAIT! \n\n`));

	exec(`cd ${result.projectname} && yarn add next react react-dom`, { stdio: 'inherit' }, 
	(err, stderr, stdout) => {
		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		console.log(chalk.bold.green(`${stdout} \n\n`));
	});
	process.stdout.write(chalk.bold.green(`next, react, react-dom packages added successfully \n\n`));


	process.stdout.write(chalk.bold.blue(' Installing styled-components and babel-plugin-styled-components npm package\n\n '));

	process.stdout.write(chalk.bold.green(`This will take time, PLEASE WAIT! \n\n`));


	exec(`cd ${result.projectname} && yarn add styled-components babel-plugin-styled-components`,{ stdio: 'inherit' } ,
	 ( err, stderr, stdout ) =>{
		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		console.log(chalk.bold.green(`${stdout} \n\n`));
	});
	process.stdout.write(chalk.bold.green(`styled-components babel-plugin-styled-components added successfully \n\n`));

	process.stdout.write(messageTheme('Initializing next js project by running "yarn run dev" \n\n '));

	exec(`cd ${result.projectname} && yarn run dev`, { stdio: 'inherit' }, ( err, stderr, stdout ) => {

		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		console.log(chalk.bold.green(`${stdout} \n\n`));
	});
});
