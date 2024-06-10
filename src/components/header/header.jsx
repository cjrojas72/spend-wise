import Navigation from "../Navigation/navigation"



export const Header = () =>{
    return(
      <>
        <header className="bg-gradient-to-r from-blue-950 to-blue-500 px-4 py-8 lg:px-14 flex justify-between">
            <div>
                <img src="/logoipsum-254.svg" height={150} width={150} alt="Logo" />
            </div>
            <div>
                <Navigation />
            </div>
        </header>
      </>
    )
}

export default Header