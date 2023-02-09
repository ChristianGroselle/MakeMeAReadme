// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = [
    {
      name: "Apache",
      badge:
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
    {
      name: "Boost",
      badge:
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },
    {
      name: "BSD 3-Clause",
      badge:
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    },
    {
      name: "CC0",
      badge:
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    },
    {
      name: "Eclipse",
      badge:
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    },
    {
      name: "GNU GPL v3",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    {
      name: "The Hippocratic License 2.1",
      badge:
        "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    },
    {
      name: "IBM",
      badge:
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    },
    {
      name: "ISC",
      badge:
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    },
    {
      name: "MIT",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
    {
      name: "Mozilla",
      badge:
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    },
    {
      name: "Pearl",
      badge:
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },
    {
      name: "SIL",
      badge:
        "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    },
    {
      name: "Zlib",
      badge:
        "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    },
  ];

  if (license) {
    for (let i = 0; i < licenses.length; i++) {
      if (license === licenses[i].name) {
        return licenses[i].badge;
      }
    }
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(
    data.license
  )}\n\n## Description \n${data.description} \n\n## Table of Contents \n
  ---

  -[Description](#description) \n
  -[Installation](#installation) \n
  -[Usage](#usage) \n
  -[Contributing](#contributing) \n
  -[Tests](#tests) \n
  -[License](#license) \n
  -[Questions](#questions) \n
  -[Additional contact info](#additional-contact-info)

  \n\n## Installation \n
  ---
  \n${data.installation} \n\n## Usage \n
  ---
  \n${data.usage} \n\n## Contributing \n
  --- 
  \n${data.contributing} \n\n## Tests \n
  --- 
  \n${data.tests} \n\n## License \n
  --- 
  \n This project uses the ${data.license} license. \n\n## Questions \n
  --- 
  \n${data.questions} \n\n## Additional contact info \n
  --- 
  \n${data.email}`;
}

module.exports = generateMarkdown;
