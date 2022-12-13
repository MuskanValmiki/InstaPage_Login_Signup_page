const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `SignUp` : LOrSBtn.innerHTML = `Login`

    loginBoolean ? container.innerHTML += `<div id="login">
<h1>Instagram</h1>
<input type="email" class="email" placeholder="Phone number,username or email">
<input type="password" class="password" placeholder="password">
<button class="BTN1">Login</button>
<div id="or">
<h6>____________________</h6>
<h5 id="OR">OR</h5>
<h6>____________________</h6>
</div>
<div id="fb">
<img src="https://www.voicesofyouth.org/modules/contrib/social_auth_facebook/img/facebook_logo.svg" height="50px" width="20%" class="facebook" alt="">
<h3>Log in with Facebook.</h3>
</div>
<h5 id="forget">forget password ?</h5>
<div id="small_box">
<h4 id="text">Don't have an account ? </h4>
<h4 id="sign_up"> Sign Up</h4>
</div>
<div id="app">
<center><h3>Get the app .</h3></center>
<div id="apps">
<img src="https://cdn2.freedom.to/assets/app-store-badge-66a5f61678d9f1e072023ba6236cc08fae7e7a594aaecb02d852e5947c644d0c.png" alt="" height="40px" class="android">
<img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" alt="" height="40px" class="google">
</div>
</div>
</div>`: container.innerHTML += ` <div id="login">
<input type="text" class="name" placeholder="name">
<input type="email"  class="Email" placeholder="email">
<input type="password" class="Password1" placeholder="password">
<button class="BTN2">Signup</button>
</div>`
}
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML=''
    displayFunction()
})