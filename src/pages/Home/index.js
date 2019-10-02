import React from 'react';

import {
    MdLocalShipping,
    MdAttachMoney,
    MdStoreMallDirectory,
    MdSync,
} from 'react-icons/md';
import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <div className="bunner" />
            <div className="advantage">
                <div className="post">
                    <MdLocalShipping size={50} color="#000" />
                    <div>
                        <h2>
                            <strong>frete gratis</strong>
                        </h2>
                        <p>Acima de R$ 200</p>
                    </div>
                </div>
                <div className="pay">
                    <MdAttachMoney size={50} color="#000" />
                    <div>
                        <h2>
                            <strong>sem juros</strong>
                        </h2>
                        <p>A partir de R$ 100</p>
                    </div>
                </div>
                <div className="physical-store">
                    <MdStoreMallDirectory size={50} color="#000" />
                    <div>
                        <h2>
                            <strong>loja fisica</strong>
                        </h2>
                        <p>Troque na loja</p>
                    </div>
                </div>
                <div className="exchange">
                    <MdSync size={50} color="#000" />
                    <div>
                        <h2>
                            <strong>troca grátis</strong>
                        </h2>
                        <p>Em até 30 dias</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
