var inputBoxRequirements = [
  '/static/css/inputBox.css'
]

var inputBox = (className="", id="", placeholder="", label="") => {
  return `
    <div class="InputBoxDiv">
      <label for="${id}">${label}</label>
      <input class="InputBox ${className}" id="${id}" type="text" placeholder="${placeholder}" />
    </div>
  `
};
