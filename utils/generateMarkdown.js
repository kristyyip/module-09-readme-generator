// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {

    if (license === "None") {
      return ""
    } else {
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

      const badge = `[![License: ${license}]https://img.shields.io/badge/License-${licenseStr}.svg](${renderLicenseLink(license)})`;
      
      return badge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // replace spaces in license with a dash
  license.replace(" ", "-");

  // if there is no license, return an empty string
  if (license === "None") {
    return ""
  } else {
    // GNU GPL v3 uses a different base link
    if (license === "GNU GPL v3") {
      const link = "https://www.gnu.org/licenses/gpl-3.0";
    } else {
      // format mozilla license correctly
      if (license === "Mozilla Public License 2.0") {
        license = "MPL-2.0";
      }

      link = `https://opensource.org/licenses/${license}`;
    }

    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return `## License
    This project is licensed under the ${license} license.
    ${renderLicenseBadge(license)}`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
