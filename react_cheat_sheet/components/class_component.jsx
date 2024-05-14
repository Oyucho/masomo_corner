class Karibu extends React.Componet {
    render() {
        return <h1>Habari ya siku yako?{this.props.name}</h1>
    }
}

// Creating functional components with State

class Counter extends React.Components {
    constructor(props) {
        super(props);
        this.state ={ count:0};
    
    }

    componentDidMount () {
        //ComponentDidMount: code to run after the component mounts
    }

    componentDidUpdate () {
        //ComponentDidUpdate: code to run after updating occurs
    }

    componentDidUnmount () {
        //ComponentDidUnmount: cleanup before component unmounts
    }

    
    render () {
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount ({count: this.state.count + 1)}>Click Me </button>
            </div>
        );
    }
}