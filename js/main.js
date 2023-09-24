console.log ('Experience the truth of the oni.')

let tealMask = document.querySelector('#grass');
let fireMask = document.querySelector('#fire');
let waterMask = document.querySelector('#water');
let stoneMask = document.querySelector('#stone');

let maskInfo = [
    {
        maskname : "Mask: The Teal Mask",
        ogerpontype : "Ogerpon's Type: Grass",
        cudgeltype : "Ivy Cudgel Type: Grass",
        weaknesses : "Weak To: Flying, Poison, Ice, Fire, Bug",
        resistances : "Resistances: Grass, Water, Electric, Ground"
    },

    {
        maskname : "Mask: The Hearthflame Mask",
        ogerpontype : "Ogerpon's Type: Grass/Fire",
        cudgeltype : "Ivy Cudgel Type: Fire",
        weaknesses : "Weak To: Flying, Poison, Rock",
        resistances : "Resistances: Grass, Electric, Steel, Fairy"
    },

    {
        maskname : "Mask: The Wellspring Mask",
        ogerpontype : "Ogerpon's Type: Grass/Water",
        cudgeltype : "Ivy Cudgel Type: Water",
        weaknesses : "Weak To: Flying, Poison, Bug",
        resistances : "Resistances: Ground, Steel, Water"
    },

    {
        maskname : "Mask: The Cornerstone Mask",
        ogerpontype : "Ogerpon's Type: Grass/Rock",
        cudgeltype : "Ivy Cudgel Type: Rock",
        weaknesses : "Weak To: Fighting, Steel, Ice, Bug",
        resistances : "Resistances: Electric, Normal"
    }
]

function changeMask() {
    let maskData = this.dataset.member
    
    
    document.querySelector('#mask-name').textContent = maskInfo[maskData].maskname
    document.querySelector('#mask-typing').textContent = maskInfo[maskData].ogerpontype
    document.querySelector('#cudgel-typing').textContent = maskInfo[maskData].cudgeltype
    document.querySelector('#type-weakness').textContent = maskInfo[maskData].weaknesses
    document.querySelector('#resist').textContent = maskInfo[maskData].resistances

    document.querySelector('#ogerpon-mask-sprite').src = "images/" + this.id + "-mask.png"
}

tealMask.addEventListener('click', changeMask);
fireMask.addEventListener('click', changeMask);
waterMask.addEventListener('click', changeMask);
stoneMask.addEventListener('click', changeMask);