import css from './styles/index.css';
import getPlayingField from './components/getplayingfield';
import getNeutralFigure from './components/getneutralfigure';
import getLShaped from './components/getlshaped';

const canvas = document.querySelector('#canvas');
canvas.width = '500';
canvas.height = '500';
const ctx = canvas.getContext('2d');



getPlayingField(ctx);
getNeutralFigure(ctx, 120, 120);
getLShaped(ctx, 160, 160, '#030AF0');