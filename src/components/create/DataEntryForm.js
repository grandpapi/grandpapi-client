import React, { PureComponent } from 'react';
import FormFieldList from './FormFieldList';
// import PropTypes from 'prop-types';

export default class DataEntryForm extends PureComponent {
  // static propTypes = {
  // //   onSubmit: PropTypes.func.isRequired
  // //   mdlSchema: PropTypes.string.isRequired
  // }

    state = {
      fields: []
    }

    testMdlSchema = JSON.stringify({
      name: 'String',
      hair: 'Boolean',
      age: 'Number'
    });

    componentDidMount() {
      const fields = Object.entries(JSON.parse(this.testMdlSchema));
      this.setState({
        fields
      });
    }

    // handleChange = ({ target }) => this.setState({ [target.name]: target.value });

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

// const mapStateToProps = state => ({
//     mdlSchema: 
// })
