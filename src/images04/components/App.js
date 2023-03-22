import { useEffect, useState } from "react";

import { SearchBar } from "./SearchBar/SeachBar";
import { fetchImages } from "./ImageApi/ImageApi";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Message } from "./Message/Message";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

export const App = () => {
  const [q, setQ] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);

  const [status, setStatus] = useState({ ok: "ok" });

  const handlerSearch = (q = "") => {
    if (q !== "") {
      setQ(q);
    }
  };

  const loadMore = () => {
    setPage((s) => s + 1);
  };

  useEffect(() => {
    if (q === "") {
      return;
    }
    setPage(1);
    setTotalPages(0);
    setImages([]);
  }, [q]);

  useEffect(() => {
    if (q === "") {
      return;
    }

    const getImages = async () => {
      try {
        setStatus({ do: "I'm working, wait few seconds, please." });
        const { images, totalPages } = await fetchImages(q, page);
        setImages((s) => [...s, ...images]);
        setTotalPages(totalPages);
        setStatus({ ok: "ok" });
      } catch (error) {
        setStatus({ error: "Sorry, ... something is wrong." });
        setQ("");
      }
    };

    getImages();
  }, [q, page]);

  return (
    <>
      <SearchBar onSubmit={handlerSearch} />
      {status.error && <Message type={"error"}>{status.error}</Message>}
      {images.length !== 0 && <ImageGallery images={images} />}
      {totalPages > 0 && page < totalPages && status.ok && (
        <Button onClick={loadMore} />
      )}
      {(page === totalPages || totalPages === 0) && q !== "" && status.ok && (
        <Message>that's all the pictures</Message>
      )}
      {status.do && <Loader />}
    </>
  );
};
