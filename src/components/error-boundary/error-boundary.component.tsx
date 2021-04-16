import React, { Component } from 'react';

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<any, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error) {
        console.error(error);
    }

    public render() {
        if (this.state.hasError) {
            return <div>Oh oh!</div>;
        }
        return this.props.children;
    }
}
