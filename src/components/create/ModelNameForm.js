import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';
import rejectDuplicates from '../../utils/rejectDuplicates';

export default class ModelNameForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    mdlNameShow: PropTypes.bool.isRequired,
    dbMdls: PropTypes.array.isRequired
  }

  state = {
    mdlName: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    if(rejectDuplicates(this.props.dbMdls, this.state.mdlName)) {
      this.props.onSubmit(this.state);
      this.setState({
        mdlName: '',
      });
    }
  }

  render() {
    const showHideClassName = this.props.mdlNameShow ? 'display-block' : 'display-none';
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
