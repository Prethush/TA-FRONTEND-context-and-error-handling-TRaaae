import React from "react";

class SearchWrapper extends React.Component {

  state = {
    inputText: ""
  }

  handleChange = ({ target }) => {
    let { value } = target;
    this.setState({ inputText: value })
  }

  render() {
    console.log(this.props, "props");
    return <>{this.props.render(this.state.inputText, this.handleChange)}</>
  }
}

export default SearchWrapper;