import generateJoke from "./generateJoke";
import './styles/main.scss';
import haha from './assets/haha.svg'

const hahaImg = document.getElementById('hahaImg')
hahaImg.src = haha

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()