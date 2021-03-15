import React from 'react';
import axios from 'axios';
import './App.css'


class Advise extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="advise-box">
        <div className="card">
          <h4 className="heading">{this.state.advice}</h4>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GET ANOTHER ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Advise;