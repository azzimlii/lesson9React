import CustomButton from "./CustomButton";

export default function AppTask1() {
  return (
    <div className="app">
       <CustomButton
      text="Button1"
    />
    <CustomButton
      text="Button2"
      hint="Be careful, this is a Warning Button"
      warnMessage="This is a warning!"
    />
    <CustomButton
      text="Button3"
      hint="Just a regular button"
    />
   
  </div>
  )
}
