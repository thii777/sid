import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import { ProductList } from '../../components/StylesNewProducts/index';

export default function ShoesNew({ history }) {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const preview = useMemo(() => {
        return image ? URL.createObjectURL(image) : null;
    }, [image]);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('image', image);
        data.append('name', name);
        data.append('price', price);
        data.append('brand', brand);
        data.append('size', size);
        data.append('color', color);
        data.append('amount', amount);
        data.append('category', category);
        data.append('description', description);

        // Send category db
        // await api.post('products', data);
        await api.post(`${category}`, data);

        history.push(`/${category}`);
    }

    return (
        <ProductList>
            <form onSubmit={handleSubmit}>
                <label
                    id="image"
                    style={{ backgroundImage: `url(${preview})` }}
                >
                    <input
                        type="file"
                        multiple
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <>
                        <img src={camera} alt="Coloque uma foto" />
                    </>
                </label>

                <label htmlFor="name">Produto</label>
                <input
                    id="name"
                    placeholder="Nome do produto"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    placeholder="Valor do produto"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />

                <label htmlFor="brand">Marca e/ou modelo</label>
                <input
                    id="brand"
                    placeholder="Marca do fabricante"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                />

                <label htmlFor="size">Tamanho</label>
                <input
                    id="size"
                    placeholder="Tamanho"
                    value={size}
                    onChange={e => setSize(e.target.value)}
                />

                <label htmlFor="color">Cor</label>
                <input
                    id="color"
                    placeholder="Cor do produto"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />

                <label htmlFor="amount">Estoque</label>
                <input
                    id="amount"
                    placeholder="Quantidade em estoque"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />

                <label htmlFor="category">Categoria</label>
                <input
                    id="category"
                    placeholder="Categoria do produto"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <label htmlFor="description">Descrição</label>
                <input
                    id="description"
                    placeholder="Descrição do produto"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button type="submit" className="btn">
                    Cadastrar
                </button>
            </form>
        </ProductList>
    );
}
