import React, { Component } from 'react';
// components
import SearchFormView from './SearchFormView';

export default class SearchFormContainer extends Component {
  render() {
    return (
      <div>
        <SearchFormView onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
