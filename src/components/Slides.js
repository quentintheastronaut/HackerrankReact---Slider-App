import { render } from '@testing-library/react';
import React from 'react';

class Slides extends React.PureComponent {
    constructor({slides}){
        super()
        this.state = {
            step : 0,
            slides : slides

        }
        this.restart = this.restart.bind(this)
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }

    restart(){
        this.setState({
            step : 0
        })
    }

    prev(){
        this.setState(prevState => {
            const newState = prevState.step
            return {
                step : newState-1
            }
        })
    }

    next(){
        this.setState(prevState => {
            const newState = prevState.step
            return {
                step : newState+1
            }
        })
    }



    

    render(){
        return (
            <div>
                <div id="navigation" className="text-center">
                    <button data-testid="button-restart" className="small outlined" onClick={this.restart} disabled={this.state.step === 0 }>Restart</button>
                    <button data-testid="button-prev" className="small" onClick={this.prev} disabled={this.state.step === 0 }>Prev</button>
                    <button data-testid="button-next" className="small" onClick={this.next} disabled={this.state.step === this.state.slides.length -1 }>Next</button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{this.state.slides[this.state.step].title}</h1>
                    <p data-testid="text">{this.state.slides[this.state.step].text}</p>
                </div>
            </div>
        );
    }

}

export default Slides;
