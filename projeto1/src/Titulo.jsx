function Titulo() {

    let nome = 'Murilo'
    // let nome = prompt('Digite seu nome')
    const urlImg = 'https://avatars.githubusercontent.com/u/115593380?v=4'

    return (
    <div>
        <h1>Ola meu nome é {nome}</h1>
        <img width={300} src={urlImg} alt="Perfil Github" />
    </div>        
    )
}

export default Titulo