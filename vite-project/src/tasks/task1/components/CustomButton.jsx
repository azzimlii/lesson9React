export default function CustomButton(props) {
    const{text, warnMessage,hint}=props;
  return (
    <div>
      <button>{text}</button>
      <h2>{warnMessage}</h2>
      <h2>{hint}</h2>
    </div>
  )
}
//https://demo.mobiscroll.com/react/popup/showing-the-popover#