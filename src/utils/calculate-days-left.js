



export const calculateDaysLeft = (date) => {

    try {
        let paramDate = new Date(date)
        let today = new Date()

        return Math.floor((paramDate - today) / (24 * 60 * 60 * 1000));
    } catch (error) {
        console.error(error)
    }

}