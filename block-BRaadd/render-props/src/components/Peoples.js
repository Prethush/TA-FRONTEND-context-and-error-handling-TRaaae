
import datas from "../data";
import People from './People';
import "../style/style.css";

function Peoples(props) {

    let everyone = datas.houses.reduce((acc, curr) => {
        let people = curr.people.reduce((a, c) => {
            return a.concat(c);
        }, [])
        return acc.concat(people);
    }, []);
    let text = props.inputText;

    everyone = everyone.filter((e) => {
        return text ? (e.name.toLowerCase().includes(text.toLowerCase())) : true
    });



    return (
        <main className="p-8 bg-blue-200 flex-80">
            <div className="my-6">
                <input type="text" placeholder="Search" className="p-2 rounded-md w-96" value={props.inputText} onChange={props.handleChange} />
            </div>
            <section className="flex justify-between flex-wrap">
                {
                    everyone.map((people) => {
                        return < People data={people} key={people.name} />
                    })
                }
            </section>
        </main>
    )
}


export default Peoples;