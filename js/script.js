const HAST_KEY = '92d2156fb8f1e9206c10adced3fa18af';
const API_KEY = '71466addaeeea6cdbb33b9eb4f46c041';
const LIMIT = 12;
const $container = document.querySelector('.container');
const $searchInput = document.querySelector('.searchInput');

function getRequest(offset = 0, searchstring = '', cb){
    const baseURL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HAST_KEY}&offset=${offset}&limit=${LIMIT}${!searchstring ? null : `&nameStartsWith=${searchstring}`}`;
    fetch(baseURL)
    .then(res => res.json())
    .then(r => cb(r.data))
    .catch(e => console.error(e))
}

window.addEventListener('load', () => {
    getRequest(
        0,
        '',
        res => {
            const temp = res.results.map(item => cardsTemplate(item)).join('');
            $container.innerHTML = temp;
        }
    )
})

function cardsTemplate({name, thumbnail, urls}){
    return `
        <div class="card">
            <div class="card-title">
                <p>${name}</p>
            </div>
            <div class="card-image">
                <img src="${thumbnail.path}.${thumbnail.extension}">
            </div>
            <div class="card-body">
                <a href="${urls[1].url}" class="moreBtn" target="_blank">More</a>
            </div>
        </div>
    `
}



// fixed header
const $topHeader = document.querySelector('.top-header');
window.addEventListener('scroll', () => {
    $topHeader.classList.toggle('fixedHeader', window.scrollY > 0)
})


// Movies
const database = [
    {
        title: 'CAPTAIN AMERICA: THE FIRST AVENGER (2011)',
        directed: 'Joe Johnston',
        starring: 'Chris Evans, Tommy Lee Jones, Hugo Weaving, Hayley Atwell',
        synopsis: "It is 1941 and the world is in the throes of war. Steve Rogers wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes and Peggy Carter, Captain America leads the fight against the Nazi-backed HYDRA organization.",
        rts: '80',
        image: 'https://collider.com/wp-content/uploads/captain-america-first-avenger-international-poster-01.jpg',
        id: 0,
        year: 2011
    },
    {
        title: 'CAPTAIN MARVEL (2019)',
        directed: 'Anna Boden, Ryan Fleck',
        starring: 'Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou',
        synopsis: "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
        rts: '79',
        image: 'https://cdn.europosters.eu/image/750/posters/captain-marvel-higher-further-faster-i70045.jpg',
        id: 1,
        year: 2019
    },
    {
        title: 'IRON MAN (2008)',
        directed: '',
        starring: 'Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow',
        synopsis: 'A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
        rts: '94',
        image: 'https://i.pinimg.com/originals/a4/f1/f6/a4f1f6c1efdb834471deaae8f77940c8.jpg',
        id: 2,
        year: 2008
    },
    {
        title: 'IRON MAN 2 (2010) ',
        directed: ' ',
        starring: 'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke ',
        synopsis: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and 'Rhodey' Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy. ",
        rts: '72',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81sC6pkIARL._AC_SL1500_.jpg ',
        id: 3,
        year: 2010
    },
    {
        title: 'THE INCREDIBLE HULK (2008) ',
        directed: 'Louis Leterrier',
        starring: ' Edward Norton, Liv Tyler, Tim Roth, William Hurt',
        synopsis: "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth). ",
        rts: '67',
        image: 'https://upload.wikimedia.org/wikipedia/ru/f/fa/%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg ',
        id: 4,
        year: 2008
    },
    {
        title: 'THOR (2011) ',
        directed: 'Kenneth Branagh ',
        starring: 'Chris Hemsworth, Natalie Portman, Anthony Hopkins, Tom Hiddleston ',
        synopsis: "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat. ",
        rts: '77',
        image: 'https://i5.walmartimages.com/asr/3cc29744-e0bf-457d-b144-e30ea74304f3_1.9315fa3df38e0cfcc3978bb632461c06.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        id: 5,
        year: 2011
    },
    {
        title: 'THE AVENGERS (2012) ',
        directed: ' ',
        starring: ' ',
        synopsis: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner). ",
        rts: '91',
        image: 'https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._AC_SL1000_.jpg ',
        id: 6,
        year: 2012
    },
    {
        title: 'IRON MAN 3 (2013) ',
        directed: 'Shane Black ',
        starring: 'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce ',
        synopsis: "Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves. ",
        rts: '79',
        image: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg ',
        id: 7,
        year: 2013
    },
    {
        title: 'THOR: THE DARK WORLD (2013) ',
        directed: 'Alan Taylor ',
        starring: 'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Stellan Skarsgård ',
        synopsis: "In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth. ",
        rts: '66',
        image: 'https://www.film.ru/sites/default/files/movies/posters/hr_Thor%20_The_Dark_World_3.jpg ',
        id: 8,
        year: 2013
    },
    {
        title: 'CAPTAIN AMERICA: THE WINTER SOLDIER (2014) ',
        directed: 'Joe Russo, Anthony Russo ',
        starring: 'Chris Evans, Samuel L. Jackson, Scarlett Johansson, Anthony Mackie ',
        synopsis: "After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy. ",
        rts: '90',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91OxromzoSL._AC_SL1500_.jpg ',
        id: 9,
        year: 2014
    },
    {
        title: ' GUARDIANS OF THE GALAXY (2014)',
        directed: 'James Gunn (II) ',
        starring: 'Chris Pratt, Zoe Saldana, Dave Bautista, Lee Pace ',
        synopsis: "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe. ",
        rts: '92',
        image: 'https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_SY741_.jpg ',
        id: 10,
        year: 2014
    },
    {
        title: ' GUARDIANS OF THE GALAXY VOL. 2 (2017)',
        directed: ' James Gunn (II)',
        starring: ' Chris Pratt, Zoe Saldana, Dave Bautista, Bradley Cooper',
        synopsis: " Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed.",
        rts: '85',
        image: ' https://images-na.ssl-images-amazon.com/images/I/A11Agdd1EQL._AC_SL1500_.jpg',
        id: 11,
        year: 2017
    },
    {
        title: ' AVENGERS: AGE OF ULTRON (2015)',
        directed: 'Joss Whedon ',
        starring: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth ',
        synopsis: "When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff. ",
        rts: '76',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71wV2rzkFwL._AC_SL1022_.jpg ',
        id: 12,
        year: 2015
    },
    {
        title: ' ANT-MAN (2015)',
        directed: 'Peyton Reed ',
        starring: 'Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll ',
        synopsis: "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
        rts: '83',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71E9abm2ayL._AC_SL1111_.jpg ',
        id: 13,
        year: 2015
    },
    {
        title: 'CAPTAIN AMERICA: CIVIL WAR (2016) ',
        directed: 'Anthony Russo ',
        starring: 'Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan ',
        synopsis: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side. ",
        rts: '90',
        image: 'https://m.media-amazon.com/images/I/71QiOu1+ceL._AC_SY879_.jpg',
        id: 14,
        year: 2016
    },
    {
        title: 'SPIDER-MAN: HOMECOMING (2017)',
        directed: 'Jon Watts',
        starring: 'Tom Holland (II), Michael Keaton, Robert Downey Jr., Gwyneth Paltrow ',
        synopsis: "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
        rts: '92',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91SDjtFQRWL._AC_SL1500_.jpg',
        id: 15,
        year: 2017
    },
    {
        title: 'DOCTOR STRANGE (2016)',
        directed: 'Scott Derrickson, Patrick Archibald, Jay Oliva, Frank Paur',
        starring: 'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong',
        synopsis: "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
        rts: '89',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71gyLVWIfIL._AC_SL1032_.jpg',
        id: 16,
        year: 2016
    },
    {
        title: 'BLACK PANTHER (2018)',
        directed: 'Ryan Coogler',
        starring: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
        synopsis: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
        rts: '96',
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1PaCX4oXjL._AC_SL1500_.jpg',
        id: 17,
        year: 2018
    },
    {
        title: 'THOR: RAGNAROK (2017)',
        directed: 'Taika Waititi',
        starring: 'Chris Hemsworth, Tom Hiddleston, Mark Ruffalo, Cate Blanchett',
        synopsis: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
        rts: '93',
        image: 'https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_.jpg',
        id: 18,
        year: 2017
    },
    {
        title: 'AVENGERS: INFINITY WAR (2018)',
        directed: 'Anthony Russo',
        starring: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
        synopsis: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
        rts: '85',
        image: 'https://cdn.europosters.eu/image/750/posters/avengers-infinity-war-one-sheet-i58560.jpg',
        id: 19,
        year: 2018
    },
    {
        title: 'ANT-MAN AND THE WASP (2018)',
        directed: 'Peyton Reed',
        starring: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins',
        synopsis: "Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.",
        rts: '87',
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1CGAvzql5L._AC_SL1500_.jpg',
        id: 20,
        year: 2018
    },
    {
        title: 'AVENGERS: ENDGAME (2019)',
        directed: 'Anthony Russo, Paul Russo',
        starring: 'Robert Downey Jr., Mark Ruffalo, Scarlett Johansson, Chris Evans',
        synopsis: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
        rts: '94',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71zdPzAlq2L._AC_SL1183_.jpg',
        id: 21,
        year: 2019
    },
    {
        title: 'SPIDER-MAN: FAR FROM HOME (2019)',
        directed: 'Jon Watts',
        starring: 'Tom Holland (II), Samuel L. Jackson, Zendaya, Cobie Smulders',
        synopsis: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
        rts: '90',
        image: 'https://townsquare.media/site/442/files/2019/03/spider-far-poster-3.jpg?w=960&q=75',
        id: 22,
        year: 2019 
    }
]
const $moviesContainer = document.querySelector('.movies-container')

window.addEventListener('load', () => {
    if(!localStorage.getItem('base')){
        localStorage.setItem('base', JSON.stringify(database))
        window.location.reload();
    }else{
        const base = JSON.parse(localStorage.getItem('base'))
        movieTemplate(base);
    }
})

const $sortMovie = document.getElementById('sortMovie')
$sortMovie.addEventListener('change', e => {
    if(e.target.value == 'byYear'){
        const base = JSON.parse(localStorage.getItem('base'));
        let sortedBase = base.sort((a, b) => a.year - b.year);
        localStorage.setItem('base', JSON.stringify(sortedBase));
        window.location.reload();
    }else if(e.target.value == 'byOrder'){
        localStorage.setItem('base', JSON.stringify(database));
        window.location.reload();
    }else{
        const base = JSON.parse(localStorage.getItem('base'));
        let sortedBase = base.sort((a, b) => a.rts - b.rts)
        localStorage.setItem('base', JSON.stringify(sortedBase));
        window.location.reload();
    }
})

function movieTemplate(arr){
    const temp = arr.map(({title, directed, starring, synopsis, rts, image, id}) => {
        return `
            <div class="movie">
                <div class="movie-left-parent">
                    <div class="movie-left" style="background: url('${image}') center / cover no-repeat">

                    </div>
                </div>
                <div class="movie-right">
                    <div class="movie-header">
                        <h4>${(id + 1)}) ${title}</h4>
                    </div>
                    <div class="movie-main">
                        <ul>
                            <li>
                                <span>Directed By:</span> ${directed}
                            </li>
                            <li>
                                <span>Starring:</span> ${starring}
                            </li>
                            <li>
                                <span>Synopsis:</span> ${synopsis}
                            </li>
                            <li><span>RT Score:</span> ${rts}%</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr>
        `
    }).join('');

    $moviesContainer.innerHTML = temp;
}



// Search

$searchInput.addEventListener('input', e => {
    let value = e.target.value;

    if(!value){
        getRequest(
            0,
            '',
            res => {
                const temp = res.results.map(item => cardsTemplate(item)).join('');
                $container.innerHTML = temp;
            }
        )
    }else{
        getRequest(
            0,
            value,
            res => {
                if(res.results.length == 0){
                    $container.innerHTML = '<h1 style="text-align: center; color:white; box-shadow: 0px 0px 5px white; padding: 1rem 2rem; border-radius: 10px;">Nothing found 404</h1>'
                }else{
                    const temp = res.results.map(item => cardsTemplate(item)).join('');
                    $container.innerHTML = temp;    
                }
            }
        )
    }
})