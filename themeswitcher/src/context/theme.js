import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider
// this line is used to create a provider. We wrap the provider around the components to which we want to give the access of the values of the context

export default function useTheme(){
    return useContext(ThemeContext);
}
// this function have the values of the ThemeContext i.e. themeMode,darkTheme,lightTheme so we can use this to access the values of it


// difference between both of provider and context is that we use provider to give access to the components we wrap it around the components whereas we use function to make the changes in the values