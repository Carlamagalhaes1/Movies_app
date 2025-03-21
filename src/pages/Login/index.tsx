export default function Login() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-8  space-y-6 w-full max-w-md">
            <h2 className="text-4xl font-bold mb-3 text-center">Bem vindo</h2>
            <p className="text-gray-400 mb-8 text-center">Bem-vindo de volta! Por favor, insira seus dados.</p>
            
            <label htmlFor="email" className="text-md mb-2">Email</label>
            <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-500" />
            
            <label htmlFor="pass" className="text-md mb-2">Senha</label>
            <input type="password" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-500" />
            
            <div className="flex justify-between items-center mt-4">
                <label className="flex items-center">
                    <input type="checkbox" id="ch" className="mr-2" />
                    <span className="text-md">Lembre-se por 30 dias!</span>
                </label>
                <a href="#" className="font-bold text-md text-blue-500 hover:underline">Esquecer senha</a>
            </div>
            
            <button className="w-full bg-black text-white p-3 rounded-lg mt-6 hover:bg-gray-800">Fazer Login</button>
            
            <button className="w-full border border-gray-300 text-md p-3 rounded-lg mt-4 flex items-center justify-center hover:bg-black hover:text-white">
                <img src={``} alt="foto" className="w-6 h-6 mr-2" /> 
            </button>
        </div>
    </div>
       
        


    )
}