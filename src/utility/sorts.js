export const byStatus = (firstCity, secondCity) => {
    const options = ['Observer Commitee', 'Junior Local Commitee', 'Local Commitee']
    return options.indexOf(firstCity.status) > options.indexOf(secondCity.status)
}