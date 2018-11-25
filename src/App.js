import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import * as Options from './components/TruthTableService';
import ContextMenu from './components/ContextMenu';
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <ContextMenu/>
        <Table options={Options.AND_TRUTH_TABLE_OPTIONS}/>
        <Table options={Options.OR_TRUTH_TABLE_OPTIONS}/>
        <Table options={Options.LOGICAL_IMPLICATION_TRUTH_TABLE_OPTIONS}/>
        <Table options={Options.LOGICAL_EQUALITY_TRUTH_TABLE_OPTIONS}/>
        <Table options={Options.EXCLUSIVE_DISJUNCTION_TRUTH_TABLE_OPTIONS}/>
        <Table options={Options.NAND}/>
        <Table options={Options.NOR}/>
      </div>
    );
  }
}

export default App;
