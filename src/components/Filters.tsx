import * as React from 'react';

export interface FiltersProps {
    filters: Array<string>
    
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
         {
             this.props.filters.map(eachFilter => (<p>{eachFilter}</p>))
         }
        </>);
    }
}
 
export default Filters;