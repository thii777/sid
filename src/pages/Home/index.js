import React from 'react';

import { Container, Sneakers } from './styles';

export default function Home() {
    return (
        <Container>
            <Sneakers to="/sneakers">
                <h1>Tenis</h1>
            </Sneakers>
        </Container>
    );
}
