import * as React from 'react';

export interface TableProps {
    
}
 
export interface TableState {
    title: string
}
 
class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);
        this.state = { title: "This is table"  };
    }
    render() { 
        return (  <>
        
        <h1>{this.state.title}</h1>
        </>);
    }
}
 
export default Table;