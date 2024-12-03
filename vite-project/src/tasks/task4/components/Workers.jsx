export default function Workers({data}) {
  return (
    <div className="information">
      <p>Name: {data.name}</p>
      <p>Department: {data.department}</p>
      <p>Role: {data.role}</p>
    </div>
  )
}
