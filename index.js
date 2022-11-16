
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let details = document.createElement('div')
details.setAttribute('class', 'dog-details')

let descriptionTitle = document.createElement('h3')
descriptionTitle.append('Description:')
details.append(descriptionTitle)

let descriptionContent = document.createElement('p')
descriptionContent.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")
details.append(descriptionContent)

let feedingTitle = document.createElement('h3')
feedingTitle.append('Feeding times:')
details.append(feedingTitle)

let feedingTimesList = document.createElement('ul')

let breakfast = document.createElement('li')
breakfast.append("9:00 am")
let lunch = document.createElement('li')
lunch.append("12:00 pm")
let dinner = document.createElement('li')
dinner.append("5:00 pm")

feedingTimesList.append(breakfast)
feedingTimesList.append(lunch)
feedingTimesList.append(dinner)
details.append(feedingTimesList)

dogContent.append(details)

content.append(dogContent)





