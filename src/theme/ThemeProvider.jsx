import React from "react";

const Theme98 = React.lazy(() => import('./98'));
const ThemeXP = React.lazy(() => import('./xp'));

export default function ThemeProvider({ children, theme }) {
    return (
        <>
            <React.Suspense fallback={<></>}>
                {theme === '98' ? <Theme98 /> : <ThemeXP />}
            </React.Suspense>
            {children}
        </>
    )
}
