import Menu from "./Menu"

export default class YouTube { // основной класс
    
    constructor(
        private readonly appElement: HTMLElement | null,
        private readonly menu = new Menu(),
        private readonly menuElement = document.createElement('div')
    ){
        if(!appElement){
          this.appElement = document.createElement('div')  
        }
    }

    init(){
        //style
        this.appElement?.classList.add('youtube')
        this.menu.element.classList.add('menu')
        this.menuElement.classList.add('menu-content')

        //mount
        this.appElement?.appendChild(this.menu.element)
        this.appElement?.appendChild(this.menuElement)

        //mock
        this.menu.mocker()

        this.render()
    }
    private showContent(){
        const video = this.menu.activeContent
        const videos = video?.videoList ?? []
        const allVideos = document.createElement('div')
        allVideos.id = 'allvideos'

        for(let video of videos){
            video.render()
            allVideos.appendChild(video.element)
        }

        this.menuElement.appendChild(allVideos)
    }

    showCategory(activeCategoryId: number){
        const allVideos = document.getElementById('allvideos')
        allVideos!.innerHTML=''
        this.menu.mocker()
        const uniqueCats = ["Музыка", "Спорт", "Блоги", "Образование", "Новости", "Обзоры"]
        const video = this.menu.activeContent
        const videos = video?.videoList ?? []

        for(let video of videos){
            if (video.category === uniqueCats[activeCategoryId]) {
                video.render()
                allVideos!.appendChild(video.element)
            }
        }
        //allVideos = document.createElement('div')
    }

    render(){
        this.menu.render()
        this.showContent()
    }
}