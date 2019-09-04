import React from 'react';
import '../css/search-bar.css';

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    return (
      <div className="searchBar">
        <input type="text" className="search-field" placeholder="Search" onChange={this.handleInputChange} value={this.state.searchText} />
        <button onClick={() => this.props.handleSearchForm(this.state.searchText)}>Search</button>
        <br />
        <br />
      </div>
    );
  }
}

export default SearchForm;
