import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class CreateDb extends PureComponent {

    state = {
      dbName: '',
      public: true
    }

    handleChange = ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value;
        
      this.setState({
        [target.name]: value
      });
    }

    render() {
      return (
        <form onSubmit={event => {
          event.preventDefault();
          console.log('poop');
        }}>
          <label>
                Database Name
            <input name="dbName" onChange={this.handleChange} value={this.state.dbName} />
          </label>
          <label>
                Public?
            <input name="public" type="checkbox" onChange={this.handleChange} checked={this.state.public} />
          </label>
          {/* consider changing state to update text */}
          <p>{this.state.public ? 'Your endpoints are PUBLIC' : 'Your endpoints are PRIVATE'}</p>
          <Link to="/dashboard">cancel</Link>
          <button>Confirm and Create Model</button>
        </form> 
      );
    }
}
