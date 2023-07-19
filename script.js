let showCommand = (event) => {
    event.preventDefault(); 
    // Prevent the default form submission behavior 
    //which is refreshing the page

    console.log("show command is working.");

    // Write the correct code
    writecode();

    // Get the element by its class
    var myDiv = document.querySelector('.message');

    // Change the display property to make it visible
    myDiv.style.visibility="visible";
};

let writecode = () => {
    console.log("writecode is working");
    
    // Initialize the codeBlock variable
    let codeBlock = document.querySelector("div.code-block>pre>code");
    
    // Now making the text
    
    // Getting the software name
    let softwareName = document.querySelector('input[name="name"]').value;
    
    // Getting the URL
    let inputURL = document.querySelector("#url").value;
    
    // The output text
    let lines = `curl -sS <span class="math-inline">${inputURL} | gpg --dearmor |sudo tee /usr/share/keyrings/${softwareName}.gpg
    
    deb [signed-by=/usr/share/keyrings/${softwareName}.gpg] <span class="math-inline">${inputURL}  |sudo tee /etc/apt/sources.list.d/${softwareName}.list`;
    
    //to write to code
    codeBlock.innerHTML = lines;
    
    };

function copyCode() {
    var codeBlock = document.querySelector('.code-block');
    var code = codeBlock.querySelector('code');

    var range = document.createRange();
    range.selectNode(code);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // let copytext = code.innerText;

    navigator.clipboard.writeText(copytext)
        .then(() => {
            alert('Code copied!');
        })
        .catch((error) => {
            console.error('Unable to copy code:', error);
        });
};
