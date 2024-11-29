import CustomButton from "./CustomButton";

export default function AppTask1() {
  return (
    <div>
      <CustomButton text='Custom' />
      <CustomButton text='warn' warnMessage='xeberdarliq'/>
      <CustomButton text='hint' hint='jnjl'/>
    </div>
  )
}
