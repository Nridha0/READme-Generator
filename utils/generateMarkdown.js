
const fs = require('fs');

function renderLicenseBadge(license) {
if (!license) {
  return ``;
} else{
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
}
}


function renderLicenseLink(license) {
if (license === 'Apache'){
  return `https://opensource.org/licenses/Apache-2.0`
}
if (license === 'MIT'){
  return `https://opensource.org/licenses/MIT`
}
if (license === 'GNU'){
  return `https://www.gnu.org/licenses/gpl-3.0`
}
if (license === 'mozilla'){
  return `https://opensource.org/licenses/MPL-2.0`
}
}

function renderLicenseSection(license) {
if (!license){
  return``;
}else{
  return `## licenses
  this repository has the ${license} license` 
}
}


function generateMarkdown(data) {
return `# ${data.title}

##title

-[description](#description)
-[about](#about)
-[installation](#installation)
-[usage](#usage)
-[license](#license)
-[contribution](#contribution)
-[tests](#tests)
-[questions](#questions)

##Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##License
${renderLicenseBadge(data.license)}

##Contribution
${data.contribution}

##Tests
${data.tests}

##Questios
if you have any question about this project check contacts info below
GitHub https://github.com/Nridha0
Email: ${data.email}

##Credits 
${data.name}

`;
}

module.exports = generateMarkdown;
