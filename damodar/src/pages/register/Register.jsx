import "tailwindcss";

function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800  to-gray-900 text-white">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-500 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;