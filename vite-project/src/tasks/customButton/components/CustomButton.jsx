export default function CustomButton(props) {
    const{text, warnMessage,hint}=props;
    const handler=()=>{
      if (warnMessage) {
        alert(warnMessage);
      }
    }
  return (
    <div>
      <button title={hint ? hint : ""} onClick={handler} className={`${warnMessage?'button warn': 'button'}`}
       style={hint? { fontStyle: "italic" } : {}}> {text} </button>
    </div>
  )
}

