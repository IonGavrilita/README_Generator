// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of contents
  * [About the project](#About-the-project)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
      
  ### About the project
      ${data.description}
     
  ### Installation
      ${data.installation}
  ### Usage
      ${data.usage}    
  ### Contributors
      ${data.contributors}    
  ### Tests
      ${data.tests}    
  ### License
      ${data.license}
  ### Questions
  Email: <${data.email}>
  GitHub Profile: [my repository](http://github.com/${data.name})
`;
}

module.exports = generateMarkdown;
