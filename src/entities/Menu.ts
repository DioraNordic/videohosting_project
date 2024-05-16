import Content from "./Content"
import Video from "./Video"

export default class Menu {
    constructor(
        private readonly el: HTMLDivElement = document.createElement('div'),
        private list: Content [] = [],
        private active: Content | null = null
        
    ){}

    get element(){
        return this.el
    }

    get activeContent(): Content | null {

        if(!this.active){
            return this.list[0]
        }

        return this.active
    }
    
    set activeTheme(val: Content | null){
        this.active = val
    }

    set menu(val: Content[]){
        this.list = val
    }

    init(){}
    render(){
        for(let content of this.list){
            this.el.appendChild(content.element)
            content.render()
        }
    }

    mocker(){
        const videos: Video [] = []

        const previews = [
        'https://i.ytimg.com/vi/teGzrclRBBA/hq720.jpg',
        'https://i.ytimg.com/vi/oDLWt1xQ1pA/hq720.jpg',
        'https://i.ytimg.com/vi/_A_Jpr9HkGA/hq720.jpg',
        'https://i.ytimg.com/vi/u7B5WvFi7Tk/hq720.jpg',
        'https://i.ytimg.com/vi/nJaXxPBUS40/hq720.jpg',
        'https://i.ytimg.com/vi/8D-WqPd_D8g/hq720.jpg',
        'https://i.ytimg.com/vi/vSgV7r_hOfM/hq720.jpg',
        'https://i.ytimg.com/vi/49224Q5UFGY/hq720.jpg',
        'https://i.ytimg.com/vi/Qa4cUuktSZw/hq720.jpg',
        'https://i.ytimg.com/vi/1gWi8bmnNVk/hq720.jpg',
        'https://i.ytimg.com/vi/wGJIW-ZMawA/hq720.jpg',
        'https://i.ytimg.com/vi/ZpgSOOJ9L24/hq720.jpg',
        'https://i.ytimg.com/vi/jZGpkLElSu8/hq720.jpg',
        'https://i.ytimg.com/vi/4G9LwTTnn_k/hq720.jpg',
        'https://i.ytimg.com/vi/wObTive0mBM/hq720.jpg',
        'https://i.ytimg.com/vi/R6hxjbCR_Dg/hq720.jpg',
        'https://i.ytimg.com/vi/asC3SaVoT8M/hq720.jpg',
        'https://i.ytimg.com/vi/AkmFLLO0g_8/hq720.jpg',
        'https://i.ytimg.com/vi/T8nbNQpRwNo/hq720.jpg',
        'https://i.ytimg.com/vi/DBbfksGeWDk/hq720.jpg',
        'https://i.ytimg.com/vi/SWd25u4mVRw/hq720.jpg',
        'https://i.ytimg.com/vi/vIalke0YE_Y/hq720.jpg'
        ]

        const titles = [
        'Life Reset Episode 2',
        'SHISEIDO Tahiti Pro pres by Outerknown 2023 - Day 2',
        'AI03: Build a Website with Midjourney, Figma & ChatGPT',
        'Sergey Golovin - Vision',
        'How I Organize My Life, Work, and Everything Else | Notion Tour 2023',
        'MacBook Air 2020 года. Обзор / Актуальность в 2023 / Стоит ли покупать?',
        'How to make an Award Winning Portfolio Website - Process Breakdown',
        'CG НОВОСТИ. Blender. Мамонтенок на Unreal Engine 5. Проектор с играми. DLSS 3.5',
        'АукцЫон - Дорога',
        '1 year after Google UX Design Certificate - Job?',
        'Как выбрать КОТЕЛ ОТОПЛЕНИЯ?',
        'Это НУЖНО знать при сборке ПК в 2023 году',
        'KAROL G, Shakira - TQG (Official Video)',
        'Niall Horan - Heaven (Official Video)',
        'Lil Wayne - Kant Nobody ft. DMX',
        'Jonas Brothers - Wings (Official Music Video)',
        'Chlöe, Chris Brown - How Does It Feel (Official Video)',
        'Logic - Lightsabers (Official Music Video)',
        'Drake, 21 Savage - Spin Bout U',
        'Key Glock - Dirt (Official Video)',
        'Reneé Rapp - Bruises (Official Music Video)',
        'Gracie Abrams - I know it won’t work (Official Music Video)'
        ]

        const channels = [
            'Paul Rodriguez',
            'World Surf League',
            'CJ Gammon',
            'Sergey Golovin',
            'Cajun Koi Academy',
            'QTTOR',
            'Minh Pham',
            'JCenterS - Компьютерная графика',
            'Radio Neformat',
            'Aliena Cai',
            'Клуб DNS',
            'Мой Компьютер',
            'KAROL G',
            'Niall Horan',
            'Lil Wayne',
            'Jonas Brothers',
            'Chlöe',
            'Logic',
            'Drake',
            'Key Glock',
            'Reneé Rapp',
            'Gracie Abrams'
        ]

        const lengths = [
            '25:49',
            '59:59',
            '10:41',
            '3:51',
            '23:59',
            '11:50',
            '8:02',
            '10:49',
            '3:47',
            '8:15',
            '4:34',
            '20:04',
            '3:37',
            '3:21',
            '3:11',
            '1:57',
            '2:57',
            '2:11',
            '3:50',
            '2:54',
            '3:58',
            '4:08'
        ]

        const links = [
        'https://www.youtube.com/watch?v=teGzrclRBBA',
        'https://www.youtube.com/watch?v=oDLWt1xQ1pA',
        'https://www.youtube.com/watch?v=_A_Jpr9HkGA',
        'https://www.youtube.com/watch?v=u7B5WvFi7Tk',
        'https://www.youtube.com/watch?v=nJaXxPBUS40',
        'https://www.youtube.com/watch?v=8D-WqPd_D8g',
        'https://www.youtube.com/watch?v=vSgV7r_hOfM',
        'https://www.youtube.com/watch?v=49224Q5UFGY',
        'https://www.youtube.com/watch?v=Qa4cUuktSZw',
        'https://www.youtube.com/watch?v=1gWi8bmnNVk',
        'https://www.youtube.com/watch?v=wGJIW-ZMawA',
        'https://www.youtube.com/watch?v=ZpgSOOJ9L24',
        'https://www.youtube.com/watch?v=jZGpkLElSu8',
        'https://www.youtube.com/watch?v=4G9LwTTnn_k',
        'https://www.youtube.com/watch?v=wObTive0mBM',
        'https://www.youtube.com/watch?v=R6hxjbCR_Dg',
        'https://www.youtube.com/watch?v=asC3SaVoT8M',
        'https://www.youtube.com/watch?v=AkmFLLO0g_8',
        'https://www.youtube.com/watch?v=T8nbNQpRwNo',
        'https://www.youtube.com/watch?v=DBbfksGeWDk',
        'https://www.youtube.com/watch?v=SWd25u4mVRw',
        'https://www.youtube.com/watch?v=vIalke0YE_Y'
        ]

        const views = [
            58370,
            3915,
            644154,
            140289,
            842973,
            103407,
            330377,
            6963,
            4952774,
            390641,
            918,
            553534,
            749754564,
            11921700,
            10461226,
            6440601,
            13611835,
            1493136,
            36672284,
            5939197,
            660676,
            1227470
        ]

        const dates = [
            '2023/08/14',
            '2023/08/15',
            '2023/02/20',
            '2021/04/15',
            '2023/06/16',
            '2023/03/08',
            '2023/05/22',
            '2023/08/29',
            '2023/02/26',
            '2023/09/06',
            '2023/08/30',
            '2023/03/03',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/22',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24'
        ]

        const categories = [
            "Блоги",
            "Спорт",
            "Образование",
            "Музыка",
            "Блог",
            "Обзоры",
            "Образование",
            "Новости",
            "Музыка",
            "Блоги",
            "Обзоры",
            "Обзоры",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка",
            "Музыка"
        ]

        const channel_icons = [
            'https://yt3.googleusercontent.com/ytc/APkrFKaAz4oHgiH9OtItNDtWMeiHNJfzP6wWa1PmYv5j3w=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/vvEsvbve4XQz8aNgMX4qNVvKxecCM7oWoJkFwzbfM6x8Zkx_xinMjDRVG5Epu90ENYb4FvE-=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/ytc/APkrFKYu7q62VZZcVT-AD1uuMXxZiPVZyikdB5Jy7tEUo80=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/ytc/APkrFKatMKg1pj2A49ch0ZKqcMe0ojf2NGTZjGbyADyE8rs=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/8U5ZfzaN7Zr8u8edFmrT4yGpCFk12gLCA3iEYPmg8yxfz4NoIWaeumEo376GYCddCSVzb43B8Q=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/TZBmN-jEdZ_Egsko8MhKjFpHt55MYZRhSWL1Arf5vCQNyLYmGBIHTn9PdLNncVdBrZhSoo42oA=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/wk_ZmU4xaPeIsjbSaIGEIuwPEMhZlmnvoMnsZY3lE0MMgcyWdwb-3vHtS0BS21EeAxmzfBbbfg=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/gn-GY_urhg3RQlCWf1TIkCHML-5zHlJwBCTVW6yUO5BQ3O3fcnLPx2tNYiScqwKkUnsc532wpw=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/ytc/APkrFKaz5V7RziVCkDbQI7jWcBb0zFtd2_snbfiBykBI=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/23NO0V4EMJzFYwBMUXrNYC7Acu0fdIneKI_nxGlbfH2kX5uMQl2JDEeHApKXahu08GEWBj-o=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/07-zTKkKu93P17SLpTff8WfJT5SNQ4oOwgE0WE_O6WGpUZT9MXpLkdzj8LC_PzI-qz-JfS4QQQ=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/huhO59zo_1-oVVb4P1WmsKe0bM0me7Z2bhYT7qC1LR5zDbPjpXuI9XlZjOsZi-ojST2gHzVV5w=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/Bcy-yZcsFlRwmYzKpCBy5auPWOV0qzofQTb_-l7IQTTbWAgBBnv5dU-bkv8sk2QmSZEXaXKE=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/qWZ1yOSa2-AR1i0TlhGbBZNh0qPx7l_JL1CfmnSu7bGCl0rUN9Ls34N8r3HyIHVbh8oLmWtAvA=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/fH9mYnSiH2NQHEW_rczywx2_1DDLUQPk04mxeT12OFCERmXn30D857-JxNvVDN8drG5f0jDTvQ=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/28yfejVh8LlQSim-8U9KEgSTwT0QX_Ly0yJllDnxFTUd8EQ997qiQb_E6fPaJEP0bZ2MxHdEPA=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/g6HAlSvmmHS5MJ_lTcjYtFfChoeqwosf5HWkm5O8Esd8YKm31tC1sj5zNxeodIWjDIs1qw1R6Q=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/BH_iASl1ycNtPKSfOZtik3M_pXZ6MiK8c7gTLqJ8Dm99bwn3iuXAdjnWKBWbaU9putISNQ8boQ=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/ytc/APkrFKZ7clbC42s8Y2eja1GRX0wr8B-u1YrR8bVXcMME9g=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/N15hzJTcg2Qw_Ejren2ydnjY6EPZXfzYZ_dZk2LwuU00ashN4XPSYy_dxBY2Nskj5qEukQFz5A=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/zoH1gFOzPuG0aj0ZkhOmBSLoGTxr3_rA-bjHDheElDTJZlGuOp01D-kiLtWzQkJN2WVePsBWYw=s176-c-k-c0x00ffffff-no-rj',
            'https://yt3.googleusercontent.com/x9cK_9UVwhrwl48dZfB_p1jwzbh7BeOM_2uFpDit91zibZ-B7i3Wx9EZj6ptw9xi6LexPvggWw=s176-c-k-c0x00ffffff-no-rj',
        ]

        function shuffle(array: Video []) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex > 0) {
          
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }

        for(let i = 0; i < 22; i++){
            const video = new Video(
                null,
                previews[i],
                titles[i],
                channels[i],
                lengths[i],
                links[i],
                views[i],
                dates[i],
                categories[i],
                channel_icons[i],
                i
            )
            videos.push(video)
            shuffle(videos)
        }        

        const content = new Content(videos)
        this.list.push(content)
    }
}
