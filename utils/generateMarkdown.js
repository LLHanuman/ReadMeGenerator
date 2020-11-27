// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.Title}
    ## Description:
    ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
    ${data.Description}
    # ${data.usage}
    ${data.Instructions}

  
    ${data.ToC}
    - [Description](#Description)
    - [Contributing](#contributing)
    - [Test](#tests)
    - [License](#license)
    - [Questions](#questions)
    ## License:
    For more information about the license, click the link below:
    - [License](https://opensource.org/licenses/${data.Licence})
    ## Contributing:
    ${data.contributing}
    ## Tests:
    ${data.Tests}
    ## Questions:
    ${data.Questions}
    For more information about the Generator, please reach out to me via my GitHub profile.
    -[GitHub Profile](https://github.com/${data.Github})
    For any other questions, please send me an email at: ${data.Email}.
  `;
}

module.exports = generateMarkdown;