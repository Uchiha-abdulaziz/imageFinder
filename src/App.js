import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    per_page: 9,
    isLoading: false,
  };

  fatchImages = async () => {
    const { query, per_page } = this.state;
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=34695797-1fae3d9441fb187335514c8af&q=${query}&image_type=photo&per_page=${per_page}`
        )
        .then((response) => {
          const data = response.data.hits;
          this.setState({ images: data });
        });
    } catch (error) {
      console.log(
        " Ошибка при запросе componentDidMount error App.js: " + error
      );
    }
  };

  componentDidMount() {
    this.fatchImages();
  }

  onSubmit = (query) => {
    this.setState({ query, isLoading: true, images: [] });
  };

  loadImages = async () => {
    const { page, per_page, images, query } = this.state;
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=28598653-ac578a657988498e7082adc71&q=${query}&image_type=video&per_page=${per_page}&page=${page} `
      );
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        isLoading: false,
      }));
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidUpdate() {
    const { isLoading } = this.state;

    if (isLoading) {
      this.loadImages();
    }
  }

  // запрос на фота с п жизненного цикла

  render() {
    const { images } = this.state;
    return (
      <>
        <div>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery images={images} />
        </div>
      </>
    );
  }
}
