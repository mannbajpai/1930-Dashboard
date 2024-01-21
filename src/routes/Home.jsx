import { useState } from "react";
import { Header, Footer } from "../components"
import { useNavigate } from "react-router-dom"

export default function Signin() {

    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin"){
            if (password === "admin"){
                navigate("/dashboard");
            }
        } else {
            setError(true);
        }

    }
    return (
        <div className="m-0 bg-base-200 h-screen items-center text-center">
            <Header />
            <div className="my-4 mx-32 flex card w-96 bg-base-100 shadow-xl left-72">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                            {error && <span>Wrong username or password!</span>}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}