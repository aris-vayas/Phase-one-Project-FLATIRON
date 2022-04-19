//Fetch anime from API
//renderInput (click)
//identify anime character somewohw and get from API
//render image from anime API
//renderForm() 
//renderOurcollection (like toytale/ booklist)
        //ener like
        //listener event for like 







let url ='https://api.jikan.moe/v3/search/anime?q=naruto'

function fetchData (){
fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
.then(res=>res.json())
.then(data=>console.log(data.results))

}
fetchData()

function renderForm(){
    let formContainer = document.querySelector('body')
    let form = document.createElement('form')
    let dateInput = document.createElement('input')
    
    let nameInput=document.createElement('input')
    let companyInput=document.createElement('input')
    let submitBtn = document.createElement('button')
    formContainer.id ='form-container'
    dateInput.placeholder= 'enter name...'
    submitBtn.textContent= 'Enter Review'
    nameInput.placeholder= 'Enter Anime name'
    companyInput.placeholder =' who was there?'
    submitBtn.type = 'input'
    form.id= 'form'
    nameInput.name = 'name'
    companyInput.name ='company'
    dateInput.name = 'date'



    form.append(dateInput,nameInput,companyInput,submitBtn)
    formContainer.append(form)
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
       console.log( e.target.name.value)
       console.log( e.target.date.value)
       console.log( e.target.company.value)
       
         const formObj={
             name: e.target.name.value,
             date: e.target.date.value,
             who: e.target.company.value
     }



     
     console.log(formObj)
     form.reset()
    })
}
renderForm()