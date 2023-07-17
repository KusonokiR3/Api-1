let man = new XMLHttpRequest
let aaaa = document.getElementById(aa)
console.log('UNSET', man.readyState)
let img=document.createElement('img')



man.open('GET', 'https://restcountries.com/v3.1/name/brazil' )
console.log('OPENED', man.readyState);

man.onprogress = function(){
    console.log('LOADING', man.readyState);
};

man.onload = function(){
    console.log('DONE', man.readyState);
    let result= JSON.parse(man.responseText);
    img.src= result[0].flags.png;
    bandeira.apende

}

man.send()


