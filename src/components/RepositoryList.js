import { React, useState, useEffect } from 'react';
import '../styles/repositories.css';
import RepositoryItem from './RepositoryItem';

const repository = {
    name: 'unformed2',
    description: 'Forms in React',
    link: 'www.github.com/unform/unform'

}

export default function RepositoryList (){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('http://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
       
    }, []);

    return (
        <section className="repositories-list">
            <h1>lista de repositórios</h1>

            {repositories.map(repository =>{
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
        </section>
    );
}