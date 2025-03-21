export default function Login() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Bem vindo</span>
                    <span className="font-light text-gray-400 mb-8">Bem-vindo de volta! Por favor, insira seus dados."</span>
                    <div className="py-4">
                        <span className="mb-2 text-md">Email</span>
                        <input type="text"  name="email" id="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:light placeholder:text-gray-500"/>
                    </div>
                </div>
                <div className="py-4">
                    <span className="mb-2 text-md">Senha</span>
                    <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                </div>
                <div className="relative"></div>
            </div>
        </div>


    )
}