import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estacarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);  // Estado para armazenar erro

    useEffect(() => {
        setRepos([]);
        setErro(null);
        setEstaCarregando(true);
        
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar os repositórios ou Usuario não encontrado');
                }
                return res.json();
            })
            .then(resJson => {
                setEstaCarregando(false);
                setRepos(resJson);
            })
            .catch(error => {
                setEstaCarregando(false);
                setErro(error.message);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estacarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h1 className={styles.errorMessage}>{erro}</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a
                                className={styles.itemLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={html_url}
                            >
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
