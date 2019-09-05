import React from 'react';
import NavBar from './navbar';
import { Switch, Route, withRouter } from 'react-router-dom';
import ImageDetails from './image-details';
import ImageBrowser from './image-browser';
import axios from 'axios';
import '../css/app.css';


const URL = 'http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchQuery: [],
      error: false,
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios.get(`${URL}`)
      .then(response => {
        this.setState({ images: response.data.media });
      })
      .catch(() => {
        this.setState({ error: true });
        alert('Error. Please try again');
      });
  };

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <ImageBrowser {...props} images={this.state.images} />}
          />
          <Route
            exact
            path="/image/:id"
            render={(props) => <ImageDetails {...props} />}
          />
        </Switch>
        <footer className="footer">
          <span className="footer-text">
            Axiell Art Gallery 2019.
          </span>
        </footer>
      </React.Fragment>
    );
  }
};

export default withRouter(App);
