export default function NavBar() {
    return (
        <nav className="bg-blue-950 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-3 gap-3">
                <h1 className="text-2xl font-bold text-white">
                    Melhores Lançamentos de Filmes de 2024/2025
                </h1>
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Pesquisar filme"
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>
        </nav>
    );
}
