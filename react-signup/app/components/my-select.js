import React from 'react'
import Formsy from 'formsy-react';

const MySelect = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget.value);
    var val = event.currentTarget.value;

    if (typeof this.props.onChange === 'function') {
      if (val === "Australia") {
        this.props.onChange(true); // call parent onChange method
      } else {
        this.props.onChange(false);
      }

     }
  },
  render() {
    const className = 'form-group relative' + ' ' + (this.props.className || ' ') + ( this.showRequired() ? 'required' : this.showError() ? 'error' : this.isPristine() ? " " : "success");

    const errorMessage = this.getErrorMessage();
    const options = this.props.options.map((option, i) => (
      <option key={option.value} value={option.value} disabled={option.value === '' && true} >
        {option.value}
      </option>
    ));
    return (
      <div className={className}>
        <label htmlFor={this.props.name} className="gray">{this.props.title}</label>
        { /*this.isPristine() && <span className="absolute error right-0 top-0 mt3 mr1 h3 h-font bold">*</span> */}
        <i className="material-icons absolute right-0 top-0 mt3 pt1 mr1 h1 noselect default">arrow_drop_down</i>
        <select
          id={this.props.name}
          className={this.props.inputClass}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}

          >
          {options}
        </select>

        { errorMessage && <h5 className='line-height-2 inline-block mt0 validation-error'>{errorMessage}</h5> }

      </div>
    );
  }

});

export default MySelect;
