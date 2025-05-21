//http://localhost:3000/md/contact.md

export function getMd(cat:string){
    return fetch(`https://l-hlab-hzau-git-main-liuhais-projects.vercel.app/md/${cat}.md`).then(res=>res.text()).then(data=>data)
}