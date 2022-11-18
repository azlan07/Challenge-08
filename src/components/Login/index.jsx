import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

async function doLogin({ email, password }) {
    // Gunakan endpoint-mu sendiri
    const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return data.token;
}

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        doLogin({ email, password })
            .then((token) => localStorage.setItem("token", token))
            .catch((err) => console.log(err.message))
            .finally(() => setIsLoading(false));
    }

    return (
        !isLoggedIn ? (
            <form className="container" onSubmit={handleSubmit} style={{ width: "430px", height: "415px", backgroundColor: "#f1f3ff"}}>
                <h1 style={{textAlign: "center"}}>
                    Please Login
                </h1>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* <!-- Submit button --> */}
                <div className="row">
                        <div style={{textAlign: "center"}}>
                            <button type="submit" className="btn btn-primary btn-block mb-4">
                            SIGN IN
                            </button>
                        </div>
                        <p style={{textAlign: "center"}}>
                            Or
                        </p>
                </div>
                
                <br></br>
                
            </form>
        )
            : (<Navigate to={'/cars'} />
            )
    );
}

export default Login;

