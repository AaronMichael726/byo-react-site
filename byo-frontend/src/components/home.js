import '../App.css'

function Home({ firstName, lastName, type }) {
    return (
        <div class="ui two column padded grid">
            <div class="column">
                <h1 class="label-homepage" style={{fontSize: '80px'}}>{firstName} {lastName}</h1>
                <h3 class="label-homepage" style={{fontSize: '40px'}}>{type}</h3>
            </div>
        </div>
    )
}

export default Home
