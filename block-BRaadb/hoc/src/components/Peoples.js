import React from "react";
import datas from "../data";
import People from './People';
import "../style/style.css";
import withSearch from './withSearch';

class Peoples extends React.Component{
    
        render() {
            let everyone = datas.houses.reduce((acc, curr) => {
                let people =  curr.people.reduce((a,c) => {
                     return a.concat(c);
                 }, [])
                 return acc.concat(people);
             }, []);
             let text = this.props.inputText;
             
             everyone = everyone.filter((e) => {
                return  text ? (e.name.toLowerCase().includes(text.toLowerCase())) : true
             });
             
             
     
             return (
                     <section className="flex justify-between flex-wrap">
                        {
                            everyone.map((people) => {
                                return < People data={people} key={people.name}/>
                            })
                        }
                     </section>
               
                 )
            }
        
        }


export default withSearch(Peoples);