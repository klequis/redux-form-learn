import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {
  App,
  Code,
  Markdown,
  Values,
  generateExampleBreadcrumbs
} from 'redux-form-website-template'

const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

let render = () => {
  const SimpleForm = require('./SimpleForm').default
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <SimpleForm onSubmit={showResults} />
        <Values form="simple" />
      </App>
    </Provider>,
    dest
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  render = () => {
    renderApp()
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./SimpleForm', rerender)
  module.hot.accept('./Simple.md', rerender)
  module.hot.accept('!!raw-loader!./SimpleForm', rerender)
}

render()
