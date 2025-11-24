const jogos = [
    { titulo: "Red Dead Redemption 2", ano: 2018, generoPrincipal: "mundo-aberto", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a","classicos"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "red_dead_redemption_2.jpg" },
    { titulo: "Resident Evil 4", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "resident_evil_4_remake.jpg" },
    { titulo: "ARC Raiders", ano: 2024, generoPrincipal: "multiplayer", generos: ["acao-aventura","multiplayer"], categorias: ["multiplayer","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "arc_raiders.jpg" },
    { titulo: "LEGO Star Wars: The Skywalker Saga", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "lego_star_wars_skywalker_saga.jpg" },
    { titulo: "Call of Duty: Black Ops 6", ano: 2024, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer","destaques","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "cod_black_ops_6.jpg" },
    { titulo: "Killing Floor 2", ano: 2016, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "killing_floor_2.jpg" },
    { titulo: "Life is Strange", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "life_is_strange.jpg" },
    { titulo: "PowerWash Simulator", ano: 2021, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "powerwash_simulator.jpg" },
    { titulo: "F1 2024", ano: 2024, generoPrincipal: "corrida", generos: ["corrida","esporte"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "f1_24.jpg" },
    { titulo: "Persona 3 Reload", ano: 2024, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "persona_3_reload.jpg" },
    { titulo: "Grand Theft Auto V", ano: 2013, generoPrincipal: "mundo-aberto", generos: ["acao-aventura","mundo-aberto"], categorias: ["classicos","triple-a","multiplayer"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "gta_v.jpg" },
    { titulo: "Stray", ano: 2022, generoPrincipal: "indie", generos: ["indie","acao-aventura"], categorias: ["indie","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "stray.jpg" },
    { titulo: "Resident Evil 2", ano: 2019, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "resident_evil_2_remake.jpg" },
    { titulo: "Kingdom Come: Deliverance", ano: 2018, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "kingdom_come_deliverance.jpg" },
    { titulo: "Baldur's Gate III", ano: 2023, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","destaques","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "baldurs_gate_3.jpg" },
    { titulo: "The Last of Us Part II Remastered", ano: 2024, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5", loja: "ps", img: "tlou_part_2_remastered.jpg" },
    { titulo: "Jojo's Bizarre Adventure: Eyes of Heaven", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos"], plataforma: "PS4", loja: "ps", img: "jojos_eyes_of_heaven.jpg" },
    { titulo: "Sekiro: Shadows Die Twice", ano: 2019, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "sekiro.jpg" },
    { titulo: "No Man's Sky", ano: 2016, generoPrincipal: "mundo-aberto", generos: ["mundo-aberto","indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "no_mans_sky.jpg" },
    { titulo: "Diablo IV", ano: 2023, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "diablo_4.jpg" },
    { titulo: "Psychonauts 2", ano: 2021, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "psychonauts_2.jpg" },
    { titulo: "High on Life", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["indie"], plataforma: "Xbox / PC / PS5", loja: "steam", img: "high_on_life.jpg" },
    { titulo: "RoboCop: Rogue City", ano: 2023, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "robocop_rogue_city.jpg" },
    { titulo: "LEGO DC Super-Villains", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "lego_dc_super_villains.jpg" },
    { titulo: "Uncharted: The Nathan Drake Collection", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4", loja: "ps", img: "uncharted_nathan_drake_collection.jpg" },
    { titulo: "EA Sports FC 25", ano: 2025, generoPrincipal: "esporte", generos: ["esporte","multiplayer"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "ea_sports_fc_25.jpg" },
    { titulo: "Goat Simulator 3", ano: 2022, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "goat_simulator_3.jpg" },
    { titulo: "Alan Wake II", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "alan_wake_2.jpg" },
    { titulo: "Mortal Kombat 11", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "mk11.jpg" },
    { titulo: "Lies of P", ano: 2023, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "lies_of_p.jpg" },
    { titulo: "DayZ", ano: 2018, generoPrincipal: "multiplayer", generos: ["multiplayer"], categorias: ["multiplayer"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "dayz.jpg" },
    { titulo: "Balatro", ano: 2024, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie","destaques"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "balatro.jpg" },
    { titulo: "Cyberpunk 2077", ano: 2020, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "cyberpunk_2077.jpg" },
    { titulo: "Bloodborne", ano: 2015, generoPrincipal: "soulslike", generos: ["soulslike","acao-aventura"], categorias: ["soulslike","classicos"], plataforma: "PS4", loja: "ps", img: "bloodborne.jpg" },
    { titulo: "Mad Max", ano: 2015, generoPrincipal: "mundo-aberto", generos: ["mundo-aberto","acao-aventura"], categorias: ["classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "mad_max.jpg" },
    { titulo: "Dead Space", ano: 2023, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "dead_space_remake.jpg" },
    { titulo: "Resident Evil Village", ano: 2021, generoPrincipal: "terror", generos: ["terror","acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "resident_evil_village.jpg" },
    { titulo: "Doom Eternal", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "doom_eternal.jpg" },
    { titulo: "Sifu", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "sifu.jpg" },
    { titulo: "Star Wars Battlefront II", ano: 2017, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "star_wars_battlefront_2.jpg" },
    { titulo: "Batman: Arkham Knight", ano: 2015, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "batman_arkham_knight.jpg" },
    { titulo: "Detroit: Become Human", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PC", loja: "steam", img: "detroit_become_human.jpg" },
    { titulo: "Hogwarts Legacy", ano: 2023, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "hogwarts_legacy.jpg" },
    { titulo: "Call of Duty: Black Ops Cold War", ano: 2020, generoPrincipal: "multiplayer", generos: ["multiplayer","acao-aventura"], categorias: ["multiplayer","triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "cod_black_ops_cold_war.jpg" },
    { titulo: "Minecraft Dungeons", ano: 2020, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "minecraft_dungeons.jpg" },
    { titulo: "Monster Hunter: World", ano: 2018, generoPrincipal: "rpg", generos: ["rpg","acao-aventura"], categorias: ["rpg","multiplayer","triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "monster_hunter_world.jpg" },
    { titulo: "Control", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "control.jpg" },

    { titulo: "God of War (2018)", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["classicos","triple-a"], plataforma: "PS4 / PC", loja: "ps", img: "gow_2018.jpg" },
    { titulo: "God of War Ragnarök", ano: 2022, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "god_of_war_ragnarok.jpg" },
    { titulo: "Marvel's Spider-Man", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "spider_man_ps4.jpg" },
    { titulo: "Marvel's Spider-Man: Miles Morales", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "spider_man_miles.jpg" },
    { titulo: "Marvel's Spider-Man 2", ano: 2023, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["destaques","triple-a"], plataforma: "PS5", loja: "ps", img: "spider_man_2.jpg" },
    { titulo: "Horizon Zero Dawn", ano: 2017, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / PC", loja: "ps", img: "horizon_zero_dawn.jpg" },
    { titulo: "Horizon Forbidden West", ano: 2022, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "horizon_forbidden_west.jpg" },
    { titulo: "Ghost of Tsushima", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["classicos","triple-a"], plataforma: "PS4 / PS5", loja: "ps", img: "ghost_of_tsushima.jpg" },
    { titulo: "Elden Ring", ano: 2022, generoPrincipal: "soulslike", generos: ["soulslike","rpg"], categorias: ["soulslike","destaques"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "elden_ring.jpg" },
    { titulo: "Dark Souls III", ano: 2016, generoPrincipal: "soulslike", generos: ["soulslike","rpg"], categorias: ["soulslike","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "dark_souls_3.jpg" },
    { titulo: "The Witcher 3: Wild Hunt", ano: 2015, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "witcher_3.jpg" },
    { titulo: "Assassin's Creed Valhalla", ano: 2020, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "ac_valhalla.jpg" },
    { titulo: "Assassin's Creed Odyssey", ano: 2018, generoPrincipal: "acao-aventura", generos: ["acao-aventura","mundo-aberto"], categorias: ["triple-a"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "ac_odyssey.jpg" },
    { titulo: "Assassin's Creed Mirage", ano: 2023, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "ac_mirage.jpg" },
    { titulo: "Forza Horizon 5", ano: 2021, generoPrincipal: "corrida", generos: ["corrida"], categorias: ["multiplayer","triple-a"], plataforma: "Xbox / PC", loja: "xbox", img: "forza_horizon_5.jpg" },
    { titulo: "Need for Speed Heat", ano: 2019, generoPrincipal: "corrida", generos: ["corrida"], categorias: ["corrida"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "nfs_heat.jpg" },
    { titulo: "Cuphead", ano: 2017, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "cuphead.jpg" },
    { titulo: "Celeste", ano: 2018, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "celeste.jpg" },
    { titulo: "Hades", ano: 2020, generoPrincipal: "indie", generos: ["indie","rpg"], categorias: ["indie","rpg"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "hades.jpg" },
    { titulo: "Hollow Knight", ano: 2017, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "hollow_knight.jpg" },
    { titulo: "Dead Cells", ano: 2018, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "dead_cells.jpg" },
    { titulo: "Stardew Valley", ano: 2016, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "stardew_valley.jpg" },
    { titulo: "Slay the Spire", ano: 2019, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "slay_the_spire.jpg" },
    { titulo: "The Binding of Isaac: Rebirth", ano: 2014, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "binding_of_isaac.jpg" },
    { titulo: "It Takes Two", ano: 2021, generoPrincipal: "multiplayer", generos: ["multiplayer","plataforma"], categorias: ["multiplayer"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "it_takes_two.jpg" },
    { titulo: "Overcooked! 2", ano: 2018, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "overcooked_2.jpg" },
    { titulo: "Rocket League", ano: 2015, generoPrincipal: "esporte", generos: ["esporte","multiplayer"], categorias: ["multiplayer"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "rocket_league.jpg" },
    { titulo: "Apex Legends", ano: 2019, generoPrincipal: "multiplayer", generos: ["multiplayer"], categorias: ["multiplayer"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "apex_legends.jpg" },
    { titulo: "Starfield", ano: 2023, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","triple-a"], plataforma: "Xbox / PC", loja: "steam", img: "starfield.jpg" },
    { titulo: "Fallout 4", ano: 2015, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "fallout_4.jpg" },
    { titulo: "Skyrim Special Edition", ano: 2016, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","classicos"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "skyrim_se.jpg" },
    { titulo: "Nier: Automata", ano: 2017, generoPrincipal: "acao-aventura", generos: ["acao-aventura","rpg"], categorias: ["rpg"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "nier_automata.jpg" },
    { titulo: "Yakuza: Like a Dragon", ano: 2020, generoPrincipal: "rpg", generos: ["rpg","acao-aventura"], categorias: ["rpg"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "yakuza_like_a_dragon.jpg" },
    { titulo: "Persona 5 Royal", ano: 2019, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "persona_5_royal.jpg" },
    { titulo: "Dragon Quest XI S", ano: 2019, generoPrincipal: "rpg", generos: ["rpg"], categorias: ["rpg"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "dragon_quest_xi_s.jpg" },
    { titulo: "Dragon's Dogma 2", ano: 2024, generoPrincipal: "rpg", generos: ["rpg","mundo-aberto"], categorias: ["rpg","destaques"], plataforma: "PS5 / Xbox / PC", loja: "steam", img: "dragons_dogma_2.jpg" },
    { titulo: "Returnal", ano: 2021, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS5 / PC", loja: "ps", img: "returnal.jpg" },
    { titulo: "Death Stranding", ano: 2019, generoPrincipal: "acao-aventura", generos: ["acao-aventura"], categorias: ["triple-a"], plataforma: "PS4 / PS5 / PC", loja: "steam", img: "death_stranding.jpg" },
    { titulo: "Resident Evil 7: Biohazard", ano: 2017, generoPrincipal: "terror", generos: ["terror"], categorias: ["terror","classicos"], plataforma: "PS4 / Xbox / PC", loja: "steam", img: "re7.jpg" },
    { titulo: "Resident Evil 3", ano: 2020, generoPrincipal: "terror", generos: ["terror"], categorias: ["terror"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "re3_remake.jpg" },
    { titulo: "Outlast", ano: 2013, generoPrincipal: "terror", generos: ["terror","indie"], categorias: ["terror","indie"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "outlast.jpg" },
    { titulo: "Alien: Isolation", ano: 2014, generoPrincipal: "terror", generos: ["terror"], categorias: ["terror","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "alien_isolation.jpg" },
    { titulo: "Little Nightmares II", ano: 2021, generoPrincipal: "terror", generos: ["terror","plataforma"], categorias: ["terror","indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "little_nightmares_2.jpg" },
    { titulo: "Inside", ano: 2016, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "inside.jpg" },
    { titulo: "Limbo", ano: 2010, generoPrincipal: "plataforma", generos: ["plataforma","indie"], categorias: ["indie","classicos"], plataforma: "PS4 / Xbox / Switch / PC", loja: "steam", img: "limbo.jpg" },
    { titulo: "Superliminal", ano: 2019, generoPrincipal: "indie", generos: ["indie"], categorias: ["indie"], plataforma: "PS4 / PS5 / Xbox / Switch / PC", loja: "steam", img: "superliminal.jpg" },
    { titulo: "Deep Rock Galactic", ano: 2020, generoPrincipal: "multiplayer", generos: ["multiplayer","indie"], categorias: ["multiplayer","indie"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "deep_rock_galactic.jpg" },
    { titulo: "Rainbow Six Siege", ano: 2015, generoPrincipal: "multiplayer", generos: ["multiplayer"], categorias: ["multiplayer"], plataforma: "PS4 / PS5 / Xbox / PC", loja: "steam", img: "rainbow_six_siege.jpg" },
    { titulo: "Palworld", ano: 2024, generoPrincipal: "mundo-aberto", generos: ["mundo-aberto","multiplayer"], categorias: ["multiplayer","indie","destaques"], plataforma: "Xbox / PC", loja: "steam", img: "palworld.jpg" }
];

console.log("Total de jogos no catálogo:", jogos.length);
function urlLoja(jogo) {
    const nome = encodeURIComponent(jogo.titulo);
    if (jogo.loja === "ps") {
        return "https://store.playstation.com/pt-br/search/" + nome;
    }
    if (jogo.loja === "xbox") {
        return "https://www.xbox.com/pt-BR/search?q=" + nome;
    }
    return "https://store.steampowered.com/search/?term=" + nome;
}

function urlTrailer(jogo) {
    const query = encodeURIComponent(jogo.titulo + " official trailer");
    return "https://www.youtube.com/results?search_query=" + query;
}

const gamesList = document.getElementById("gamesList");

function gerarCards() {
    gamesList.innerHTML = "";
    jogos.forEach(jogo => {
        const li = document.createElement("li");
        li.className = "game-card";
        li.dataset.category = jogo.categorias.join(" ");
        li.dataset.year = jogo.ano;
        li.dataset.genre = jogo.generoPrincipal;

        const chip =
            jogo.categorias.includes("destaques")
                ? '<span class="chip chip-highlight">Destaque</span>'
                : "";

        li.innerHTML = `
            <div class="game-cover">
                <img src="${jogo.img || "placeholder.jpg"}" class="img_jogos" alt="${jogo.titulo}">
                ${chip}
            </div>
            <div class="game-info">
                <h2>${jogo.titulo}</h2>
                <p class="prod_desc">
                    ${jogo.generos.join(" • ").replace(/-/g," ")} • ${jogo.plataforma}
                </p>
                <div class="game-meta">
                    <span class="tag">${jogo.ano}</span>
                    ${jogo.generos.map(g => `<span class="tag">${g.replace(/-/g," ")}</span>`).join("")}
                </div>
                <div class="game-actions">
                    <a class="btn btn-primary" href="${urlLoja(jogo)}" target="_blank" rel="noopener noreferrer">
                        Ver em loja oficial
                    </a>
                    <a class="btn btn-outline" href="${urlTrailer(jogo)}" target="_blank" rel="noopener noreferrer">
                        Ver trailer no YouTube
                    </a>
                </div>
            </div>
        `;
        gamesList.appendChild(li);
    });
}

gerarCards();

// BUSCA E FILTROS

const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");
const genreFilter = document.getElementById("genreFilter");
const categoryButtons = document.querySelectorAll(".btn-filter");

function aplicarFiltros() {
    const termo = searchInput.value.toLowerCase();
    const ano = yearFilter.value;
    const genero = genreFilter.value;
    const categoriaAtiva = document.querySelector(".btn-filter.active").dataset.category;

    document.querySelectorAll(".game-card").forEach(card => {
        const titulo = card.querySelector("h2").textContent.toLowerCase();
        const cardAno = card.dataset.year;
        const cardGenero = card.dataset.genre;
        const cardCategorias = card.dataset.category;

        const matchBusca = titulo.includes(termo);
        const matchAno = ano === "all" || ano === cardAno;
        const matchGenero = genero === "all" || genero === cardGenero;
        const matchCategoria = categoriaAtiva === "all" || cardCategorias.includes(categoriaAtiva);

        card.style.display = (matchBusca && matchAno && matchGenero && matchCategoria) ? "flex" : "none";
    });
}

searchInput.addEventListener("input", aplicarFiltros);
yearFilter.addEventListener("change", aplicarFiltros);
genreFilter.addEventListener("change", aplicarFiltros);

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        aplicarFiltros();
    });
});

