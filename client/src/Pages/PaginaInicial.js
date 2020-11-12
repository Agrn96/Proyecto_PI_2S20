import React from 'react'
import {useParams} from 'react-router-dom';

function PaginaInicial() {
    let{ user } = useParams();
    return (
        <div>
            Hi {user}
        </div>
    )
}

export default PaginaInicial
