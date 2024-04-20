import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect } from "react";
import { searchImages } from "./Api/api";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    searchImages(searchTerm)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  useEffect(() => {
    searchImages()
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} search={search} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
