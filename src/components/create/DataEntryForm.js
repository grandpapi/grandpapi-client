import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormFieldList from './FormFieldList';
import PropTypes from 'prop-types';
import { selectCurrentModelSchema, selectCurrentModel } from '../../selectors/sessionSelectors';

class DataEntryForm extends PureComponent {
  static propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    mdlSchema: PropTypes.string.isRequired,
    currentModel: PropTypes.object.isRequired
  }

  state = {
    fields: []
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const fields = Object.entries(JSON.parse(this.props.mdlSchema));
      this.setState({
        fields
      });
    }
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);
  // }

  render() {
    const { fields } = this.state;
    return (
      <>
        <h1>hi</h1>
        <FormFieldList fields={fields} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  mdlSchema: selectCurrentModelSchema(state),
  currentModel: selectCurrentModel(state)
});

export default connect(
  mapStateToProps,
  null
)(DataEntryForm);
