import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}))

interface FooterProps {
    socialMedias: {
        name: string,
        url: string
        icon: JSX.Element,
    }[]
}

export function Footer({socialMedias}: FooterProps) {
    const { classes } = useStyles()

    const socialMediasButtons = socialMedias.map((socialMedia) => (
        <Link href={socialMedia.url}>
            <ActionIcon size='lg'>
                {socialMedia.icon}
            </ActionIcon>
        </Link>
    ))

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {/* <MantineLogo size={28} /> */}
                Logo
                <Group spacing={0} className={classes.links} position='right' noWrap>
                    {socialMediasButtons}
                </Group>
            </Container>
        </div>
    )
}