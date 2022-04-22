export default function Script(){
    this.openSideBar = function(){
        const sidebar = document.querySelector('.menu-side-bar')
        const bgshadow = document.querySelector('.bg-shadow')

        if(sidebar.classList.contains('close')){
            sidebar.classList.add('show')
            sidebar.classList.remove('close')

        }else{
            sidebar.classList.add('show')
        }

        if(bgshadow.classList.contains('close')){
            bgshadow.classList.add('open')
            bgshadow.classList.remove('close')
        }else{
            bgshadow.classList.add('open')
        }
    }

    this.closeSideBar = function(){
        const sidebar = document.querySelector('.menu-side-bar')
        const bgshadow = document.querySelector('.bg-shadow')

        if(sidebar.classList.contains('show')){
            sidebar.classList.add('close')
            sidebar.classList.remove('show')
        }else{
            sidebar.classList.add('close')
        }

        if(bgshadow.classList.contains('open')){
            bgshadow.classList.add('close')
            bgshadow.classList.remove('open')
        }else{
            bgshadow.classList.add('close')
        }
    }

    this.LandingScroll = function(e){
        const {srcElement} = e
        const {scrollingElement} = srcElement
        const {scrollTop} = scrollingElement
        const windowWidth = window.innerWidth

        const garageHeader = document.querySelector('.garage-header')

        if(document.querySelector('.home-bg')){
            let homeBg = document.querySelectorAll('.home-bg')
            let index = windowWidth > 620 ? 0 : 1
            homeBg = homeBg[index]
            const homeBgHeight = homeBg.offsetHeight
            const homeBgHalfHeight = Math.floor(homeBgHeight / 2)
            const diff = homeBgHalfHeight - 50

            if(scrollTop >= diff){
                garageHeader.classList.add('slide-down')
                if(garageHeader.classList.contains('slide-up')){
                    garageHeader.classList.remove('slide-up')
                }
            }else{
                garageHeader.classList.add('slide-up')
                if(garageHeader.classList.contains('slide-down')){
                    garageHeader.classList.remove('slide-down')
                }
            }
        }else{
            const garageHeight = garageHeader.offsetHeight * 2
            if(scrollTop >= garageHeight){
                garageHeader.classList.add('slide-down')
                if(garageHeader.classList.contains('slide-up')){
                    garageHeader.classList.remove('slide-up')
                }
            }else{
                garageHeader.classList.add('slide-up')
                if(garageHeader.classList.contains('slide-down')){
                    garageHeader.classList.remove('slide-down')
                }
            }
        }
    }

    this.testimony = function(){
        const sw = window.innerWidth

        if(document.querySelector('.testimony')){
            const testi = document.querySelector('.testimony')
            const testiCard = document.querySelectorAll('.testimony-card')

            if(sw > 1120){
                const width = 33.33
                const totalWidth = testiCard.length <= 3 ? 100 : width * testiCard.length
                testi.style.width = `${totalWidth}%`
                testiCard.forEach(card=>card.style.width = `${width}%`)
            }else if(sw <= 1120 && sw > 820){
                const width = 50
                const totalWidth = testiCard.length <= 3 ? 100 : width * testiCard.length
                testi.style.width = `${totalWidth}%`
                testiCard.forEach(card=>card.style.width = `${width}%`)
            }else if(sw <= 820 && sw > 620){
                const width = 65
                const totalWidth = testiCard.length <= 3 ? 100 : width * testiCard.length
                testi.style.width = `${totalWidth}%`
                testiCard.forEach(card=>card.style.width = `${width}%`)
            }else if(sw <= 620 && sw > 420){
                const width = 75
                const totalWidth = testiCard.length <= 3 ? 100 : width * testiCard.length
                testi.style.width = `${totalWidth}%`
                testiCard.forEach(card=>card.style.width = `${width}%`)
            }else{
                const width = 95
                const totalWidth = testiCard.length <= 3 ? 100 : width * testiCard.length
                testi.style.width = `${totalWidth}%`
                testiCard.forEach(card=>card.style.width = `${width}%`)
            }
            
            setTimeout(()=>this.testimony(),1000)
        }
    }

    this.moveTestimony = function(n){
        const testi = document.querySelector('.testimony')
        const testiCard = document.querySelectorAll('.testimony-card')
        let len = testiCard.length
        const percent = 100 / len
        const trans = percent * n
        testi.style.transform = `translateX(-${trans}%)`

        const testiCircle = document.querySelectorAll('.testimony-circle')

        testiCircle.forEach(item=>{
            if(item.classList.contains('active')){
                item.classList.remove('acitve')
            }
        })
        testiCircle[n].classList.add('acitve')
    }
}