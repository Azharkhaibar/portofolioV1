// // src/components/ErrorBoundary.tsx
// import React from 'react';

// interface ErrorBoundaryProps {
//     children: React.ReactNode; 
// }

// interface State {
//     hasError: boolean;
// }

// class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
//     constructor(props: ErrorBoundaryProps) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error: unknown): State {
//         return { hasError: true };
//     }

//     componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
//         console.error("Error caught in ErrorBoundary:", error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Ada yg Salah sepertinya</h1>;
//         }
//         return this.props.children; 
//     }
// }

// export default ErrorBoundary;
