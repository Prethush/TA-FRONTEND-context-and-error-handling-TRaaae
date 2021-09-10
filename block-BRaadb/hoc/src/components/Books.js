import React from "react";
import datas from "../book";
import Book from './Book';
import withSearch from './withSearch';

class Books extends React.Component{

        render() {
            let books = datas.books;
            let text = this.props.inputText;
            books = books.filter((book) => {
                return text ? book.title.toLowerCase().includes(text.toLowerCase()) : true
            })
            
            return (
                   
                    <section className="flex flex-wrap">
                        {
                            books.map((book) => {
                                return < Book data={book} key={book.isbn}/>
                            })
                        }
                    </section>
               
            )
        }
       
    }


export default withSearch(Books);