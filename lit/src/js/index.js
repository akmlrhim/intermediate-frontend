import './components/my-element';
import './components/to-dos';
import './components/title-app';

const todosContainer = document.getElementById('todo-container');
const todos = [
  {
    title: 'Belajar CSS Preprocessor dengan Sass',
    completed: true,
  },
  {
    title: 'Belajar CSS Framework dengan Bootstrap',
    completed: true,
  },
  {
    title: 'Belajar Lit Dasar',
    completed: false,
  },
  {
    title: 'Belajar HTTP Client dengan Axios',
    completed: false,
  },
  {
    title: 'Belajar Lit Lanjutan',
    completed: false,
  },
  {
    title: 'Belajar Firebase untuk Aplikasi Web',
    completed: false,
  },
];

todosContainer.setAttribute('todos', JSON.stringify(todos));
