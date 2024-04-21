import "./App.css";
import { useState, useEffect } from "react";
import { searchImages } from "./Api/api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

function App() {
  const [images, setImages] = useState(null);
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  //
  useEffect(() => {
    if (!search.length) return;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await searchImages(search, page);
        if (data.length === 0) {
          toast.error("Sorry, there are no more images for your request", {
            position: "top-right",
            style: {
              fontSize: "23px",
            },
          });
          return;
        }
        setImages((prevImages) => {
          if (page === 1) return data;
          return [...prevImages, ...data];
        });
      } catch (error) {
        setIsError(true);
        console.log("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [search, page]);
  //
  const onSetSearch = (query) => {
    setSearch(query);
    setPage(1);
  };
  //
  const onAddPage = () => {
    setPage(page + 1);
  };
  //
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    // console.log("Selected image:", imageUrl);
    setModalIsOpen(true);
  };
  //
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={onSetSearch} search={search} />
      {Array.isArray(images) && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {Boolean(images?.length) && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
