import { createStyles, Badge, Group, Text, Card, SimpleGrid, Container, rem } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '\'\'',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
        backgroundColor: theme.colors.dark[6]
    },

    cardTitle: {
        '&::after': {
            content: '\'\'',
            display: 'block',
            backgroundColor: theme.colors.dark[0],
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}))

interface HeroHeaderProps {
    data: {
        title: string,
        description: string | JSX.Element,
        icon: (props: TablerIconsProps) => JSX.Element,
    }[]
}

export function HeroHeader({ data }: HeroHeaderProps) {
    const { classes, theme } = useStyles()
    const cards = data.map((item) => (
        <Card key={item.title} shadow='md' radius='md' className={classes.card} padding='xl'>
            <item.icon size={rem(50)} stroke={2} color={theme.colors.dark[0]} />
            <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
                {item.title}
            </Text>
            <Text fz='sm' c='dimmed' mt='sm'>
                {item.description}
            </Text>
        </Card>
    ))

    return (
        <Container size='lg' py='xl'>
            <Text align={'center'} size={'xl'}>Logo</Text>
            <br />
            <Group position='center'>
                <Badge variant='filled' size='lg' styles={(theme) => ({
                    root: {
                        backgroundColor: theme.colors.dark[6]
                    }
                })}>
                    Step into safety
                </Badge>
            </Group>

            <SimpleGrid cols={2} spacing='xl' mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}