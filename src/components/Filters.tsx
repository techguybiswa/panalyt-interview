import * as React from 'react';

export interface FiltersProps {
    
}
 
export interface FiltersState {
    title: string
}
 
class Filters extends React.Component<FiltersProps, FiltersState> {
    constructor(props: FiltersProps) {
        super(props);
        this.state = { title : "Filter"  };
    }
    render() { 
        return (  <>
         {this.state.title}
        </>);
    }
}
 
export default Filters;