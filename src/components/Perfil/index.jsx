import styles from './Perfil.module.css';



const Perfil = ({ nomeUsuario }) => {
    // const usuario = {
    //     nome: 'Estevao Castro',
    //     avatar: 'https://github.com/EstevaoCa.png'
    // }
    
    // const { endereco, nome } = props
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario} 
            </h1>
        </header>
    )
}

// export default function () {  }
// export default () => { }

export default Perfil;