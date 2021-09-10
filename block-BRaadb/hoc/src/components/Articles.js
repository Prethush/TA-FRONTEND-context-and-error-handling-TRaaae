import React from "react";
import datas from "../articles";
import {Link} from "react-router-dom";
import withSearch from "./withSearch";

class Articles extends React.Component {
       
    render() {
        let text = this.props.inputText;
        let articles = datas.filter((data) => {
            return text ? data.title.toLowerCase().includes(text.toLowerCase()) : true
        })
        return (
                <section className="my-6">
                    {
                       articles.map((data) => {
                           return (
                               <div key={data.slug} className="my-2">
                                   <Link to={`/articles/${data.slug}`}>
                                        <h2 className="text-blue-700 text-2xl font-bold underline mb-2 inline-block">{data.title}</h2>
                                   </Link>
                                   <h4>{data.author}</h4>
                               </div>
                           )
                       })
                    }
                </section>
            
            )
        }
        
    }
    

export default withSearch(Articles);