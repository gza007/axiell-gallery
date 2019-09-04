import React from 'react';
import NavBar from './navbar';
import { Switch, Route, withRouter } from 'react-router-dom';
import ImageDetails from './image-details';
import ImageBrowser from './image-browser';
import SearchForm from './search';
import axios from 'axios';

const URL = 'http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      //userImages: [],
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

  handleSearchForm = (searchString) => {
    axios.get(`${URL}?tags=${searchString}`)
      .then(response => {
        console.log(response);
        this.setState({
          images: response.data,
        }, () => this.props.history.push('/'));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <NavBar/>
        <SearchForm
          handleSearchForm={this.handleSearchForm}
        />
        <Switch>
          {/* <Route
            exact
            path="/gallery"
            render={props => <ImageBrowser {...props} images={this.state.images} />}
          /> */}
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
          <Route
            exact
            path="/images/"
            render={(props) => <ImageBrowser {...props} searchQuery={this.state.searchQuery} />}
          />
        </Switch>
        <footer>
          <span>
            HELLO
          </span>
        </footer>
      </React.Fragment>
    );
  }
};

export default withRouter(App);
