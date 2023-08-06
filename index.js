const carousel = document.createElement('div');
document.body.style.margin ='0';
document.body.append(carousel);
const items = [{ color: 'red', text: 'something' }, { color: 'blue', text: 'random word' }, { color: 'green', text: 'anything' }, { color: 'yellow', text: 'test' }, { color: 'pink', text: 'stuff' }]
let cardWidth = window.innerWidth;
Object.assign(carousel.style, {left: '0px', height: '200px', width: 'auto', position: 'absolute', display: 'flex', overflow: 'hidden', transition: '1s'});
items.forEach(item => {
    const div = document.createElement('div');
    div.append(item.text)
    carousel.append(div);
    Object.assign(div.style, { height: '200px', width: `${cardWidth}px`, position: 'relative', backgroundColor: item.color});
});
const lBtn = document.createElement('button');
lBtn.innerText = '<-';
Object.assign(lBtn.style, {position: 'fixed', top: '100px', left: 0})
const rBtn = document.createElement('button');
Object.assign(rBtn.style, {position: 'fixed', top: '100px', right: 0})
rBtn.innerText = '->';
carousel.append(lBtn);
carousel.append(rBtn);
const roll = (dir) => {
    const x = parseInt(carousel.style.left.replace('px', ''));
    console.log(x)
    if (dir === 'l' && x+cardWidth > 0) return
    if (dir == 'r' && (-1*x+cardWidth) > cardWidth*(items.length-1)) return
    Object.assign(carousel.style, {left:  dir === 'r'? `${x-cardWidth}px`: `${x+cardWidth}px`});
}
lBtn.onclick = () => roll('l')
rBtn.onclick = () => roll('r')