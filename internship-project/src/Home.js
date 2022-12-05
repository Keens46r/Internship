const Home = () => {
    const title = 'Random joke';

    const api_url = ('https://official-joke-api.appspot.com/random_joke')
    async function getData(){
        const response = await fetch(api_url);
        const data = await response.json();
        const { setup, punchline } = data;
        
        document.getElementById('setup').textContent = setup;
        document.getElementById('punchline').textContent = punchline;
   
    }

    //Interval set to fetch new random joke
    // setInterval(getData, 15000);

    getData();
    return (  
        <div className="home">
            <h3>{title}</h3>
            <p>
                Joke: <span  class="joke" id="setup"></span><br/>
                Answer: <span class="joke" id="punchline"></span><br/>
            </p>
        </div>
    );
}
 
export default Home;