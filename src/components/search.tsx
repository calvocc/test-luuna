import {ChangeEvent} from 'react';
import { Form } from 'react-bootstrap';
import { useSearch } from '../hooks/useSearch';

import { StyleInput } from '../styles/styles';

import { SearcProps } from '../interfaces/interfaces';

export const Search = ( {searchtype}:SearcProps ) => {

    const {formulario, handleChange} = useSearch('');

    return(
        <Form.Group className="mb-5" controlId="formBasicEmail">
            <StyleInput
                type="text" 
                placeholder="Buscar..."
                name="search"
                value={formulario}
                onChange={(val: ChangeEvent<HTMLInputElement>) => handleChange(val, searchtype)}
            />
        </Form.Group>
    )
}