import alunos from '../data/alunos'

export default () => {
    const alunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) Nome: {aluno.nome} - Nota: {aluno.nota}
            </li>
        )
    })

    return (


        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}