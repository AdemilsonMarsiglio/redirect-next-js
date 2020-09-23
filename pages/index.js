import Header from '../components/header'

const obj = {
	urlImageHeader: "https://...",
	lojas: [
		{
			titulo: "Passo Fundo",
			subtitulo: "",
			linkId: "passo-fundo",
			urlAgendamento: "https://tuaagenda.com/clinica1",
			urlImagem: "",
			telefone1: "55533125630",
			telefone2: "",
			email: "ademilson@gmai.com",
			horarioAtendimento: [
				{
					dia: "Seg",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Ter",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Qua",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Qui",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				}
			],
			endereco: "Rua Ervino Kerber 115 Passo Fundo",
			linkComoChegar: "https://www.google.com/maps/dir//-28.282923,-52.367163"
    },
    
    {
			titulo: "Tapejara",
			subtitulo: "",
			linkId: "tapejara",
			urlAgendamento: "https://tuaagenda.com/clinica1",
			urlImagem: "",
			telefone1: "55533125630",
			telefone2: "",
			email: "ademilson@gmai.com",
			horarioAtendimento: [
				{
					dia: "Seg",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Ter",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Qua",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				},
				{
					dia: "Qui",
					horario: "09:00 - 12:00 | 13:00 - 18:00"
				}
			],
			endereco: "Rua Ervino Kerber 115 Passo Fundo",
			linkComoChegar: "https://www.google.com/maps/dir//-28.282923,-52.367163"
		},
	]
}

const Home = () => (
  <>
    <Header />
    <h1>Hello World!</h1>
    {obj.lojas.map((lj => <p key={lj.linkId}>{lj.titulo}</p>))}
  </>
)

export default Home
