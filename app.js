// 1. BEHAVIORAL STATE DICTIONARY
const stateContent = {
  calm: {
    message: "The interface softens. The next step feels available.",
    insight: "Calm states reduce perceived friction and make choices feel easier to approach."
  },
  focused: {
    message: "The signal becomes clearer. Distractions lose power.",
    insight: "Focused states help users prioritize what matters and ignore unnecessary noise."
  },
  overwhelmed: {
    message: "Everything feels louder. Even simple choices feel crowded.",
    insight: "Overwhelm increases cognitive load, making interfaces feel more demanding than they are."
  },
  avoidant: {
    message:"The task stays visible, but the mind moves around it.",
    insight: "Avoidance often looks like inaction, but underneath it may be protection, uncertainty, or overload."
  }

};

// 2. INTERFACE ELEMENT SELECTORS
const appContainer = document.querySelector('#app-container');
const stateButtons = document.querySelectorAll('.state-btn');
const displayMessage = document.querySelector('#display-message');
const displayInsight = document.querySelector('#display-insight');

// 3. THE BEHAVIORAL INTERACTION ENGINE
function switchInterfaceState(targetState) {

  // A. Clear any old state classes and inject the new state class onto our master wrapper container 
  appContainer.className = `state-${targetState}`;

  // B.Update the text data inside our display card dynamically
  displayMessage.textContent = stateContent[targetState].message;
  displayInsight.textContent = stateContent[targetState].insight;

  // C. Re-arrange the 'active' highlight styling on our buttons
  stateButtons.forEach(btn =>{
    if (btn.getAttribute('data-target') === targetState){
      btn.classList.add('active');
    }else {
      btn.classList.remove('active');
    }
  });
}
// 4. HUMAN CLICK EVENT LISTENERS
stateButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Grab the state name from the button's custom HTML data attribute
    const chosenState = button.getAttribute('data-target');

    //Pass the chosen state into our engine function to execute the switch
    switchInterfaceState(chosenState);
  });
});