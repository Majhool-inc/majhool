import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { HeaderResponsive } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'

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

    type socialMedias = {
        name: string,
        url: string
        icon: JSX.Element,
    }[]

    const socialMedias: socialMedias = [
        {
            name: 'Twitter',
            url: 'https://twitter.com/Majhool/',
            icon: <IconBrandTwitter size='1.05rem' stroke={1.5} />
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@Majhool/',
            icon: <IconBrandYoutube size='1.05rem' stroke={1.5} />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/Majhool/',
            icon: <IconBrandInstagram size='1.05rem' stroke={1.5} />
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
                <main style={{minHeight: '100vh'}}>
                    <Component {...pageProps} />
                </main>
                <Footer socialMedias={socialMedias} />
            </MantineProvider>
        </>
    )
}