export default function Login() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col bg-white shadow-2xl rounded-s-4xl p-8  w-full max-w-md">
            <h2 className="text-4xl font-bold mb-3 ">Bem vindo</h2>
            <p className="text-gray-400 mb-8 ">Bem-vindo de volta! Por favor, insira seus dados.</p>
            
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
            
            <button className="w-full border border-gray-300 text-md p-3 rounded-lg mt-4 flex items-center justify-center hover:bg-gray-200 hover:text-white">
                <img src={`https://logopng.com.br/logos/google-37.png`} alt="foto" className="w-6 h-6 mr-2" />Entre com o Google
            </button>
            <div className="text-center text-gray-400 mt-3">
                Não tem conta? 
             <span className="font-bold text-black"> Se inscreva de graça</span>
            </div>
        </div>
        <div className="relative">
            <img src={`https://img.freepik.com/vetores-premium/conjunto-de-icones-de-estilo-plano-de-cinema-e-filme_185107-63.jpg`} alt=""  className="w-[400px] h-[533px] hidden rounded-r-4xl md:block object-cover "/>
            <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 rounded md:block ">
                <div className="text-white text-xl">aldijswjsnwjnswjnswjdiealJJJalalaalalallaallala</div>
            </div>
        </div>
    </div>
       
        


    )
}