import React from "react";
import "./SignIn.css";

const SignIn = ({onRouteChange}) => {

    return (
        <div className="full">
            <div className={"signIn-container"}>  	
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button onClick={() => onRouteChange("home")} type="submit">Login</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;