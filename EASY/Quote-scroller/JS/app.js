(function (){
    const quotesEl = document.querySelector('.quotes')
    const loader = document.querySelector('.loader')

    const getQuotes = async(page, limit) => {
        let url = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
        let response = await fetch(url)

        if(!response.ok){
            throw new Error(`An error occured at ${response.status}`)
        }
        return await response.json()
    }

    const showQuotes = (quotes) =>{
        quotes.forEach(quote => {
            let quoteEl = document.createElement('blockquote')
            quoteEl.classList.add('quote')

            quoteEl.innerHTML = `
            <span>${quote.id})</span>
            ${quote.quote}
            <footer>${quote.author}</footer>`;

            quotesEl.appendChild(quoteEl)
        })
    }
    const showLoader = () => {
        loader.classList.add('show')
    }

    const hideLoader = () => {
        loader.classList.remove('show')
    }

    const hasMoreQuote = (page, limit, total) => {
        let startIndex = (page -1) * limit + 1;
        return total === 0 || total > startIndex;
    }

    const loadQuotes = async(page, limit) => {
        showLoader();
         setTimeout(async() => {
            try{
                if(hasMoreQuote(page, limit, total)){
                let response = await getQuotes(page, limit)

                showQuotes(response.data);
                total = response.total;
            }}catch(e){
                console.log(e)
            }finally{
                hideLoader();
            }
         }, 2000)
    }

    let currentPage = 1;
    let limit = 10;
    let total = 0;

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if(scrollTop + clientHeight >= scrollHeight && hasMoreQuote(currentPage, limit, total)){
            currentPage++;
            loadQuotes(currentPage, limit);
        }
    }, {
        passive : true
    })
    loadQuotes(currentPage, limit);
})();