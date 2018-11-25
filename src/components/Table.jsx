import React, {Component} from "react";
import './Table.css';
export default class Table extends Component {
    constructor(props){
        console.log(props);
        super(props)
    }

    renderCell(value){
        return <td className={value ? 'true_cell' : 'false_cell'}>{value.toString()}</td>
    }

    renderTBody(data,evaluator){
        return data.map((s) => {
            let cells = [
                s.p,
                s.q,
                evaluator(s.p,s.q)
            ];
            return (
                <tr key={s.id}>
                   {cells.map(s =>  this.renderCell(s))}
                </tr>  
            ); 
        })
    }

    render() {  
      return (
        <div className="Table">
          <p>{this.props.options.name}</p>
          <table >
            <thead>
                <tr>
                    <th>P</th>
                    <th>Q</th>
                    <th>P {this.props.options.label} Q</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTBody(this.props.options.data,this.props.options.evaluator)}
            </tbody>
          </table>
        </div>
      )
    }
}