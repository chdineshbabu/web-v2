import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Hammer from 'hammerjs';


export let initcards = [
  {
    id: '1',
    title: 'Demo-1',
    subTitle: 'Sub Title 1',
    img: 'Rectangle 20.png',
    color: '#191825',
    tilt: '-7',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-1 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  },
  {
    id: '2',
    title: 'Demo-2',
    subTitle: 'Sub Title 2',
    img: 'Rectangle 25.png',
    color: '#191825',
    tilt: '-3',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-2 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", "demo-2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  },
  {
    id: '3',
    title: 'Demo-3',
    subTitle: 'Sub Title 3',
    img: 'Rectangle 24.png',
    color: '#191825',
    tilt: '4',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-3 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", " demo demo 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  },
  {
    id: '4',
    title: 'Demo-4',
    subTitle: 'Sub Title 4',
    img: 'Rectangle 20.png',
    color: '#191825',
    tilt: '-3',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-4 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", " 4 demo 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  },
  {
    id: '5',
    title: 'Demo-5',
    subTitle: 'Sub Title 5',
    img: 'Rectangle 25.png',
    color: '#191825',
    tilt: '1',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-5 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", "5 demo 5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  },
  {
    id: '6',
    title: 'Demo-6',
    subTitle: 'Sub Title 5',
    img: 'Rectangle 24.png',
    color: '#191825',
    tilt: '1',
    section: {
      titles: ['About the company', "Timeline", 'Benefits'],
      content: {
        about: ["Demo-6 sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol", "6  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur molestiae ex harum. Dolores ducimus vitae quidem incidunt pariatur, quaerat quod sit perspiciatis, nam saepe suscipit minus! it, amet consectetur adipisicing elit. Nesciunt blanditiis, quis voluptate consequatur mol"]
      }
    }
  }
];

