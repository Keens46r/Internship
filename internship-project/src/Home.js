const Home = () => {
    const title = 'Random joke';

    const api_url = ('https://official-joke-api.appspot.com/random_joke')
    async function getData(){
        const response = await fetch(api_url);
        const data = await response.json();
        const { setup, punchline } = data;
        
        document.getElementById('setUp').textContent = setup;
        document.getElementById('punchLine').textContent = punchline;
   
    }

    //Interval set to fetch new random joke
    // setInterval(getData, 15000);

    getData();
    return (  
        <div className="home">
            <h3>{title}</h3>
            <p>
                Joke: <span className="joke" id="setUp"></span><br/>
                Answer: <span className="joke" id="punchLine"></span><br/>
            </p>
        </div>
    );
}
 
export default Home;