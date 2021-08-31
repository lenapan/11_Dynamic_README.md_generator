// function to generate markdown for README
function generateMarkdown(response) {
  function render(license){
    if (license !== "None"){
      return(
        `## License
        This project is licensed under the ${response.license} license.
        `
      )
    }
    return ''
  }

  return `# ${response.project}

  ## Description
  ${response.summary}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)

  * [Contribution](#Contribution)
  * [Tests](#tests)
  
  ${render(response.license)}
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`bash
  ${response.dependencies} 
  \`\`\`

  ## Usage
  ${response.repoUsage}

  ## Contribution
  ${response.contribution}

  ## Tests
  To run tests, run the following command:
  
  \`\`\`bash
  ${response.testRun}
  \`\`\`
  
  ## Questions?
  Contact me directly at ${response.contact}
`;
}
module.exports = generateMarkdown;
