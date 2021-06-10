import React, { Suspense } from 'react'

export default function withSuspense(WrappedComponent) {
    return (props) => {
        return <Suspense fallback={<div>loading...</div>} >
            <WrappedComponent {...props} />
        </Suspense>
    }
}
