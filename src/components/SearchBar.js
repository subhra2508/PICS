import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // onInputChange(e){
  //     console.log(e.target.value);
  // }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
//Don't put () on onInputChange because it's a callback function,if we put a parenthesis then its called
//everytime searchBar component is called.
//<input type="text" onChange={(event) => console.log(event.target.value)}>//we don't have to define any separate methods

//<input type="text" onChange={this.onInputChange}></input>

//this undefine error fix
// onFormSubmit = (e) =>{
//     e.preventDefault();
//     console.log(this.state.term);
// };
