import React from 'react';

class BodyComponent extends React.Component {
  render() {
    return (
      <div className="body">
        <DescriptionComponent />
        <HoursComponent />
        <LightDrinkerComponent />
        <MediumDrinkerComponent />
        <HeavyDrinkerComponent />
        <GoButtonComponent />
      </div>
    );
  }
}

class DescriptionComponent extends React.Component {
  render() {
    return (
      <div>This is the description</div>
    );
  }
}

class HoursComponent extends React.Component {
  render() {
    return (
      <InputComponent className="hours" label="Hours" />
    );
  }
}

class LightDrinkerComponent extends React.Component {
  render() {
    return (
      <InputComponent className="light" label="Light" />
    );
  }
}

class MediumDrinkerComponent extends React.Component {
  render() {
    return (
      <InputComponent className="medium" label="Medium" />
    );
  }
}

class HeavyDrinkerComponent extends React.Component {
  render() {
    return (
      <InputComponent className="heavy" label="Heavy" />
    );
  }
}

class InputComponent extends React.Component {
  render() {
    return (
      <div>
        <label for="{this.props.label}">{this.props.label}</label>
        <input type="number" name={this.props.label} />
      </div>
    );
  }
}

class GoButtonComponent extends React.Component {
  render() {
    return (
      <button>Go</button>
    );
  }
}

export default BodyComponent;