export default function SpotifyCards({ isDarkMode }) {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if(width<768){
      setMobile(true);
    }
    else{
      setMobile(false);
    }
  });
  let initreverseCards = [
    {
      id: '4',
      title: 'Demo 4',
      subTitle: 'Sub Title 4',
      img: 'Square_-_Generalist_2x.png',
      color: '#191825',
      tilt: '-3'
    },
    {
      id: '5',
      title: 'Demo 5',
      subTitle: 'Sub Title 5',
      img: 'Zoned_44_by_Faith_McAllister_2x.png',
      color: '#191825',
      tilt: '1'
    }
  ];

  let allCards = document.querySelectorAll('.tinder--card');
  let totalcards = allCards.length;
  const [cards, setCards] = useState(initcards);
  const [reverseCards, setReverseCards] = useState(initreverseCards);
  const [removed, setRemoved] = useState(false);

  function initCards() {
    var cardsNotRemoved = document.querySelectorAll(
      '.tinder--card:not(.removed)'
    );

    cardsNotRemoved.forEach(function (card, index) {
      card.style.zIndex = totalcards - index;
      //   card.style.transform = `rotate(${Math.floor(
      //     Math.random() * (8 - -8 + 1) + -8
      //   )}deg)`;
    });

    if (cardsNotRemoved.length > 0) {
      // cardsNotRemoved[0].style.transform = 'rotate(0deg)';
    }
  }

  function toggleClass(e) {
    if (e.target.classList.contains('tinder--card')) {
      if (e.target.classList.contains('removed')) {

        e.target.classList.remove('removed')
        e.target.style.zIndex = -e.target.style.zIndex;
        // e.target.style.transform = 'translate(775px, 10px) rotate(2deg) rotateY(180deg) !important';
      } else {

        e.target.classList.add('removed')
        e.target.style.zIndex = e.target.style.zIndex.substring(1);
      }
    }
  }

  function toggleClassBack(e) {
  }

  function initHammer() {
    allCards.forEach(function (el) {
      let hammerElement = new Hammer(el);

      hammerElement.on('pan', function (e) {
        el.classList.add('moving');
      });

      hammerElement.on('pan', function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform =
          'translate(' +
          event.deltaX +
          'px, ' +
          event.deltaY +
          'px) rotate(' +
          rotate +
          'deg)';

        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle('removed', !keep);
      });



    });
  }

  useEffect(() => {
    initCards();
    initHammer();
  }, []);


 
  return (
    <div>
    {mobile ?
      (
        <div
        style={{
          backgroundColor: isDarkMode ==="dark"? 'black' : 'white',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // backgroundImage: `url(${backgroundImageNew1})`,
        }} className="tinder">
        <h1
          className='font-semibold	font-Merriweather	text-center  text-3xl mt-14	'>
          Doing Good = Doing Well
        </h1>
        <div className="tinder--cards h-[50%] w-5/6 pb-20 md:pb-0" id='tinder--cards'>
          {cards.map((card, index) => (
            <div

              // onMouseDownCapture={(e) => toggleClass(e)}
              draggable={true}
              onDragStart={(e) => {
                e.preventDefault();
                e.dataTransfer.setData('text/plain', ''); // Set an empty string as the data
                // Optionally, you can also set a custom drag image
                e.dataTransfer.setDragImage(new Image(), 0, 0);
                toggleClass(e);

              }}
              className={`tinder--card`}
              style={{
                // zIndex:index,
                //transform: 'rotate(' + -10 + 'deg)',
                borderRadius: '10px',
                left: cards.length - index * 2 + 2 + "%",
              // bottom: cards.length - index * 7 + 7 + "%",
                boxShadow: 'rgb(52 46 47) 9px -5px -122px',
              }}
              key={card?.id}
              onClick={(e) => {
                navigate(`/blog?${card.title}`);

              }}
            >
              <span className='text-2xl md:text-5xl' style={{ color: '#FDE5EC', position: "absolute", right: '10%', top: '5%', fontWeight: '900', fontFamily: 'Roboto' }}>{card.title}</span>
              <span className='text-xl md:text-2xl' style={{ color: '#FDE5EC', position: "absolute", right: '10%', top: '20%',  fontWeight: '400', fontFamily: 'Roboto' }}>Lorem ipsum dolor sit</span>
              <img src={require(`../assets/${card?.img}`)} />
              <h3>{card?.title}</h3>
            </div>
          ))}
        </div>

      <div className="tinder--buttons mt-10">
        <button
          style={{ backgroundColor: !isDarkMode ==="dark" ? '#232323' : "white", color: "white", fontWeight: 'bolder' }}
          id="back" onClick={() => {
            // console.log(document.getElementById('tinder--cards'))
            let activeArray = document.querySelectorAll('.tinder--card.removed');
            // console.log(activeArray)
            activeArray[activeArray.length - 1]?.classList.remove('removed')
            let element = activeArray[activeArray.length - 1];
            if (element === undefined) return;
            element.style.zIndex = -element.style.zIndex;
          }}>
          <img src={require(isDarkMode ? '../assets/back_arrow.png' : '../assets/back_arrow_white.png')} alt="" />
        </button>
        <button style={{ backgroundColor: !isDarkMode ==="dark" ? '#232323' : "white", color: "white", fontWeight: 'bolder' }} id="next" onClick={() => {
          // console.log(document.getElementById('tinder--cards'))
          let activeArray = document.querySelectorAll('.tinder--card:not(.removed)');
          activeArray[0]?.classList.add('removed')
          let element = activeArray[0];
          if (element === undefined) return;
          element.style.zIndex = element.style.zIndex.substring(1);
        }}>
          <img src={require(isDarkMode ? '../assets/next_arrow.png' : '../assets/next_arrow_white.png')} alt="" />
        </button>
      </div>
    </div>
      )
      :
      (
        <div
        style={{
          backgroundColor: isDarkMode ==="dark"? 'black' : 'white',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // backgroundImage: `url(${backgroundImageNew1})`,
        }} className="tinder">
        <h1
          className='font-semibold	font-Merriweather	text-center  text-3xl mt-14	'>
          Doing Good = Doing Well
        </h1>
        <div className="tinder--cards h-[50%] md:w-2/3 w-5/6 pb-20 md:pb-0" id='tinder--cards'>
          {cards.map((card, index) => (
            <div

              // onMouseDownCapture={(e) => toggleClass(e)}
              draggable={true}
              onDragStart={(e) => {
                e.preventDefault();
                e.dataTransfer.setData('text/plain', ''); // Set an empty string as the data
                // Optionally, you can also set a custom drag image
                e.dataTransfer.setDragImage(new Image(), 0, 0);
                toggleClass(e);

              }}
              className={`tinder--card`}
              style={{
                // zIndex:index,
                //transform: 'rotate(' + -10 + 'deg)',
                borderRadius: '10px',
                left: cards.length - index * 2 + 2 + "%",
              // bottom: cards.length - index * 7 + 7 + "%",
                boxShadow: 'rgb(52 46 47) 9px -5px -122px',
              }}
              key={card?.id}
              onClick={(e) => {
                navigate(`/blog?${card.title}`);

              }}
            >
              <span className='text-2xl md:text-5xl' style={{ color: '#FDE5EC', position: "absolute", right: '10%', top: '5%', fontWeight: '900', fontFamily: 'Roboto' }}>{card.title}</span>
              <span className='text-xl md:text-2xl' style={{ color: '#FDE5EC', position: "absolute", right: '10%', top: '20%',  fontWeight: '400', fontFamily: 'Roboto' }}>Lorem ipsum dolor sit</span>
              <img src={require(`../assets/${card?.img}`)} />
              <h3>{card?.title}</h3>
            </div>
          ))}
        </div>

      <div className="tinder--buttons mt-10">
        <button
          style={{ backgroundColor: !isDarkMode ==="dark" ? '#232323' : "white", color: "white", fontWeight: 'bolder' }}
          id="back" onClick={() => {
            // console.log(document.getElementById('tinder--cards'))
            let activeArray = document.querySelectorAll('.tinder--card.removed');
            // console.log(activeArray)
            activeArray[activeArray.length - 1]?.classList.remove('removed')
            let element = activeArray[activeArray.length - 1];
            if (element === undefined) return;
            element.style.zIndex = -element.style.zIndex;
          }}>
          <img src={require(isDarkMode ? '../assets/back_arrow.png' : '../assets/back_arrow_white.png')} alt="" />
        </button>
        <button style={{ backgroundColor: !isDarkMode ==="dark" ? '#232323' : "white", color: "white", fontWeight: 'bolder' }} id="next" onClick={() => {
          // console.log(document.getElementById('tinder--cards'))
          let activeArray = document.querySelectorAll('.tinder--card:not(.removed)');
          activeArray[0]?.classList.add('removed')
          let element = activeArray[0];
          if (element === undefined) return;
          element.style.zIndex = element.style.zIndex.substring(1);
        }}>
          <img src={require(isDarkMode ? '../assets/next_arrow.png' : '../assets/next_arrow_white.png')} alt="" />
        </button>
      </div>


    </div>
      )}
      </div>
  )
}
