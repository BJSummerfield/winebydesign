class Form {
  constructor() {
    this.html = `
      <div class="form">
        <form id="contact" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdjpquaXUdCUArokMTAIUQIDzoVr8RYU7WAAJSdWeH-qdrHZA/formResponse" method="POST">
          <div class="title">Welcome</div>
          <div class="subtitle">Fill out the form to inquire about our custom wines</div>
          <div class="input-container ic1">
            <input id="firstname" class="input" type="text" placeholder=" " name='entry.2005620554' />
            <div class="cut"></div>
            <label for="firstname" class="placeholder" >First name</label>
          </div>
          <div class="input-container ic2">
            <input id="lastname" class="input" type="text" placeholder=" " name='entry.1065046570'/>
            <div class="cut"></div>
            <label for="lastname" class="placeholder">Last name</label>
          </div>
          <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " name="entry.1045781291" />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Email</label>
          </div>
          <button type="text" class="submit">submit</button>
        </form>
      </div>`
  }
};

export default Form