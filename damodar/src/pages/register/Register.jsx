import "tailwindcss";

function Register() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Register Page</h1>
            <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Username" className="border p-2" />
                <input type="email" placeholder="Email" className="border p-2" />
                <input type="password" placeholder="Password" className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
            </form>
        </div>
    );
}

export default Register;