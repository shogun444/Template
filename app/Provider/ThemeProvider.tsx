import { ThemeProvider } from "next-themes";

export default function ThemeS({children}  :{children :  React.ReactNode}){
  return(<ThemeProvider >{children}</ThemeProvider>)
}