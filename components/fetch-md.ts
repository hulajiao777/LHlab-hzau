//http://localhost:3000/md/contact.md

export function getMd(cat:string){
    return fetch(`http://localhost:3000/md/${cat}.md`).then(res=>res.text()).then(data=>data)
}