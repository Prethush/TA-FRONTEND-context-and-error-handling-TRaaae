import React, { Component } from "react";


const withSearch = (Component, data) => {

    return class NewApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputText: ""
            }
        }

        handleChange = ({ target }) => {
            let { value } = target;
            this.setState({ inputText: value })
        }

        render() {
            return (
                <main className="p-8 bg-blue-200 flex-80">
                    <div className="my-6">
                        <input type="text" value={this.state.inputText} placeholder="Search" onChange={this.handleChange} className="p-2 rounded-md w-96" />
                    </div>
                    < Component
                        inputText={this.state.inputText}
                        handleChange={this.handleChange}
                    />
                </main>
            )
        }
    }
}


export default withSearch;