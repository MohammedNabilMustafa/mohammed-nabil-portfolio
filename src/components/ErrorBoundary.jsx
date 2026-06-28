import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', color: '#fafafa', background: '#09090b', minHeight: '100vh' }}>
          <h1 style={{ marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#a1a1aa', marginBottom: '1rem' }}>
            The page failed to load. Try a hard refresh (Cmd+Shift+R).
          </p>
          <pre style={{ color: '#f87171', whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
            {this.state.error.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
