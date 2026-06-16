function generateLetter(){

    const name =
    document.getElementById(
    "name"
    ).value;

    const company =
    document.getElementById(
    "company"
    ).value;

    const position =
    document.getElementById(
    "position"
    ).value;

    const skills =
    document.getElementById(
    "skills"
    ).value;

    const experience =
    document.getElementById(
    "experience"
    ).value;

    const letter = `

Dear Hiring Manager,

I am writing to express my interest in the ${position} position at ${company}.

I possess skills in ${skills} and have experience in ${experience}. I am passionate about contributing to innovative projects and continuously improving my technical expertise.

I believe my abilities and dedication would make me a valuable addition to your organization.

Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

Sincerely,

${name}
`;

    document.getElementById(
    "output"
    ).innerText = letter;

}

function copyLetter(){

    const text =
    document.getElementById(
    "output"
    ).innerText;

    navigator.clipboard.writeText(
        text
    );

    alert(
        "Copied to clipboard!"
    );
}

function downloadLetter(){

    const text =
    document.getElementById(
    "output"
    ).innerText;

    const blob = new Blob(
        [text],
        {
            type:"text/plain"
        }
    );

    const link =
    document.createElement(
        "a"
    );

    link.href =
    URL.createObjectURL(
        blob
    );

    link.download =
    "cover_letter.txt";

    link.click();
}
