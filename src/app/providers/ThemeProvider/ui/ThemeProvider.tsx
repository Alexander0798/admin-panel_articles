import { ThemeContext, ThemeContextProps, LOCAL_STORAGE_THEME_KEY, Theme } from "../lib/ThemeContext";
import React, { FC, useMemo, useState } from "react";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface Props {
    initialTheme?: Theme;
    children: React.ReactNode;
}
const ThemeProvider: FC<Props> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo<ThemeContextProps>(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
