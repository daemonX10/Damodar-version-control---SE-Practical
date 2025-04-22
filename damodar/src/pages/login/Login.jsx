import "tailwindcss";

function Login() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Login Page</h1>
            <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Username" className="border p-2" />
                <input type="password" placeholder="Password" className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
            </form>
        </div>
    );
}

export default Login;