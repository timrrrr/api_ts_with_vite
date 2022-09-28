import './style.css'
import {IResult} from './interfaces/api.interface'

const btn = document.getElementById("btnClick") 
const image = document.getElementById("image") as HTMLImageElement

if (btn && image) {
  btn.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((result: IResult) => {
                image.src = result.message
            })
            .catch(err => console.log(err))
  })
}
