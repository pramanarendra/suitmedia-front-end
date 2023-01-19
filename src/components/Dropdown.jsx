import '../components/Dropdown.css'

const Dropdown = () => {

  const dropdownItems = ['History', 'Vision Mission']

  return (
    <>
      <ul className="dropdown">
        {dropdownItems.map((item, index) => {
          return (
            <li key={index} className='dropdown-item'>{item}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown