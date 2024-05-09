// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {

    if (license === "None") {
      return ""
    } else {
      // need to adapt license to url format
      let licenseStr = ""

      // license badges: https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d
      if (license === "Apache 2.0") {
        licenseStr = "Apache%202.0-blue";
      } else if (license === "BSD 3-Clause") {
        licenseStr = "BSD%203--Clause-blue";
      } else if (license === "GNU GPL v3") {
        licenseStr = "GPL%20v3-blue";
      } else  if (license === "MIT") {
        licenseStr = "MIT-yellow";
      } else {
        licenseStr = "MPL%202.0-brightgreen";
      }

      // create markdown of badge
      const badge = `[![License: ${license}](https://img.shields.io/badge/License-${licenseStr}.svg)](${renderLicenseLink(license)})`;
      
      return badge;
    }
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let link = ""

  // if there is no license, return an empty string
  if (license === "None") {
    return link;
  // otherwise, create link
  } else {
    // GNU GPL v3 uses a different base link
    if (license === "GNU GPL v3") {
      link = "https://www.gnu.org/licenses/gpl-3.0";
    } else {
      // format mozilla license correctly
      if (license === "Mozilla Public License 2.0") {
        license = "MPL-2.0";
      } else {
        // replace spaces in license with a dash
        // src: https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case
        license = license.replace(/\s+/g, "-");
      }

      link = `https://opensource.org/license/${license}`;
    }

    return link;
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if there is no license, return an empty string
  if (license === "None") {
    return ""
    // otherwise return markdown of license section
  } else {
    const section = `## License
This project is licensed under the ${license} license.`;
    
    return section;
  }

}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projName}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.desc}

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, run the following command
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  If you any questions about the repo, open an issue or contant me directly at ${data.email}. You can find more of my work at [${data.user}](https://github.com/${data.user}).
`;
}

module.exports = generateMarkdown;
