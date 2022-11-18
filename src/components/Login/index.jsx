import { useState, useEffect, React } from "react";
import { Navigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

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

async function doLoginWithGoogle(token) {
    // Sesuaikan endpoint
    const response = await fetch("https://challenge-06-production.up.railway.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token
        }),
    });
    const data = await response.json();
    return data.token;
}

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const haldleSuccessGoogle = (response) => {
        console.log(response);
        console.log(response.credential);
        if(response.credential) {
          doLoginWithGoogle(response.credential)
            .then((token) => {
                localStorage.setItem("token", token);
                setIsLoggedIn(token);
              })
            .catch((err) => console.log(err.message))
        }
      }
    
      const haldleFailureGoogle = (response) => {
        console.log(response);
        alert(response);
      }

    return (
        !isLoggedIn ? (
            <form className="container"style={{ width: "430px", height: "155px", backgroundColor: "#f1f3ff"}}>
                <h1 style={{textAlign: "center"}}>
                    Please Login
                </h1>

                <p className="text-center">
                    with your google account
                </p>

                {/* <!-- Submit button --> */}
                <div className="row">
                        <div className="mx-5 px-5" style={{textAlign: "center"}}>
                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    haldleSuccessGoogle(credentialResponse)
                                }}
                                onError={() => {
                                    haldleFailureGoogle("error Login")
                                }}
                            />
                        </GoogleOAuthProvider>
                        </div>
                </div>
                
                <br></br>
                
            </form>
        )
            : (<Navigate to={'/cars'} />
            )
    );
}

export default Login;

