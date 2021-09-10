
import datas from "../book";
import Book from './Book';


function Books(props) {

    console.log(props);
    let books = datas.books;
    let text = props.inputText;
    books = books.filter((book) => {
        return text ? book.title.toLowerCase().includes(text.toLowerCase()) : true
    })

    return (
        <main className="flex-80 p-8 bg-blue-200">
            <div className="my-6">
                <input type="text" placeholder="Search" className="p-2 rounded-md w-96" value={props.inputText} onChange={props.handleChange} />
            </div>
            <section className="flex flex-wrap">
                {
                    books.map((book) => {
                        return < Book data={book} key={book.isbn} />
                    })
                }
            </section>
        </main>
    )
}


export default Books;