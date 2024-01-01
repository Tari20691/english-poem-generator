function displayPoem(response){
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 5,
      });
    }
   
     
function generatePoem(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey ="o1b51294bd100044e1tab17f08833d34";
let context = "You are a romantic poet who traveled the world, you love to write short poems. Your mission is always be polite ad generate a 4 line poem in basic HTML and make sure you follow the user instructions. And do not include a title to the poem and sign the Poem with 'SheCodes AI' inside a <strong> element at the end of the poem in the fiths line";
let prompt =`User instructions: Please write a english poem about ${instructionsInput.value}`;
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

