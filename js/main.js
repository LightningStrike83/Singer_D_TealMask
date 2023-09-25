console.log ('Experience the truth of the oni.')

let tealMask = document.querySelector('#grass');
let fireMask = document.querySelector('#fire');
let waterMask = document.querySelector('#water');
let stoneMask = document.querySelector('#stone');
let happyOgerpon = document.querySelector('#happy-ogerpon-photo');
let hearthstoneRetrieval = document.querySelector ('#hearthflame-photo');
let wellspringRetrieval = document.querySelector ('#wellspring-photo');
let cornerstoneRetrieval = document.querySelector ('#cornerstone-photo');

let maskInfo = [
    {
        maskname : "Mask: The Teal Mask",
        ogerpontype : "Ogerpon's Type: Grass",
        ability : "Ability: Defiant",
        cudgeltype : "Ivy Cudgel Type: Grass",
        weaknesses : "Weak To: Flying, Poison, Ice, Fire, Bug",
        resistances : "Resistances: Grass, Water, Electric, Ground",
        terastat : "Tera Stat Boost: Speed"
    },

    {
        maskname : "Mask: The Hearthflame Mask",
        ogerpontype : "Ogerpon's Type: Grass/Fire",
        ability : "Ability: Mold Breaker",
        cudgeltype : "Ivy Cudgel Type: Fire",
        weaknesses : "Weak To: Flying, Poison, Rock",
        resistances : "Resistances: Grass, Electric, Steel, Fairy",
        terastat : "Tera Stat Boost: Attack"
    },

    {
        maskname : "Mask: The Wellspring Mask",
        ogerpontype : "Ogerpon's Type: Grass/Water",
        ability : "Ability: Water Absorb",
        cudgeltype : "Ivy Cudgel Type: Water",
        weaknesses : "Weak To: Flying, Poison, Bug",
        resistances : "Resistances: Ground, Steel, Water",
        terastat : "Tera Stat Boost: Sp. Def"
    },

    {
        maskname : "Mask: The Cornerstone Mask",
        ogerpontype : "Ogerpon's Type: Grass/Rock",
        ability : "Ability: Sturdy",
        cudgeltype : "Ivy Cudgel Type: Rock",
        weaknesses : "Weak To: Fighting, Steel, Ice, Bug",
        resistances : "Resistances: Electric, Normal",
        terastat : "Tera Stat Boost: Defense"
    }
]

function changeMask() {
    let maskData = this.dataset.member
    
    
    document.querySelector('#mask-name').textContent = maskInfo[maskData].maskname
    document.querySelector('#mask-typing').textContent = maskInfo[maskData].ogerpontype
    document.querySelector('#mask-ability').textContent = maskInfo[maskData].ability
    document.querySelector('#cudgel-typing').textContent = maskInfo[maskData].cudgeltype
    document.querySelector('#type-weakness').textContent = maskInfo[maskData].weaknesses
    document.querySelector('#resist').textContent = maskInfo[maskData].resistances
    document.querySelector('#tera-stat').textContent = maskInfo[maskData].terastat

    document.querySelector('#ogerpon-mask-sprite').src = "images/" + this.id + "-mask.png"

    document.querySelector('#mask-tera').src = "video/" + this.id + "-tera.mp4"
}

function changeGalleryPhoto () {
    document.querySelector('#main-photo').src = "images/" + this.id + ".jpg"
}

tealMask.addEventListener('click', changeMask);
fireMask.addEventListener('click', changeMask);
waterMask.addEventListener('click', changeMask);
stoneMask.addEventListener('click', changeMask);
happyOgerpon.addEventListener('click', changeGalleryPhoto);
hearthstoneRetrieval.addEventListener('click', changeGalleryPhoto);
wellspringRetrieval.addEventListener('click', changeGalleryPhoto);
cornerstoneRetrieval.addEventListener('click', changeGalleryPhoto);