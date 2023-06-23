import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { HeaderResponsive } from '@/components/Header'

export default function App(props: AppProps) {
    const { Component, pageProps } = props
    type links = {
        link: string,
        label: string
    }[]

    const links: links = [
        {
            label: 'Home',
            link: '/',
        },
        {
            label: 'Join',
            link: '/join',
        },
        {
            label: 'Create',
            link: '/create',
        },
        {
            label: 'Chats',
            link: '/chats',
        },
    ]

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                }}
            >
                <HeaderResponsive links={links} />
                <Component {...pageProps} />
            </MantineProvider>
        </>
    )
}