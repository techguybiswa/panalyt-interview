import * as React from 'react';

export interface TableViewProps {
    
}
 
export interface TableViewState {
    title: string
}
 
class TableView extends React.Component<TableViewProps, TableViewState> {
    constructor(props: TableViewProps) {
        super(props);
        this.state = { title: "This is table"  };
    }
    render() { 
        return (  <>
        
        <h1>{this.state.title}</h1>
        </>);
    }
}
 
export default TableView;