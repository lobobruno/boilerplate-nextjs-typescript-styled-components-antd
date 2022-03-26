import { message } from 'antd'
import Text from 'antd/lib/typography/Text'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
`

const Home: NextPage = () => {
    useEffect(() => message.success('Antd is working...'), [])
    return (
        <div>
            <Title>This is styled-components</Title>
            <Text mark>Ant Design (mark)</Text>
        </div>
    )
}

export default Home
