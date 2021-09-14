import React from "react";

class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true, error, errorInfo});
  }
  
  render() {
    if(this.state.hasError) {
      return this.props.render();
    }
    return this.props.children;
  }
}

export default ErrorBoundary;