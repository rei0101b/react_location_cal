import React, { Component } from 'react';
import styles from './SearchForm.css';

class SearchFrom extends Component {
  state={
    place: '',
  }

  onChangeHander = (e) => {
    this.setState({place: e.target.value})
  }

  handleSubmit = () => {
    this.props.onClick(this.state.place)
  }

  render(){
    return(
      <form className={styles.searchForm}>
        <input
          type="text"
          className={styles.input}
          onChange={(e)=>this.onChangeHander(e)}
          value={this.state.place}/>
        <input
          type="button"
          className={styles.button}
          value="検索"
          onClick={() => this.handleSubmit()}
          />
      </form>
    )
  }
}

export default SearchFrom
