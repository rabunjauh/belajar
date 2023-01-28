import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
  // const name = 'Mustafa';
  // const element = <h1>Hello, {name}</h1>
  // root.render(element);

  // https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element
  // Updating rendered Element
  // function tick() {
  //   const element = (
  //     <div>
  //       <h1>Hello World</h1>
  //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  //   root.render(element);
  // }

  // setInterval(tick, 1000);

  // https://reactjs.org/docs/components-and-props.html#rendering-a-component
  // function Welcome(props) {
  //   return <h1>Hello, {props.name}</h1>;
  // }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // const element = <Welcome name="Sara" />;
  // root.render(element);

  // https://reactjs.org/docs/components-and-props.html#composing-components
  // function Welcome(props) {
  //   return <h1>Hello, {props.name}</h1>;
  // }
  
  // function App() {
  //   return (
  //     <div>
  //       <Welcome name="Sara" />
  //       <Welcome name="Cahal" />
  //       <Welcome name="Edite" />
  //     </div>
  //   );
  // }

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<App />);

  // https://id.reactjs.org/docs/components-and-props.html#extracting-components
  // function formatDate(date) {
  //   return date.toLocaleDateString();
  // }
  
  // function Comment(props) {
  //   return (
  //     <div className="Comment">
  //       <div className="UserInfo">
  //         <img className="Avatar"
  //              src={props.author.avatarUrl}
  //              alt={props.author.name} />
  //         <div className="UserInfo-name">
  //           {props.author.name}
  //         </div>
  //       </div>
  //       <div className="Comment-text">
  //         {props.text}
  //       </div>
  //       <div className="Comment-date">
  //         {formatDate(props.date)}
  //       </div>
  //     </div>
  //   );
  // }
  
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <Comment
  //     date={comment.date}
  //     text={comment.text}
  //     author={comment.author} />
  // );

  // https://id.reactjs.org/docs/state-and-lifecycle.html



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
