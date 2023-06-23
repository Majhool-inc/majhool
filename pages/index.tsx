import { HeroHeader } from '@/components/HeroHeader'
import type { NextPage } from 'next'
import { IconTargetArrow, IconArrowFork, IconEye, IconDiamond, TablerIconsProps} from '@tabler/icons-react'
import { List } from '@mantine/core'

const Home: NextPage = () => {
    type data = {
        title: string,
        description: string | JSX.Element,
        icon: (props: TablerIconsProps) => JSX.Element,
    }[]

    const data: data = [
        {
            title: 'Our Mission',
            description: 'Provide a safe environment for everyone who wants to discuss',
            icon: IconTargetArrow,
        },
        {
            title: 'Our Difference',
            description: 'We do not ask for phone numbers, real names or any information about you. We are open source so you can check the code.',
            icon: IconArrowFork,
        },
        {
            title: 'Our Vision',
            description: 'Make everyone able to speak safely',
            icon: IconEye,
        },
        {
            title: 'Our Values',
            description: <List>
                <List.Item color={'dimmed'} fz='sm'>Not eavesdropping</List.Item>
                <List.Item color={'dimmed'} fz='sm'>Safety</List.Item>
            </List>,
            icon: IconDiamond,
        },
    ]

    return (
        <>
            <HeroHeader data={data} />
        </>
    )
}

export default Home