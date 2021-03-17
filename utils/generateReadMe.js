function createMarkdown(data){
    return `# ${data.enterProjectName}
    
![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
## description
${data.enterDescription}
## tableOfContents
* [installation](#installation)
* [usage](#usage)
* [contributing](#contributing)
* [tests](#tests)
* [email](#email)
* [github](#github)
* [license](#license)
    
## installation
${data.Installation}
## usage
${data.Usage}
## contributing
${data.Contributing}
## tests
${data.Tests}
## email
${data.enterYourEmail}
## github
${data.enterGitHubUsername}
## license
${data.License} 
`;
    
};
module.exports = createMarkdown;
