import React, { Component } from 'react'

export default (Placeholder) =>
	class OnLayout extends Component {
		state = { dimensions: null }

		onLayout = eventHandler => e => {
			if (eventHandler) {
				eventHandler(e)
			}
			this.setState({
				dimensions: e.nativeEvent.layout,
			})
		}

		render() {
			const { children, onLayout: eventHandler, ...props } = this.props
			const { dimensions } = this.state
			return dimensions
				? children({ width: dimensions.width, length: dimensions.length })
				: <Placeholder {...props} onLayout={this.onLayout(eventHandler)} />
		}
	}
