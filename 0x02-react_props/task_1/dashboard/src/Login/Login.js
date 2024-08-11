import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <React.Fragment>
            <div className="Login">
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" name="password" id="password" />
                    <br />
                    <input type="submit" value="OK" />
                </form>
            </div>
        </React.Fragment>
    );
}
