const cars = document.querySelector('#cars');
cars.addEventListener('click', async function (){
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=cars');
    
    document.querySelector('#movietypecars1').innerText = res.data[0].show.type;
    document.querySelector('#movienamecars1').innerText = res.data[0].show.name;
    document.querySelector('#moviesummarycars1').innerHTML = res.data[0].show.summary;
    document.querySelector('#movielinkcars1').setAttribute("href", res.data[0].show.officialSite);
    

    document.querySelector('#movietypecars2').innerText = res.data[1].show.type;
    document.querySelector('#movienamecars2').innerText = res.data[1].show.name;
    document.querySelector('#moviesummarycars2').innerHTML = res.data[1].show.summary;
    document.querySelector('#movielinkcars2').setAttribute("href", res.data[1].show.officialSite);

    document.querySelector('#movietypecars3').innerText = res.data[2].show.type;
    document.querySelector('#movienamecars3').innerText = res.data[2].show.name;
    document.querySelector('#moviesummarycars3').innerHTML = res.data[2].show.summary;
    document.querySelector('#movielinkcars3').setAttribute("href", res.data[2].show.officialSite);
})

const robot = document.querySelector('#robot');
robot.addEventListener('click', async function (){
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=robot');
    
    document.querySelector('#movietyperobot1').innerText = res.data[0].show.type;
    document.querySelector('#movienamerobot1').innerText = res.data[0].show.name;
    document.querySelector('#moviesummaryrobot1').innerHTML = res.data[0].show.summary;
    document.querySelector('#movielinkrobot1').setAttribute("href", res.data[0].show.officialSite);

    document.querySelector('#movietyperobot2').innerText = res.data[1].show.type;
    document.querySelector('#movienamerobot2').innerText = res.data[1].show.name;
    document.querySelector('#moviesummaryrobot2').innerHTML = res.data[1].show.summary;
    document.querySelector('#movielinkrobot2').setAttribute("href", res.data[1].show.officialSite);

    document.querySelector('#movietyperobot3').innerText = res.data[2].show.type;
    document.querySelector('#movienamerobot3').innerText = res.data[2].show.name;
    document.querySelector('#moviesummaryrobot3').innerHTML = res.data[2].show.summary;
    document.querySelector('#movielinkrobot3').setAttribute("href", res.data[2].show.officialSite);
})

const war = document.querySelector('#war');
war.addEventListener('click', async function (){
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=war');
    
    document.querySelector('#movietypewar1').innerText = res.data[0].show.type;
    document.querySelector('#movienamewar1').innerText = res.data[0].show.name;
    document.querySelector('#moviesummarywar1').innerHTML = res.data[0].show.summary;
    document.querySelector('#movielinkwar1').setAttribute("href", res.data[0].show.officialSite);

    document.querySelector('#movietypewar2').innerText = res.data[1].show.type;
    document.querySelector('#movienamewar2').innerText = res.data[1].show.name;
    document.querySelector('#moviesummarywar2').innerHTML = res.data[1].show.summary;
    document.querySelector('#movielinkwar2').setAttribute("href", res.data[1].show.officialSite);

    document.querySelector('#movietypewar3').innerText = res.data[2].show.type;
    document.querySelector('#movienamewar3').innerText = res.data[2].show.name;
    document.querySelector('#moviesummarywar3').innerHTML = res.data[2].show.summary;
    document.querySelector('#movielinkwar3').setAttribute("href", res.data[2].show.officialSite);
})

const kings = document.querySelector('#kings');
kings.addEventListener('click', async function (){
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=kings');
    
    document.querySelector('#movietypekings1').innerText = res.data[0].show.type;
    document.querySelector('#movienamekings1').innerText = res.data[0].show.name;
    document.querySelector('#moviesummarykings1').innerHTML = res.data[0].show.summary;
    document.querySelector('#movielinkkings1').setAttribute("href", res.data[0].show.officialSite);

    document.querySelector('#movietypekings2').innerText = res.data[1].show.type;
    document.querySelector('#movienamekings2').innerText = res.data[1].show.name;
    document.querySelector('#moviesummarykings2').innerHTML = res.data[1].show.summary;
    document.querySelector('#movielinkkings2').setAttribute("href", res.data[1].show.officialSite);

    document.querySelector('#movietypekings3').innerText = res.data[2].show.type;
    document.querySelector('#movienamekings3').innerText = res.data[2].show.name;
    document.querySelector('#moviesummarykings3').innerHTML = res.data[2].show.summary;
    document.querySelector('#movielinkkings3').setAttribute("href", res.data[2].show.officialSite);
})