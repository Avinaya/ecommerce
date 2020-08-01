import React from 'react'

class Quantity extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
      };
    }
  
    IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity < 10) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }
    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 1) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }
    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
  
      return ( <div className="d-inline">
        <span className="mr-3">Quantity:</span>
        <button className="quantity-btn" onClick={this.IncrementItem}>+</button>
         <input disabled className="quantity-btn-input" value={this.state.quantity} onChange={this.handleChange}/>
        <button className="quantity-btn"  onClick = {this.DecreaseItem}>- </button>
        </div>
      );
    }
}

export default Quantity