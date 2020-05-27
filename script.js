
const app = (() => {

  const ajax = () => {
    fetch('./data.json', {
      mode: 'no-cors'
    }).then(function(response) {
      // The API call was successful!
      return response.json();
    }).then(function(data) {
      // This is the JSON from our response
      // console.log(data);
      section(data)

      cache.array = data
      // section(cache.array)

    }).catch(function(err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });

  }

  const cache = {
    main: document.querySelector('main'),
    array: []
  }


  //map over the object and create the html

  const section = (arr) => {
    console.log(typeof arr, arr)

    arr.map((item, index) => {

      let language = item.languages;
      let languageHolder = "";
      language.map((item, index) => {
        languageHolder += `<span data-language=${item} class="filterSpan" onclick="app.filter('language')"> ${item}</span>`

      })

      cache.main.innerHTML +=

        `<section data-role=${item.role} data-level=${item.level} data-languages=${item.role}" data-tools=${item.languages}>

        <div class="column1" >
          <div class="logo" data-id=${item.id}>
              <embed src=${item.logo}>
          </div>
          <div class="title-info">
            <ul class="job-description top">
              <li class="company">${item.company} </li>
              <li class = ${item.new ? 'new' : 'blank'}> ${item.new?'News':""}</li>

              <li class = ${item.featured ? 'featured' : 'blank'}>${item.featured ? 'Feature':""}</li>
            </ul>
            <h2>${item.position}</h2>
            <ul class= "job-description bottom">
              <li> ${item.postedAt}</li>
              <li> ${item.contract}</li>
              <li>${item.location}</li>
          </ul>

     </div>
     </div>


     <div class="column2">

     <span class="filterSpan" onclick="app.filter('role')" data-role=${item.role}>${item.role}</span>
     <span class="filterSpan" onclick="app.filter('level')" data-level=${item.level}>${item.level} </span>
      ${languageHolder}

     </div>

      </section>`

    })

  }

  //filter the array object with ones relevant

  const filterArr = (attr, xx) => {
    cache.main.innerHTML = "" // empty all fields
    let dataAttribute = event.target.dataset[attr];
    console.log(event.target.dataset[attr]) //frontend backend etc



    let role = cache.array.filter((item, index) => item.role == dataAttribute) //filters all role property which include the dataAttribute
    let level = cache.array.filter((item, index) => item.level == dataAttribute)
    let languages = cache.array.filter((item, index) => {
      let test = item.languages;
      return test.includes(dataAttribute);
    })



//switch the dataAttribute run the html again with the correct fields
    switch (attr) {
      case 'role':
        section(role);
        break;
        case "level":
          section(level);
        break;
        case "language":
          section(languages)
          default:

    }

  }


  return {

    init: () => {

      ajax()

      // returnFilter()
    },
    filter: (attr) => {
      filterArr(attr)

    }

  }


})();


app.init()



// <!-- Item Start -->
// Manage
// New!
// Featured
// Fullstack Developer
// 1d ago
// Part Time
// Remote
// <!-- Role -->
// Fullstack
// <!-- Level -->
// Midweight
// <!-- Languages -->
// Python
// <!-- Tools -->
// React
// <!-- Item End -->
//
// <!-- Item Start -->
// Account
// New!
// Junior Frontend Developer
// 2d ago
// Part Time
// USA only
// <!-- Role -->
// Frontend
// <!-- Level -->
// Junior
// <!-- Languages -->
// JavaScript
// <!-- Tools -->
// React
// Sass
// <!-- Item End -->
//
// <!-- Item Start -->
// MyHome
// Junior Frontend Developer
// 5d ago
// Contract
// USA only
// <!-- Role -->
// Frontend
// <!-- Level -->
// Junior
// <!-- Languages -->
// CSS
// JavaScript
// <!-- Item End -->
//
// <!-- Item Start -->
// Loop Studios
// Software Engineer
// 1w ago
// Full Time
// Worldwide
// <!-- Role -->
// Fullstack
// <!-- Level -->
// Midweight
// <!-- Languages -->
// JavaScript
// Ruby
// <!-- Tools -->
// Sass
// <!-- Item End -->
//
// <!-- Item Start -->
// FaceIt
// Junior Backend Developer
// 2w ago
// Full Time
// UK only
// <!-- Role -->
// Backend
// <!-- Level -->
// Junior
// <!-- Languages -->
// Ruby
// <!-- Tools -->
// RoR
// <!-- Item End -->
//
// <!-- Item Start -->
// Shortly
// Junior Developer
// 2w ago
// Full Time
// Worldwide
// <!-- Role -->
// Frontend
// <!-- Level -->
// Junior
// <!-- Languages -->
// HTML
// JavaScript
// <!-- Tools -->
// Sass
// <!-- Item End -->
//
// <!-- Item Start -->
// Insure
// Junior Frontend Developer
// 2w ago
// Full Time
// USA only
// <!-- Role -->
// Frontend
// <!-- Level -->
// Junior
// <!-- Languages -->
// JavaScript
// <!-- Tools -->
// Vue
// Sass
// <!-- Item End -->
//
// <!-- Item Start -->
// Eyecam Co.
// Full Stack Engineer
// 3w ago
// Full Time
// Worldwide
// <!-- Role -->
// Fullstack
// <!-- Level -->
// Midweight
// <!-- Languages -->
// JavaScript
// Python
// <!-- Tools -->
// Django
// <!-- Item End -->
//
// <!-- Item Start -->
// The Air Filter Company
// Front-end Dev
// 1mo ago
// Part Time
// Worldwide
// <!-- Role -->
// Frontend
// <!-- Level -->
// Junior
// <!-- Languages -->
// JavaScript
// <!-- Tools -->
// React
// Sass
// <!-- Item End -->
