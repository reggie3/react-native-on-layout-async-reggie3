import React, { Component } from 'react';

export default (Placeholder) =>
  class OnLayout extends Component {
    state = {
      initialLayoutRequired: true,
      dimensions: undefined
    };

    onLayout = ({
      nativeEvent: { layout: { x, y, width, height } = {} } = {}
    }) => {
      debugger;
      const { initialLayoutRequired, dimensions } = this.state;

      if (initialLayoutRequired) {
        // onLayout is sometimes called when width or height are still 0
      
          this.setState(
            {
              dimensions: { width, height, x, y },
              initialLayoutRequired: false
            },
            () => {
              console.log('this.state: ', this.state);
              debugger;
            }
          );
        }
     
    };

    render() {
      const { children, ...props } = this.props;
      console.log('this.state.dimensions:', this.state.dimensions);
      return this.state.dimensions ? (
        children({
          width: this.state.dimensions.width,
          height: this.state.dimensions.height,
          x: this.state.dimensions.x,
          y: this.state.dimensions.y
        })
      ) : (
        <Placeholder {...props} onLayout={this.onLayout} />
      );
    }
  };
