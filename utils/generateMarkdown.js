// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    let badge = "";
     
    switch(license) {
        
        case 'Apache': 
        badge = `![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
        break;

        case 'Boost':
            badge = `![License Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
            break;

        case 'Eclipse':
            badge = `![License Eclipse](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
            break;

        case 'IBM':
            badge = `![License  1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
            break;

        case 'MIT':
            badge = `![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;    
            break;

        case 'None':
            badge = '';
            break;

    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
    let licenseLink = "";

    switch(license) {
        
        case 'Apache':
            licenseLink = `[License Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
            break;

        case 'Boost':
            licenseLink = `[License Boost](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        
        case 'Eclipse':
            licenseLink = `[License Eclipse](https://opensource.org/licenses/EPL-1.0)`;
            break;   

        case 'IBM':
            licenseLink = `[License IBM](https://opensource.org/licenses/IPL-1.0)`;
            break;

        case 'MIT':
            licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
            break;    

        case 'None':
            licenseLink = '';
            break;

    }

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    let licenseSec = "";
    
    switch(license) {
        
        case 'Apache':
            licenseSec = `This prject is under Apache license`;
            break;

        case 'Boost':
            licenseSec = `This project is under Boost license`;
            break;
        
        case 'Eclipse':
            licenseSec = `This project is under Eclipse license`;
            break;  

        case 'IBM':
            licenseSec = `This project is under IBM license`;
            break;

        case 'MIT':
            licenseSec = `This project is under MIT license`;
            break;    

        case 'None':
            licenseSec = '';
            break;

    }
    return licenseSec;
}
// const test = {
//     title: 'Hello',
//     description: 'A new thing'
// }
// generateMarkdown(data);

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  # Table of contents
 

  1. [Description](#description)

  2. [Installation](#installation)

  3. [Usage](#usage)

  4. ${renderLicenseLink(data.license)}

  5. [Contributing](#contributing)

  6. [Tests](#tests)

  7. [Questions](#questions)

  ## Description
  ${data.description}

  

  ## Installation
  ${data.installation}

  

  ## Usage 
  ${data.usage}

  

  ## License
 ${renderLicenseSection(data.license)}
  
  
  
  ## Contributing
  ${data.contributing}

 

  ## Tests
  ${data.tests}

 

  ## Questions
  If you have any question you can reach me at ${data.email}. 
 
  My Github profile [${data.github}](http://github.com/${data.github}).
`
;

}


module.exports = generateMarkdown;
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions