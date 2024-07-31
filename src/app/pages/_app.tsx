import { GoogleOAuthProvider } from '@react-oauth/google'

interface MyAppProps {
    Component: React.ComponentType;
    pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <GoogleOAuthProvider clientId="1063138077415-de78gfn91g8gi34b7c7slp83k7ijf06d.apps.googleusercontent.com">
            <Component {...pageProps} />
        </GoogleOAuthProvider>
    )
}

export default MyApp;