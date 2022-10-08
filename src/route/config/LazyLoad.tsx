import React, { Suspense } from "react";

const Lazyload = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
    return (
        <Suspense>
            <Comp />
        </Suspense>
    )

}
export default Lazyload