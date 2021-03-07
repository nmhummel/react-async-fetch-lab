import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
    }

    render() {
        return (
            <div>
                { this.state.peopleInSpace.map((person, id) => <p key={id}>{person.name}</p>) }
            </div>
        )
    }

}

export default App;