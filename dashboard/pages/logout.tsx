import Head from "next/head";
import { useEffect } from "react";

export default function Logout(_props: any) {
    useEffect(() => {
        window.location.href = "/api/logout"
    }, []);

    return <>
        <Head>
            <title>Logging Out | Clown Bot</title>
        </Head>
        <p>Redirecting you to logout...</p>
    </>
}
