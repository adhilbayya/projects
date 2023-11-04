let searchArea = document.querySelector('#searchArea')
let resultArea = document.querySelector('.resultArea')

searchArea.addEventListener('input',(event) =>{
    search(event.target.value)
})

const debounce = (fn, time = 500) => {
    let timeOutId;

    return(...args) => {
        if(timeOutId){
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            fn.apply(null, args)
        }, time)
    }
}

let timeOutId;

let search = debounce(async(searchTerm) => {
    if(!searchTerm){
        searchArea.innerHTML = '';
        return;
    }
    try{
        let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
        let response = await fetch(url)
        let searchResults = await response.json()
        let searchTermHtml = createSearchResult(searchResults.query.search, searchTerm)
        resultArea.innerHTML = searchTermHtml

    }
        catch(e){
            console.log(e)
        }
});

let stripHtml = (html) => {
    let div = document.createElement('div')
    div.innerHTML = html
    return div.innerHTML;
}

const highlight = (str, keyword, className = "highlight") => {
    const h1 = `<span class = "${className}">${keyword}</span>`
    return str.replace(new RegExp(keyword, 'gi'), h1)
}

const createSearchResult = (results, searchTerm) =>{
    return results
    .map(result => {
        let title = highlight(stripHtml(result.title), searchTerm)
        let snippet = highlight(stripHtml(result.snippet), searchTerm)
        return `<article>
                <a href="https://en.wikipedia.org/?curid=${result.pageid}">
                    <h2>${title}</h2>
                </a>
                <div class="summary">${snippet}...</div>
            </article>`;
    }).join('')
}
