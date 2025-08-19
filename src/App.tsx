import { useState } from "react";
import MoviesList from "./components/MoviesList";
import Layout from "./layout";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout onSearch={setSearchQuery}>
      <MoviesList searchQuery={searchQuery} />
    </Layout>
  );
}

export default App;
