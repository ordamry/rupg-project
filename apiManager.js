const getRandomUsers = async ()=> {
    try {
    const response = await fetch("https://randomuser.me/api/?results=7")
    const data = await response.json()

    const users = data.results

    const mainUser = {
        firstName: users[0].name.first,
        lastName: users[0].name.last,
        city: users[0].location.city,
        state: users[0].location.state,
        picture: users[0].picture.large,
    }

    const friends = users.slice(1).map(user => ({
        firstName: users.name.first,
        lastName: users.name.last
    }))

    return {mainUser, friends}
    } catch (error){
        console.error("Error fetching users:", error)
        return null
    }

}