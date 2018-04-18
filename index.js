import React, { Component } from 'react'

export default Placeholder =>
	class OnLayout extends Component {
		state = {
			initialLayoutRequired: true
		}

		onLayout = layoutHandler => e => {
			const { initialLayoutRequired, dimensions } = this.state
			const { width, height } = e.nativeEvent.layout
			if (layoutHandler) {
				layoutHandler(e)
			}
			if (initialLayoutRequired) {
				// onLayout is sometimes called when width or height are still 0
				if (width > 0 && height > 0) {
					this.setState({ dimensions: { width, height }, initialLayoutRequired: false })
				}
			} else {
				// onLayout is sometimes called after initial layout with the same dimensions
				if (layout.width !== width || layout.height !== height) {
					this.setState({ dimensions: { width, height } })
				}
			}
		}

		render() {
			const { children, onLayout: layoutHandler, ...props } = this.props
			return (
				this.state.dimensions
					? children({ width: this.state.dimensions.width, height: this.state.dimensions.height })
					: <Placeholder {...props} onLayout={this.onLayout(layoutHandler)} />
			)
		}
	}
