import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';

export default class ModelNameForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    modelNameShow: PropTypes.bool.isRequired
  }

  state = {
    mdlName: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const showHideClassName = this.props.modelNameShow ? 'display-block' : 'display-none';
    return (
      <form className={styles[showHideClassName]} onSubmit={this.handleSubmit}>
        <label>
          Model Name:
          <input name="mdlName" onChange={this.handleChange} value={this.state.mdlName} />
        </label>
        <button>Save Model Name</button>
      </form>
    );
  }
}
