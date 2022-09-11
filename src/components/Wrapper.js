function Wrapper(props) {
  /* console.log(props) */
  const style = { /* передаем стили с помощью переменной */
    backgroundColor: props.color,
    width: '25rem',
    padding: '2rem',
    margin: '2rem auto', /* auto чтобы все было поцентру */
  }
  return (
    <div style={style}>{props.children}</div>/* выводим наши созданные div как код */
  ) /* выводим наше свойство которое мы передали в App.js */
} /* передаем цвет из app */

export default Wrapper
