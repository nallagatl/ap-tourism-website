const places = [
  {
    name: "Visakhapatnam",
    description: "1. R.K. Beach ...",
    time: "3 days",
    distance: "620 km from Hyderabad",
    image: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/a34bb-places-to-visit-in-visakhapatnam.jpg?fit=1000%2C662&ssl=1",
    button: {
      url: "https://en.wikipedia.org/wiki/Visakhapatnam",
      text: "Click Here"
    },
    map: "Visakhapatnam"
  },
    {
      name: "Araku Valley",
      description:
        "Located about 120 km from Visakhapatnam, Araku Valley is a beautiful hill station known for its coffee plantations, waterfalls, and tribal culture. The journey to Araku Valley is equally mesmerizing, with tunnels, bridges, and lush green landscapes.",
      time: "1 day",
      distance: "120 km from Visakhapatnam",
      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/6f/37/3e.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Araku_Valley",
          text: "Click Here"
      },
      map: "Araku Valley"
    },
    {
      name: "Tirupati",
      description:
        "The presiding deity of the temple is Lord Venkateswara, also known as Balaji, Govinda, and Srinivasa. He is considered the Supreme Being in the Kali Yuga, and the temple is a major pilgrimage destination for devotees",
      time: "2 days",
      distance: "150 km from Chennai",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/800px-Tirumala_090615.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Tirupati",
          text: "Click Here"
        },
      map: "Tirupati"
      
    },
    {
      name: "Vijayawada",
      description:
        "This iconic barrage stretches across the Krishna River, connecting Vijayawada and Guntur. The Prakasam Barrage not only serves as an important irrigation source but also as a popular tourist spot. The sight of water flowing over the barrage, especially during the monsoon season, is truly mesmerizing",
      time: "2 days",
      distance: "275 km from Hyderabad",
      image: "https://threebestrated.in/images/PrakasamBarrage-Vijayawada-AP.jpeg",
      button: {
        url: "https://en.wikipedia.org/wiki/Vijayawada",
        text: "Click Here"
      },
      map: "Vijayawada"
    },
    {
      name: "Amaravati",
      description:
        "Located about 30 kilometers from Vijayawada, Amaravati is an ancient town that was once the capital of the Satavahana dynasty. It is famous for the Amaravati Stupa, an ancient Buddhist monument, and the Amareswara Temple, dedicated to Lord Shiva. Amaravati is a significant site for both Hindu and Buddhist pilgrims.",
      time: "1 day",
      distance: "35 km from Vijayawada",
      image:
        "https://assets.thehansindia.com/h-upload/2024/06/05/1452191-amv.webp",
        button: {
          url: "https://en.wikipedia.org/wiki/Amaravathi",
          text: "Click Here"
        },
        map: "Vijayawada"
    },
    {
      name: "Srikakulam",
      description:
        " One of the most famous temples dedicated to the Sun God (Surya), Arasavalli Sun Temple is an ancient temple believed to have been built in the 7th century by a Kalinga ruler. The temple's architecture is stunning, and it's a significant pilgrimage site, especially during the annual Ratha Saptami festival.",
      time: "2 days",
      distance: "115 km from Visakhapatnam",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/b1/bf/53/sri-mukhalingeswara-temple.jpg?w=1200&h=-1&s=1",
        button: {
          url: "https://en.wikipedia.org/wiki/Srikakulam",
          text: "Click Here"
        },
        map: "Srikakulam"
    },
    {
      name: "Kakinada",
      description:
        "Uppada Beach is a serene and relatively less crowded beach located about 10 km from Kakinada. It’s known for its fine sand and gentle waves, making it ideal for a peaceful day by the sea. The beach is also famous for its handloom weaving industry, where traditional Uppada sarees are made.",
      time: "2 days",
      distance: "120 km from Visakhapatnam",
      image:
        "https://www.inidesignstudio.com/wp-content/uploads/2020/12/Cam_02-5-scaled.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Visakhapatnam",
          text: "Click Here"
        },
        map: "Kakinada"
    },
    {
      name: "Rajahmundry",
      description:
        " Located just 5 km from Rajahmundry, the Dowleswaram Barrage is an engineering marvel built across the Godavari River. The barrage plays a crucial role in irrigation and water supply for the surrounding areas. It’s a popular spot for tourists to enjoy the scenic views of the river and the surrounding countryside.",
      time: "2 days",
      distance: "150 km from Vijayawada",
      image:
        "https://assets.thehansindia.com/h-upload/2023/12/20/1407982-rajahmundry.webp",
        button: {
          url: "https://en.wikipedia.org/wiki/Rajahmundry",
          text: "Click Here"
        },
        map: "Rajahmundry"
    },
  
    {
      name: "Nellore",
      description:
        "Mypadu Beach is known for its golden sandy shores and gentle waves of the Bay of Bengal. The beach stretches over a long distance, making it perfect for leisurely walks along the shoreline. The tranquil ambiance, combined with the natural beauty of the surroundings, makes Mypadu Beach an ideal spot for relaxation and unwinding.",
      time: "1 day",
      distance: "200 km from Chennai",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/01/4014e60896e543a1330c5ff84432f40e_1000x1000.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Nellore",
          text: "Click Here"
        },
        map: "Nellore"
    },
    {
      name: "Bapatla",
      description:
        "Bapatla Beach is a long stretch of golden sand that gently slopes into the Bay of Bengal. The beach is relatively clean and well-maintained, making it an ideal spot for a relaxing day out by the sea.",
      time: "1 day",
      distance: "50 km from Guntur",
      image:
        "https://res.cloudinary.com/chasset/image/upload/c_scale,dpr_auto,e_improve,f_webp,w_auto/v1/hbimages/mobile/location/1524462737597-arakuu_valley_bnr.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Bapatla",
          text: "Click Here"
        },
        map: "Bapatla"
    },
    {
      name: "Chittoor",
      description:
        "Chandragiri Fort, located near Tirupati, is a historical site with roots dating back to the 11th century. The fort was once the capital of the Vijayanagara Empire and has witnessed many significant events in Indian history. The fort complex includes well-preserved palaces, such as the Raja Mahal and Rani Mahal, which showcase impressive Indo-Saracenic architecture. ",
      time: "1 day",
      distance: "80 km from Tirupati",
      image: "https://www.connectingtraveller.com/images/city/1646849956.png",
      button: {
        url: "https://en.wikipedia.org/wiki/Chittor",
        text: "Click Here"
      },
      map: "Chittoor"
    },
    {
      name: "Guntur",
      description:
        " The caves are an important part of India's rich cultural and architectural heritage. They provide valuable information about the art, architecture, and religious practices of ancient India.",
      time: "2 days",
      distance: "40 km from Vijayawada",
      image: "https://housing.com/news/wp-content/uploads/2023/08/Guntur.jpg",
      button: {
        url: "https://en.wikipedia.org/wiki/Guntur",
        text: "Click Here"
      },
      map: "Guntur"
    },
    {
      name: "Kadapa",
      description:
        " Often referred to as the Grand Canyon of India, Gandikota Fort is located on the banks of the Pennar River and is surrounded by stunning gorges and rocky terrain. The fort, built in the 13th century, is known for its massive stone walls, ancient temples, and granaries. The breathtaking views of the Pennar River cutting through the gorge make Gandikota a must-visit for nature lovers and history enthusiasts alike.",
      time: "2 days",
      distance: "230 km from Tirupati",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4a/20/f2/grand-canyon-of-india.jpg?w=500&h=500&s=1",
        button: {
          url: "https://en.wikipedia.org/wiki/Kadapa",
          text: "Click Here"
        },
        map: "Kadapa"
        

    },
    {
      name: "Eluru",
      description:
        "Often referred to as Chinna Tirupati, Dwaraka Tirumala is a significant pilgrimage site located about 36 km from Eluru. The Sri Venkateswara Swamy Temple here is dedicated to Lord Venkateswara and is considered a smaller version of the Tirupati Temple. The temple is renowned for its architectural beauty and the spiritual experience it offers.",
      time: "1 day",
      distance: "80 km from Vijayawada",
      image:
        "https://www.hlimg.com/images/things2do/738X538/ttd_1523956440m1.jpg?w=400&dpr=2.6",
        button: {
          url: "https://en.wikipedia.org/wiki/Eluru",
          text: "Click Here"
        },
        map: "Eluru"
    },
    {
      name: "Kurnool",
      description:
        "Yaganti, located about 80 km from Kurnool, is a famous pilgrimage site known for the Yaganti Temple dedicated to Lord Shiva. The temple is renowned for its unique feature of a linga that is said to grow in size over time. The surrounding landscape, with its rocky terrain and lush greenery, adds to the temple's charm.",
      time: "2 days",
      distance: "220 km from Hyderabad",
      image:
        "https://static.javatpoint.com/tourist-places/images/tourist-places-in-kurnool1.png",
        button: {
          url: "https://en.wikipedia.org/wiki/Kurnool",
          text: "Click Here"
        },
        map: "Kurnool"
    },
    {
      name: "Ongole",
      description:
        "The Chennakesava Temple, located in Ongole, is an ancient temple dedicated to Lord Vishnu. The temple is known for its beautiful architecture, intricate carvings, and religious significance. It attracts devotees and tourists interested in exploring the local religious heritage.",
      time: "1 day",
      distance: "100 km from Guntur",
      image:
        "https://holyshrines.in/wp-content/uploads/2020/10/chennakesava-swamy-temple-550x375.jpg.webp",
        button: {
          url: "https://en.wikipedia.org/wiki/Ongole",
          text: "Click Here"
        },
        map: "Ongole"
    },
    {
      name: "Ananthapur",
      description:
        "Pachchamalakona Waterfalls is located about 75 km from Ananthapur in the Pachchamala Hills. This waterfall cascades down from a height amidst lush green surroundings, creating a picturesque setting. The area around the waterfall is ideal for nature walks and picnicking. The tranquil environment and scenic beauty make it a popular spot for visitors looking to escape the city and enjoy nature.",
      time: "2 days",
      distance: "340 km from Hyderabad",
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/4335/TripDocument/1471510961_shimoga_karnataka.jpg.webp",
        button: {
          url: "https://en.wikipedia.org/wiki/Ananthapur",
          text: "Click Here"
        },
        map: "Ananthapur"
    },
    {
      name: "Srisailam",
      description:
        "Known for the Srisailam Dam and the Mallikarjuna Swamy Temple The Srisailam Dam is one of the largest and most important dams in South India. It plays a crucial role in the region’s power generation, irrigation, and water supply. The dam’s construction and operation have had a significant impact on the development and economy of the surrounding areas.",
      time: "2 days",
      distance: "200 km from Hyderabad",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/NSRS_Srisailam_Dam.jpg",
        button: {
          url: "https://en.wikipedia.org/wiki/Srisailam",
          text: "Click Here"
        },
        map: "Srisailam"
    },
    {
      name: "Madhurawada",
      description:
        "A part of two Buddhist rock-cut caves situated on adjacent hillocks, Bojjanakonda is a religiously, culturally and historically significant site in the city of Vizag.Sankaram, a village located near the site acts as the gateway of entrance to these rock cut caves.",
      time: "1 day",
      distance: "20 km from Visakhapatnam",

      image:
        "https://media1.thrillophilia.com/filestore/36i5rpgkr6p11ph1btimzahop601_1582274310_Bojjannakonda.jpg?w=753&h=450&dpr=2.0",
        button: {
          url: "https://en.wikipedia.org/wiki/Madhurawada",
          text: "Click Here"
        },
        map: "Madhurawada"
    }
  ];
  
  const placesContainer = document.getElementById("places");

  places.forEach((place) => {
      const placeElement = document.createElement("div");
      placeElement.className = "place";
      placeElement.innerHTML = `
          <img src="${place.image}" alt="${place.name}">
          <h2>${place.name}</h2>
          <p><strong>Description:</strong> ${place.description}</p>
          <p><strong>Time Required:</strong> ${place.time}</p>
          <p><strong>Distance:</strong> ${place.distance}</p>
      `;
  
      if (place.button) {
          placeElement.innerHTML += `
              <div class="button-container">
                  <button class="center-button">
                      <a href="${place.button.url}" target="_blank">${place.button.text}</a>
                  </button>
              </div>
          `;
      }
  
      placeElement.innerHTML += `
          <button class="map-button">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.map)}" target="_blank">
                  Get Directions
              </a>
          </button>
      `;
  
      placesContainer.appendChild(placeElement);
});
  
