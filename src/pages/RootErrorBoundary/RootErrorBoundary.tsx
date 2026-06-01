import {Link, useRouteError, isRouteErrorResponse} from 'react-router-dom'
import './RootErrorBoundary.scss'
import '/data/d1_icons/img/destiny_content/items/set_blank.png'

export default function RootErrorBoundary() {
  let error = useRouteError()
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      const errorDataMessage:string = (error.data != '' ? error.data.toString() : 'Page not found') ?? 'Page not found'
      return (
        <section className='error-page-container fouroh-error-page-container'>
          <h1>
            404 // {errorDataMessage}
          </h1>
          <p>The page you navigated to could not be found.</p>
          <div className="fouroh-out-links">
            <Link to="/">Go Home</Link>
            <Link to="/acquisition">Acquisition Source Index</Link>
            <Link to="/items">Item Database</Link>
          </div>
        </section>
      );
    }

    if (error.status === 401) {
      return (
        <section className='error-page-container'>
          <h1>401 // Unauthorized</h1>
          <p>Please log in.</p>
          <div className="fouroh-out-links">
            <Link to="/">Go Home</Link>
            <Link to="/acquisition">Acquisition Source Index</Link>
            <Link to="/items">Item Database</Link>
          </div>
        </section>
      )
    }

    return (
      <section className='error-page-container'>
        <h1>
          {error.status} // {error.statusText}
        </h1>
        <p>{error.data}</p>
        <div className="fouroh-out-links">
          <Link to="/">Go Home</Link>
          <Link to="/acquisition">Acquisition Source Index</Link>
          <Link to="/items">Item Database</Link>
        </div>
      </section>
    );
  } else if (error instanceof Error) {
    return (
      <section className='error-page-container'>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <div className="fouroh-out-links">
          <Link to="/">Go Home</Link>
          <Link to="/acquisition">Acquisition Source Index</Link>
          <Link to="/items">Item Database</Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className='error-page-container'>
        <h1>Unknown Error</h1>
        <div className="fouroh-out-links">
          <Link to="/">Go Home</Link>
          <Link to="/acquisition">Acquisition Source Index</Link>
          <Link to="/items">Item Database</Link>
        </div>
      </section>
    )
  }
}