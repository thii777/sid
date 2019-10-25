import React from 'react';

import {
    MdLocalShipping,
    MdAttachMoney,
    MdStoreMallDirectory,
    MdSync,
} from 'react-icons/md';
import { Container } from './styles';

import acessorios from '../../assets/acessorios.jpg';
import vestuarios from '../../assets/vestuarios.jpg';
import kit from '../../assets/kit.jpg';

export default function Home() {
    return (
        <Container>
            <div className="bunner" />
            <div className="advantage">
                <div className="post">
                    <MdLocalShipping size={50} color="666" />
                    <div>
                        <h2>
                            <strong>frete gratuito</strong>
                        </h2>
                        <p>Acima de R$ 100</p>
                    </div>
                </div>
                <div className="pay">
                    <MdAttachMoney size={50} color="666" />
                    <div>
                        <h2>
                            <strong>sem juros</strong>
                        </h2>
                        <p>A partir de R$ 100</p>
                    </div>
                </div>
                <div className="physical-store">
                    <MdStoreMallDirectory size={50} color="666" />
                    <div>
                        <h2>
                            <strong>loja fisica</strong>
                        </h2>
                        <p>Troque na loja</p>
                    </div>
                </div>
                <div className="exchange">
                    <MdSync size={50} color="666" />
                    <div>
                        <h2>
                            <strong>troca grátis</strong>
                        </h2>
                        <p>Em até 30 dias</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src={acessorios} alt="" />
                    </div>
                    <div>
                        <h3>Acessorios</h3>
                        <button type="button">confira</button>
                    </div>
                    <div>
                        <img src={vestuarios} alt="" />
                    </div>
                    <div>
                        <h3>Vestuarios</h3>
                        <button type="button">confira</button>
                    </div>
                    <div>
                        <img src={kit} alt="" />
                    </div>
                    <div>
                        <h3>Sid kit</h3>
                        <button type="button">confira</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
