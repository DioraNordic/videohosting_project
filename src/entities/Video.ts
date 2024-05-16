import Content from "./Content";

export default class Video{
    constructor(
        private contentTheme: Content | null = null,
        private preview: string,
        private title: string,
        private channel: string,
        private length: string,
        private links: string,
        private view: number,
        private date: string,
        public category: string,
        private channel_icon: string,
        private id: number = -1,
        public readonly element = document.createElement('div') // условие существования видео
    ){
        this.element.classList.add('video')
    }

    

    render(){
        const preview = document.createElement('div')

        const video_data = document.createElement('div')
        video_data.classList.add('video-data')

        const description = document.createElement('div')
        description.classList.add('description')

        const metadata = document.createElement('div')
        metadata.classList.add('meta-data')

        const img = document.createElement('img')
        img.src = this.preview
        img.alt = ''

        const title = document.createElement('div')
        title.innerText = this.title

        const channel = document.createElement('div')
        channel.innerText = this.channel

        const length = document.createElement('span')
        preview.appendChild(length)
        length.innerText = this.length

        const channel_icon_div = document.createElement('div')
        const channel_icon = document.createElement('img')
        channel_icon.src = this.channel_icon
        channel_icon.alt = ''
        channel_icon_div.appendChild(channel_icon)

        const view = document.createElement('div')
        view.innerText = `${this.view} просмотров •`

        const date = document.createElement('div')
        date.innerText = this.date
        const link = document.createElement("a")
        link.href = this.links


        preview.appendChild(img)

        video_data.appendChild(channel_icon_div)
        video_data.appendChild(description)

        
        metadata.appendChild(view)
        metadata.appendChild(date)
        

        description.appendChild(title)
        description.appendChild(channel)
        description.appendChild(metadata)


        this.element.innerHTML=''
        this.element.appendChild(link)
        link.appendChild(preview)
        link.appendChild(video_data)
        
    }
}