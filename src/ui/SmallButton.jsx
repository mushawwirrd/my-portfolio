
export default function SmallButton({ lable, href }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center px-5 py-2 rounded-full bg-primary text-white hover:shadow-2xl hover:bg-blue-800 duration-200">
       
        {lable}
       
      </a>
    </div>
  )
}
