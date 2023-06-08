import ReactDOM from 'react-dom/client'
import App from 'components/App'
import { Provider } from 'react-redux'
import { globalStore } from 'store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={globalStore}>
    <App />
  </Provider>
)
