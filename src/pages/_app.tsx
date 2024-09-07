import "@/styles/globals.css";
import "@/styles/navBar.css";
import "@/styles/component.css";
import type {AppProps} from "next/app";
import Layout from "@/component/layout";
import {QueryClient, QueryClientProvider} from "react-query";

export default function App({Component, pageProps}: AppProps) {


// Create a new QueryClient instance
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
                cacheTime: 1000 * 60 * 10,
                retry: 1,
                refetchOnWindowFocus: false
            }
        }
    });
    return<QueryClientProvider client={queryClient}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </QueryClientProvider>;

}
