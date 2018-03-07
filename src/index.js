import React from "react";
import { render } from "react-dom";
import Gallery from "bacon-slider";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryOpen: false
    };
  }

  handleOpenGallery = () => {
    this.setState({
      galleryOpen: true
    });
  };

  handleCloseGallery = () => {
    this.setState({
      galleryOpen: false
    });
  };

  render() {
    const { galleryOpen } = this.state;
    const imageUrls = [
      "https://picsum.photos/200/300?image=1080",
      "https://picsum.photos/200/300?image=674",
      "https://picsum.photos/200/300?image=429"
    ];
    return (
      <div style={styles}>
        <h1>Bacon-Slider Examples</h1>
        <button onClick={this.handleOpenGallery}>Show me the bacon</button>
        <Gallery
          isOpen={galleryOpen}
          images={imageUrls}
          handleCloseGallery={this.handleCloseGallery}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
