function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900  to-black-800 text-white">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to My App</h1>
            <p className="text-xl mb-2">A beautifully styled app for version control.</p>
            <p className="text-md text-gray-200 mb-8">Built with React and Tailwind CSS</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all">
                    Go to Login
                </a>
                <a href="/register" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all">
                    Go to Register
                </a>
                <a href="/" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all">
                    Go to Home
                </a>
            </div>
        </div>
    );
}

export default Home;